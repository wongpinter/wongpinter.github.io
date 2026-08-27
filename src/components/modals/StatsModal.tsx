import React from 'react';
import { ModalContainer } from './ModalContainer';
import { SKILLS, STACK_CATEGORIES } from '../../data/stats';
import { PixelIcon } from '../common/PixelIcon';
import { useGitHubMetrics } from '../../hooks/useGitHubMetrics';

interface StatsModalProps {
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ onClose }) => {
  const gh = useGitHubMetrics('wongpinter');

  return (
    <ModalContainer
      title="CHARACTER STATS & SKILL TREE"
      subtitle="Proficiency meters, live GitHub telemetry, and architecture stack"
      icon="star"
      onClose={onClose}
      maxWidth="max-w-[1000px]"
    >
      <div className="space-y-6">
        {/* Live GitHub Telemetry & Profile Analytics */}
        <div className="rpg-box p-4 bg-black/50 border-2 border-white/30">
          {/* Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-none inline-block ${
                  gh.isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="press text-[9px] text-white tracking-widest">
                GITHUB TELEMETRY // @wongpinter
              </span>
            </div>
            <div className="vt text-[13px] text-white/50">
              STATUS: {gh.isLive ? `LIVE SYNC (${gh.lastUpdated})` : 'CACHED ARCHIVE'}
            </div>
          </div>

          {/* 4 Core Metrics Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            <div className="bg-black/60 border border-white/15 p-2 text-center">
              <div className="press text-[16px] text-white">{gh.publicRepos}</div>
              <div className="press text-[7px] text-white/40 mt-1 tracking-widest">
                PUBLIC REPOS
              </div>
            </div>
            <div className="bg-black/60 border border-white/15 p-2 text-center">
              <div className="press text-[16px] text-amber-300">★ {gh.totalStars}</div>
              <div className="press text-[7px] text-white/40 mt-1 tracking-widest">
                TOTAL STARS
              </div>
            </div>
            <div className="bg-black/60 border border-white/15 p-2 text-center">
              <div className="press text-[16px] text-sky-300">{gh.followers}</div>
              <div className="press text-[7px] text-white/40 mt-1 tracking-widest">
                FOLLOWERS
              </div>
            </div>
            <div className="bg-black/60 border border-white/15 p-2 text-center">
              <div className="press text-[16px] text-fuchsia-300">{gh.publicGists}</div>
              <div className="press text-[7px] text-white/40 mt-1 tracking-widest">
                PUBLIC GISTS
              </div>
            </div>
          </div>

          {/* Live Language Usage Distribution Meter */}
          <div className="space-y-2 mb-3">
            <div className="flex justify-between items-center press text-[7px] text-white/60">
              <span>LANGUAGE SPECTRUM BREAKDOWN</span>
              <span>{gh.topLanguages.map((l) => `${l.language} ${l.percentage}%`).join(' • ')}</span>
            </div>

            {/* Segmented Progress Bar */}
            <div className="h-[10px] bg-black border border-white/20 flex overflow-hidden p-[1px] gap-[1px]">
              {gh.topLanguages.map((lang) => (
                <div
                  key={lang.language}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color
                  }}
                  className="h-full transition-all duration-700"
                  title={`${lang.language}: ${lang.percentage}% (${lang.count} repos)`}
                />
              ))}
            </div>

            {/* Language Legend Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {gh.topLanguages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center gap-1.5 vt text-[13px] text-white/80 bg-black/40 px-2 py-0.5 border border-white/10"
                >
                  <span
                    className="w-2 h-2 inline-block"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span>{lang.language}</span>
                  <span className="text-white/40">({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Active Missions */}
          {gh.recentRepos.length > 0 && (
            <div className="border-t border-white/10 pt-2 mt-3">
              <div className="press text-[7px] text-white/40 mb-2 tracking-widest">
                LATEST TELEMETRY ACTIVITY // RECENTLY ACTIVE
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {gh.recentRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/40 border border-white/15 hover:border-[#fde047] transition-colors block group"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="press text-[8px] text-white group-hover:text-[#fde047] truncate">
                        {repo.name}
                      </span>
                      <span className="press text-[7px] text-amber-300 shrink-0">
                        ★ {repo.stars}
                      </span>
                    </div>
                    <div className="vt text-[12px] text-white/50 truncate">
                      {repo.description}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

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
