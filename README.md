# InsiderByHasham

Minimalist developer profile (about · education · writing · projects · resources ·
contact), built with Astro. Dark terminal aesthetic with a light/dark toggle and a
themeable accent colour.

## Run it

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static build → dist/
npm run preview    # serve the built site
```

## Writing posts — the CMS (no code)

```bash
npm run cms      # then open http://localhost:4321/keystatic
```

This opens **Keystatic**, a visual editor. You get a rich text editor, a tag
picker, a date picker, and drag-and-drop image upload — no markdown or frontmatter
to hand-write. It edits everything:

- **Content** — Blog posts, Projects, Resources (including uploading the PDF)
- **Profile** — Info (name, tagline, socials), About, Education

> ⚠️ The CMS writes and **deletes** real files. Commit before you start editing,
> so anything you remove by accident is recoverable with `git checkout`.

Hit **Save** and it writes the markdown file straight into `src/content/`. Then
publish it:

```bash
git add -A && git commit -m "New post" && git push
```

The push triggers `.github/workflows/deploy.yml`, which rebuilds and deploys —
your post is live in a minute or two. Nothing else to update: the post appears in
the **// writing** list automatically, sorted newest first, with reading time and
excerpt computed for you.

> The CMS runs locally, not on the live site. GitHub Pages serves static files
> only, so there's no server to accept an edit from the deployed page — the editor
> has to run on your machine and commit through git.

Images dropped into the editor are saved to `src/content/blog/images/` and
referenced relatively (`./images/foo.png`), which is what lets Astro optimise them
and fix the URL for the deploy subpath.

### Writing by hand instead

You can still just create `src/content/blog/my-post.md`. Only three fields are
required:

```yaml
---
title: "My post title"
date: 2026-07-12
tags: [AI]          # any of: AI, TECH, MARKETS, RESEARCH
---
```

`pinned` (default `false`) and `description` are optional — omit `description` and
the excerpt is derived from your first sentence. Files starting with `_` are
ignored, so you can park drafts as `_draft-something.md`.

Reference images with a **relative** path (`![Alt](./images/chart.png)`). Avoid
absolute `/images/...` paths — those skip Astro's pipeline and break under the
site's base path.

## Where to edit content

| What | Where |
|---|---|
| Blog posts, Projects, Resources, Info, About, Education | **the CMS** (`npm run cms`) |
| Show/hide the Resources section | `SHOW_RESOURCES` in `src/lib/site.ts` |
| Default accent colour | `DEFAULT_ACCENT` in `src/lib/site.ts` |
| Deploy URL + base path | `astro.config.mjs` |

Underlying files, if you'd rather edit them by hand:

| What | Files |
|---|---|
| Blog posts | `src/content/blog/*.md` |
| Post images | `src/content/blog/images/` |
| Projects | `src/content/projects/*.md` |
| Project screenshots | `public/screenshots/` |
| Resources (YAML **and** PDFs, same folder) | `src/content/resources/` |
| Info / About / Education | `src/content/site/*.json` |

Post counts, project counts, reading times, and excerpts are computed from
content — don't hardcode them.

### Resources

YAML and PDFs live together in `src/content/resources/`. A resource points at
**either** an uploaded PDF (`file`) or an external URL (`url`) — set one, leave the
other blank. `kind` is the mono label: `book`, `guide`, `repo`, or `tool`.

`file` is just a **filename**, not a path:

```yaml
title: CS229 Notes — Stanford
kind: guide
note: Andrew Ng's classic lecture notes.
order: 4
file: cs229_andrewNG_Book.pdf
```

It's resolved by name at build time (`src/lib/resources.ts`), so it keeps working
wherever the CMS files the upload. PDF-backed resources get an on-site reader page
at `/resources/<slug>`; external ones link straight out.

> **Filenames:** avoid spaces (they break URLs on GitHub Pages), and keep
> directories lowercase — the CI build runs on Linux, which is case-sensitive
> even though Windows isn't.

## Theming

The top bar has a ☾/☀ toggle (light/dark) and four accent swatches (terracotta,
blue, sage, violet). Both persist to `localStorage` and are restored before first
paint. Palettes live at the top of `src/styles/global.css` as CSS variables.

## Deploying

`base` in `astro.config.mjs` **must** match the GitHub repo name exactly, or every
link and asset 404s on GitHub Pages.
