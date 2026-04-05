---
title: "Memory Is the Harness: Agent State Management"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260328_memory_is_the_harness.md"
---

# Memory Is the Harness: Agent State Management

## Key Takeaways
- Central thesis: memory architecture IS the harness — it determines what agents can and cannot do
- Four memory types: in-context, external (retrieval), parametric (model weights), procedural (skills)
- Memory scope determines agent capability scope — privilege control through memory design
- Retrieval-Augmented Action (RAA): extend memory pattern to action selection
- Key tension: more memory = more capability but also more attack surface
<div class="zh-trans">- 核心论点：记忆架构即驾驭层——它决定了智能体能做什么和不能做什么
- 四种记忆类型：上下文记忆、外部记忆（检索式）、参数记忆（模型权重）、程序记忆（技能）
- 记忆范围决定智能体能力范围——通过记忆设计进行权限控制
- 检索增强行动（RAA）：将记忆模式扩展至行动选择
- 关键张力：记忆越多 = 能力越强，但攻击面也越大</div>


## Summary
This essay argues that the framing of "harness as sandbox" misses the deeper point: an agent's memory architecture fundamentally determines its capability and, therefore, its danger surface. The harness is not primarily about execution constraints — it's about what the agent knows and can retrieve.
<div class="zh-trans">本文认为，“将框架视为沙箱”的框架 misses 了更深层的要点：智能体的记忆架构从根本上决定了其能力，进而决定了其危险面。框架的核心不在于执行约束，而在于智能体所知及其可检索的内容。</div>


The four-memory taxonomy:
1. **In-context memory**: the current prompt window — ephemeral, high-fidelity, limited capacity
2. **External memory**: vector stores, databases, files — persistent, scalable, requires retrieval
3. **Parametric memory**: knowledge encoded in model weights — static, broad, cannot be updated at runtime
4. **Procedural memory**: skills, tools, and learned action patterns — determines what the agent can do

The privilege control insight: by controlling what an agent can retrieve from external memory, system designers can achieve fine-grained capability scoping without complex sandboxing. An agent that cannot retrieve customer PII from the vector store cannot exfiltrate it, regardless of what the LLM is prompted to do.
<div class="zh-trans">权限控制洞察：通过控制智能体从外部记忆中检索的内容，系统设计者无需复杂的沙箱机制即可实现细粒度的能力范围界定。如果智能体无法从向量存储中检索客户个人身份信息（PII），那么无论大语言模型（LLM）收到何种提示指令，都无法将其窃取。</div>


Retrieval-Augmented Action (RAA) extends the memory-as-harness idea to action selection: just as RAG retrieves relevant documents, RAA retrieves relevant actions/tools from a registry, limiting the agent to a permitted action space defined at system design time rather than enforced at runtime.
<div class="zh-trans">检索增强行动（RAA）将“记忆即约束”的理念延伸至行动选择：正如 RAG 检索相关文档，RAA 从注册表中检索相关的行动/工具，从而将智能体限制在系统设计时定义的许可行动空间内，而非在运行时强制执行。</div>


The attack surface tension: richer memory enables more capable agents but also creates more vectors for memory poisoning, retrieval manipulation, and indirect prompt injection through retrieved content.
<div class="zh-trans">攻击面张力：更丰富的记忆虽然能够赋予智能体更强的能力，但也为记忆投毒、检索操纵以及通过检索内容进行的间接提示词注入创造了更多攻击向量。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/agent-memory|Agent Memory]]
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]
