import React, { useEffect, useRef, useState } from 'react';
import trackData from '../track/trackData.json';
import { Kart } from '../physics/kartPhysics';
import { soundFx } from '../audio/soundEffects';

const GameCanvas = ({ onClose, onFinishRace }) => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('countdown'); // 'countdown', 'racing', 'finished'
  const [countdownText, setCountdownText] = useState('3');
  const [hud, setHud] = useState({
    lap: 1,
    totalLaps: 3,
    speed: 0,
    position: '1ST',
    currentLapTime: '00:00.000',
    bestLapTime: '--:--.---',
  });

  // Mobile Virtual Touch State
  const [touchState, setTouchState] = useState({ gas: false, brake: false, left: false, right: false, drift: false });

  const gameRef = useRef({
    karts: [],
    playerKart: null,
    keys: { gas: false, brake: false, left: false, right: false, drift: false },
    startTime: 0,
    lapStartTime: 0,
    lapTimes: [],
    bestLap: Infinity,
    countdownVal: 3,
    isMuted: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // Sound init on first interaction
    const initSound = () => soundFx.init();
    window.addEventListener('keydown', initSound, { once: true });
    window.addEventListener('touchstart', initSound, { once: true });

    // Keyboard Controller
    const handleKeyDown = (e) => {
      const k = gameRef.current.keys;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') k.gas = true;
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') k.brake = true;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') k.left = true;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') k.right = true;
      if (e.key === ' ' || e.key === 'Shift') k.drift = true;
    };

    const handleKeyUp = (e) => {
      const k = gameRef.current.keys;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') k.gas = false;
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') k.brake = false;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') k.left = false;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') k.right = false;
      if (e.key === ' ' || e.key === 'Shift') k.drift = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Initialize Karts
    const karts = trackData.spawns.map((s) => new Kart(s));
    const playerKart = karts.find((k) => k.isPlayer);
    gameRef.current.karts = karts;
    gameRef.current.playerKart = playerKart;

    // Countdown sequence
    setGameState('countdown');
    setCountdownText('3');
    soundFx.playCountdownBeep(false);

    let cd = 3;
    const cdTimer = setInterval(() => {
      cd -= 1;
      if (cd === 2) {
        setCountdownText('2');
        soundFx.playCountdownBeep(false);
      } else if (cd === 1) {
        setCountdownText('1');
        soundFx.playCountdownBeep(false);
      } else if (cd === 0) {
        setCountdownText('GO!');
        soundFx.playCountdownBeep(true);
        setGameState('racing');
        gameRef.current.startTime = Date.now();
        gameRef.current.lapStartTime = Date.now();
      } else {
        clearInterval(cdTimer);
        setCountdownText('');
      }
    }, 1000);

    // 60 FPS Main Game Render Loop
    let animId;
    const render = () => {
      // 1. Resize Canvas
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      // Combine Keyboard & Touch Inputs for Player
      const combinedInputs = {
        gas: gameRef.current.keys.gas || touchState.gas,
        brake: gameRef.current.keys.brake || touchState.brake,
        left: gameRef.current.keys.left || touchState.left,
        right: gameRef.current.keys.right || touchState.right,
        drift: gameRef.current.keys.drift || touchState.drift,
      };

      // 2. Physics & AI Updates
      karts.forEach((k) => {
        let inputs = combinedInputs;
        if (!k.isPlayer) {
          inputs = k.updateAI(trackData.waypoints);
        }

        // Offroad Check (distance from centerline waypoints)
        const isOffroad = checkIsOffroad(k.x, k.y, trackData.waypoints, trackData.width);
        k.update(inputs, trackData.waypoints, isOffroad);

        if (k.isDrifting && k.isPlayer) {
          soundFx.playDriftScreech();
        }
      });

      // Kart-to-kart collision physics
      for (let i = 0; i < karts.length; i++) {
        for (let j = i + 1; j < karts.length; j++) {
          const k1 = karts[i];
          const k2 = karts[j];
          const dist = Math.hypot(k1.x - k2.x, k1.y - k2.y);
          if (dist < 32) { // Kart radius
            soundFx.playCollisionBump();
            const angle = Math.atan2(k2.y - k1.y, k2.x - k1.x);
            const overlap = 32 - dist;
            k1.x -= Math.cos(angle) * (overlap / 2);
            k1.y -= Math.sin(angle) * (overlap / 2);
            k2.x += Math.cos(angle) * (overlap / 2);
            k2.y += Math.sin(angle) * (overlap / 2);
          }
        }
      }

      // Update sound engine pitch
      soundFx.updateEngine(playerKart.speed, playerKart.maxSpeed, combinedInputs.gas);

      // 3. Camera Positioning (Follow Player Kart)
      const camX = playerKart.x - width / 2;
      const camY = playerKart.y - height / 2;

      ctx.save();
      // Apply Camera Shake on drift turbo
      if (playerKart.turboBoost > 2) {
        ctx.translate((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4);
      }

      // Clear Screen (Pixel Art Green Grass)
      ctx.fillStyle = '#1e4620';
      ctx.fillRect(0, 0, width, height);

      ctx.translate(-camX, -camY);

      // Draw Pixel Grass Grid Texture
      drawPixelGrass(ctx, camX, camY, width, height);

      // Draw Track Asphalt & Curbs
      drawTrackAsphalt(ctx, trackData.waypoints, trackData.width);

      // Draw Start/Finish Checkered Line
      drawStartFinish(ctx, trackData.startFinish);

      // Draw Skidmarks
      karts.forEach((k) => {
        k.skidmarks.forEach((sm) => {
          ctx.fillStyle = sm.color;
          ctx.globalAlpha = sm.alpha;
          ctx.fillRect(sm.x - 3, sm.y - 3, 6, 6);
        });
        ctx.globalAlpha = 1.0;
      });

      // Draw Exhaust Smoke Particles
      karts.forEach((k) => {
        k.particles.forEach((p) => {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1.0;
      });

      // Draw Karts (16-bit Retro Top-Down Sprite)
      karts.forEach((k) => {
        drawKartSprite(ctx, k);
      });

      ctx.restore();

      // 4. Update HUD Telemetry State
      if (gameState === 'racing') {
        const now = Date.now();
        const lapElapsed = now - gameRef.current.lapStartTime;
        const currentLapStr = formatTime(lapElapsed);

        // Check lap completion for player
        if (playerKart.laps > gameRef.current.lapTimes.length) {
          gameRef.current.lapTimes.push(lapElapsed);
          soundFx.playLapComplete();
          if (lapElapsed < gameRef.current.bestLap) {
            gameRef.current.bestLap = lapElapsed;
          }
          gameRef.current.lapStartTime = now;

          // Check Race Finish (3 Laps)
          if (playerKart.laps >= 3) {
            setGameState('finished');
            if (onFinishRace) onFinishRace(gameRef.current.bestLap);
          }
        }

        // Calculate Position Rankings
        const sorted = [...karts].sort((a, b) => {
          if (b.laps !== a.laps) return b.laps - a.laps;
          return b.currentWaypoint - a.currentWaypoint;
        });
        const rank = sorted.findIndex((k) => k.isPlayer) + 1;
        const rankSuffix = rank === 1 ? '1ST' : rank === 2 ? '2ND' : rank === 3 ? '3RD' : '4TH';

        setHud({
          lap: Math.min(playerKart.laps + 1, 3),
          totalLaps: 3,
          speed: Math.round(Math.abs(playerKart.speed) * 8.5),
          position: rankSuffix,
          currentLapTime: currentLapStr,
          bestLapTime: gameRef.current.bestLap === Infinity ? '--:--.---' : formatTime(gameRef.current.bestLap)
        });
      }

      // Draw Mini Map Radar in top-right HUD
      drawMiniMap(ctx, width, height, trackData.waypoints, karts, playerKart);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearInterval(cdTimer);
    };
  }, [gameState, touchState]);

  return (
    <div className="relative w-full h-full bg-black select-none overflow-hidden font-mono">
      {/* 2D Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Top Left HUD Telemetry Bar */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
        <div className="bg-black/80 border border-[#FF4500]/50 backdrop-blur-md rounded-xl p-3 text-white space-y-1 shadow-[0_0_20px_rgba(255,69,0,0.3)]">
          <div className="flex items-center justify-between text-xs text-[#FF4500] font-bold">
            <span>POSITION</span>
            <span className="text-xl text-white font-display font-black">{hud.position}</span>
          </div>
          <div className="flex justify-between text-xs gap-4 text-gray-300">
            <span>LAP: <strong className="text-white">{hud.lap} / {hud.totalLaps}</strong></span>
            <span>SPEED: <strong className="text-[#FF4500] font-bold">{hud.speed} KM/H</strong></span>
          </div>
        </div>

        <div className="bg-black/80 border border-white/10 backdrop-blur-md rounded-xl p-3 text-white text-xs space-y-1">
          <div className="flex justify-between gap-4">
            <span className="text-gray-400">TIME:</span>
            <span className="text-white font-bold">{hud.currentLapTime}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-[#FF4500]">BEST LAP:</span>
            <span className="text-white font-bold">{hud.bestLapTime}</span>
          </div>
        </div>
      </div>

      {/* Countdown Overlay */}
      {countdownText && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none bg-black/30 backdrop-blur-xs">
          <span className="text-7xl sm:text-9xl font-display font-black text-[#FF4500] text-glow animate-pulse">
            {countdownText}
          </span>
        </div>
      )}

      {/* Victory / Finish Modal Overlay */}
      {gameState === 'finished' && (
        <div className="absolute inset-0 z-40 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#FF4500] uppercase font-bold tracking-widest">// RACE COMPLETE</span>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase">
              CHAMPIONSHIP <span className="text-[#FF4500]">FINISH</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Your Position: <strong className="text-[#FF4500] text-lg font-bold">{hud.position}</strong> | Best Lap: <strong className="text-white text-lg">{hud.bestLapTime}</strong>
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-[#FF4500] hover:bg-[#FF2A00] text-white font-display font-bold uppercase tracking-wider text-xs shadow-[0_0_25px_#FF4500] transition-transform active:scale-95"
            >
              Race Again
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider border border-white/20"
            >
              Exit to Website
            </button>
          </div>
        </div>
      )}

      {/* Mobile Virtual Controls Overlay (Visible on Touch screens / Mobile) */}
      <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between lg:hidden pointer-events-auto">
        {/* Left/Right Steering D-Pad */}
        <div className="flex gap-2">
          <button
            onTouchStart={() => setTouchState((prev) => ({ ...prev, left: true }))}
            onTouchEnd={() => setTouchState((prev) => ({ ...prev, left: false }))}
            className="w-16 h-16 rounded-2xl bg-black/70 border border-white/30 text-white font-bold text-2xl active:bg-[#FF4500]/50"
          >
            &larr;
          </button>
          <button
            onTouchStart={() => setTouchState((prev) => ({ ...prev, right: true }))}
            onTouchEnd={() => setTouchState((prev) => ({ ...prev, right: false }))}
            className="w-16 h-16 rounded-2xl bg-black/70 border border-white/30 text-white font-bold text-2xl active:bg-[#FF4500]/50"
          >
            &rarr;
          </button>
        </div>

        {/* Gas, Brake & Drift Buttons */}
        <div className="flex items-center gap-3">
          <button
            onTouchStart={() => setTouchState((prev) => ({ ...prev, drift: true }))}
            onTouchEnd={() => setTouchState((prev) => ({ ...prev, drift: false }))}
            className="w-14 h-14 rounded-full bg-blue-600/80 border border-blue-400 text-white font-bold text-xs uppercase active:bg-blue-500"
          >
            DRIFT
          </button>
          <button
            onTouchStart={() => setTouchState((prev) => ({ ...prev, brake: true }))}
            onTouchEnd={() => setTouchState((prev) => ({ ...prev, brake: false }))}
            className="w-14 h-14 rounded-full bg-red-600/80 border border-red-400 text-white font-bold text-xs uppercase active:bg-red-500"
          >
            BRAKE
          </button>
          <button
            onTouchStart={() => setTouchState((prev) => ({ ...prev, gas: true }))}
            onTouchEnd={() => setTouchState((prev) => ({ ...prev, gas: false }))}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF8C00] text-white font-display font-black text-sm uppercase shadow-[0_0_20px_#FF4500] active:scale-95"
          >
            GAS
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper Drawing Functions
function drawPixelGrass(ctx, camX, camY, width, height) {
  const tileSize = 64;
  const startX = Math.floor(camX / tileSize) * tileSize;
  const startY = Math.floor(camY / tileSize) * tileSize;

  ctx.fillStyle = '#265429';
  for (let x = startX; x < camX + width + tileSize; x += tileSize) {
    for (let y = startY; y < camY + height + tileSize; y += tileSize) {
      if ((Math.floor(x / tileSize) + Math.floor(y / tileSize)) % 2 === 0) {
        ctx.fillRect(x, y, tileSize, tileSize);
      }
    }
  }
}

function drawTrackAsphalt(ctx, waypoints, trackWidth) {
  if (!waypoints || waypoints.length < 2) return;

  // Draw Red-White Curbs Outer Border
  ctx.strokeStyle = '#E53935';
  ctx.lineWidth = trackWidth + 20;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(waypoints[0].x, waypoints[0].y);
  for (let i = 1; i < waypoints.length; i++) {
    ctx.lineTo(waypoints[i].x, waypoints[i].y);
  }
  ctx.closePath();
  ctx.stroke();

  // White Curbs Stagger
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = trackWidth + 12;
  ctx.setLineDash([20, 20]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Asphalt Main Surface
  ctx.strokeStyle = '#22222a';
  ctx.lineWidth = trackWidth;
  ctx.stroke();

  // Centerline Dashed Guide
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 4;
  ctx.setLineDash([15, 15]);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawStartFinish(ctx, sf) {
  if (!sf) return;
  ctx.save();
  ctx.translate(sf.x, sf.y);
  ctx.rotate(sf.angle * (Math.PI / 180));

  const size = 8;
  for (let row = 0; row < 2; row++) {
    for (let col = -6; col < 6; col++) {
      ctx.fillStyle = (row + col) % 2 === 0 ? '#FFFFFF' : '#000000';
      ctx.fillRect(col * size, row * size - 8, size, size);
    }
  }
  ctx.restore();
}

function drawKartSprite(ctx, kart) {
  ctx.save();
  ctx.translate(kart.x, kart.y);
  ctx.rotate(kart.angle + kart.driftAngle);

  // Kart Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(-12, -10, 28, 20);

  // Rear Tires
  ctx.fillStyle = '#111111';
  ctx.fillRect(-14, -14, 8, 6);
  ctx.fillRect(-14, 8, 8, 6);

  // Front Tires
  ctx.fillRect(8, -14, 7, 5);
  ctx.fillRect(8, 9, 7, 5);

  // Main Body Frame
  ctx.fillStyle = kart.color;
  ctx.fillRect(-10, -10, 24, 20);

  // Driver Helmet (Yellow/White 16-bit retro)
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(-2, 0, 7, 0, Math.PI * 2);
  ctx.fill();

  // Helmet Visor
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, -4, 4, 8);

  // Front Nose Wing
  ctx.fillStyle = '#FF1E00';
  ctx.fillRect(14, -12, 5, 24);

  ctx.restore();
}

function drawMiniMap(ctx, screenW, screenH, waypoints, karts, playerKart) {
  const mapW = 120;
  const mapH = 100;
  const mapX = screenW - mapW - 16;
  const mapY = 16;

  ctx.fillStyle = 'rgba(10, 10, 16, 0.85)';
  ctx.strokeStyle = 'rgba(255, 69, 0, 0.5)';
  ctx.lineWidth = 1.5;
  ctx.fillRect(mapX, mapY, mapW, mapH);
  ctx.strokeRect(mapX, mapY, mapW, mapH);

  // Map Scale factor
  const scaleX = mapW / 1000;
  const scaleY = mapH / 900;

  // Draw Mini Track Loop
  ctx.strokeStyle = '#555566';
  ctx.lineWidth = 3;
  ctx.beginPath();
  if (waypoints && waypoints.length > 0) {
    ctx.moveTo(mapX + waypoints[0].x * scaleX, mapY + waypoints[0].y * scaleY);
    for (let i = 1; i < waypoints.length; i++) {
      ctx.lineTo(mapX + waypoints[i].x * scaleX, mapY + waypoints[i].y * scaleY);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Draw Karts on Mini Map
  karts.forEach((k) => {
    ctx.fillStyle = k.isPlayer ? '#FF4500' : k.color;
    ctx.beginPath();
    ctx.arc(mapX + k.x * scaleX, mapY + k.y * scaleY, k.isPlayer ? 4 : 2.5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function checkIsOffroad(x, y, waypoints, trackWidth) {
  if (!waypoints || waypoints.length === 0) return false;

  let minDist = Infinity;
  for (let i = 0; i < waypoints.length; i++) {
    const d = Math.hypot(x - waypoints[i].x, y - waypoints[i].y);
    if (d < minDist) minDist = d;
  }
  return minDist > trackWidth / 1.6;
}

function formatTime(ms) {
  const totalSec = ms / 1000;
  const min = Math.floor(totalSec / 60);
  const sec = Math.floor(totalSec % 60);
  const millis = Math.floor((ms % 1000));
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`;
}

export default GameCanvas;
