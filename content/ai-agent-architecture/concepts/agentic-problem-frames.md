---
title: "Agentic Problem Frames"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agentic Problem Frames

## Definition

An engineering framework adapted from classical software engineering Problem Frames theory, providing structured approaches to designing reliable AI agents. It introduces Agentic Job Descriptions (AJD) and the Act-Verify-Refine (AVR) loop.
<div class="zh-trans">一种改编自经典软件工程问题框架理论的工程框架，提供了设计可靠智能体的结构化方法。它引入了智能体职位描述（AJD）和“行动-验证-优化”（AVR）循环。</div>


## Details

### Three Fatal Risks in Current Agent Development

1. **Unbounded scope** — agents acting beyond their authority
2. **Knowledge gaps** — agents filling ambiguity with hallucinated assumptions
3. **Open-loop execution** — no verification of outcomes
<div class="zh-trans">1. **无界范围** —— 智能体越权操作
2. **知识缺口** —— 智能体通过产生幻觉式的臆测来填补模糊性
3. **开环执行** —— 缺乏对结果的验证</div>


### Agentic Job Description (AJD)

Like a human job description, an AJD defines:
- **Jurisdictional boundaries** — what the agent is allowed to do
- **Operational contexts** — environments and constraints
- **Knowledge anchors** — domain knowledge sources
- **Evaluation criteria** — how to measure success
- **Feedback mechanisms** — how to learn and improve
<div class="zh-trans">正如人类的职位描述一样，AJD 定义了：- **管辖边界** —— 智能体被允许执行的操作 - **运行语境** —— 环境与约束条件 - **知识锚点** —— 领域知识来源 - **评估标准** —— 如何衡量成功 - **反馈机制** —— 如何学习与改进</div>


### Act-Verify-Refine (AVR) Loop

1. **Act** — execute according to dynamically generated specification
2. **Verify** — check outcome through callbacks and user confirmations
3. **Refine** — update knowledge for next iteration
<div class="zh-trans">1. **执行** — 根据动态生成的规格说明执行
2. **验证** — 通过回调和用户确认检查结果
3. **优化** — 更新知识以用于下一次迭代</div>


This shifts from static one-shot specification to **progressive convergence**.
<div class="zh-trans">这从静态的一次性规范转向了**渐进式收敛**。</div>


### Key Insight

> The framework treats the agent as a black box and instead structures its interactions with the environment.
<div class="zh-trans">该框架将智能体视为黑盒，转而对其与环境的交互进行结构化。</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- Mentioned in: [[ai-agent-architecture/sources/agentic-problem-frames-paper|APF Paper]]
<div class="zh-trans">- 相关：[[ai-agent-architecture/concepts/harness|Harness]]，[[ai-agent-architecture/concepts/multi-agent-architectures|多智能体架构]] - 提及于：[[ai-agent-architecture/sources/agentic-problem-frames-paper|APF 论文]]</div>

