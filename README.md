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

## Publishing a new blog post

1. Copy the template and give it a name — the filename becomes the URL
   (`my-post.md` → `/blog/my-post`):

   ```bash
   cp "src/content/blog/_TEMPLATE.md" "src/content/blog/my-post.md"
   ```

2. Fill in the frontmatter. Only three fields are required:

   ```yaml
   ---
   title: "My post title"
   date: 2026-07-12
   tags: [AI]          # any of: AI, TECH, MARKETS, RESEARCH
   ---
   ```

   `pinned` (default `false`) and `description` are optional. If you leave
   `description` out, the home page derives the excerpt from your first sentence.

3. Write the body in normal markdown. That's it — the post appears automatically
   in the **// writing** list, sorted newest first, with its reading time computed
   for you. No index file to update.

Files starting with `_` are ignored, so `_TEMPLATE.md` stays unpublished and you
can park work-in-progress as `_draft-something.md` until it's ready.

### Images in posts

Put the file in `src/content/blog/images/` and use a **relative** path:

```markdown
![Alt text](./images/my-chart.png)
```

Astro then optimises it and rewrites the URL correctly for the deploy subpath.
Works for `.png`, `.jpg`, `.webp`, and `.svg`. Avoid absolute `/images/...` paths —
those skip the pipeline and break under the site's base path.

## Where to edit content

| What | Where |
|---|---|
| Name, tagline, socials, about, education, contact blurb | `src/lib/site.ts` |
| Resources list (books/guides/repos) | `RESOURCES` in `src/lib/site.ts` |
| Show/hide the Resources section | `SHOW_RESOURCES` in `src/lib/site.ts` |
| Default accent colour | `DEFAULT_ACCENT` in `src/lib/site.ts` |
| Blog posts | `src/content/blog/*.md` |
| Projects | `src/content/projects/*.md` |
| Project screenshots | `public/screenshots/`, referenced in project frontmatter |
| Resource PDFs | `public/*.pdf`, referenced by `RESOURCES` href |
| Deploy URL + base path | `astro.config.mjs` |

Post counts, project counts, reading times, and excerpts are computed from
content — don't hardcode them.

### Adding a resource

Drop the PDF in `public/` (**use a filename with no spaces**) and add an entry:

```ts
{ kind: "book", title: "Title", note: "One line.", href: "/my-book.pdf" }
```

`kind` renders as the mono label — `book`, `guide`, `repo`, or `tool`. External
links can use a full `https://` URL.

## Theming

The top bar has a ☾/☀ toggle (light/dark) and four accent swatches (terracotta,
blue, sage, violet). Both persist to `localStorage` and are restored before first
paint. Palettes live at the top of `src/styles/global.css` as CSS variables.

## Deploying

`base` in `astro.config.mjs` **must** match the GitHub repo name exactly, or every
link and asset 404s on GitHub Pages.
