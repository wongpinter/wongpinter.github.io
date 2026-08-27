import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { PixelIcon } from '../common/PixelIcon';

interface PlayerCardProps {
  isRainbowMode: boolean;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ isRainbowMode }) => {
  return (
    <div className="w-full md:w-[340px] md:shrink-0 flex flex-col items-center gap-4">
      {/* Main Player Card Frame */}
      <div className="w-full rpg-box player-card-shadow p-4 md:p-5 bg-[#0f1a33] relative">
        {/* Header: Player Status & Dots */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="h-[3px] w-6 bg-[#fde047]/60" />
            <div className="press text-[9px] tracking-[0.2em] text-white/60 text-center">
              PLAYER STATUS
            </div>
            <div className="h-[3px] w-6 bg-[#fde047]/60" />
          </div>
          <div className="flex gap-1 justify-center">
            <div className="w-2 h-2 bg-emerald-400" />
            <div className="w-2 h-2 bg-amber-300" />
            <div className="w-2 h-2 bg-rose-400" />
          </div>
        </div>

        {/* Chibi Pixel Avatar in Glowing Frame */}
        <div className="relative w-full flex flex-col items-center mb-4">
          {/* Ambient Glow Halos */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full blur-[28px] opacity-70 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(253,224,71,0.35) 0%, rgba(125,211,252,0.25) 35%, rgba(168,85,247,0.18) 70%, transparent 80%)'
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] blur-[40px] opacity-40 pointer-events-none bg-[#fde047]/20 rounded-full" />

          {/* Bordered Avatar Container with Corner Pixels */}
          <div className="relative bg-[#0a1228]/70 border-[4px] border-white shadow-[0_0_0_4px_#020617,0_0_0_8px_rgba(255,255,255,0.8),0_0_24px_rgba(253,224,71,0.35),0_0_48px_rgba(125,211,252,0.20)] p-3 backdrop-blur-[1px]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10" />

            <div className="w-[190px] h-[190px] md:w-[200px] md:h-[200px] flex items-center justify-center overflow-hidden bg-transparent">
              <img
                src="/github-badge.webp"
                alt="wongpinter (Sugeng. S) · GitHub pixel avatar"
                className="w-full h-full object-contain pixelated block"
                style={{
                  imageRendering: 'pixelated',
                  filter:
                    'drop-shadow(0 2px 0 rgba(0,0,0,0.8)) drop-shadow(0 0 8px rgba(253,224,71,0.25))'
                }}
                draggable={false}
              />
            </div>

            {/* 4 Corner Pixel Badges */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#fde047] border border-black" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-black" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-black" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#7dd3fc] border border-black" />
          </div>

          {/* Player Badge */}
          <div className="mt-3 press text-[7px] bg-black/90 px-3 py-1 border-[2px] border-white/30 whitespace-nowrap shadow-[2px_2px_0_#000] tracking-widest text-white/90">
            ID: WONGPINTER • LVL 12+ YRS • {'</>'} 01 {'{}'}
          </div>
          <div className="mt-2 flex items-center gap-2 vt text-[11px] text-white/30">
            <span className="w-1 h-1 bg-emerald-400 animate-pulse" />
            <span>PIXEL YOU • NAVY SHIRT • BLACK GLASSES • BEARD</span>
            <span className="w-1 h-1 bg-[#fde047] animate-pulse" />
          </div>
        </div>

        {/* Bio Details */}
        <div className="space-y-3 vt text-center">
          <div className="flex flex-col items-center text-center">
            <div className="press text-[12px] text-[#fde047] tracking-widest text-center">
              {PROFILE_DATA.name}
            </div>
            <div className="text-[18px] leading-none text-white/80 mt-2 text-center">
              Class: {PROFILE_DATA.role.toUpperCase()}
            </div>
            <div className="text-[16px] text-white/50 mt-1 text-center flex items-center justify-center gap-1">
              <PixelIcon name="pin" size={14} className="text-rose-400" />
              <span>{PROFILE_DATA.location} • UTC+7</span>
            </div>
            <a
              href={PROFILE_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 press text-[7px] px-3 py-1 border border-white/20 bg-black/40 hover:bg-white hover:text-black transition-colors"
            >
              {PROFILE_DATA.links.githubLabel}
            </a>
          </div>

          <div className="h-[2px] bg-white/10 my-4 w-full" />

          {/* Gauge Meters */}
          <div className="space-y-3 text-left w-full max-w-[320px] mx-auto">
            <div className="w-full">
              <div className="flex justify-between press text-[8px] mb-1">
                <span>HP / RELIABILITY</span>
                <span>999/999</span>
              </div>
              <div className="h-[12px] bg-black border-[2px] border-white/30 p-[2px] flex w-full">
                <div className="h-full bg-gradient-to-r from-rose-500 to-red-400 w-[92%]" />
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between press text-[8px] mb-1">
                <span>MP / GO POWER</span>
                <span>950/999</span>
              </div>
              <div className="h-[12px] bg-black border-[2px] border-white/30 p-[2px] flex w-full">
                <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 w-[95%]" />
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between press text-[8px] mb-1">
                <span>EXP</span>
                <span>LVL 12+ YRS</span>
              </div>
              <div className="h-[8px] bg-black border-[2px] border-white/20 p-[1px] w-full">
                <div className="h-full bg-[#fde047] w-[92%]" />
              </div>
            </div>
          </div>

          <div className="h-[2px] bg-white/10 my-4 w-full" />

          {/* Gold & Main Stat Tiles */}
          <div className="grid grid-cols-2 gap-2 press text-[8px] w-full max-w-[320px] mx-auto">
            <div className="bg-black/40 border border-white/15 p-2 flex justify-between items-center">
              <span className="text-white/50">GOLD</span>
              <span className="text-amber-300">12+ YR</span>
            </div>
            <div className="bg-black/40 border border-white/15 p-2 flex justify-between items-center">
              <span className="text-white/50">MAIN</span>
              <span className="text-sky-300">GO 95</span>
            </div>
          </div>

          {/* Equipped Weapon Slots */}
          <div className="mt-4 flex gap-2 justify-center w-full max-w-[320px] mx-auto">
            <div className="w-8 h-8 bg-white/5 border-2 border-white/20 flex items-center justify-center text-amber-300">
              <PixelIcon name="swords" size={16} />
            </div>
            <div className="w-8 h-8 bg-white/5 border-2 border-white/20 flex items-center justify-center text-sky-300">
              <PixelIcon name="shield" size={16} />
            </div>
            <div className="w-8 h-8 bg-white/5 border-2 border-white/20 flex items-center justify-center text-fuchsia-300">
              <PixelIcon name="sparkle" size={16} />
            </div>
            <div className="flex-1 border-2 border-dashed border-white/10 flex items-center justify-center press text-[7px] text-white/40">
              EQUIPPED: GO
            </div>
          </div>
        </div>

        {/* Audio Ticker */}
        <div className="mt-5 flex items-center justify-center gap-2 vt text-[12px] text-white/30">
          <span>♪</span>
          <div className="flex gap-[2px] items-end h-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="w-[3px] bg-emerald-400/60"
                style={{ height: 4 + idx * 2 }}
              />
            ))}
          </div>
          <span>LO-FI JKT</span>
        </div>
      </div>

      {/* Sub-cards: Konami & GitHub Info */}
      <div className="w-full flex flex-col gap-3">
        <div className="rpg-box p-3 flex items-center justify-between w-full bg-[#0f1a33]/80">
          <span className="press text-[7px] text-white/40">
            KONAMI: ↑↑↓↓←→←→BA
          </span>
          <span
            className={`w-2 h-2 ${
              isRainbowMode ? 'bg-fuchsia-400 animate-pulse' : 'bg-white/20'
            }`}
          />
        </div>

        <div className="rpg-box p-3 w-full text-center bg-[#0f1a33]/80">
          <div className="press text-[7px] text-white/40 mb-2 tracking-widest">
            GITHUB PROFILE
          </div>
          <a
            href={PROFILE_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block press text-[9px] leading-relaxed hover:text-[#fde047]"
          >
            {PROFILE_DATA.links.githubLabel}
          </a>
          <div className="mt-2 flex gap-2 justify-center">
            <a
              href={PROFILE_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="press text-[7px] px-3 py-1 bg-white text-black border-2 border-black hover:bg-[#fde047] transition-colors"
            >
              [ VISIT ]
            </a>
            <a
              href={PROFILE_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="press text-[7px] px-3 py-1 border border-white/20 text-white/80"
            >
              ★ 12+ YRS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
