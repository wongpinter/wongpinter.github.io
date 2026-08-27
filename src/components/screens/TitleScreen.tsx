import React from 'react';
import { PROFILE_DATA } from '../../data/profile';

interface TitleScreenProps {
  onStart: () => void;
  isStarting: boolean;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart, isStarting }) => {
  return (
    <div
      className={`relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden ${
        isStarting ? 'opacity-0 scale-[1.02] transition-all duration-500' : 'opacity-100'
      }`}
      style={{ maxWidth: '100vw' }}
    >
      {/* Full-bleed Skyline Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/avatar.webp"
          alt="Jakarta night skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-[#0a1028]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1028]/40 via-transparent to-[#060a18]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, #060a18 85%)'
        }}
      />

      {/* Main Title Center Content */}
      <div className="relative z-10 w-full max-w-[900px] px-6 py-12 flex flex-col items-center text-center overflow-hidden">
        {/* Top Header Badge */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[4px] w-8 md:w-12 bg-white/60 shrink-0" />
          <span className="vt text-[13px] md:text-[14px] tracking-wider md:tracking-[0.3em] text-white/70 whitespace-nowrap">
            © 2025 WONGPINTER • LVL 12+ YRS
          </span>
          <div className="h-[4px] w-8 md:w-12 bg-white/60 shrink-0" />
        </div>

        {/* Giant 3D Pixel Arcade Typography */}
        <h1 className="press leading-[0.9] tracking-[-0.02em]">
          <span className="block text-[13vw] md:text-[88px] text-white drop-shadow-[6px_6px_0_#000]">
            SUGENG
          </span>
          <span className="block text-[11vw] md:text-[72px] text-[#fde047] drop-shadow-[6px_6px_0_#000] mt-1 md:mt-2">
            SUPRIYADI
          </span>
        </h1>

        {/* Subtitle Card */}
        <div className="mt-6 rpg-box px-4 md:px-8 py-3 max-w-full">
          <p className="vt text-[18px] md:text-[22px] tracking-widest text-white/90">
            SR BACKEND ENG • 12+ YRS • GO MAIN • JAKARTA, ID{' '}
            <span className="inline-block w-2 h-2 bg-emerald-400 ml-2 align-middle animate-pulse" />
          </p>
        </div>

        {/* Monospace Bio Summary */}
        <div className="mt-5 max-w-[720px] vt text-[17px] md:text-[19px] leading-[1.3] text-white/70 px-2">
          {PROFILE_DATA.summary}
        </div>

        {/* Arcade PRESS START Button */}
        <button
          onClick={onStart}
          disabled={isStarting}
          className="group mt-12 md:mt-16 press text-[12px] md:text-[14px] px-10 py-5 bg-[#111a33] text-white border-[4px] border-white shadow-[0_0_0_4px_#000,0_8px_0_#000] hover:translate-y-[2px] hover:shadow-[0_0_0_4px_#000,0_6px_0_#000] active:translate-y-[6px] active:shadow-[0_0_0_4px_#000,0_0px_0_#000] transition-all cursor-pointer"
        >
          <span className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white inline-block animate-[blink_0.8s_steps(1)_infinite]" />
            PRESS START
            <span className="w-2 h-2 bg-white inline-block animate-[blink_0.8s_steps(1)_infinite]" />
          </span>
        </button>

        {/* Mode & Link */}
        <div className="mt-8 flex items-center gap-4 vt text-[16px] text-white/50">
          <span>◀ 1 PLAYER ▶</span>
          <span className="hidden md:inline">|</span>
          <a
            href={PROFILE_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline underline decoration-white/30 hover:text-white"
          >
            {PROFILE_DATA.links.githubLabel}
          </a>
        </div>

        {/* Bottom Left Equalizer Animation */}
        <div className="absolute bottom-6 left-6 hidden md:flex items-end gap-[3px] h-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-[4px] bg-white/30"
              style={{
                height: `${4 + Math.sin(i * 0.8) * 4 + 8}px`,
                animation: `float ${0.6 + i * 0.1}s ease-in-out infinite`
              }}
            />
          ))}
          <span className="vt text-[10px] text-white/30 ml-2 tracking-widest">
            ♪ BGM: JKT NIGHTS
          </span>
        </div>

        {/* Bottom Right System Info */}
        <div className="absolute bottom-6 right-6 vt text-[12px] text-white/30 tracking-widest hidden md:flex gap-3 items-center">
          <span>BUILD v2.7.1 // READY</span>
          <a
            href={PROFILE_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-2 py-1 hover:bg-white hover:text-black transition-colors"
          >
            GITHUB: {PROFILE_DATA.handle}
          </a>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060a18] to-transparent" />
    </div>
  );
};
