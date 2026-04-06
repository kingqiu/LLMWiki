---
title: "RAG (Retrieval-Augmented Generation)"
date: 2026-04-06
tags: [concept, ai-agent-architecture]
---

# RAG (Retrieval-Augmented Generation)

## Definition

RAG is a **read-only retrieval mechanism** that grounds language models in external, static knowledge bases (documents, wikis, manuals) by searching for semantically similar content and injecting it into the prompt context at inference time.

<div class="zh-trans">RAG（检索增强生成）是一种只读检索机制，通过在推理时搜索语义相似的内容并注入到提示上下文中，将语言模型锚定在外部静态知识库（文档、维基、手册）上。</div>

## Details

RAG addresses the knowledge cutoff problem by allowing models to access up-to-date information without retraining. The typical pipeline:

1. **Indexing**: Documents are chunked and embedded into a vector database
2. **Retrieval**: User query is embedded and used to search for similar chunks
3. **Augmentation**: Retrieved chunks are prepended to the prompt
4. **Generation**: Model generates response grounded in retrieved context

<div class="zh-trans">RAG 通过允许模型访问最新信息而无需重新训练来解决知识截止问题。典型流程包括：索引（文档分块并嵌入向量数据库）、检索（查询嵌入后搜索相似块）、增强（检索块前置到提示）、生成（基于检索上下文生成响应）。</div>

**Key characteristics:**
- **Stateless**: Each query is independent; no memory of previous interactions
- **Document-centric**: Optimized for "What does this document say?" questions
- **Similarity-based**: Retrieval relies on semantic similarity, not temporal or relational reasoning

<div class="zh-trans">关键特征：无状态（每次查询独立，无先前交互记忆）、以文档为中心（优化"这个文档说了什么"类问题）、基于相似度（检索依赖语义相似性，而非时间或关系推理）。</div>

**Common pitfall**: Using RAG as a substitute for [[ai-agent-architecture/concepts/agent-memory|Agent Memory]] by dumping conversation logs into a vector database. This causes "agent amnesia" because RAG lacks temporal reasoning and cannot maintain coherent state across sessions.

<div class="zh-trans">常见陷阱：将对话日志倾倒到向量数据库中，试图用 RAG 替代 Agent Memory。这会导致"智能体失忆"，因为 RAG 缺乏时间推理能力，无法跨会话维护连贯状态。</div>

## Connections

- Complements: [[ai-agent-architecture/concepts/agent-memory|Agent Memory]] (RAG for static knowledge, Memory for dynamic context)
- Related to: [[ai-agent-architecture/concepts/harness|Harness]] (RAG is often a tool invoked by the harness)
- Mentioned in: [[ai-agent-architecture/sources/memory-is-the-harness|Memory is the Harness]]

---

*Sources added by Heal on 2026-04-06:*
- [Vectorize.io - RAG vs Memory](https://vectorize.io) · 2026-04
- [Memori Labs - Agent Memory Architecture](https://memorilabs.ai) · 2026-04
- [Mem0.ai - Memory for AI Agents](https://mem0.ai) · 2026-04
