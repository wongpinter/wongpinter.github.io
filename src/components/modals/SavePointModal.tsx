import React from 'react';
import { ModalContainer } from './ModalContainer';
import { PROFILE_DATA, SAVE_SLOTS, SOCIAL_LINKS } from '../../data/profile';

interface SavePointModalProps {
  onClose: () => void;
}

export const SavePointModal: React.FC<SavePointModalProps> = ({ onClose }) => {
  return (
    <ModalContainer
      title="SAVE POINT // CONTACT & SOCIALS"
      subtitle="Save slots, direct channels, and coordinates"
      icon="mail"
      onClose={onClose}
      maxWidth="max-w-[900px]"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column: Save Slots */}
        <div className="space-y-4">
          <div className="press text-[8px] text-white/50 tracking-widest">
            ACTIVE SAVE SLOTS
          </div>

          <div className="space-y-3">
            {SAVE_SLOTS.map((slot) => (
              <div
                key={slot.slot}
                className="flex items-center gap-3 bg-black/40 border border-white/15 p-3"
              >
                <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center press text-[8px] text-[#fde047]">
                  {slot.slot.split(' ')[1]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="press text-[9px] text-white truncate">
                    {slot.name}
                  </div>
                  <div className="vt text-[13px] text-white/50">
                    {slot.time} • {slot.loc}
                  </div>
                </div>
                <div className="w-2 h-2 bg-emerald-400 animate-pulse rounded-full" />
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div className="rpg-box-yellow p-4 mt-4">
            <div className="press text-[8px] leading-relaxed text-black">
              "{PROFILE_DATA.quote.text}"
            </div>
            <div className="press text-[6px] mt-2 text-black/70">
              — {PROFILE_DATA.quote.author}
            </div>
          </div>
        </div>

        {/* Right Column: Direct Links & Coordinates */}
        <div className="space-y-4">
          <div className="press text-[8px] text-white/50 tracking-widest">
            DIRECT CHANNELS
          </div>

          <div className="space-y-3">
            <div>
              <div className="press text-[7px] text-white/50 mb-1">WEBSITE</div>
              <a
                href={PROFILE_DATA.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black border-[3px] border-white/30 px-3 py-3 press text-[9px] hover:border-[#fde047] hover:text-[#fde047] transition-colors"
              >
                WONGPINTER.COM
              </a>
            </div>

            <div>
              <div className="press text-[7px] text-white/50 mb-1">GITHUB</div>
              <a
                href={PROFILE_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black border-[3px] border-white/30 px-3 py-3 press text-[9px] hover:border-[#fde047] hover:text-[#fde047] transition-colors truncate"
              >
                GITHUB.COM/WONGPINTER
              </a>
            </div>

            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 block text-center bg-black border-2 border-white/20 px-3 py-2 press text-[7px] hover:bg-white hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex-1 mr-4 h-[4px] bg-white/10">
              <div className="h-full bg-[#fde047] w-[68%]" />
            </div>
            <span className="press text-[7px] text-white/40">
              GO • 12+ YRS • JKT
            </span>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
