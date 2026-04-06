---
title: "Agent Planning"
date: 2026-04-06
tags: [concept, ai-agent-architecture]
---

# Agent Planning

## Definition

Agent planning is the capability of an LLM agent to decompose complex goals into executable sub-tasks, reason about dependencies and sequencing, and dynamically adjust strategies based on intermediate outcomes.

<div class="zh-trans">智能体规划是 LLM 智能体将复杂目标分解为可执行子任务、推理依赖关系和顺序、并根据中间结果动态调整策略的能力。</div>

## Details

Planning transforms agents from reactive responders into proactive problem-solvers. It involves three core capabilities:

**1. Task Decomposition**
Breaking down high-level goals into smaller, manageable steps. Example: "Book a flight to Paris" → [Search flights, Compare prices, Select seat, Enter payment, Confirm booking]

<div class="zh-trans">任务分解：将高层目标分解为更小、可管理的步骤。例如："预订去巴黎的航班" → [搜索航班、比较价格、选择座位、输入付款、确认预订]。</div>

**2. Dependency Reasoning**
Understanding which sub-tasks must complete before others can begin. Some tasks can run in parallel; others have strict ordering constraints.

<div class="zh-trans">依赖推理：理解哪些子任务必须在其他任务开始前完成。有些任务可以并行运行；其他任务有严格的顺序约束。</div>

**3. Dynamic Replanning**
Adjusting the plan when sub-tasks fail or new information emerges. Requires [[ai-agent-architecture/concepts/reflection|Reflection]] to assess what went wrong and generate alternative strategies.

<div class="zh-trans">动态重新规划：当子任务失败或出现新信息时调整计划。需要反思来评估出了什么问题并生成替代策略。</div>

### Planning Methodologies

**Hierarchical Decomposition**
Top-down approach where each goal is recursively broken into sub-goals until reaching atomic actions.

<div class="zh-trans">分层分解：自顶向下方法，每个目标递归分解为子目标，直到达到原子操作。</div>

**Reasoning Frameworks**
- **Chain-of-Thought (CoT)**: Step-by-step reasoning before action
- **Tree of Thoughts (ToT)**: Exploring multiple reasoning paths in parallel
- **ReAct (Reason + Act)**: Interleaving reasoning and action execution

<div class="zh-trans">推理框架：思维链（CoT，行动前逐步推理）、思维树（ToT，并行探索多条推理路径）、ReAct（推理+行动，交错推理和行动执行）。</div>

### Evaluation Benchmarks

Current research evaluates planning capabilities using:
- **TaskBench**: Focuses on task decomposition, tool invocation, parameter prediction
- **AgentBench**: Multi-environment evaluation of reasoning and decision-making
- **Planet**: Workflow automation and multi-step execution benchmarks
- **PARTNR**: Planning in embodied multi-agent household scenarios

<div class="zh-trans">评估基准：当前研究使用 TaskBench（关注任务分解、工具调用、参数预测）、AgentBench（多环境推理和决策评估）、Planet（工作流自动化和多步执行基准）、PARTNR（具身多智能体家庭场景规划）。</div>

## Connections

- Related to: [[ai-agent-architecture/concepts/reflection|Reflection]] (replanning requires reflection on failures)
- Related to: [[ai-agent-architecture/concepts/skills|Skills]] (planning determines which skills to invoke and when)
- Related to: [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]] (planning is System 2 thinking)
- Mentioned in: [[ai-agent-architecture/sources/deep-agents|Deep Agents]]

---

*Sources added by Heal on 2026-04-06:*
- [ArXiv - TaskBench](https://arxiv.org) · 2026-04
- [GitHub - Awesome-LLM-Planning](https://github.com) · 2026-04
- [Microsoft - Agent Planning Research](https://microsoft.com) · 2026-04
