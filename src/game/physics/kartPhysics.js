export class Kart {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.angle = (config.angle || 0) * (Math.PI / 180); // in radians
    this.color = config.color || '#FF4500';
    this.name = config.name || 'Racer';
    this.isPlayer = config.isPlayer || false;

    // Physics Constants
    this.maxSpeed = this.isPlayer ? 9.5 : 8.5;
    this.maxReverseSpeed = -3.0;
    this.accel = 0.18;
    this.brake = 0.35;
    this.friction = 0.965;
    this.offroadFriction = 0.88;
    this.turnSpeed = 0.055;

    // Velocity & Drift State
    this.speed = 0;
    this.driftAngle = 0;
    this.isDrifting = false;
    this.driftDirection = 0; // -1 left, 1 right
    this.driftTime = 0;
    this.turboBoost = 0;

    // Track Progress
    this.currentWaypoint = 0;
    this.laps = 0;
    this.lastCheckpoint = 0;
    this.totalDistance = 0;
    this.isOnTrack = true;

    // Visuals
    this.skidmarks = [];
    this.particles = [];
  }

  update(inputs, trackCheckpoints, isOffroad) {
    this.isOnTrack = !isOffroad;
    const currentFriction = isOffroad ? this.offroadFriction : this.friction;

    // 1. Acceleration & Braking
    if (inputs.gas) {
      this.speed += this.accel;
      if (this.speed > this.maxSpeed + this.turboBoost) {
        this.speed = this.maxSpeed + this.turboBoost;
      }
    } else if (inputs.brake) {
      if (this.speed > 0) {
        this.speed -= this.brake;
      } else {
        this.speed -= this.accel * 0.6;
        if (this.speed < this.maxReverseSpeed) {
          this.speed = this.maxReverseSpeed;
        }
      }
    } else {
      this.speed *= currentFriction;
    }

    // Apply turbo decay
    if (this.turboBoost > 0) {
      this.turboBoost -= 0.15;
      if (this.turboBoost < 0) this.turboBoost = 0;
    }

    // 2. Super Mario Kart Drifting Mechanics
    if (inputs.drift && Math.abs(this.speed) > 3.0 && (inputs.left || inputs.right)) {
      if (!this.isDrifting) {
        this.isDrifting = true;
        this.driftDirection = inputs.left ? -1 : 1;
        this.driftTime = 0;
      }
      this.driftTime += 1;
      // Drift rotation multiplier
      this.angle += this.driftDirection * this.turnSpeed * 1.35;
      this.driftAngle = this.driftDirection * 0.35;

      // Add skidmarks
      if (this.driftTime % 2 === 0) {
        this.skidmarks.push({
          x: this.x,
          y: this.y,
          alpha: 0.8,
          color: this.driftTime > 40 ? '#FF4500' : '#333333'
        });
      }
    } else {
      if (this.isDrifting) {
        // Give Mini-Turbo Boost if drifted long enough!
        if (this.driftTime > 45) {
          this.turboBoost = 4.5; // Flame Turbo Boost!
        }
        this.isDrifting = false;
        this.driftAngle = 0;
        this.driftTime = 0;
      }

      // Normal Steering
      if (Math.abs(this.speed) > 0.3) {
        const dir = this.speed > 0 ? 1 : -1;
        const turnFactor = (Math.abs(this.speed) / this.maxSpeed) * 0.7 + 0.3;
        if (inputs.left) this.angle -= this.turnSpeed * turnFactor * dir;
        if (inputs.right) this.angle += this.turnSpeed * turnFactor * dir;
      }
    }

    // Decay skidmarks
    for (let i = this.skidmarks.length - 1; i >= 0; i--) {
      this.skidmarks[i].alpha -= 0.015;
      if (this.skidmarks[i].alpha <= 0) {
        this.skidmarks.splice(i, 1);
      }
    }

    // 3. Move position along vector angle
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // 4. Particle exhaust effects
    if (Math.abs(this.speed) > 1.0 && Math.random() < 0.4) {
      this.particles.push({
        x: this.x - Math.cos(this.angle) * 16,
        y: this.y - Math.sin(this.angle) * 16,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 2,
        alpha: 0.7,
        color: this.turboBoost > 0 ? '#FF4500' : '#888888'
      });
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.04;
      p.size += 0.1;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // 5. Waypoint & Lap Tracking
    this.updateWaypointProgress(trackCheckpoints);
  }

  updateWaypointProgress(waypoints) {
    if (!waypoints || waypoints.length === 0) return;

    const target = waypoints[this.currentWaypoint];
    const dist = Math.hypot(this.x - target.x, this.y - target.y);

    if (dist < 110) {
      this.currentWaypoint = (this.currentWaypoint + 1) % waypoints.length;
      if (this.currentWaypoint === 0) {
        this.laps += 1;
      }
    }
  }

  // AI Steering Controller
  updateAI(waypoints) {
    if (this.isPlayer || !waypoints || waypoints.length === 0) return { gas: false, brake: false, left: false, right: false, drift: false };

    const target = waypoints[this.currentWaypoint];
    const dx = target.x - this.x;
    const dy = target.y - this.y;

    const desiredAngle = Math.atan2(dy, dx);
    let diff = desiredAngle - this.angle;

    // Normalize angle diff to -PI .. PI
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;

    const left = diff < -0.1;
    const right = diff > 0.1;
    const isSharpTurn = Math.abs(diff) > 0.8;

    return {
      gas: !isSharpTurn || Math.abs(this.speed) < 4.0,
      brake: isSharpTurn && Math.abs(this.speed) > 6.0,
      left,
      right,
      drift: isSharpTurn && Math.abs(this.speed) > 5.0
    };
  }
}
