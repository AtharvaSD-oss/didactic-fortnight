import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Gamepad2, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import GameCanvas from './GameCanvas';
import { soundFx } from '../audio/soundEffects';

const GameModal = ({ isOpen, onClose }) => {
  const [isMuted, setIsMuted] = React.useState(false);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col overflow-hidden select-none font-mono"
      >
        {/* Header Bar */}
        <div className="h-16 px-6 bg-[#08080f] border-b border-white/10 flex items-center justify-between z-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#FF4500]/20 text-[#FF4500] border border-[#FF4500]/40">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-lg text-white uppercase tracking-widest">
                KARTOMANIA <span className="text-[#FF4500]">16-BIT PRO RACER</span>
              </span>
              <span className="block text-[9px] text-gray-400 uppercase tracking-widest">
                ARCADE ENGINE // TOP-DOWN PRO CIRCUIT
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4500] text-xs text-gray-300 flex items-center gap-2 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-[#FF4500]" />}
              <span>{isMuted ? 'MUTED' : 'SFX ON'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#FF4500] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Game Screen */}
        <div className="flex-1 relative w-full h-full">
          <GameCanvas onClose={onClose} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameModal;
