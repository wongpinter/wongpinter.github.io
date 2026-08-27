import React from 'react';
import { ModalContainer } from './ModalContainer';
import { QuestStatus } from '../../types';
import { PRIVATE_QUESTS } from '../../data/quests';
import { PixelIcon } from '../common/PixelIcon';

interface QuestLogModalProps {
  onClose: () => void;
}

export function getQuestStatusStyle(status: QuestStatus): string {
  switch (status) {
    case 'COMPLETED':
      return 'border-emerald-400 text-emerald-300 bg-emerald-950/30';
    case 'ACTIVE':
      return 'border-[#fde047] text-[#fde047] bg-[#fde047]/10';
    case 'IN PROGRESS':
      return 'border-sky-300 text-sky-200 bg-sky-950/30';
    case 'NEW':
      return 'border-fuchsia-300 text-fuchsia-200 bg-fuchsia-950/20';
    case 'PRIVATE':
    default:
      return 'border-zinc-500 text-zinc-300 bg-zinc-800/50';
  }
}

export const QuestLogModal: React.FC<QuestLogModalProps> = ({ onClose }) => {
  return (
    <ModalContainer
      title="QUEST LOG (13 INTERNAL & CLIENT BUILDS)"
      subtitle="Production systems, internal tools, and client platforms"
      icon="quest"
      onClose={onClose}
      maxWidth="max-w-[1050px]"
    >
      <div className="space-y-3">
        {PRIVATE_QUESTS.map((quest) => (
          <div
            key={quest.title}
            className="rpg-box p-4 bg-black/40 !shadow-none border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
              <div className="flex items-center gap-3">
                <PixelIcon name="lock" size={15} className="text-amber-300/80 shrink-0" />
                <div>
                  <span className="press text-[9px] md:text-[11px] text-white">
                    {quest.title}
                  </span>
                  <span className="vt text-[13px] text-white/50 ml-2">
                    // {quest.company} ({quest.date})
                  </span>
                </div>
              </div>

              <div
                className={`press text-[7px] px-2 py-1 border self-start sm:self-auto ${getQuestStatusStyle(
                  quest.status
                )}`}
              >
                {quest.status}
              </div>
            </div>

            <p className="vt text-[16px] text-white/80 leading-snug">
              {quest.desc}
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
              <div className="press text-[7px] text-[#fde047]">
                REWARD: {quest.reward}
              </div>

              <div className="flex flex-wrap gap-1">
                {quest.stack.map((s) => (
                  <span
                    key={s}
                    className="press text-[6px] px-1.5 py-0.5 bg-white/10 text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ModalContainer>
  );
};
