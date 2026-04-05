---
title: "Agent Memory"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agent Memory

## Definition

Agent memory is not a plugin to bolt onto an agent — it is a core function of the agent harness itself. Managing context, deciding what survives compaction, loading system instructions, and presenting metadata to the agent are all invisible decisions made by the harness.
<div class="zh-trans">智能体记忆并非附加在智能体上的插件，而是智能体框架本身的一项核心功能。管理上下文、决定在压缩后保留哪些内容、加载系统指令以及向智能体呈现元数据，均为由框架做出的隐性决策。</div>


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
<div class="zh-trans">1. **索引层**（常驻）：`MEMORY.md` — 仅包含指针，约 150 字符/行
2. **主题文件**（按需）：详细知识，仅在相关时获取
3. **转录文本**（从不读取，仅通过 grep 检索）：原始对话历史</div>


Key principles:
- **Memory = index, not storage** — actual knowledge lives outside, fetched on demand
- **Strict write discipline** — write to file, then update index; never dump content into index
- **Staleness is first-class** — if memory ≠ reality, memory is wrong
- **What they don't store is the real insight** — no debug logs, no code structure, no PR history
<div class="zh-trans">核心原则：
- **记忆 = 索引，而非存储** — 实际知识存储在外部，按需检索
- **严格的写入纪律** — 先写入文件，再更新索引；绝不将内容直接堆入索引
- **时效性至关重要** — 若记忆与现实不符，则记忆为错
- **不存储的内容才是真正的洞察** — 无调试日志、无代码结构、无 PR 历史</div>


### Letta Code's Memory Architecture

- Git-backed filesystem for agent memory
- Background memory sub-agents that concurrently manage prompt rewriting
- "Context Constitution" — principles for context management
<div class="zh-trans">- 基于 Git 的智能体记忆文件系统 - 后台记忆子智能体，并发管理提示词重写 - “上下文构建” — 上下文管理原则</div>


### MemGPT Insight

MemGPT was always a stateful agent harness, not a RAG tool. The "memory" emerged from tools the harness exposed for prompt rewriting and external state management.
<div class="zh-trans">MemGPT 始终是一个有状态智能体框架，而非 RAG 工具。其“记忆”源于该框架为提示词重写和外部状态管理所提供的工具。</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/skills|Skills]]
- Mentioned in: [[ai-agent-architecture/sources/memory-is-the-harness|Memory Is the Harness]]
<div class="zh-trans">相关于：[[ai-agent-architecture/concepts/harness|Harness]]，[[ai-agent-architecture/concepts/skills|技能]] - 提及于：[[ai-agent-architecture/sources/memory-is-the-harness|记忆即 Harness]]</div>

