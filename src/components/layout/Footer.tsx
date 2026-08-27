import React from 'react';
import { MenuId } from '../../types';

interface FooterProps {
  screen: 'title' | 'menu';
  activeModal: MenuId | null;
}

export const Footer: React.FC<FooterProps> = ({ screen, activeModal }) => {
  return (
    <footer className="relative z-10 w-full border-t-[3px] border-white/20 bg-[#0a1228]/90 backdrop-blur-[2px] px-4 py-2 flex justify-between items-center press text-[7px] text-white/40">
      <div className="flex items-center gap-2">
        {screen === 'title' ? (
          <span>PRESS [ENTER] OR [SPACE] TO START</span>
        ) : activeModal ? (
          <span>[ESC] TO RETURN • CLICK OUTSIDE TO CLOSE</span>
        ) : (
          <span>[W/S] OR [ARROWS] NAVIGATE • [ENTER] SELECT</span>
        )}
      </div>

      <div className="vt text-[13px] text-white/50">
        JAKARTA • GO / DISTRIBUTED SYSTEMS • 12+ YRS
      </div>
    </footer>
  );
};
