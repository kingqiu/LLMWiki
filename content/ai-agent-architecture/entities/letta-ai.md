---
title: "Letta AI (formerly MemGPT)"
date: 2026-04-05
tags: [entity, ai-agent]
entity_type: company
---

# Letta AI

## Overview
Letta AI (formerly MemGPT) is a company and open-source framework specializing in persistent agent memory architecture. Their core contribution is the MemGPT design: a tiered memory system that gives LLM agents effectively unlimited memory by managing in-context memory and external storage automatically, analogous to how an operating system manages RAM and disk.

## Key Facts
- **Formerly**: MemGPT (academic project from UC Berkeley)
- **Became**: Letta AI (commercialized entity)
- **Core Product**: Persistent agent memory system
- **Open Source**: Yes (active open-source project alongside commercial offering)
- **Key Innovation**: OS-inspired memory paging for LLM agents

## Technical Architecture
Letta implements a tiered memory model:
1. **Core memory** (in-context): high-priority, always-available information about user and agent persona
2. **Archival memory** (external vector store): searchable long-term memory, retrieved on demand
3. **Recall memory** (conversation history): searchable conversation archive

The agent manages its own memory through explicit memory operations: `core_memory_append`, `archival_memory_insert`, `archival_memory_search`. This makes memory management an explicit, auditable part of agent behavior rather than an implicit side effect.

## Significance
Letta's approach solves the "context window amnesia" problem that makes standard agents unreliable for long-running tasks. By making memory explicit and persistent, agents can sustain coherent behavior across sessions spanning days or weeks — a prerequisite for Deep Agent use cases.

## Related Sources
- [[ai-agent-architecture/sources/deep-agents|Deep Agents: Long-Horizon Task Execution]]
- [[ai-agent-architecture/sources/memory-is-the-harness|Memory Is the Harness]]

## Related Concepts
- [[ai-agent-architecture/concepts/agent-memory|Agent Memory]]
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
