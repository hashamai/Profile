---
# ── Required ──────────────────────────────────────────────
title: "Your post title"
date: 2026-07-12
tags: [AI]            # any of: AI, TECH, MARKETS, RESEARCH

# ── Optional ──────────────────────────────────────────────
pinned: false         # true = show a PINNED chip
# description: "One line used for SEO and the excerpt on the home page.
#               If you omit it, the first sentence of the body is used."
---

Open with one strong sentence — this becomes the excerpt on the home page if you
left `description` out above.

## A section heading

Regular prose. **Bold** for emphasis, `inline code`, and [links](https://example.com)
all work.

- Bullet points
- Work fine too

> Pull-quotes render with an accent bar.

## Adding images

Drop the file in `src/content/blog/images/` and reference it with a **relative**
path. Astro then optimises it and fixes the URL for you — this works for
`.png`, `.jpg`, `.webp`, and `.svg`:

![Describe the image for screen readers](./images/your-image.png)

## Tables and code

| Metric | 2025 | 2026 |
| ------ | ---- | ---- |
| Example | 10   | 20   |

```
Code blocks and ASCII charts render in a mono panel.
```
