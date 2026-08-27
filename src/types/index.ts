import { IconName } from '../components/common/PixelIcon';

export type MenuId = 'about' | 'inventory' | 'stats' | 'quests' | 'save';

export interface MenuItem {
  id: MenuId;
  icon: IconName | string;
  label: string;
  desc: string;
  color: string;
}

export type ProjectRarity = 'LEGENDARY' | 'EPIC' | 'RARE' | 'COMMON';

export interface Project {
  name: string;
  rarity: ProjectRarity;
  type: string;
  icon: IconName | string;
  color: string;
  tech: string[];
  desc: string;
  github?: string;
}

export type QuestStatus = 'COMPLETED' | 'ACTIVE' | 'IN PROGRESS' | 'NEW' | 'PRIVATE';

export interface Quest {
  title: string;
  company: string;
  date: string;
  status: QuestStatus;
  reward: string;
  desc: string;
  stack: string[];
  private?: boolean;
}

export interface Skill {
  name: string;
  lvl: number;
  color: string;
  sub: string;
}

export interface StackCategory {
  title: string;
  items: string[];
  col: string;
}

export interface SaveSlot {
  slot: string;
  name: string;
  time: string;
  loc: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface GitHubRepoMetric {
  name: string;
  stars: number;
  language: string | null;
  description: string;
  htmlUrl: string;
  pushedAt: string;
}

export interface GitHubMetrics {
  publicRepos: number;
  totalStars: number;
  followers: number;
  publicGists: number;
  topLanguages: { language: string; count: number; percentage: number; color: string }[];
  recentRepos: GitHubRepoMetric[];
  isLive: boolean;
  isLoading: boolean;
  lastUpdated: string;
}
