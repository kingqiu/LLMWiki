---
title: "Cognitive Depth Adaptation"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Cognitive Depth Adaptation

## Definition

A technique that dynamically allocates different levels of reasoning depth to each step of a multi-step agent task, rather than applying uniform thinking depth everywhere. Inspired by ACT-R cognitive architecture from psychology.
<div class="zh-trans">一种在多步智能体任务的每个步骤中动态分配不同推理深度层级的技术，而非在各处应用均匀的思维深度。受心理学中的 ACT-R 认知架构启发。</div>


## Details

### The Problem: Cognitive Rigidity

- **Non-thinking models** (standard LLMs): apply shallow intuition to every step → fail on complex decisions
- **Thinking models** (DeepSeek-R1, o3): apply deep reasoning everywhere → waste tokens on trivial steps
<div class="zh-trans">- **非思维模型**（标准 LLM）：对每一步应用浅层直觉 → 在复杂决策上失败
- **思维模型**（DeepSeek-R1, o3）：对所有步骤应用深度推理 → 在琐碎步骤上浪费 Token</div>


### CogRouter: Four Cognitive Levels

| Level | Name | Description | Example |
|-------|------|-------------|---------|
| L1 | Instinctive | Immediate pattern match | "Click the blue button" |
| L2 | Pattern Matching | Template-based reasoning | "This looks like a login form" |
| L3 | Tool Use | Deliberate tool selection | "I need to search for this" |
| L4 | Strategic Planning | Multi-step planning | "First I need X, which requires Y and Z" |
<div class="zh-trans">| 级别 | 名称 | 描述 | 示例 | |-------|------|-------------|---------| | L1 | 直觉型 | 即时模式匹配 | “点击蓝色按钮” | | L2 | 模式匹配 | 基于模板的推理 | “这看起来像是一个登录表单” | | L3 | 工具使用 | 刻意的工具选择 | “我需要搜索这个” | | L4 | 战略规划 | 多步规划 | “首先我需要 X，这需要 Y 和 Z” |</div>


### Results (Qwen2.5-7B with CogRouter)

- **82.3% success rate** — surpassing GPT-4o by 40.3% and o3 by 18.3%
- **62% token reduction** compared to standard RL approaches
- A 7B model with proper cognitive allocation beats models 100x larger
<div class="zh-trans">- **82.3% 的成功率** —— 超越 GPT-4o 40.3% 和 o3 18.3%
- 与标准强化学习方法相比，**Token 减少 62%**
- 一个具备合理认知分配的 7B 模型击败了比其大 100 倍的模型</div>


### Key Insight

> Appropriate cognitive resource allocation matters more than raw model scale.
<div class="zh-trans">合理的认知资源分配比原始模型规模更为重要。</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]]
- Mentioned in: [[ai-agent-architecture/sources/cogrouter-paper|CogRouter Paper]]
<div class="zh-trans">- 相关于：[[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]] - 提及于：[[ai-agent-architecture/sources/cogrouter-paper|CogRouter Paper]]</div>

