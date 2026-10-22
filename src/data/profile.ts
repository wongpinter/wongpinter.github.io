import { SaveSlot, SocialLink } from '../types';

export const PROFILE_DATA = {
  name: "SUGENG SUPRIYADI",
  handle: "wongpinter",
  role: "Senior Backend Engineer",
  location: "Jakarta, Indonesia",
  experienceYears: "12+ yrs",
  mainWeapon: "Go",
  secondaryWeapons: ["Python", "TypeScript", "Kotlin", "PHP", "Dart"],
  focusAreas: ["CDC", "message brokers", "API gateways", "AI agents", "WhatsApp Business API", "Android / Compose"],
  currentlyHackingOn: ["Ketawa Reader (Compose)", "MemoDirector (PAO trainer)", "GDM (Go download manager)"],
  typewriterBio: "Senior Backend Engineer from Jakarta. 12+ years shipping reliable systems. Main weapon: Go. Secondary: Python, TypeScript, Kotlin, PHP, Dart. Focus: CDC, message brokers, API gateways, AI agents, WhatsApp Business API. Currently hacking on Ketawa Reader (Compose), MemoDirector, and GDM.",
  summary: "I build systems that move data reliably — API gateways, real-time pipelines, change-data-capture, message brokers, CLI tools, and AI agents. Go is my daily driver, and I ship production code in Python, TypeScript, Kotlin, and PHP.",
  quote: {
    text: "The best code is the code never written. The second best ships Friday.",
    author: "SUGENG SUPRIYADI • JAKARTA"
  },
  links: {
    website: "https://wongpinter.com",
    github: "https://github.com/wongpinter",
    githubLabel: "wongpinter (Sugeng. S) · GitHub"
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/sugengs/" },
  { label: "TWITTER @the_wongpinter", href: "https://twitter.com/the_wongpinter" }
];

export const SAVE_SLOTS: SaveSlot[] = [
  { slot: "SLOT 01", name: "MCP AGENTS", time: "2024 - NOW", loc: "Go + WhatsApp" },
  { slot: "SLOT 02", name: "WALSTREAM", time: "LEGENDARY", loc: "Go + PG" },
  { slot: "SLOT 03", name: "KOMIYOMI + KETAWA", time: "RELEASED", loc: "Android + Compose" }
];
