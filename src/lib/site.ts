// Site data. The editable content (profile info, about, education) now lives in
// src/content/site/*.json so it can be edited in the CMS (`npm run cms`).
// This file just adapts those JSON files into the shapes the pages already use,
// and holds the few build-time switches that aren't content.

import profile from "../content/site/profile.json";
import about from "../content/site/about.json";
import education from "../content/site/education.json";

export const SITE = {
  title: `InsiderByHasham — ${profile.name}`,
  name: profile.name,
  logo: profile.logo,
  tagline: profile.tagline,
  description: profile.description,
  contactBlurb: profile.contactBlurb,
  links: {
    github: profile.github,
    linkedin: profile.linkedin,
    x: profile.x,
    email: profile.email,
    rss: profile.rss,
  },
};

// About prose. Any paragraph left as a "[bracketed placeholder]" is skipped at
// render time, so it's safe to leave one while you draft it.
export const ABOUT_PARAGRAPHS: string[] = about.paragraphs;

export const EDUCATION = education.entries;
export const CERTS = education.certs;

// ── Template tweaks ──────────────────────────────────────────────────────
// Toggle the Resources section on the profile page.
export const SHOW_RESOURCES = true;
// Default accent applied on first visit (overridable via the top-bar swatches
// and persisted to localStorage). One of: terracotta | blue | sage | violet.
export const DEFAULT_ACCENT = "terracotta";

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
// Pages project site). External URLs, anchors (#), and mailto: are returned
// unchanged, so it's safe to wrap any href.
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + path;
}
