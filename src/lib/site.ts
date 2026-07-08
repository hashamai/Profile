// Editable site data. Remaining [bracketed] values are placeholders — replace
// with real content. Computed stats (coverage counts, blog stats, project
// stats) derive from the content collections, not from this file.

export const SITE = {
  title: "InsiderByHasham — Muhammad Hasham.",
  description:
  "Software Engineering student at FAST-NUCES currently building an AI-powered stock market analysis platform. Experienced in Python, FastAPI, React, C++, SQL, Linux, machine learning, and data structures, with projects spanning full-stack development, operating systems, and intelligent analytics.",
  handle: "@insiderbyhasham",
  role: "SWE Student · AI Engineer",
  location: "Faisalabad, PK · PKT",
  focus: "AI · TECH · MARKETS",
  openTo: "HIRE / COLLABORATE",
  links: {
    github: "https://github.com/hashamai",
    linkedin: "https://linkedin.com/in/muhammad--hasham",
    x: "#",
    email: "mailto:hashamrashid55@gmail.com",
  },
};

export const ABOUT_PARAGRAPHS = [
  "Software Engineering student at FAST-NUCES currently building an AI-powered stock market analysis platform. Experienced in Python, FastAPI, React, C++, SQL, Linux, machine learning, and data structures, with projects spanning full-stack development, operating systems, and intelligent analytics.",
  "[Why you started Insider — your edge and what readers get]",
];

export const EDUCATION = [
  {
    degree: "B.S. Software Engineering",
    institution: "FAST-NUCES",
    years: "2024–Present",
    result: "CGPA 3.20 · S4 SGPA 3.67",
  },
  {
    degree: "A-Level",
    institution: "First Steps School of Arts and Sciences",
    years: "2022–2024",
    result: "3 As, 1 B",
  },
  {
    degree: "O-Level",
    institution: "Divisional Model College",
    years: "2019–2021",
    result: "6 A*, 3 A · Provincial Distinction",
  },
];

export const CERTS = "[certifications, courses]";

export const COVERAGE_SCOPE: Record<string, string> = {
  AI: "models, agents, and the capex funding them",
  TECH: "product teardowns and platform shifts",
  MARKETS: "earnings reads, positioning, narrative vs. numbers",
  RESEARCH: "deep dives with receipts — sources cited",
};

export const NOW_LOG = [
  { key: "▸ BUILDING", value: "Getinvestage — AI-powered stock market analysis platform" },
  { key: "▸ READING", value: "[book, paper, or 10-K on your desk]" },
  { key: "▸ TRACKING", value: "[trend or ticker you're watching]" },
];

export const TOOLKIT = [
  { tool: "Python", bar: "█████████░░░░", freq: "daily" },
  { tool: "FastAPI", bar: "████████░░░░", freq: "daily" },
  { tool: "ML", bar: "██████░░░░", freq: "daily" },
];

export const RESOURCES = [
  {
    name: "Paul-Graham Essays",
    type: "BOOK",
    why: "[why you recommend it — one tight line]",
    href: "#",
  },
  {
    name: "AI engineering",
    type: "BOOK",
    why: "[why you recommend it — one tight line]",
    href: "#",
  },
  {
    name: "[resource name]",
    type: "DATASET",
    why: "[why you recommend it — one tight line]",
    href: "#",
  },
  {
    name: "[resource name]",
    type: "BOOK",
    why: "[why you recommend it — one tight line]",
    href: "#",
  },
];

// Manual activity events (PUSHED / SHIPPED). PUBLISHED events are generated
// from the newest blog posts and merged with these, sorted by timestamp.
export const MANUAL_ACTIVITY = [
  {
    ts: "2026-06-27 22:15",
    verb: "PUSHED",
    text: "commits to",
    linkText: "Stock-market",
    href: "https://github.com/hashamai/Stock-market",
  },
  {
    ts: "2026-06-02 17:30",
    verb: "SHIPPED",
    text: "",
    linkText: "Getinvestage v1.0",
    href: "/projects/getinvestage",
  },
];

export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function fmtDate(d: Date): string {
  const p2 = (x: number) => String(x).padStart(2, "0");
  return `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
}

// Prefix internal (root-relative) links and asset paths with the configured
// base path so they resolve when the site is served from a subpath (GitHub
// Pages project site at /Project_page/). External URLs, anchors (#), and
// mailto: are returned unchanged, so it's safe to wrap any href.
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + path;
}
