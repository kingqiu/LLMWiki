---
title: "Agent Memory"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agent Memory

## Definition

Agent memory is not a plugin to bolt onto an agent — it is a core function of the agent harness itself. Managing context, deciding what survives compaction, loading system instructions, and presenting metadata to the agent are all invisible decisions made by the harness.

## Details

### Why Memory ≠ Plugin (Sarah Wooders / Letta AI)

The common request to "plug a memory system into my agent" fundamentally misunderstands what memory is:
- RAG over past sessions can be a plugin, but retrieval is only a small part of memory
- Even then, simple `grep` often beats vector search at moderate scale
- The harness makes many invisible decisions that an external plugin cannot control

### Claude Code's Memory Architecture (3-Layer Design)

1. **Index layer** (always loaded): `MEMORY.md` — just pointers, ~150 chars/line
2. **Topic files** (on-demand): detailed knowledge, fetched when relevant
3. **Transcripts** (never read, only grep'd): raw conversation history

Key principles:
- **Memory = index, not storage** — actual knowledge lives outside, fetched on demand
- **Strict write discipline** — write to file, then update index; never dump content into index
- **Staleness is first-class** — if memory ≠ reality, memory is wrong
- **What they don't store is the real insight** — no debug logs, no code structure, no PR history

### Letta Code's Memory Architecture

- Git-backed filesystem for agent memory
- Background memory sub-agents that concurrently manage prompt rewriting
- "Context Constitution" — principles for context management

### MemGPT Insight

MemGPT was always a stateful agent harness, not a RAG tool. The "memory" emerged from tools the harness exposed for prompt rewriting and external state management.

## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/skills|Skills]]
- Mentioned in: [[ai-agent-architecture/sources/memory-is-the-harness|Memory Is the Harness]]
