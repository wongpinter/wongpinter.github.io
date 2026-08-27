import React from 'react';
import { PixelIcon, IconName } from '../common/PixelIcon';

interface ModalContainerProps {
  title: string;
  subtitle?: string;
  icon?: IconName | string;
  onClose: () => void;
  maxWidth?: string;
  children: React.ReactNode;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  title,
  subtitle,
  icon,
  onClose,
  maxWidth = 'max-w-[900px]',
  children
}) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div
        className={`relative w-full ${maxWidth} max-h-[94dvh] lg:max-h-[86vh] flex flex-col rpg-box bg-[#0a1228] animate-[slideUp_0.25s_steps(4)_both] mx-auto z-10`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-[#060a18] border-b-[4px] border-white p-3 md:p-4 shrink-0">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black border-2 border-white/20 flex items-center justify-center text-[#fde047]">
                <PixelIcon name={icon} size={20} />
              </div>
            )}
            <div>
              <div className="press text-[11px] md:text-[14px] text-[#fde047]">
                {title}
              </div>
              {subtitle && (
                <div className="vt text-[13px] md:text-[15px] text-white/50">
                  {subtitle}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 bg-rose-500 hover:bg-rose-400 border-2 border-white text-black press text-[12px] flex items-center justify-center cursor-pointer transition-colors shadow-[2px_2px_0_#000] active:translate-y-[1px]"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1">
          {children}
        </div>

        {/* Modal Sticky Footer */}
        <div className="bg-[#060a18] border-t-[3px] border-white/20 p-2 px-4 flex justify-between items-center press text-[7px] text-white/40 shrink-0">
          <span>[ESC] TO CLOSE • CLICK OUTSIDE TOO</span>
          <span>▶ {title.toUpperCase()} // READY</span>
        </div>
      </div>
    </div>
  );
};
