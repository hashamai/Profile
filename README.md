# InsiderByHasham

Retro-terminal personal site (profile + projects + blog), built with Astro.

## Run it

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static build → dist/
npm run preview    # serve the built site
```

## Where to edit content

Everything in `[brackets]` is placeholder copy — search for `[` to find it all.

| What | Where |
|---|---|
| Handle, role, links, about, education, now/toolkit, resources, activity | `src/lib/site.ts` |
| Blog posts | `src/content/blog/*.md` (frontmatter: title, date, tags, pinned) |
| Projects | `src/content/projects/*.md` (frontmatter: title, pitch, stack, status, year, role, order, links, screenshots, featured) |
| Headshot | replace `public/headshot-placeholder.svg` |
| Project screenshots | drop 1280×800 images in `public/screenshots/`, reference them in project frontmatter |
| Deployed URL (for OG tags) | `site` in `astro.config.mjs` |
| Newsletter form | `data-subscribe` form in `src/pages/blog/index.astro` — point `action` at your service |

Computed automatically from content (don't hardcode): coverage matrix counts,
blog stats line, project stats line, reading times, PUBLISHED activity events.

## Keyboard

`1` / `2` / `3` switch between Profile / Projects / Blog. `◐ THEME` toggles
dark/light (persisted), `▓ CRT` toggles the scanline overlay (persisted).
