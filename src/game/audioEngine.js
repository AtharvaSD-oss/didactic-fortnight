class RetroAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.engineOsc = null;
    this.engineGain = null;
    this.driftNoise = null;
    this.driftGain = null;
    this.isDrifting = false;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return;
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.setupEngineSound();
      this.setupDriftSound();
    } catch (e) {
      console.warn("Web Audio API not supported:", e);
    }
  }

  setupEngineSound() {
    if (!this.ctx) return;
    try {
      this.engineOsc = this.ctx.createOscillator();
      this.engineGain = this.ctx.createGain();

      this.engineOsc.type = 'sawtooth';
      this.engineOsc.frequency.setValueAtTime(60, this.ctx.currentTime);
      this.engineGain.gain.setValueAtTime(this.isMuted ? 0 : 0.02, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      this.engineOsc.connect(filter);
      filter.connect(this.engineGain);
      this.engineGain.connect(this.ctx.destination);

      this.engineOsc.start();
    } catch (e) {
      console.warn("Engine sound setup error:", e);
    }
  }

  setupDriftSound() {
    if (!this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 1;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      this.driftNoise = this.ctx.createBufferSource();
      this.driftNoise.buffer = buffer;
      this.driftNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      this.driftGain = this.ctx.createGain();
      this.driftGain.gain.setValueAtTime(0, this.ctx.currentTime);

      this.driftNoise.connect(filter);
      filter.connect(this.driftGain);
      this.driftGain.connect(this.ctx.destination);

      this.driftNoise.start();
    } catch (e) {
      console.warn("Drift sound setup error:", e);
    }
  }

  updateEngine(speedRatio, isAccelerating) {
    if (!this.ctx || this.isMuted || !this.engineOsc || !this.engineGain) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    const freq = 60 + speedRatio * 220 + (isAccelerating ? 30 : 0);
    const volume = 0.01 + speedRatio * 0.04;
    this.engineOsc.frequency.setTargetAtTime(freq, this.ctx.currentTime, 0.05);
    this.engineGain.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.05);
  }

  startDrift() {
    if (!this.ctx || this.isMuted || !this.driftGain) return;
    this.isDrifting = true;
    this.driftGain.gain.setTargetAtTime(0.06, this.ctx.currentTime, 0.05);
  }

  stopDrift() {
    if (!this.ctx || !this.driftGain) return;
    this.isDrifting = false;
    this.driftGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
  }

  playBeep(isGo = false) {
    if (!this.ctx || this.isMuted) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(isGo ? 880 : 440, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (isGo ? 0.35 : 0.2));

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + (isGo ? 0.35 : 0.2));
    } catch {
      // Audio node unsupported
    }
  }

  playCollision() {
    if (!this.ctx || this.isMuted) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // Audio node unsupported
    }
  }

  playBoost() {
    if (!this.ctx || this.isMuted) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.28);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.28);
    } catch {
      // Audio node unsupported
    }
  }

  playVictory() {
    if (!this.ctx || this.isMuted) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.14);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.14 + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.14);
        osc.stop(this.ctx.currentTime + idx * 0.14 + 0.28);
      });
    } catch {
      // Audio node unsupported
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.ctx && this.engineGain) {
      this.engineGain.gain.setValueAtTime(this.isMuted ? 0 : 0.02, this.ctx.currentTime);
    }
    if (this.ctx && this.driftGain && this.isMuted) {
      this.driftGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
    return this.isMuted;
  }
}

export const audioEngine = new RetroAudioEngine();
