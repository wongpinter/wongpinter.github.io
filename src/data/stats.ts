import { Skill, StackCategory } from '../types';

export const SKILLS: Skill[] = [
  { name: "GO", lvl: 95, color: "#00ADD8", sub: "gdm, walstream, godoo, go-whatsapp, gosh, MCP server" },
  { name: "PYTHON", lvl: 88, color: "#facc15", sub: "FastAPI, Django, scrapers, AI tooling" },
  { name: "TYPESCRIPT / JS", lvl: 85, color: "#38bdf8", sub: "React/Next.js, Workers, Chrome extensions" },
  { name: "PHP", lvl: 80, color: "#a78bfa", sub: "Laravel / Lumen" },
  { name: "DART / FLUTTER", lvl: 78, color: "#4ade80", sub: "pantryku, GadaiKu" },
  { name: "KOTLIN", lvl: 70, color: "#fb7185", sub: "ketawa-reader-app" },
  { name: "SHELL / LUA", lvl: 75, color: "#e2e8f0", sub: "tooling & nvim" },
  { name: "RUST", lvl: 45, color: "#f97316", sub: "Learning" }
];

export const STACK_CATEGORIES: StackCategory[] = [
  { title: "BACKEND", items: ["Go", "Python", "PHP", "PostgreSQL", "Redis", "RabbitMQ", "REST", "gRPC", "SOAP"], col: "#00ADD8" },
  { title: "DATA", items: ["WAL/CDC", "Pub/Sub", "BigQuery"], col: "#facc15" },
  { title: "AI", items: ["MCP", "LLM", "WhatsApp Meta API"], col: "#a78bfa" },
  { title: "FRONTEND", items: ["React", "Next.js", "Flutter", "Kotlin"], col: "#38bdf8" },
  { title: "INFRA", items: ["Docker", "Traefik", "Nginx", "GitHub Actions", "Cloudflare Workers", "GCP"], col: "#4ade80" }
];
