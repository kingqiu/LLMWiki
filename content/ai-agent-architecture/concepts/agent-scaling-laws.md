---
title: "Agent Scaling Laws"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agent Scaling Laws

## Definition

Empirical laws governing how multi-agent system performance changes with the number of agents, tools, and task characteristics. Derived from 180 controlled configurations across 5 architectures, 3 model families, and 4 benchmarks (Google Research + MIT).
<div class="zh-trans">描述多智能体系统性能如何随智能体数量、工具和任务特征变化的经验规律。基于涵盖5种架构、3个模型系列和4个基准测试的180种受控配置得出（Google Research + MIT）。</div>


## Details

### Three Scaling Laws

**Law 1: Tool-Coordination Trade-off**
More tools in the environment makes multi-agent coordination disproportionately costly (beta = -0.267, p < 0.001). Token budgets fragment across agents.
<div class="zh-trans">**定律1：工具-协调权衡** 环境中的工具越多，多智能体协调的成本便不成比例地增加（beta = -0.267, p < 0.001）。令牌预算在智能体之间呈碎片化分布。</div>


**Law 2: Capability Ceiling**
When single-agent accuracy exceeds ~45%, adding more agents hurts rather than helps (beta = -0.404, p < 0.001). The coordination overhead outweighs any parallelization benefit.
<div class="zh-trans">**定律2：能力上限** 当单体智能体的准确率超过约45%时，增加更多智能体不仅无益，反而有害（beta = -0.404，p < 0.001）。此时，协调开销超过了并行化带来的收益。</div>


**Law 3: Topology-Dependent Error Amplification**
- Independent (no communication): errors amplify **17.2x**
- Centralized (orchestrator): errors amplify **4.4x**
- The communication topology determines how badly errors propagate.
<div class="zh-trans">**定律 3：依赖拓扑的误差放大** - 独立模式（无通信）：误差放大 **17.2 倍** - 集中式（协调器）：误差放大 **4.4 倍** - 通信拓扑决定了误差传播的严重程度。</div>


### Predictive Model

A mixed-effects model achieves R² = 0.524 and **87% accuracy** in recommending the right architecture for new tasks. Validated on GPT-5.2 (released after the paper).
<div class="zh-trans">混合效应模型在新任务的架构推荐中实现了 R² = 0.524 和 **87% 的准确率**。该结果在 GPT-5.2（于本文发表后发布）上得到了验证。</div>


### Limitations

- Assumes fixed token budgets
- Synchronous collaboration only
- Homogeneous agents (same model for all)
<div class="zh-trans">- 假设固定的令牌预算 - 仅支持同步协作 - 同质智能体（全员使用同一模型）</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- Mentioned in: [[ai-agent-architecture/sources/agent-scaling-laws-paper|Agent Scaling Laws Paper]]
<div class="zh-trans">- 相关条目：[[ai-agent-architecture/concepts/multi-agent-architectures|多智能体架构]] - 提及于：[[ai-agent-architecture/sources/agent-scaling-laws-paper|智能体扩展定律论文]]</div>

