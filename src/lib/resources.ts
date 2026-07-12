// Resource PDFs live alongside their YAML in src/content/resources/, so Astro's
// asset pipeline serves them (hashed, base-path-correct) instead of us hand-
// managing files in public/.
//
// Keystatic writes uploads to <directory>/<entry-slug>/<filename>, so the folder
// layout is not stable. We therefore resolve by FILENAME, recursively — a
// resource's `file:` value only has to name the PDF, not locate it.

const pdfs = import.meta.glob<string>("../content/resources/**/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

const byName = new Map<string, string>();
for (const [path, url] of Object.entries(pdfs)) {
  const name = path.split("/").pop();
  if (name) byName.set(name, url);
}

/** Resolve a resource's `file` value (a filename, or any path ending in one). */
export function pdfUrl(file?: string | null): string | undefined {
  if (!file) return undefined;
  const name = file.split("/").pop();
  return name ? byName.get(name) : undefined;
}
