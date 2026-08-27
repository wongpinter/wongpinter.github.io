import React from 'react';
import { ModalContainer } from './ModalContainer';
import { Project } from '../../types';
import { PUBLIC_PROJECTS } from '../../data/projects';
import { getRarityBadgeStyle } from './ItemDetailModal';
import { PixelIcon } from '../common/PixelIcon';

interface InventoryModalProps {
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const InventoryModal: React.FC<InventoryModalProps> = ({
  onClose,
  onSelectProject
}) => {
  return (
    <ModalContainer
      title="PUBLIC INVENTORY (10 ITEMS)"
      subtitle="Open-source tools, frameworks, and packages"
      icon="swords"
      onClose={onClose}
      maxWidth="max-w-[1000px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PUBLIC_PROJECTS.map((proj) => (
          <div
            key={proj.name}
            onClick={() => onSelectProject(proj)}
            className="rpg-box p-4 bg-black/40 hover:bg-[#0f1a33] hover:border-[#fde047] cursor-pointer transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-black border border-white/20 flex items-center justify-center text-white/80 group-hover:text-[#fde047] transition-colors">
                    <PixelIcon name={proj.icon} size={20} />
                  </div>
                  <div>
                    <div className="press text-[9px] md:text-[10px] text-white group-hover:text-[#fde047] transition-colors">
                      {proj.name}
                    </div>
                    <div className="vt text-[13px] text-white/50">
                      {proj.type}
                    </div>
                  </div>
                </div>

                <div
                  className={`press text-[6px] px-2 py-[2px] border ${getRarityBadgeStyle(
                    proj.rarity
                  )}`}
                >
                  {proj.rarity}
                </div>
              </div>

              <p className="vt text-[15px] leading-snug text-white/70 mt-2 line-clamp-2">
                {proj.desc}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {proj.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="press text-[6px] px-1.5 py-0.5 bg-white/10 border border-white/10 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="press text-[7px] text-[#fde047] group-hover:translate-x-1 transition-transform">
                INSPECT ▶
              </span>
            </div>
          </div>
        ))}
      </div>
    </ModalContainer>
  );
};
