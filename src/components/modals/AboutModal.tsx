import React from 'react';
import { ModalContainer } from './ModalContainer';
import { PROFILE_DATA } from '../../data/profile';
import { useTypewriter } from '../../hooks/useTypewriter';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  const typedBio = useTypewriter(PROFILE_DATA.typewriterBio, true, 16);

  return (
    <ModalContainer
      title="CHARACTER DOSSIER"
      subtitle="Sugeng Supriyadi • Senior Backend Engineer"
      icon="heart"
      onClose={onClose}
      maxWidth="max-w-[850px]"
    >
      <div className="grid md:grid-cols-[1fr_1.8fr] gap-6">
        {/* Left Column: Avatar & Quick Stats */}
        <div className="space-y-4">
          <div className="rpg-box p-3 bg-black/60 !shadow-none flex flex-col items-center text-center">
            <div className="w-[120px] h-[120px] border-2 border-white/40 p-2 bg-black mb-3">
              <img
                src="/avatar.webp"
                alt={PROFILE_DATA.name}
                className="w-full h-full object-contain pixelated"
              />
            </div>
            <div className="press text-[10px] text-[#fde047]">
              {PROFILE_DATA.name}
            </div>
            <div className="vt text-[15px] text-white/60">
              JAKARTA, INDONESIA
            </div>
          </div>

          {/* Core Attr Summary */}
          <div className="rpg-box p-3 bg-black/40 !shadow-none space-y-2 press text-[8px]">
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/40">CLASS:</span>
              <span className="text-emerald-400">BACKEND ARCH</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/40">EXPERIENCE:</span>
              <span className="text-[#fde047]">{PROFILE_DATA.experienceYears}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-1">
              <span className="text-white/40">MAIN WEAPON:</span>
              <span className="text-sky-300">{PROFILE_DATA.mainWeapon}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">ALIGNMENT:</span>
              <span className="text-fuchsia-300">SHIPS FRIDAY</span>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Logs & Details */}
        <div className="space-y-4">
          {/* Typewriter Terminal Box */}
          <div className="bg-black border-2 border-white/20 p-4 min-h-[140px] font-mono">
            <div className="press text-[7px] text-emerald-400 mb-2 flex items-center gap-2">
              <span>●</span>
              <span>TERMINAL_OUTPUT // BIO_STREAM</span>
            </div>
            <div className="vt text-[18px] leading-[1.35] text-white/90">
              {typedBio}
              <span className="inline-block w-2 h-4 bg-[#fde047] ml-1 animate-[blink_0.7s_steps(1)_infinite] align-middle" />
            </div>
          </div>

          {/* Capabilities Matrix */}
          <div className="space-y-3">
            <div>
              <div className="press text-[8px] text-[#fde047] mb-1">
                PRIMARY FOCUS AREAS
              </div>
              <div className="flex flex-wrap gap-1">
                {PROFILE_DATA.focusAreas.map((f) => (
                  <span
                    key={f}
                    className="press text-[7px] px-2 py-1 bg-white/10 border border-white/15 text-white/90"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="press text-[8px] text-[#7dd3fc] mb-1">
                SECONDARY WEAPONS
              </div>
              <div className="flex flex-wrap gap-1">
                {PROFILE_DATA.secondaryWeapons.map((w) => (
                  <span
                    key={w}
                    className="press text-[7px] px-2 py-1 bg-sky-950/40 border border-sky-400/30 text-sky-200"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="press text-[8px] text-[#a78bfa] mb-1">
                CURRENTLY HACKING ON
              </div>
              <div className="flex flex-wrap gap-1">
                {PROFILE_DATA.currentlyHackingOn.map((h) => (
                  <span
                    key={h}
                    className="press text-[7px] px-2 py-1 bg-fuchsia-950/40 border border-fuchsia-400/30 text-fuchsia-200"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
