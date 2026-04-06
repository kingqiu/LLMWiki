---
title: "Agent Reflection"
date: 2026-04-06
tags: [concept, ai-agent-architecture]
---

# Agent Reflection

## Definition

Reflection is a metacognitive strategy where an agent evaluates, critiques, and iteratively improves its own outputs. It shifts models from "fire-and-forget" generation to deliberate, System-2-style reasoning through self-assessment loops.

<div class="zh-trans">反思是一种元认知策略，智能体通过自我评估循环，评价、批判并迭代改进自己的输出。它将模型从"一次性生成"转变为深思熟虑的系统2式推理。</div>

## Details

Reflection is not an innate LLM capability but an engineered technique implemented through prompting, fine-tuning, or architectural patterns. Key mechanisms:

**1. Output Reevaluation**
The model feeds its own response back into the prompt with a critique instruction: "Was the previous answer correct? If not, why?"

<div class="zh-trans">输出重新评估：模型将自己的响应反馈到提示中，附带批判指令："之前的答案正确吗？如果不正确，为什么？"</div>

**2. Reflexion Framework**
A structured method where the agent:
- Attempts a task
- Observes the outcome (success/failure)
- Reflects on what went wrong
- Re-attempts with improved strategy

<div class="zh-trans">Reflexion 框架：结构化方法，智能体尝试任务 → 观察结果（成功/失败）→ 反思问题 → 用改进策略重试。</div>

**3. Memory-Enhanced Reflection**
Stores episodic memory of past failures and successes, which the agent queries before generating new outputs to avoid repeating mistakes.

<div class="zh-trans">记忆增强反思：存储过去失败和成功的情节记忆，智能体在生成新输出前查询这些记忆以避免重复错误。</div>

**4. Multi-Agent Reflection**
Uses separate "Generator" and "Reflector" agents in a feedback loop, where the Reflector critiques the Generator's output until quality thresholds are met.

<div class="zh-trans">多智能体反思：使用独立的"生成器"和"反思器"智能体形成反馈循环，反思器批判生成器的输出直到达到质量阈值。</div>

**Trade-offs:**
- **Benefits**: Improved accuracy, logical soundness, bias mitigation
- **Costs**: Significant latency increase (multiple inference passes) and higher token consumption

<div class="zh-trans">权衡：优势包括提高准确性、逻辑严密性、偏见缓解；成本是显著增加延迟（多次推理）和更高的 token 消耗。</div>

## Connections

- Related to: [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]] (reflection enables continuous improvement)
- Related to: [[ai-agent-architecture/concepts/agent-memory|Agent Memory]] (episodic memory stores reflection outcomes)
- Technique used in: [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]] (System 2 thinking)

---

*Sources added by Heal on 2026-04-06:*
- [Iguazio - LLM Agent Reflection](https://iguazio.com) · 2026-04
- [ArXiv - Reflexion Framework](https://arxiv.org) · 2026-04
- [LangChain - Reflection Patterns](https://langchain.com) · 2026-04
