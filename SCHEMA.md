# Wiki Schema

This document defines the conventions for the LLM Wiki. The LLM must follow these rules when creating or updating wiki content.

## Directory Structure

```
content/
├── index.md              # Master catalog of all pages (always update)
├── log.md                # Append-only operation log (always append)
├── {topic}/
│   ├── overview.md       # Topic overview and synthesis
│   ├── concepts/         # One page per key concept
│   │   └── {concept}.md
│   ├── entities/         # People, products, companies, projects
│   │   └── {entity}.md
│   ├── sources/          # One summary page per source document
│   │   └── {source}.md
│   └── synthesis/        # Cross-cutting analysis, comparisons, insights
│       └── {analysis}.md
└── web-sources/          # Web-fetched supplementary materials (not rendered)
```

## Page Templates

### Overview Page (`{topic}/overview.md`)
```markdown
---
title: "{Topic Name}"
date: {YYYY-MM-DD}
tags: [topic, overview]
sources: {count}
---

# {Topic Name}

## Summary
{2-3 paragraph synthesis of the topic}

## Key Concepts
- [[concepts/{concept}|{Concept Name}]] - one-line description

## Key Entities
- [[entities/{entity}|{Entity Name}]] - one-line description

## Open Questions
- {questions worth investigating}

## Sources
- [[sources/{source}|{Source Title}]]
```

### Concept Page (`concepts/{concept}.md`)
```markdown
---
title: "{Concept Name}"
date: {YYYY-MM-DD}
tags: [concept, {topic}]
---

# {Concept Name}

## Definition
{clear, concise definition}

## Details
{explanation with examples}

## Connections
- Related to: [[concepts/{other}]]
- Mentioned in: [[sources/{source}]]
```

### Source Page (`sources/{source}.md`)
```markdown
---
title: "{Source Title}"
date: {YYYY-MM-DD}
tags: [source, {topic}]
source_type: {article|paper|tweet|pdf|image}
source_path: "{relative path to raw file}"
---

# {Source Title}

## Key Takeaways
- {bullet points}

## Summary
{detailed summary}

## Relevant Concepts
- [[concepts/{concept}]]
```

### Synthesis Page (`synthesis/{analysis}.md`)
```markdown
---
title: "{Analysis Title}"
date: {YYYY-MM-DD}
tags: [synthesis, {topic}]
---

# {Analysis Title}

## Analysis
{cross-cutting analysis, comparison, or insight}

## Supporting Evidence
- From [[sources/{source1}]]: {evidence}
- From [[sources/{source2}]]: {evidence}
```

## Rules

1. **index.md** must be updated on every operation - add/update page entries
2. **log.md** must be appended on every operation - use format `## [YYYY-MM-DD] {action} | {description}`
3. All pages must have YAML frontmatter with at least `title`, `date`, and `tags`
4. Use Obsidian-style wikilinks `[[page|display text]]` for cross-references
5. Source pages must link back to the raw file path
6. When new data contradicts existing pages, update the existing page and note the contradiction
7. Never delete existing content without explicit user approval; mark as outdated instead
8. Keep summaries concise - prefer bullet points over long paragraphs
9. Tag pages consistently: every page should have the topic tag
10. Images referenced in wiki pages should use relative paths
