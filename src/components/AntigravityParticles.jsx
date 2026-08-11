import React, { useEffect, useRef } from 'react';

const AntigravityParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle pool floating upward (Anti-gravity rain)
    const particleCount = Math.min(width < 768 ? 30 : 65, 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: -(Math.random() * 0.7 + 0.3), // Float UPWARD
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? '#00d9ff' : Math.random() > 0.5 ? '#d4af37' : '#9d4edd',
      glow: Math.random() * 8 + 4
    }));

    // Ambient floating neon orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, radius: 260, color: 'rgba(0, 217, 255, 0.04)', vx: 0.15, vy: 0.1 },
      { x: width * 0.8, y: height * 0.6, radius: 320, color: 'rgba(212, 175, 55, 0.035)', vx: -0.1, vy: 0.15 },
      { x: width * 0.5, y: height * 0.85, radius: 300, color: 'rgba(157, 78, 221, 0.04)', vx: 0.12, vy: -0.12 }
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing background orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw upward floating anti-gravity particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Reset if floated above top edge
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-75"
    />
  );
};

export default AntigravityParticles;
