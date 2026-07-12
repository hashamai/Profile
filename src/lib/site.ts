// Editable site data. Remaining [bracketed] values are placeholders — replace
// with real content. Computed stats (coverage counts, blog stats, project
// stats) derive from the content collections, not from this file.

export const SITE = {
  title: "InsiderByHasham — Muhammad Hasham.",
  name: "Muhammad Hasham",
  logo: "insidebyhasham",
  tagline:
    "Software engineering student building AI-powered market analysis — writing about AI, tech, and the markets.",
  description:
    "Software Engineering student at FAST-NUCES currently building an AI-powered stock market analysis platform. Experienced in Python, FastAPI, React, C++, SQL, Linux, machine learning, and data structures, with projects spanning full-stack development, operating systems, and intelligent analytics.",
  handle: "@insiderbyhasham",
  role: "SWE Student · AI Engineer",
  location: "Faisalabad, PK · PKT",
  focus: "AI · TECH · MARKETS",
  openTo: "HIRE / COLLABORATE",
  contactBlurb:
    "Open to internships, collaboration, and interesting problems. The inbox is always open — say hello.",
  links: {
    github: "https://github.com/hashamai",
    linkedin: "https://linkedin.com/in/muhammad--hasham",
    x: "#",
    email: "mailto:hashamrashid55@gmail.com",
    rss: "#",
  },
};

// ── Template tweaks ──────────────────────────────────────────────────────
// Toggle the Resources section on the profile page.
export const SHOW_RESOURCES = true;
// Default accent applied on first visit (overridable via the top-bar swatches
// and persisted to localStorage). One of: terracotta | blue | sage | violet.
export const DEFAULT_ACCENT = "terracotta";

// About prose. Any paragraph left as a "[bracketed placeholder]" is skipped at
// render time, so it's safe to leave one here while you draft it.
export const ABOUT_PARAGRAPHS = [
  "Software Engineering student at FAST-NUCES, currently building an AI-powered stock market analysis platform. I work across Python, FastAPI, React, C++, SQL, and Linux, with projects spanning full-stack development, operating systems, and machine learning.",
  "I write Insider to think in public — breaking down AI infrastructure, market structure, and the systems underneath them, with sources cited and no hype.",
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

// Resources list. `kind` renders as a mono label (book / guide / repo / tool).
// Local hrefs are root-relative (wrapped with withBase at render time); external
// hrefs are full URLs and pass through unchanged.
export const RESOURCES = [
  {
    kind: "book",
    title: "Paul Graham — Essays",
    note: "Startups, taste, and writing that ages well.",
    href: "/PaulGraham-Essays.pdf",
  },
  {
    kind: "book",
    title: "AI Engineering — Chip Huyen",
    note: "Building production LLM systems end to end.",
    href: "/ai-engineering-chip-huyen.pdf",
  },
  {
    kind: "guide",
    title: "Machine Learning Yearning — Andrew Ng",
    note: "How to structure ML projects that actually ship.",
    href: "/andrew-ng-machine-learning-yearning.pdf",
  },
  {
    kind: "guide",
    title: "CS229 Notes — Stanford",
    note: "Andrew Ng's classic machine-learning lecture notes.",
    href: "/cs229_andrewNG_Book.pdf",
  },
  {
    kind: "book",
    title: "Fundamentals of Deep Learning",
    note: "The math and intuition behind modern neural nets.",
    href: "/fundamentals-of-deep-learning.pdf",
  },
  {
    kind: "repo",
    title: "Getinvestage — source",
    note: "FastAPI + React stock-analysis platform with RAG.",
    href: "https://github.com/hashamai/Stock-market",
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
