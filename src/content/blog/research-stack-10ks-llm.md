---
title: "My research stack: reading 10-Ks with an LLM in the loop"
date: 2026-05-22
tags: [RESEARCH]
description: "[One-line summary of the post for SEO/OG — replace me]"
---

[Placeholder post body — replace with your actual workflow write-up.]

## The pipeline

[How filings get from EDGAR to your notes: fetch, chunk, index, query.]

```python
# [Replace with a real snippet from your pipeline]
def load_filing(ticker: str, form: str = "10-K"):
    ...
```

## Where the LLM helps

[Concrete examples: segment reconciliation, footnote diffs year-over-year,
management language drift.]

## Where it lies to you

[The failure modes you've hit and the checks you run before trusting an
extraction. This is the part readers steal.]

## The rule

[Your one-sentence rule for LLM-assisted research — e.g. the model drafts,
the filings decide.]
