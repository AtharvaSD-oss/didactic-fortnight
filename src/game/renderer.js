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

    // 1. Draw Arena Concrete Slab & Ground
    this.drawArenaPlatform(ctx);

    // 2. Draw Track Asphalt & Curbs & Pit Lane
    this.drawTrack(ctx, trackData);

    // 3. Draw Track Markings (Arrows, Kerbs, Marshall Posts, Signs)
    this.drawTrackDetails(ctx, trackData);

    // 4. Draw Skid Marks
    this.drawSkidMarks(ctx);

    // 5. Draw Particles (Smoke & Boost Exhaust)
    this.drawParticles(ctx);

    // 6. Draw Karts
    for (const kart of karts) {
      this.drawKart(ctx, kart);
    }

    // 7. Draw Start/Finish Floating Banner
    this.drawStartFinishBanner(ctx, trackData);

    ctx.restore();

    // 8. Draw Minimap
    this.drawMinimap(ctx, karts, trackData);

    // 9. Optional CRT Scanline Shader Overlay
    if (crtEnabled) {
      this.drawCRTOverlay(ctx, width, height);
    }
  }

  drawArenaPlatform(ctx) {
    // Outer dark arena stadium space
    ctx.fillStyle = '#060609';
    ctx.fillRect(this.camera.x - 300, this.camera.y - 300, this.canvas.width + 600, this.canvas.height + 600);

    // Main Concrete Arena Platform Slab (matches image)
    const slabX = 50;
    const slabY = 80;
    const slabW = 1250;
    const slabH = 880;
    const radius = 60;

    // Slab Shadow
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(slabX + 15, slabY + 25, slabW, slabH, radius);
    } else {
      ctx.rect(slabX + 15, slabY + 25, slabW, slabH);
    }
    ctx.fill();

    // Slab Bevel Bottom Edge
    ctx.fillStyle = '#b8bcc4';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(slabX, slabY + 12, slabW, slabH, radius);
    } else {
      ctx.rect(slabX, slabY + 12, slabW, slabH);
    }
    ctx.fill();

    // Main Concrete Surface
    const slabGrad = ctx.createLinearGradient(slabX, slabY, slabX + slabW, slabY + slabH);
    slabGrad.addColorStop(0, '#f0f2f6');
    slabGrad.addColorStop(0.5, '#e4e7ec');
    slabGrad.addColorStop(1, '#d5d9e0');
    ctx.fillStyle = slabGrad;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(slabX, slabY, slabW, slabH, radius);
    } else {
      ctx.rect(slabX, slabY, slabW, slabH);
    }
    ctx.fill();

    // Subtle concrete panel grid lines
    ctx.strokeStyle = 'rgba(180, 185, 195, 0.35)';
    ctx.lineWidth = 1;
    for (let x = slabX + 100; x < slabX + slabW; x += 120) {
      ctx.beginPath();
      ctx.moveTo(x, slabY);
      ctx.lineTo(x, slabY + slabH);
      ctx.stroke();
    }
    for (let y = slabY + 100; y < slabY + slabH; y += 120) {
      ctx.beginPath();
      ctx.moveTo(slabX, y);
      ctx.lineTo(slabX + slabW, y);
      ctx.stroke();
    }

    ctx.restore();
  }

  drawTrack(ctx, trackData) {
    const points = trackData.centerline;
    const trackWidth = trackData.width;

    // 1. Outer Safety Barrier Shading (Dark extruded wall)
    ctx.beginPath();
    ctx.strokeStyle = '#181920';
    ctx.lineWidth = trackWidth + 24;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y + 4) : ctx.lineTo(p.x, p.y + 4)));
    ctx.closePath();
    ctx.stroke();

    // 2. White Perimeter Line
    ctx.beginPath();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = trackWidth + 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    ctx.stroke();

    // 3. Pit Lane underlay
    if (trackData.pitLane) {
      ctx.beginPath();
      ctx.strokeStyle = '#2b2d35';
      ctx.lineWidth = trackWidth * 0.65;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      trackData.pitLane.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.stroke();
    }

    // 4. Smooth Asphalt Track Surface
    ctx.beginPath();
    ctx.strokeStyle = '#2c2e37';
    ctx.lineWidth = trackWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    ctx.stroke();

    // 5. Track Centerline Dashes (Subtle White)
    ctx.save();
    ctx.setLineDash([16, 24]);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    // 6. Speed Boost Pads
    for (const pad of trackData.speedPads) {
      ctx.save();
      ctx.translate(pad.x, pad.y);
      ctx.fillStyle = '#EE3124';
      ctx.beginPath();
      ctx.arc(0, 0, pad.radius, 0, Math.PI * 2);
      ctx.fill();

      // Glowing Speed Chevron
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.moveTo(-8, 8);
      ctx.lineTo(0, -10);
      ctx.lineTo(8, 8);
      ctx.lineTo(0, 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // 7. Checkered Start / Finish Line on track
    const start = trackData.startLine;
    ctx.save();
    ctx.translate(start.x, start.y);
    ctx.rotate((start.angle * Math.PI) / 180);

    const checkCols = 6;
    const checkWidth = trackWidth / checkCols;
    const checkHeight = 8;

    for (let col = -checkCols / 2; col < checkCols / 2; col++) {
      for (let row = -1; row <= 1; row++) {
        ctx.fillStyle = (col + row) % 2 === 0 ? '#ffffff' : '#111111';
        ctx.fillRect(col * checkWidth, row * checkHeight, checkWidth, checkHeight);
      }
    }
    ctx.restore();
  }

  drawTrackDetails(ctx, trackData) {
    const points = trackData.centerline;

    // 1. Draw Directional White Racing Arrows along track
    ctx.save();
    for (let i = 0; i < points.length; i += 3) {
      const p1 = points[i];
      const p2 = points[(i + 1) % points.length];
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

      ctx.save();
      ctx.translate((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
      ctx.rotate(angle);

      // White Direction Arrow
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(-6, -6);
      ctx.lineTo(-3, 0);
      ctx.lineTo(-12, 0);
      ctx.lineTo(-12, 2);
      ctx.lineTo(-3, 2);
      ctx.lineTo(-6, 6);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }
    ctx.restore();

    // 2. Draw Red & Green Kerbs at Apexes
    if (trackData.kerbs) {
      for (const kerb of trackData.kerbs) {
        ctx.save();
        ctx.translate(kerb.x, kerb.y);

        const kerbSegments = 8;
        const segWidth = 8;
        const segHeight = 14;

        for (let s = 0; s < kerbSegments; s++) {
          const isRed = s % 2 === 0;
          ctx.fillStyle = isRed ? '#d32f2f' : '#2e7d32'; // Red / Green
          ctx.fillRect((s - kerbSegments / 2) * segWidth, -segHeight / 2, segWidth - 1, segHeight);

          // White inner strip
          ctx.fillStyle = '#ffffff';
          ctx.fillRect((s - kerbSegments / 2) * segWidth, -segHeight / 2 + 4, segWidth - 1, 3);
        }
        ctx.restore();
      }
    }

    // 3. Draw Pit Lane Text Marking
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('PIT LANE', 820, 875);
    ctx.restore();

    // 4. Draw Marshall Stations (M) in orange circle
    if (trackData.marshallPosts) {
      for (const post of trackData.marshallPosts) {
        ctx.save();
        ctx.translate(post.x, post.y);

        // Orange Circle Badge
        ctx.fillStyle = '#ff8f00';
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // White 'M' Letter
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(post.label, 0, 0.5);

        ctx.restore();
      }
    }

    // 5. Draw Sector 12 Badge (Blue circle with 12)
    if (trackData.sectorMarkers) {
      for (const sm of trackData.sectorMarkers) {
        ctx.save();
        ctx.translate(sm.x, sm.y);

        ctx.fillStyle = '#0288d1';
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(sm.label, 0, 0.5);

        ctx.restore();
      }
    }

    // 6. Draw Exit Gates (Green badge with arrows)
    if (trackData.exitGates) {
      for (const eg of trackData.exitGates) {
        ctx.save();
        ctx.translate(eg.x, eg.y);

        ctx.fillStyle = '#388e3c';
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(-16, -9, 32, 18, 4);
        } else {
          ctx.rect(-16, -9, 32, 18);
        }
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 8px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('EXIT ➜', 0, 0);

        ctx.restore();
      }
    }
  }

  drawStartFinishBanner(ctx, trackData) {
    const start = trackData.startLine;

    ctx.save();
    ctx.translate(start.x - 20, start.y - 120);

    // Orange vertical pole
    ctx.strokeStyle = '#ff8f00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 110);
    ctx.stroke();

    // START/FINISH Flag Badge (Matches image)
    ctx.fillStyle = '#ff8f00';
    ctx.fillRect(-10, -18, 100, 26);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(-10, -18, 100, 26);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'black 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('START/FINISH', 40, -5);

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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fillRect(-16, -11, 34, 22);

    // Kart Chassis / Sidepods
    ctx.fillStyle = kart.color;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-14, -9, 28, 18, 4);
    } else {
      ctx.rect(-14, -9, 28, 18);
    }
    ctx.fill();

    // Front Nosecone #1
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(10, -7, 7, 14);

    ctx.fillStyle = '#000000';
    ctx.font = 'bold 8px monospace';
    ctx.fillText('1', 12, 3);

    // Rear Spoiler
    ctx.fillStyle = '#111111';
    ctx.fillRect(-16, -10, 4, 20);

    // 4 Race Slicks Tires
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(-11, -12, 8, 4); // Front Left
    ctx.fillRect(-11, 8, 8, 4);  // Front Right
    ctx.fillRect(5, -12, 8, 4);   // Rear Left
    ctx.fillRect(5, 8, 8, 4);    // Rear Right

    // Driver Helmet (Yellow Helmet like the official logo!)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(-1, 0, 5.5, 0, Math.PI * 2);
    ctx.fill();

    // Black Visor
    ctx.fillStyle = '#111111';
    ctx.fillRect(1, -3, 3.5, 6);

    // Drift Skid particle generation
    if (kart.isDrifting) {
      this.addSkidMark(kart.x, kart.y);
      this.addSmokeParticle(kart.x, kart.y, '#cccccc');
    }

    // Boost Exhaust Trails
    if (kart.boostTimer > 0) {
      this.addSmokeParticle(kart.x - 15, kart.y, '#EE3124');
    }

    ctx.restore();
  }

  drawMinimap(ctx, karts, trackData) {
    const miniWidth = 160;
    const miniHeight = 130;
    const margin = 16;

    const x = this.canvas.width - miniWidth - margin;
    const y = margin;

    ctx.save();

    // Semi-transparent frosted box
    ctx.fillStyle = 'rgba(10, 10, 16, 0.9)';
    ctx.strokeStyle = '#EE3124';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(x, y, miniWidth, miniHeight, 12);
    } else {
      ctx.rect(x, y, miniWidth, miniHeight);
    }
    ctx.fill();
    ctx.stroke();

    // Minimap Header
    ctx.fillStyle = '#EE3124';
    ctx.font = 'bold 9px monospace';
    ctx.fillText('720M GP CIRCUIT', x + 10, y + 15);

    // Scale Track into minimap box
    const points = trackData.centerline;
    const scale = 0.11;
    const offsetX = x + 15;
    const offsetY = y + 20;

    // Draw Minimap Circuit Path
    ctx.beginPath();
    ctx.strokeStyle = '#606470';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
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

    // Start/Finish Line on Minimap
    const smx = offsetX + trackData.startLine.x * scale;
    const smy = offsetY + trackData.startLine.y * scale;
    ctx.fillStyle = '#ff8f00';
    ctx.fillRect(smx - 3, smy - 3, 6, 6);

    // Render Karts on Minimap
    karts.forEach((kart) => {
      const mx = offsetX + kart.x * scale;
      const my = offsetY + kart.y * scale;

      ctx.fillStyle = kart.isAI ? kart.color : '#EE3124';
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
    ctx.fillStyle = 'rgba(18, 16, 16, 0.03)';
    for (let i = 0; i < height; i += 3) {
      ctx.fillRect(0, i, width, 1);
    }
    ctx.restore();
  }
}
