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

    // Physics Attributes (Responsive Arcade Physics)
    this.maxSpeed = isAI ? 4.8 : 5.8;
    this.accel = 0.16;
    this.brake = 0.28;
    this.friction = 0.965;
    this.turnSpeed = 3.4;

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

    // AI Waypoint tracking (start seeking the 1st corner waypoint)
    this.aiWaypointIndex = 1;
  }

  update(inputs, trackData, audioEngine) {
    if (this.finished) return;

    // Boost timer count down
    if (this.boostTimer > 0) {
      this.boostTimer--;
    }
    const currentMaxSpeed = this.maxSpeed * (this.boostTimer > 0 ? 1.35 : 1.0);

    if (this.isAI) {
      this.updateAI(trackData);
    } else {
      this.updatePlayer(inputs, currentMaxSpeed, audioEngine);
    }

    // Velocity calculation from heading & momentum
    const rad = ((this.angle + this.driftAngleOffset) * Math.PI) / 180;
    this.vx = Math.cos(rad) * this.speed;
    this.vy = Math.sin(rad) * this.speed;

    // Apply friction
    this.speed *= this.friction;

    // Track boundary check & barrier collision
    const trackInfo = getTrackBoundsInfo(this.x, this.y, trackData);
    if (!trackInfo.onTrack) {
      // Off-road slowdown
      this.speed *= 0.88;

      // Outer barrier wall rebound
      if (trackInfo.distanceToCenter > (trackData.width / 2) + 20) {
        this.x += (trackInfo.nearestPoint.x - this.x) * 0.12;
        this.y += (trackInfo.nearestPoint.y - this.y) * 0.12;
        this.speed *= 0.75;
      }
    }

    // Speed pad check
    if (trackData.speedPads) {
      for (const pad of trackData.speedPads) {
        const dist = Math.hypot(this.x - pad.x, this.y - pad.y);
        if (dist < pad.radius + 12) {
          this.boostTimer = 55; // Boost duration
          if (audioEngine && !this.isAI) audioEngine.playBoost();
        }
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

    // Turning with progressive speed response
    const turnFactor = Math.min(Math.abs(this.speed) / 2.2, 1);
    if (inputs.left) {
      this.angle -= this.turnSpeed * turnFactor;
    }
    if (inputs.right) {
      this.angle += this.turnSpeed * turnFactor;
    }

    // Drifting (Space)
    if (inputs.drift && Math.abs(this.speed) > 2.0) {
      if (!this.isDrifting) {
        this.isDrifting = true;
        this.driftDirection = inputs.left ? -1 : inputs.right ? 1 : 0;
        if (audioEngine) audioEngine.startDrift();
      }
      this.driftAngleOffset = this.driftDirection * 22;
      this.speed *= 0.988;
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

    // Vector to target waypoint
    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

    // Smooth angle adjustment
    let angleDiff = targetAngle - this.angle;
    while (angleDiff < -180) angleDiff += 360;
    while (angleDiff > 180) angleDiff -= 360;

    if (Math.abs(angleDiff) > 2) {
      this.angle += Math.sign(angleDiff) * Math.min(Math.abs(angleDiff), this.turnSpeed * 1.05);
    }

    // Adaptive AI throttle
    const isSharpTurn = Math.abs(angleDiff) > 40;
    const aiTargetSpeed = isSharpTurn ? this.maxSpeed * 0.75 : this.maxSpeed;
    this.speed = Math.min(this.speed + this.accel * 0.9, aiTargetSpeed);

    // Advance to next waypoint when within reach
    const distToTarget = Math.hypot(dx, dy);
    if (distToTarget < 75) {
      this.aiWaypointIndex = (this.aiWaypointIndex + 1) % waypoints.length;
    }
  }

  checkCheckpoints(trackData) {
    const waypoints = trackData.centerline;
    const nextCheckpointIndex = (this.checkpointIndex + 1) % waypoints.length;
    const targetCheckpoint = waypoints[nextCheckpointIndex];

    if (!targetCheckpoint) return;

    const dist = Math.hypot(this.x - targetCheckpoint.x, this.y - targetCheckpoint.y);
    const threshold = Math.max(trackData.width * 1.3, 100);

    if (dist < threshold) {
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

// Kart-to-Kart physical collision resolution
export function resolveKartCollisions(karts, audioEngine) {
  const minDistance = 28;

  for (let i = 0; i < karts.length; i++) {
    for (let j = i + 1; j < karts.length; j++) {
      const k1 = karts[i];
      const k2 = karts[j];

      const dx = k2.x - k1.x;
      const dy = k2.y - k1.y;
      const dist = Math.hypot(dx, dy);

      if (dist < minDistance && dist > 0) {
        const overlap = (minDistance - dist) / 2;
        const nx = dx / dist;
        const ny = dy / dist;

        // Push apart
        k1.x -= nx * overlap;
        k1.y -= ny * overlap;
        k2.x += nx * overlap;
        k2.y += ny * overlap;

        // Velocity dampening & impulse
        k1.speed *= 0.94;
        k2.speed *= 0.94;

        if (audioEngine && (!k1.isAI || !k2.isAI)) {
          audioEngine.playCollision();
        }
      }
    }
  }
}

// Track Bounds Helper
export function getTrackBoundsInfo(px, py, trackData) {
  const points = trackData.centerline;
  const radius = trackData.width / 2;

  let minDistance = Infinity;
  let nearestPoint = points[0];

  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    const p2 = points[(i + 1) % points.length];

    const { distance, closestPoint } = distToSegmentWithPoint({ x: px, y: py }, p1, p2);
    if (distance < minDistance) {
      minDistance = distance;
      nearestPoint = closestPoint;
    }
  }

  // Also check pit lane
  if (trackData.pitLane) {
    for (let i = 0; i < trackData.pitLane.length - 1; i++) {
      const p1 = trackData.pitLane[i];
      const p2 = trackData.pitLane[i + 1];
      const { distance, closestPoint } = distToSegmentWithPoint({ x: px, y: py }, p1, p2);
      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = closestPoint;
      }
    }
  }

  return {
    onTrack: minDistance <= radius + 12,
    distanceToCenter: minDistance,
    nearestPoint
  };
}

function distToSegmentWithPoint(p, v, w) {
  const l2 = (v.x - w.x) ** 2 + (v.y - w.y) ** 2;
  if (l2 === 0) {
    return { distance: Math.hypot(p.x - v.x, p.y - v.y), closestPoint: v };
  }
  let t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  const closestPoint = {
    x: v.x + t * (w.x - v.x),
    y: v.y + t * (w.y - v.y)
  };
  return {
    distance: Math.hypot(p.x - closestPoint.x, p.y - closestPoint.y),
    closestPoint
  };
}
