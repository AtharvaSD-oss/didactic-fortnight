import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Volume2, VolumeX, Maximize2, Tv, Gauge } from 'lucide-react';
import trackData from '../game/trackData.json';
import { Kart } from '../game/physicsEngine';
import { GameRenderer } from '../game/renderer';
import { audioEngine } from '../game/audioEngine';
import MagneticButton from './MagneticButton';

const GameCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Game Loop & State Refs
  const gameStateRef = useRef('menu'); // 'menu', 'countdown', 'racing', 'finished'
  const [gameState, setGameState] = useState('menu');
  const [countdown, setCountdown] = useState(3);
  const [isMuted, setIsMuted] = useState(false);
  const [crtEnabled, setCrtEnabled] = useState(true);

  // Telemetry HUD States
  const [speed, setSpeed] = useState(0);
  const [currentLap, setCurrentLap] = useState(1);
  const [rank, setRank] = useState(1);
  const [finalRank, setFinalRank] = useState(1);

  // Controls Ref (Desktop + Mobile)
  const inputsRef = useRef({
    up: false,
    down: false,
    left: false,
    right: false,
    drift: false,
  });

  // Entities Ref
  const entitiesRef = useRef({
    player: null,
    karts: [],
    renderer: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize Renderer
    const renderer = new GameRenderer(canvas);
    entitiesRef.current.renderer = renderer;

    const handleResize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = Math.min(window.innerHeight * 0.7, 560);
        renderer.resize(w, h);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Keyboard Listeners
    const onKeyDown = (e) => {
      audioEngine.init();
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          inputsRef.current.up = true;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          inputsRef.current.down = true;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          inputsRef.current.left = true;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          inputsRef.current.right = true;
          break;
        case ' ':
          inputsRef.current.drift = true;
          e.preventDefault();
          break;
        default:
          break;
      }
    };

    const onKeyUp = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          inputsRef.current.up = false;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          inputsRef.current.down = false;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          inputsRef.current.left = false;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          inputsRef.current.right = false;
          break;
        case ' ':
          inputsRef.current.drift = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // 60 FPS Main Game Loop
    let animId;
    const gameLoop = () => {
      const { player, karts, renderer } = entitiesRef.current;

      if (player && karts.length > 0) {
        if (gameStateRef.current === 'racing') {
          // Physics Update
          player.update(inputsRef.current, trackData, audioEngine);
          karts.forEach((k) => {
            if (k.isAI) k.update({}, trackData, null);
          });

          // Sort Rank by Checkpoint & Lap Progress
          const sorted = [...karts].sort((a, b) => {
            if (a.currentLap !== b.currentLap) return b.currentLap - a.currentLap;
            return b.checkpointIndex - a.checkpointIndex;
          });
          const playerRank = sorted.findIndex((k) => k.id === player.id) + 1;
          player.rank = playerRank;
          setRank(playerRank);

          // Update HUD
          setSpeed(Math.round(Math.abs(player.speed) * 12));
          setCurrentLap(Math.min(player.currentLap, 3));

          // Check Finish Condition
          if (player.finished && gameStateRef.current === 'racing') {
            gameStateRef.current = 'finished';
            setGameState('finished');
            setFinalRank(playerRank);
            audioEngine.playVictory();
          }
        }

        // Render Frame
        renderer.render(player, karts, trackData, gameStateRef.current, crtEnabled);
      }

      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      cancelAnimationFrame(animId);
    };
  }, [crtEnabled]);

  // Start Race Handler
  const startRace = () => {
    audioEngine.init();

    // Spawn 1 Player + 3 AI Opponents
    const player = new Kart('player', 'PLAYER', '#FF4500', false, trackData.gridSpawns[0]);
    const ai1 = new Kart('ai1', 'SODI PRO', '#E53935', true, trackData.gridSpawns[1]);
    const ai2 = new Kart('ai2', 'LAMBO E', '#1E88E5', true, trackData.gridSpawns[2]);
    const ai3 = new Kart('ai3', 'ROTAX JR', '#43A047', true, trackData.gridSpawns[3]);

    entitiesRef.current.player = player;
    entitiesRef.current.karts = [player, ai1, ai2, ai3];

    // Countdown Sequence 3, 2, 1, GO!
    setGameState('countdown');
    gameStateRef.current = 'countdown';
    setCountdown(3);
    audioEngine.playBeep(false);

    let current = 3;
    const interval = setInterval(() => {
      current--;
      if (current > 0) {
        setCountdown(current);
        audioEngine.playBeep(false);
      } else if (current === 0) {
        setCountdown('GO!');
        audioEngine.playBeep(true);
        gameStateRef.current = 'racing';
        setGameState('racing');
      } else {
        clearInterval(interval);
      }
    }, 900);
  };

  const toggleMute = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-[#FF4500]/40 bg-[#07070a] shadow-[0_0_60px_rgba(255,69,0,0.2)] select-none"
    >
      {/* Top Telemetry Game Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#0d0d17] border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#FF4500]">
            <Trophy className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wider">KARTOMANIA 2D PRO ARCADE</span>
          </div>
          <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#FF4500]/20 text-[#FF4500] text-[10px]">
            16-BIT SNES PHYSICS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCrtEnabled(!crtEnabled)}
            className={`p-2 rounded-full border text-xs transition-colors flex items-center gap-1 ${
              crtEnabled ? 'border-[#FF4500] text-[#FF4500] bg-[#FF4500]/10' : 'border-white/10 text-gray-400'
            }`}
            title="Toggle Retro CRT Scanlines"
          >
            <Tv className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px]">CRT</span>
          </button>

          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] text-gray-300 hover:text-white transition-colors"
            title="Toggle Engine Sound"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-gray-500" /> : <Volume2 className="w-3.5 h-3.5 text-[#FF4500]" />}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] text-gray-300 hover:text-white transition-colors"
            title="Fullscreen Mode"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Canvas Engine Container */}
      <div className="relative w-full h-[450px] sm:h-[520px] bg-[#122815]">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Live Race Telemetry HUD Overlay */}
        {gameState === 'racing' && (
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 font-mono">
            {/* Speedometer */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 border border-white/10 text-white backdrop-blur-md">
              <Gauge className="w-4 h-4 text-[#FF4500]" />
              <span className="text-xl font-display font-bold">{speed}</span>
              <span className="text-[10px] text-gray-400">KM/H</span>
            </div>

            {/* Lap Counter */}
            <div className="px-3 py-1 rounded-xl bg-black/70 border border-white/10 text-white text-xs backdrop-blur-md">
              LAP: <span className="text-[#FF4500] font-bold">{currentLap}</span> / 3
            </div>

            {/* Position Rank */}
            <div className="px-3 py-1 rounded-xl bg-black/70 border border-white/10 text-white text-xs backdrop-blur-md">
              POS: <span className="text-[#FF4500] font-bold">{rank}</span> / 4
            </div>
          </div>
        )}

        {/* Start Game Overlay Menu */}
        {gameState === 'menu' && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md p-6 text-center space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// 16-BIT PRO RACING ENGINE</span>
              <h3 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
                KARTOMANIA <span className="text-[#FF4500]">2D RACER</span>
              </h3>
              <p className="text-xs sm:text-sm font-mono text-gray-300 max-w-md">
                Race 3 AI opponents around the official Entertainland Mall circuit. Use Spacebar for Super Mario Kart drifts!
              </p>
            </div>

            {/* Controls Cheatsheet */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-left bg-black/60 border border-white/10 p-4 rounded-2xl max-w-sm w-full">
              <div>
                <span className="text-gray-500 text-[10px]">STEERING</span>
                <div className="text-white font-bold">Arrow Keys / WASD</div>
              </div>
              <div>
                <span className="text-gray-500 text-[10px]">DRIFT / BOOST</span>
                <div className="text-[#FF4500] font-bold">SPACEBAR</div>
              </div>
            </div>

            <MagneticButton onClick={startRace} className="py-4 px-10 text-sm">
              START RACE 🏁
            </MagneticButton>
          </div>
        )}

        {/* Countdown Overlay */}
        {gameState === 'countdown' && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
            <motion.div
              key={countdown}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-7xl sm:text-9xl font-display font-black text-[#FF4500] text-glow drop-shadow-2xl"
            >
              {countdown}
            </motion.div>
          </div>
        )}

        {/* Race Finish Victory Podium Overlay */}
        {gameState === 'finished' && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md p-6 text-center space-y-6">
            <div className="p-4 rounded-full bg-[#FF4500]/20 border border-[#FF4500] text-[#FF4500] animate-bounce">
              <Trophy className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest">// RACE FINISHED</span>
              <h3 className="text-4xl font-display font-black text-white uppercase">
                YOU FINISHED <span className="text-[#FF4500]">{finalRank === 1 ? '1ST PLACE! 🏆' : `${finalRank}ND PLACE`}</span>
              </h3>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <MagneticButton onClick={startRace} className="py-3.5 px-8 text-xs">
                RESTART RACE
              </MagneticButton>
            </div>
          </div>
        )}

        {/* Mobile Touch Controls Overlay */}
        {gameState === 'racing' && (
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto lg:hidden">
            {/* Left/Right D-Pad */}
            <div className="flex gap-3">
              <button
                onTouchStart={() => (inputsRef.current.left = true)}
                onTouchEnd={() => (inputsRef.current.left = false)}
                onMouseDown={() => (inputsRef.current.left = true)}
                onMouseUp={() => (inputsRef.current.left = false)}
                className="w-14 h-14 rounded-2xl bg-black/70 border border-white/20 text-white font-bold text-xl active:bg-[#FF4500]"
              >
                &larr;
              </button>
              <button
                onTouchStart={() => (inputsRef.current.right = true)}
                onTouchEnd={() => (inputsRef.current.right = false)}
                onMouseDown={() => (inputsRef.current.right = true)}
                onMouseUp={() => (inputsRef.current.right = false)}
                className="w-14 h-14 rounded-2xl bg-black/70 border border-white/20 text-white font-bold text-xl active:bg-[#FF4500]"
              >
                &rarr;
              </button>
            </div>

            {/* Action Buttons: Drift & Gas */}
            <div className="flex gap-3">
              <button
                onTouchStart={() => (inputsRef.current.drift = true)}
                onTouchEnd={() => (inputsRef.current.drift = false)}
                onMouseDown={() => (inputsRef.current.drift = true)}
                onMouseUp={() => (inputsRef.current.drift = false)}
                className="w-14 h-14 rounded-2xl bg-[#FF4500]/40 border border-[#FF4500] text-white font-mono font-bold text-xs active:bg-[#FF4500]"
              >
                DRIFT
              </button>
              <button
                onTouchStart={() => (inputsRef.current.up = true)}
                onTouchEnd={() => (inputsRef.current.up = false)}
                onMouseDown={() => (inputsRef.current.up = true)}
                onMouseUp={() => (inputsRef.current.up = false)}
                className="w-16 h-14 rounded-2xl bg-[#FF4500] text-white font-mono font-bold text-sm shadow-[0_0_15px_#FF4500] active:scale-95"
              >
                GAS
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCanvas;
