import React from 'react';
import { MenuId } from '../../types';
import { MENU_ITEMS } from '../../data/menu';
import { PixelIcon } from '../common/PixelIcon';

interface CommandMenuProps {
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
  onOpenModal: (id: MenuId) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  selectedIndex,
  onSelectIndex,
  onOpenModal
}) => {
  return (
    <div className="w-full flex-1 max-w-[560px] mx-auto md:mx-0 flex flex-col">
      <div className="w-full flex flex-col items-center md:items-stretch">
        {/* Main Menu Header */}
        <div className="w-full flex items-center gap-3 mb-6 justify-center md:justify-start">
          <div className="w-3 h-3 bg-[#fde047]" />
          <h2 className="press text-[12px] md:text-[14px] tracking-widest text-white">
            MAIN MENU
          </h2>
          <div className="h-[2px] w-8 bg-white/10" />
          <span className="vt text-[14px] text-white/40">
            {selectedIndex + 1}/{MENU_ITEMS.length}
          </span>
        </div>

        {/* Command Menu Item Cards */}
        <div className="w-full space-y-3">
          {MENU_ITEMS.map((item, index) => {
            const isSelected = selectedIndex === index;

            return (
              <button
                key={item.id}
                onMouseEnter={() => onSelectIndex(index)}
                onClick={() => onOpenModal(item.id)}
                className={`group w-full text-left relative transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'translate-x-1 md:translate-x-2'
                    : 'hover:translate-x-1'
                }`}
              >
                <div
                  className={`${
                    isSelected ? 'rpg-box-yellow' : 'rpg-box'
                  } p-4 md:p-5 flex items-center gap-4`}
                >
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 shrink-0 border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-black text-[#fde047] border-black shadow-[2px_2px_0_#000]'
                        : 'bg-black/40 border-white/20 text-white/80'
                    }`}
                  >
                    <PixelIcon name={item.icon} size={22} />
                  </div>

                  {/* Label & Description */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-3 justify-start">
                      <span
                        className={`press text-[10px] md:text-[12px] tracking-wide ${
                          isSelected ? 'text-black font-bold' : 'text-white'
                        }`}
                      >
                        {item.label}
                      </span>
                      {isSelected && (
                        <span className="hidden md:inline vt text-[12px] text-black/70 animate-pulse font-bold">
                          ◀ SELECTED
                        </span>
                      )}
                    </div>
                    <div
                      className={`vt text-[16px] md:text-[18px] truncate mt-1 ${
                        isSelected ? 'text-black/80 font-medium' : 'text-white/50'
                      }`}
                    >
                      {item.desc}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    className={`press text-[14px] transition-all ${
                      isSelected
                        ? 'opacity-100 translate-x-0 text-black'
                        : 'opacity-0 -translate-x-2 text-white/30 group-hover:opacity-60 group-hover:translate-x-0'
                    }`}
                  >
                    ▶
                  </div>
                </div>

                {/* Left Arrow Marker for selected item */}
                {isSelected && (
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 press text-[14px] text-[#fde047] hidden md:block">
                    ▶
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Tip Box */}
        <div className="mt-8 w-full rpg-box p-3 flex flex-wrap gap-2 items-center justify-center vt text-[13px] text-white/40 text-center bg-[#0f1a33]/60">
          <span className="press text-[7px] bg-white/10 px-2 py-1">TIP</span>
          <span>
            Use ↑↓ or W/S to navigate • ENTER to open • ESC to close • Inventory
            slots open repo modal.
          </span>
        </div>

        {/* 3 Stats Tiles */}
        <div className="mt-6 w-full grid grid-cols-3 gap-3">
          {[
            { k: 'REPOS', v: '50+' },
            { k: 'YEARS', v: '12+' },
            { k: 'MAIN', v: 'GO' }
          ].map((stat) => (
            <div
              key={stat.k}
              className="bg-black/30 border border-white/10 p-3 text-center"
            >
              <div className="press text-[18px] text-white">{stat.v}</div>
              <div className="press text-[7px] text-white/40 mt-1 tracking-widest">
                {stat.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
