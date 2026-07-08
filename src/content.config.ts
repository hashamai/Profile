import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const TAGS = ["AI", "TECH", "MARKETS", "RESEARCH"] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(TAGS)).min(1),
    pinned: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    pitch: z.string(),
    stack: z.array(z.string()).min(1),
    status: z.enum(["SHIPPED", "WIP", "RESEARCH"]),
    year: z.number(),
    role: z.string(),
    order: z.number(),
    links: z
      .object({
        live: z.string().optional(),
        source: z.string().optional(),
      })
      .default({}),
    screenshots: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
