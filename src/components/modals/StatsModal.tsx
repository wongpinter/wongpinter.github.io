import React from 'react';
import { ModalContainer } from './ModalContainer';
import { SKILLS, STACK_CATEGORIES } from '../../data/stats';
import { PixelIcon } from '../common/PixelIcon';

interface StatsModalProps {
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ onClose }) => {
  return (
    <ModalContainer
      title="CHARACTER STATS & SKILL TREE"
      subtitle="Proficiency meters and complete technology stack"
      icon="star"
      onClose={onClose}
      maxWidth="max-w-[950px]"
    >
      <div className="space-y-6">
        {/* Language Proficiencies */}
        <div>
          <div className="press text-[9px] text-[#fde047] mb-3 flex items-center gap-2">
            <PixelIcon name="swords" size={14} className="text-[#fde047]" />
            <span>CORE WEAPONS & PROFICIENCIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="rpg-box p-3 bg-black/40 !shadow-none space-y-2"
              >
                <div className="flex justify-between items-center press text-[8px]">
                  <span style={{ color: skill.color }}>{skill.name}</span>
                  <span className="text-white/60">LVL {skill.lvl}</span>
                </div>

                <div className="h-[8px] bg-black border border-white/20 overflow-hidden">
                  <div
                    className="h-full transition-all duration-1000"
                    style={{
                      width: `${skill.lvl}%`,
                      backgroundColor: skill.color,
                      animation: 'barGrow 0.8s ease-out'
                    }}
                  />
                </div>

                <div className="vt text-[12px] text-white/50 truncate">
                  {skill.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Tech Matrix */}
        <div>
          <div className="press text-[9px] text-[#7dd3fc] mb-3 flex items-center gap-2">
            <PixelIcon name="cube" size={14} className="text-[#7dd3fc]" />
            <span>TECHNOLOGY INVENTORY & ARCHITECTURE STACK</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {STACK_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="rpg-box p-3 bg-black/30 !shadow-none border-t-[3px]"
                style={{ borderTopColor: cat.col }}
              >
                <div
                  className="press text-[8px] mb-2 font-bold"
                  style={{ color: cat.col }}
                >
                  {cat.title}
                </div>
                <div className="space-y-1">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="vt text-[14px] text-white/80 border-b border-white/5 py-[2px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
