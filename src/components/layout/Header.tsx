import React from 'react';
import { PixelIcon } from '../common/PixelIcon';

interface HeaderProps {
  isRainbowMode: boolean;
  onToggleRainbow: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isRainbowMode, onToggleRainbow }) => {
  return (
    <header className="relative z-10 w-full border-b-[3px] border-white/20 bg-[#0a1228]/90 backdrop-blur-[2px] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/wongpinter"
          target="_blank"
          rel="noopener noreferrer"
          className="press text-[9px] text-[#fde047] hover:underline flex items-center gap-2"
        >
          <PixelIcon name="star" size={12} className="text-[#fde047]" />
          <span>wongpinter</span>
        </a>
        <span className="hidden md:inline press text-[7px] text-white/40">|</span>
        <span className="hidden md:inline vt text-[14px] text-emerald-400">
          ● JKT • ONLINE
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleRainbow}
          className={`press text-[7px] px-2 py-1 border transition-colors ${
            isRainbowMode
              ? 'bg-[#fde047] text-black border-black shadow-[2px_2px_0_#000]'
              : 'bg-white/10 text-white/70 border-white/20 hover:text-white'
          }`}
          title="Toggle Rainbow Mode (or enter Konami Code)"
        >
          {isRainbowMode ? '★ RAINBOW ON' : '🎮 KONAMI'}
        </button>

        <div className="press text-[8px] bg-black/40 border border-white/20 px-2 py-1 text-white/80">
          LVL 12 • SR. ENG
        </div>
      </div>
    </header>
  );
};
