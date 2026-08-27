import { Project } from '../types';

export const PUBLIC_PROJECTS: Project[] = [
  {
    name: "WALSTREAM",
    rarity: "LEGENDARY",
    type: "CDC Tool",
    icon: "database",
    color: "from-amber-300 to-orange-600",
    tech: ["Go", "PostgreSQL", "RabbitMQ"],
    desc: "Change Data Capture tool that tails PostgreSQL WAL and streams changes to message brokers",
    github: "https://github.com/wongpinter/walstream"
  },
  {
    name: "GDM",
    rarity: "EPIC",
    type: "CLI Tool",
    icon: "download",
    color: "from-violet-400 to-fuchsia-600",
    tech: ["Go", "BitTorrent"],
    desc: "Terminal download manager with segmented HTTP and BitTorrent support",
    github: "https://github.com/wongpinter/gdm"
  },
  {
    name: "GO-WHATSAPP",
    rarity: "EPIC",
    type: "Library",
    icon: "chat",
    color: "from-emerald-300 to-teal-600",
    tech: ["Go", "WhatsApp API"],
    desc: "Type-safe Go library for WhatsApp Business Cloud API — messaging, webhooks, templates, flows",
    github: "https://github.com/wongpinter/go-whatsapp"
  },
  {
    name: "GODOO",
    rarity: "RARE",
    type: "Wrapper",
    icon: "cube",
    color: "from-sky-300 to-blue-600",
    tech: ["Go", "XML-RPC", "Odoo"],
    desc: "Odoo XML-RPC wrapper — adopted by 50+ companies",
    github: "https://github.com/wongpinter/godoo"
  },
  {
    name: "GOSH",
    rarity: "RARE",
    type: "Framework",
    icon: "key",
    color: "from-zinc-300 to-zinc-600",
    tech: ["Go", "SSH"],
    desc: "Configurable SSH server framework: auth, command handling, logging",
    github: "https://github.com/wongpinter/gosh"
  },
  {
    name: "AGENT-PROPERTY-MCP",
    rarity: "LEGENDARY",
    type: "AI / MCP",
    icon: "robot",
    color: "from-amber-200 to-yellow-600",
    tech: ["Go", "MCP", "AI"],
    desc: "Production-ready Model Context Protocol (MCP) server in Go, multiple transports",
    github: "https://github.com/wongpinter/agent-property-mcp"
  },
  {
    name: "WEBNOVEL-SCRAPER",
    rarity: "RARE",
    type: "Scraper",
    icon: "book",
    color: "from-cyan-300 to-cyan-700",
    tech: ["Python", "EPUB"],
    desc: "Web novel downloader → accessible, well-formatted EPUB",
    github: "https://github.com/wongpinter/webnovel-scraper"
  },
  {
    name: "SREGEP-BOT",
    rarity: "EPIC",
    type: "Bot",
    icon: "robot",
    color: "from-indigo-300 to-violet-700",
    tech: ["TypeScript", "Cloudflare Workers", "Telegram"],
    desc: "Serverless Telegram worklog bot with analytics + GitHub/Jira sync",
    github: "https://github.com/wongpinter/sregep-bot"
  },
  {
    name: "YET-ANOTHER-LM-EXTRACTOR",
    rarity: "COMMON",
    type: "Extension",
    icon: "puzzle",
    color: "from-zinc-400 to-zinc-600",
    tech: ["JavaScript", "Chrome"],
    desc: "Chrome extension: NotebookLM flashcards → JSON/CSV/Anki",
    github: "https://github.com/wongpinter/yet-another-lm-extractor"
  },
  {
    name: "INKTRACE",
    rarity: "COMMON",
    type: "Tool",
    icon: "pen",
    color: "from-neutral-300 to-neutral-600",
    tech: ["TypeScript", "PDF"],
    desc: "Handwriting worksheet generator, print-ready PDFs",
    github: "https://github.com/wongpinter/inktrace"
  }
];
