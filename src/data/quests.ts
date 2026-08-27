import { Quest } from '../types';

export const PRIVATE_QUESTS: Quest[] = [
  {
    title: "CRM Backend",
    company: "Private Project",
    date: "2023 — 2024",
    status: "COMPLETED",
    reward: "+Go +PostgreSQL +Redis +Hex Arch",
    desc: "Multi-module CRM API: customer management, payments, order/integration flows. Hexagonal arch, ledger.",
    stack: ["Go", "PostgreSQL", "Redis"]
  },
  {
    title: "WhatsApp Gateway",
    company: "Private Project",
    date: "2023 — 2024",
    status: "COMPLETED",
    reward: "+WhatsApp API +Go +Webhook Engine",
    desc: "Production messaging gateway: planning, integrations, WhatsApp Business API flows, templates, webhooks.",
    stack: ["Go", "WA Business", "Redis"]
  },
  {
    title: "AI Customer Service Agents",
    company: "Private Project",
    date: "2024 — NOW",
    status: "ACTIVE",
    reward: "+MCP +LLM +WhatsApp +RAG",
    desc: "MCP agent + LLMs integrated with WhatsApp Meta API; automates ~80% of routine inquiries. RAG + tool calls.",
    stack: ["Go", "MCP", "LLM", "WhatsApp"]
  },
  {
    title: "OmniSport",
    company: "Sports Platform",
    date: "2023",
    status: "COMPLETED",
    reward: "+Hexagonal +Go +Booking",
    desc: "Sports facility management platform with hexagonal architecture, booking, payments.",
    stack: ["Go", "Hexagonal"]
  },
  {
    title: "Resonance",
    company: "Internal",
    date: "2023",
    status: "PRIVATE",
    reward: "+React +Web App",
    desc: "React web application — internal build, private repo. Full-stack React implementation.",
    stack: ["React"],
    private: true
  },
  {
    title: "Connect Words",
    company: "Indie Game",
    date: "2022",
    status: "PRIVATE",
    reward: "+Game Design +JS",
    desc: "Browser-based word puzzle game built in vanilla JS. Word logic & UI.",
    stack: ["Vanilla JS"],
    private: true
  },
  {
    title: "Tetris 3D",
    company: "Indie Game",
    date: "2022",
    status: "PRIVATE",
    reward: "+3D +Canvas +JS",
    desc: "3D Tetris rendered in the browser. Vanilla JS + 3D projection, game loop.",
    stack: ["Vanilla JS", "WebGL"],
    private: true
  },
  {
    title: "DapurKu Go",
    company: "Personal",
    date: "2024 — NOW",
    status: "IN PROGRESS",
    reward: "+Go +PG +Redis +Pantry Logic",
    desc: "Household pantry, inventory, shopping & price tracking backend; successor to PantryKu. Go, PG, Redis.",
    stack: ["Go", "PostgreSQL", "Redis"]
  },
  {
    title: "Bank Soal",
    company: "Family / EdTech",
    date: "2024 — NOW",
    status: "ACTIVE",
    reward: "+Gemini +KaTeX +Offline First",
    desc: "Family question-bank: phone-photo hardcopy → Gemini Flash → markdown → AI-generated practice questions, offline-first with parent review gate.",
    stack: ["TypeScript", "KaTeX", "Gemini"],
    private: true
  },
  {
    title: "Apothecary App",
    company: "Research",
    date: "2024",
    status: "PRIVATE",
    reward: "+Research +Market +WA",
    desc: "Indonesian apotek & digital-health market research + build plan (8% health-app adoption, Halodoc-led); WhatsApp gateway for pharmacy flows.",
    stack: ["Research", "Go"],
    private: true
  },
  {
    title: "MemoDirector",
    company: "Mnemonic Training",
    date: "2024",
    status: "PRIVATE",
    reward: "+PAO +Memory",
    desc: "PAO (Person-Action-Object) casting & memorization director for mnemonic training.",
    stack: ["TypeScript"],
    private: true
  },
  {
    title: "Agent Memory (Memory Pi)",
    company: "AI Research",
    date: "2024 — NOW",
    status: "PRIVATE",
    reward: "+Embeddings +MCP +Multi-Agent",
    desc: "Persistent memory layer for AI agents; dense embeddings, importance-weighted recall, multi-agent orchestration.",
    stack: ["Python", "MCP", "Embeddings"],
    private: true
  },
  {
    title: "GadaiKu",
    company: "Personal",
    date: "2025 — NEW",
    status: "NEW",
    reward: "+Flutter +Isar +Sharia Logic",
    desc: "Privacy-first, offline-first pawn & gold asset tracker for Indonesia: dual engine (Conventional KCA + Pegadaian Syariah Rahn), gold purity/equity appraisal, auto backup, PIN + biometric lock.",
    stack: ["Flutter", "Isar", "Riverpod"]
  }
];
