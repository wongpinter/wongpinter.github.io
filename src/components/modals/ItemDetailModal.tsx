import React from 'react';
import { Project, ProjectRarity } from '../../types';
import { PixelIcon } from '../common/PixelIcon';

interface ItemDetailModalProps {
  project: Project;
  onClose: () => void;
}

export function getRarityBadgeStyle(rarity: ProjectRarity): string {
  switch (rarity) {
    case 'LEGENDARY':
      return 'text-amber-300 border-amber-300 bg-amber-950/40';
    case 'EPIC':
      return 'text-fuchsia-300 border-fuchsia-400 bg-fuchsia-950/30';
    case 'RARE':
      return 'text-sky-300 border-sky-300 bg-sky-950/30';
    case 'COMMON':
    default:
      return 'text-zinc-300 border-zinc-500 bg-zinc-800/40';
  }
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-3">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Item Card Box */}
      <div className="relative w-full max-w-[560px] max-h-[90vh] overflow-auto rpg-box bg-[#0f1a33] animate-[slideUp_0.2s_steps(4)_both] mx-auto z-10">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#0a1228] border-b-[4px] border-white p-3 md:p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black border-2 border-white/20 flex items-center justify-center text-[#fde047]">
              <PixelIcon name={project.icon} size={24} />
            </div>
            <div>
              <div className="press text-[10px] md:text-[12px] text-white">
                {project.name}
              </div>
              <div className="vt text-[13px] text-white/50">
                {project.type} • {project.rarity}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 bg-rose-500 hover:bg-rose-400 border-2 border-white text-black press text-[12px] cursor-pointer flex items-center justify-center shadow-[2px_2px_0_#000]"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <div
            className={`inline-block press text-[7px] px-2 py-1 border mb-3 ${getRarityBadgeStyle(
              project.rarity
            )}`}
          >
            ★ {project.rarity}
          </div>

          <div className="vt text-[19px] leading-[1.35] text-white/90">
            {project.desc}
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="press text-[7px] px-2 py-1 bg-white/10 border border-white/10 text-white/90"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 press text-[10px] py-3 bg-[#fde047] text-black border-[3px] border-black shadow-[4px_4px_0_#000] text-center hover:translate-y-[1px] hover:shadow-[3px_3px_0_#000] transition-all cursor-pointer"
              >
                [ OPEN ON GITHUB ]
              </a>
            ) : (
              <a
                href="https://github.com/wongpinter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 press text-[10px] py-3 bg-white text-black border-[3px] border-black shadow-[4px_4px_0_#000] text-center cursor-pointer"
              >
                [ GITHUB: wongpinter ]
              </a>
            )}
            <button
              onClick={onClose}
              className="press text-[9px] px-4 py-3 border-2 border-white/20 bg-black/30 hover:bg-white/10 text-white cursor-pointer"
            >
              [ CLOSE ]
            </button>
          </div>

          <div className="mt-3 vt text-[12px] text-white/30 text-center">
            Exact repo link • Go-first • wongpinter.com
          </div>
        </div>
      </div>
    </div>
  );
};
