---
title: "Multi-Agent Architectures"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Multi-Agent Architectures

## Definition

Multi-agent architectures are topology patterns that define how multiple AI agents communicate, coordinate, and share information to solve tasks. Research identifies five fundamental patterns, each with distinct trade-offs.
<div class="zh-trans">多智能体架构是定义多个AI智能体如何通信、协调及共享信息以解决任务的拓扑模式。研究识别出五种基本模式，每种模式都具有不同的权衡。</div>


## Details

### Five Architecture Patterns

| Pattern | Description | Best For | Risk |
|---------|-------------|----------|------|
| **Single-Agent (SAS)** | One agent handles everything | Sequential reasoning, simple tasks | Context overload |
| **Independent** | Multiple agents, no communication | Embarrassingly parallel tasks | Error amplification 17.2x |
| **Centralized** | One orchestrator delegates to workers | Parallelizable tasks (e.g., financial analysis) | Orchestrator bottleneck |
| **Decentralized** | Agents communicate peer-to-peer | Dynamic exploration (e.g., web navigation) | Consensus overhead |
| **Hybrid** | Mix of centralized and decentralized | Complex multi-domain tasks | Design complexity |
<div class="zh-trans">| 模式 | 描述 | 适用场景 | 风险 | |---------|-------------|----------|------| | **单智能体 (SAS)** | 一个智能体处理所有事务 | 顺序推理、简单任务 | 上下文过载 | | **独立模式** | 多智能体，无通信 | 高度并行任务 | 错误放大17.2倍 | | **中心化模式** | 一个编排者向工作智能体分配任务 | 可并行化任务（例如，金融分析） | 编排者瓶颈 | | **去中心化模式** | 智能体之间点对点通信 | 动态探索（例如，网页导航） | 共识开销 | | **混合模式** | 中心化与去中心化的结合 | 复杂的多领域任务 | 设计复杂性 |</div>


### Key Empirical Findings (Google Research + MIT)

- Multi-agent does NOT always help. Sequential reasoning tasks see up to **-70% performance** with multi-agent.
- **Tool-coordination trade-off**: More tools makes multi-agent coordination disproportionately costly (beta = -0.267).
- **Capability ceiling**: When single-agent accuracy exceeds ~45%, adding agents hurts rather than helps (beta = -0.404).
- **Error amplification**: Independent architectures amplify errors 17.2x vs. 4.4x for centralized.
- **Predictive model**: 87% accuracy in recommending the right architecture for new tasks.
<div class="zh-trans">- 多智能体并不总是有益。在序贯推理任务中，多智能体架构可能导致高达 **-70% 的性能下降**。
- **工具协调权衡**：更多的工具会使多智能体协调成本不成比例地增加 (beta = -0.267)。
- **能力上限**：当单智能体准确率超过约 45% 时，增加智能体反而会造成负面影响 (beta = -0.404)。
- **误差放大**：独立架构的误差放大倍数为 17.2 倍，而集中式架构仅为 4.4 倍。
- **预测模型**：在为新任务推荐合适架构方面达到 87% 的准确率。</div>


### Practical Decision Guide

- Parallelizable tasks (financial analysis) → **Centralized** (+80.8% improvement)
- Dynamic exploration (web navigation) → **Decentralized** (+9.2%)
- Sequential reasoning (game planning) → **Single Agent** (avoid multi-agent: -70%)
<div class="zh-trans">- 可并行化任务（金融分析） → **集中式**（+80.8% 提升）
- 动态探索（网页导航） → **去中心化**（+9.2%）
- 顺序推理（博弈规划） → **单智能体**（避免多智能体：-70%）</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]], [[ai-agent-architecture/concepts/harness|Harness]]
- Mentioned in: [[ai-agent-architecture/sources/agent-scaling-laws-paper|Agent Scaling Laws Paper]], [[ai-agent-architecture/sources/jumperz-multi-agent|Multi-Agent Swarm]]
<div class="zh-trans">- 相关于：[[ai-agent-architecture/concepts/agent-scaling-laws|智能体扩展定律]]，[[ai-agent-architecture/concepts/harness|测试工具]] - 提及于：[[ai-agent-architecture/sources/agent-scaling-laws-paper|智能体扩展定律论文]]，[[ai-agent-architecture/sources/jumperz-multi-agent|多智能体集群]]</div>

