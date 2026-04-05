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

## Summary
This essay argues that the framing of "harness as sandbox" misses the deeper point: an agent's memory architecture fundamentally determines its capability and, therefore, its danger surface. The harness is not primarily about execution constraints — it's about what the agent knows and can retrieve.

The four-memory taxonomy:
1. **In-context memory**: the current prompt window — ephemeral, high-fidelity, limited capacity
2. **External memory**: vector stores, databases, files — persistent, scalable, requires retrieval
3. **Parametric memory**: knowledge encoded in model weights — static, broad, cannot be updated at runtime
4. **Procedural memory**: skills, tools, and learned action patterns — determines what the agent can do

The privilege control insight: by controlling what an agent can retrieve from external memory, system designers can achieve fine-grained capability scoping without complex sandboxing. An agent that cannot retrieve customer PII from the vector store cannot exfiltrate it, regardless of what the LLM is prompted to do.

Retrieval-Augmented Action (RAA) extends the memory-as-harness idea to action selection: just as RAG retrieves relevant documents, RAA retrieves relevant actions/tools from a registry, limiting the agent to a permitted action space defined at system design time rather than enforced at runtime.

The attack surface tension: richer memory enables more capable agents but also creates more vectors for memory poisoning, retrieval manipulation, and indirect prompt injection through retrieved content.

## Relevant Concepts
- [[ai-agent-architecture/concepts/agent-memory|Agent Memory]]
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]
