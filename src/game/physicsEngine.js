export class Kart {
  constructor(id, name, color, isAI = false, startPos = { x: 0, y: 0, angle: 0 }) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.isAI = isAI;

    // Spatial State
    this.x = startPos.x;
    this.y = startPos.y;
    this.angle = startPos.angle; // degrees
    this.speed = 0;
    this.vx = 0;
    this.vy = 0;

    // Physics Attributes (Mario Kart SNES Style)
    this.maxSpeed = isAI ? 5.2 : 6.0;
    this.accel = 0.18;
    this.brake = 0.25;
    this.friction = 0.96;
    this.turnSpeed = 3.2;

    // Drifting Dynamics
    this.isDrifting = false;
    this.driftDirection = 0; // -1 left, 1 right
    this.driftAngleOffset = 0;
    this.boostTimer = 0;

    // Telemetry & Laps
    this.currentLap = 1;
    this.checkpointIndex = 0;
    this.lapTimes = [];
    this.lastCheckpointTime = Date.now();
    this.finished = false;
    this.rank = 1;

    // AI Waypoint tracking
    this.aiWaypointIndex = 0;
  }

  update(inputs, trackData, audioEngine) {
    if (this.finished) return;

    // Boost timer count down
    if (this.boostTimer > 0) {
      this.boostTimer--;
    }
    const currentMaxSpeed = this.maxSpeed * (this.boostTimer > 0 ? 1.4 : 1.0);

    if (this.isAI) {
      this.updateAI(trackData);
    } else {
      this.updatePlayer(inputs, currentMaxSpeed, audioEngine);
    }

    // Velocity update from angle & momentum
    const rad = ((this.angle + this.driftAngleOffset) * Math.PI) / 180;
    this.vx = Math.cos(rad) * this.speed;
    this.vy = Math.sin(rad) * this.speed;

    // Apply friction & momentum
    this.speed *= this.friction;

    // Track boundary check (off-road grass slowdown)
    const onTrack = isPointOnTrack(this.x, this.y, trackData);
    if (!onTrack) {
      this.speed *= 0.88; // Slowdown on grass/gravel
    }

    // Speed pad check
    for (const pad of trackData.speedPads) {
      const dist = Math.hypot(this.x - pad.x, this.y - pad.y);
      if (dist < pad.radius + 10) {
        this.boostTimer = 60; // 1s boost
        if (audioEngine && !this.isAI) audioEngine.playBoost();
      }
    }

    // Update coordinates
    this.x += this.vx;
    this.y += this.vy;

    // Lap & Checkpoint Check
    this.checkCheckpoints(trackData);
  }

  updatePlayer(inputs, maxSpeed, audioEngine) {
    // Acceleration & Braking
    if (inputs.up) {
      this.speed = Math.min(this.speed + this.accel, maxSpeed);
    } else if (inputs.down) {
      this.speed = Math.max(this.speed - this.brake, -maxSpeed * 0.4);
    }

    // Turning
    const turnFactor = Math.min(Math.abs(this.speed) / 2.5, 1);
    if (inputs.left) {
      this.angle -= this.turnSpeed * turnFactor;
    }
    if (inputs.right) {
      this.angle += this.turnSpeed * turnFactor;
    }

    // Drifting (Space)
    if (inputs.drift && Math.abs(this.speed) > 2.5) {
      if (!this.isDrifting) {
        this.isDrifting = true;
        this.driftDirection = inputs.left ? -1 : inputs.right ? 1 : 0;
        if (audioEngine) audioEngine.startDrift();
      }
      this.driftAngleOffset = this.driftDirection * 25;
      this.speed *= 0.985;
    } else {
      if (this.isDrifting && audioEngine) {
        audioEngine.stopDrift();
      }
      this.isDrifting = false;
      this.driftAngleOffset = 0;
    }

    // Engine Audio update
    if (audioEngine) {
      const speedRatio = Math.abs(this.speed) / this.maxSpeed;
      audioEngine.updateEngine(speedRatio, inputs.up);
    }
  }

  updateAI(trackData) {
    const waypoints = trackData.centerline;
    const target = waypoints[this.aiWaypointIndex];

    if (!target) return;

    // Angle to target waypoint
    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

    // Turn towards target
    let angleDiff = targetAngle - this.angle;
    while (angleDiff < -180) angleDiff += 360;
    while (angleDiff > 180) angleDiff -= 360;

    if (Math.abs(angleDiff) > 3) {
      this.angle += Math.sign(angleDiff) * Math.min(Math.abs(angleDiff), this.turnSpeed * 1.1);
    }

    // AI Speed Control
    this.speed = Math.min(this.speed + this.accel * 0.9, this.maxSpeed);

    // Advance to next waypoint when close
    const distToTarget = Math.hypot(dx, dy);
    if (distToTarget < 60) {
      this.aiWaypointIndex = (this.aiWaypointIndex + 1) % waypoints.length;
    }
  }

  checkCheckpoints(trackData) {
    const waypoints = trackData.centerline;
    const nextCheckpointIndex = (this.checkpointIndex + 1) % waypoints.length;
    const targetCheckpoint = waypoints[nextCheckpointIndex];

    const dist = Math.hypot(this.x - targetCheckpoint.x, this.y - targetCheckpoint.y);
    if (dist < trackData.width * 0.75) {
      this.checkpointIndex = nextCheckpointIndex;

      // Start/Finish line crossed
      if (this.checkpointIndex === 0) {
        this.currentLap++;
        if (this.currentLap > 3) {
          this.finished = true;
        }
      }
    }
  }
}

// Distance to line segment helper for track bounds
export function isPointOnTrack(px, py, trackData) {
  const points = trackData.centerline;
  const radius = trackData.width / 2;

  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    const p2 = points[(i + 1) % points.length];

    const dist = distToSegment({ x: px, y: py }, p1, p2);
    if (dist <= radius + 15) {
      return true;
    }
  }
  return false;
}

function distToSegment(p, v, w) {
  const l2 = (v.x - w.x) ** 2 + (v.y - w.y) ** 2;
  if (l2 === 0) return Math.hypot(p.x - v.x, p.y - v.y);
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(p.x - (v.x + t * (w.x - v.x)), p.y - (v.y + t * (w.y - v.y)));
}
