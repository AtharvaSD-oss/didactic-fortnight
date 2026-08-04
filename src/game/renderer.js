export class GameRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    // Skid marks & particle pools
    this.skidMarks = [];
    this.particles = [];
    this.camera = { x: 0, y: 0, zoom: 1 };
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  render(playerKart, karts, trackData, raceState, crtEnabled = true) {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;

    // Smooth Camera Follow
    const targetX = playerKart.x - width / 2;
    const targetY = playerKart.y - height / 2;
    this.camera.x += (targetX - this.camera.x) * 0.1;
    this.camera.y += (targetY - this.camera.y) * 0.1;

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    // Camera transform
    ctx.translate(-this.camera.x, -this.camera.y);

    // 1. Draw World Grass & Ground Texture
    this.drawBackground(ctx);

    // 2. Draw Track Asphalt & Curbs
    this.drawTrack(ctx, trackData);

    // 3. Draw Skid Marks
    this.drawSkidMarks(ctx);

    // 4. Draw Particles (Smoke & Exhaust)
    this.drawParticles(ctx);

    // 5. Draw Karts
    for (const kart of karts) {
      this.drawKart(ctx, kart);
    }

    ctx.restore();

    // 6. Draw Minimap
    this.drawMinimap(ctx, karts, trackData);

    // 7. Optional CRT Scanline Shader Overlay
    if (crtEnabled) {
      this.drawCRTOverlay(ctx, width, height);
    }
  }

  drawBackground(ctx) {
    // 16-bit Pixel Grass Ground Pattern
    ctx.fillStyle = '#1b3b1e';
    ctx.fillRect(this.camera.x - 200, this.camera.y - 200, this.canvas.width + 400, this.canvas.height + 400);

    // Subtle Grass grid pixels
    ctx.fillStyle = '#153018';
    const startX = Math.floor((this.camera.x - 200) / 40) * 40;
    const startY = Math.floor((this.camera.y - 200) / 40) * 40;

    for (let x = startX; x < this.camera.x + this.canvas.width + 200; x += 40) {
      for (let y = startY; y < this.camera.y + this.canvas.height + 200; y += 40) {
        if ((x + y) % 80 === 0) {
          ctx.fillRect(x, y, 40, 40);
        }
      }
    }
  }

  drawTrack(ctx, trackData) {
    const points = trackData.centerline;
    const trackWidth = trackData.width;

    // Draw Curbs (Outer Red-White Edge)
    ctx.beginPath();
    ctx.strokeStyle = '#c62828';
    ctx.lineWidth = trackWidth + 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    ctx.stroke();

    // Inner White Curbs
    ctx.beginPath();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = trackWidth + 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    ctx.stroke();

    // Dark Polymer Asphalt Track Surface
    ctx.beginPath();
    ctx.strokeStyle = '#181824';
    ctx.lineWidth = trackWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    ctx.stroke();

    // Speed Pads
    for (const pad of trackData.speedPads) {
      ctx.save();
      ctx.translate(pad.x, pad.y);
      ctx.fillStyle = '#FF4500';
      ctx.beginPath();
      ctx.arc(0, 0, pad.radius, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Arrow
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(-10, 10);
      ctx.lineTo(0, -10);
      ctx.lineTo(10, 10);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Start / Finish Line
    const start = trackData.startLine;
    ctx.save();
    ctx.translate(start.x, start.y);
    ctx.rotate((start.angle * Math.PI) / 180);

    // Checkered Banner
    const checkSize = 10;
    for (let col = -trackWidth / 2; col < trackWidth / 2; col += checkSize) {
      for (let row = -10; row < 10; row += checkSize) {
        ctx.fillStyle = ((col + row) / checkSize) % 2 === 0 ? '#ffffff' : '#000000';
        ctx.fillRect(col, row, checkSize, checkSize);
      }
    }
    ctx.restore();
  }

  addSkidMark(x, y) {
    this.skidMarks.push({ x, y, alpha: 0.8 });
    if (this.skidMarks.length > 250) this.skidMarks.shift();
  }

  addSmokeParticle(x, y, color = '#ffffff') {
    this.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 4 + 3,
      alpha: 0.7,
      color,
    });
  }

  drawSkidMarks(ctx) {
    for (const s of this.skidMarks) {
      ctx.fillStyle = `rgba(0, 0, 0, ${s.alpha})`;
      ctx.fillRect(s.x - 3, s.y - 3, 6, 6);
      s.alpha -= 0.003;
    }
    this.skidMarks = this.skidMarks.filter((s) => s.alpha > 0);
  }

  drawParticles(ctx) {
    for (const p of this.particles) {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.025;
    }
    ctx.globalAlpha = 1.0;
    this.particles = this.particles.filter((p) => p.alpha > 0);
  }

  drawKart(ctx, kart) {
    ctx.save();
    ctx.translate(kart.x, kart.y);
    ctx.rotate(((kart.angle + kart.driftAngleOffset) * Math.PI) / 180);

    // Kart Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(-14, -10, 32, 22);

    // Kart Body Frame
    ctx.fillStyle = kart.color;
    ctx.fillRect(-12, -8, 26, 16);

    // Front Nosecone
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(10, -6, 6, 12);

    // Rear Spoiler
    ctx.fillStyle = '#000000';
    ctx.fillRect(-14, -9, 4, 18);

    // 4 Wheels
    ctx.fillStyle = '#111111';
    ctx.fillRect(-10, -11, 8, 4); // Front Left
    ctx.fillRect(-10, 7, 8, 4);  // Front Right
    ctx.fillRect(4, -11, 8, 4);   // Rear Left
    ctx.fillRect(4, 7, 8, 4);    // Rear Right

    // Helmet (Yellow/Orange Pilot Helmet)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fill();

    // Helmet Visor
    ctx.fillStyle = '#000000';
    ctx.fillRect(1, -3, 3, 6);

    // Drift Skid particle generation
    if (kart.isDrifting) {
      this.addSkidMark(kart.x, kart.y);
      this.addSmokeParticle(kart.x, kart.y, '#cccccc');
    }

    // Boost Exhaust Trails
    if (kart.boostTimer > 0) {
      this.addSmokeParticle(kart.x - 15, kart.y, '#FF4500');
    }

    ctx.restore();
  }

  drawMinimap(ctx, karts, trackData) {
    const miniWidth = 140;
    const miniHeight = 140;
    const margin = 20;

    const x = this.canvas.width - miniWidth - margin;
    const y = margin;

    ctx.save();
    ctx.fillStyle = 'rgba(8, 8, 12, 0.85)';
    ctx.strokeStyle = 'rgba(255, 69, 0, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(x, y, miniWidth, miniHeight, 12);
    ctx.fill();
    ctx.stroke();

    // Minimap Header
    ctx.fillStyle = '#FF4500';
    ctx.font = 'bold 9px monospace';
    ctx.fillText('MINIMAP', x + 10, y + 15);

    // Scale Track into minimap box
    const points = trackData.centerline;
    const scale = 0.12;
    const offsetX = x + 35;
    const offsetY = y + 25;

    ctx.beginPath();
    ctx.strokeStyle = '#555566';
    ctx.lineWidth = 6;
    points.forEach((p, i) => {
      const mx = offsetX + p.x * scale;
      const my = offsetY + p.y * scale;
      if (i === 0) {
        ctx.moveTo(mx, my);
      } else {
        ctx.lineTo(mx, my);
      }
    });
    ctx.closePath();
    ctx.stroke();

    // Render Karts on Minimap
    karts.forEach((kart) => {
      const mx = offsetX + kart.x * scale;
      const my = offsetY + kart.y * scale;

      ctx.fillStyle = kart.isAI ? kart.color : '#FF4500';
      ctx.beginPath();
      ctx.arc(mx, my, kart.isAI ? 3 : 5, 0, Math.PI * 2);
      ctx.fill();

      if (!kart.isAI) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    });

    ctx.restore();
  }

  drawCRTOverlay(ctx, width, height) {
    ctx.save();
    ctx.fillStyle = 'rgba(18, 16, 16, 0.04)';
    for (let i = 0; i < height; i += 3) {
      ctx.fillRect(0, i, width, 1);
    }
    ctx.restore();
  }
}
