---
title: "Letta AI (formerly MemGPT)"
date: 2026-04-05
tags: [entity, ai-agent]
entity_type: company
---

# Letta AI

## Overview
Letta AI (formerly MemGPT) is a company and open-source framework specializing in persistent agent memory architecture. Their core contribution is the MemGPT design: a tiered memory system that gives LLM agents effectively unlimited memory by managing in-context memory and external storage automatically, analogous to how an operating system manages RAM and disk.
<div class="zh-trans">Letta AI（前身为 MemGPT）是一家专注于持久化智能体记忆架构的公司及开源框架。其核心贡献在于 MemGPT 设计：一种分层记忆系统，通过自动管理上下文记忆与外部存储，赋予 LLM 智能体有效无限的记忆能力，其运作机制类似于操作系统对内存（RAM）和磁盘的管理。</div>


## Key Facts
- **Formerly**: MemGPT (academic project from UC Berkeley)
- **Became**: Letta AI (commercialized entity)
- **Core Product**: Persistent agent memory system
- **Open Source**: Yes (active open-source project alongside commercial offering)
- **Key Innovation**: OS-inspired memory paging for LLM agents
<div class="zh-trans">- **原名**：MemGPT（加州大学伯克利分校的学术项目）- **现名**：Letta AI（商业化实体）- **核心产品**：智能体持久化记忆系统 - **开源**：是（与商业产品并行的活跃开源项目）- **核心创新**：受操作系统启发的 LLM 智能体内存分页技术</div>


## Technical Architecture
Letta implements a tiered memory model:
1. **Core memory** (in-context): high-priority, always-available information about user and agent persona
2. **Archival memory** (external vector store): searchable long-term memory, retrieved on demand
3. **Recall memory** (conversation history): searchable conversation archive
<div class="zh-trans">Letta 实现了一种分层记忆模型：1. **核心记忆**（上下文内）：关于用户和智能体人设的高优先级、始终可用的信息 2. **归档记忆**（外部向量存储）：可搜索的长期记忆，按需检索 3. **回溯记忆**（对话历史）：可搜索的对话归档</div>


The agent manages its own memory through explicit memory operations: `core_memory_append`, `archival_memory_insert`, `archival_memory_search`. This makes memory management an explicit, auditable part of agent behavior rather than an implicit side effect.
<div class="zh-trans">Agent 通过显式内存操作管理自身的内存：`core_memory_append`、`archival_memory_insert` 和 `archival_memory_search`。这使得内存管理成为 Agent 行为中显式且可审计的一部分，而非隐式的副作用。</div>


## Significance
Letta's approach solves the "context window amnesia" problem that makes standard agents unreliable for long-running tasks. By making memory explicit and persistent, agents can sustain coherent behavior across sessions spanning days or weeks — a prerequisite for Deep Agent use cases.
<div class="zh-trans">Letta 的方法解决了“上下文窗口遗忘”问题，该问题导致标准智能体在长期运行的任务中不可靠。通过将记忆显式化和持久化，智能体能够在跨越数天或数周的会话中保持连贯的行为——这是深度智能体（Deep Agent）应用场景的先决条件。</div>


## Related Sources
- [[ai-agent-architecture/sources/deep-agents|Deep Agents: Long-Horizon Task Execution]]
- [[ai-agent-architecture/sources/memory-is-the-harness|Memory Is the Harness]]

## Related Concepts
- [[ai-agent-architecture/concepts/agent-memory|Agent Memory]]
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
