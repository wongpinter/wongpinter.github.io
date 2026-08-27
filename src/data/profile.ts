import { SaveSlot, SocialLink } from '../types';

export const PROFILE_DATA = {
  name: "SUGENG SUPRIYADI",
  handle: "wongpinter",
  role: "Senior Backend Engineer",
  location: "Jakarta, Indonesia",
  experienceYears: "12+ yrs",
  mainWeapon: "Go",
  secondaryWeapons: ["Python", "TypeScript", "PHP", "Dart", "Kotlin"],
  focusAreas: ["CDC", "message brokers", "API gateways", "AI agents", "WhatsApp Business API"],
  currentlyHackingOn: ["GDM (Go download manager)", "audiobook-organizer"],
  typewriterBio: "Senior Backend Engineer from Jakarta. 12+ years shipping reliable systems. Main weapon: Go. Secondary: Python, TypeScript, PHP, Dart, Kotlin. Focus: CDC, message brokers, API gateways, AI agents, WhatsApp Business API. Currently hacking on GDM (Go download manager) and audiobook-organizer.",
  summary: "I build systems that move data reliably — API gateways, real-time pipelines, change-data-capture, message brokers, CLI tools, and AI agents. Go is my daily driver, and I ship production code in Python, TypeScript, PHP, and Dart.",
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
  { label: "LINKEDIN", href: "https://linkedin.com/in/wongpinter" },
  { label: "TWITTER @the_wongpinter", href: "https://twitter.com/the_wongpinter" }
];

export const SAVE_SLOTS: SaveSlot[] = [
  { slot: "SLOT 01", name: "MCP AGENTS", time: "2024 - NOW", loc: "Go + WhatsApp" },
  { slot: "SLOT 02", name: "WALSTREAM", time: "LEGENDARY", loc: "Go + PG" },
  { slot: "SLOT 03", name: "GDM + GadaiKu", time: "IN PROGRESS", loc: "Go + Flutter" }
];
