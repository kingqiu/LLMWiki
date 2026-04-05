---
title: "Agent Scaling Laws Paper"
date: 2026-04-05
tags: [source, ai-agent]
source_type: paper
source_path: "Learning/research/20260318_agent_scaling_laws.md"
---

# Agent Scaling Laws Paper

## Key Takeaways
- Agent performance follows power-law scaling with compute budget, like model training
- Key scaling axes: inference compute, context length, tool call depth, agent count
- "Agent scaling laws" predict performance on held-out tasks from resource allocation
- Multi-agent systems show super-linear scaling for parallelizable tasks
- Diminishing returns emerge above 8-16 agents for most coordination-heavy tasks
<div class="zh-trans">- Agent 性能遵循与算力预算的幂律关系，如同模型训练一样。
- 关键扩展轴：推理算力、上下文长度、工具调用深度、智能体数量。
- “Agent 扩展定律”根据资源分配预测在分布外任务上的表现。
- 对于可并行化任务，多智能体系统表现出超线性扩展。
- 对于大多数高度依赖协调的任务，当智能体数量超过 8-16 个时会出现边际收益递减。</div>


## Summary
This paper extends neural scaling law research to multi-step agentic systems. The central finding: agent task performance (measured on standardized benchmarks like GAIA and SWE-bench) scales predictably with compute budget when compute is properly allocated across inference calls, context retrieval, and tool use.
<div class="zh-trans">本文将神经缩放定律研究扩展至多步智能体系统。核心发现为：当计算资源在推理调用、上下文检索和工具使用之间得到合理分配时，智能体的任务性能（以 GAIA 和 SWE-bench 等标准化基准测试衡量）会随计算预算呈可预测的缩放趋势。</div>


The paper characterizes three distinct scaling regimes:
1. **Single-step scaling**: more inference compute per step improves single-action quality
2. **Sequential scaling**: longer agent trajectories (more steps) improve complex task completion
3. **Parallel scaling**: more concurrent agents improve throughput for decomposable tasks
<div class="zh-trans">本文阐述了三种不同的扩展机制：1. **单步扩展**：增加每一步的推理计算量可提升单动作质量 2. **序列扩展**：更长的智能体轨迹（更多步骤）能提高复杂任务的完成度 3. **并行扩展**：增加并发智能体数量可提升可分解任务的吞吐量</div>


A key empirical result: for tasks requiring coordination, performance peaks at 8-16 agents and degrades above that threshold due to coordination overhead exceeding task complexity gains. This establishes a practical ceiling for naive horizontal scaling.
<div class="zh-trans">一项关键的实证结果表明：对于需要协调的任务，性能在智能体数量为 8 到 16 个时达到峰值；一旦超过该阈值，由于协调开销超过了任务复杂度的收益，性能便会下降。这为简单的水平扩展设定了实际上限。</div>


The paper also introduces "agent efficiency" as a metric: task completion rate per unit of total compute. Current best agents achieve 40-60% efficiency on complex tasks, leaving significant room for architectural improvement versus simply scaling compute.
<div class="zh-trans">本文还引入了“智能体效率”作为衡量指标：单位总算力下的任务完成率。当前最优的智能体在复杂任务上的效率为 40-60%，这表明相较于单纯扩展算力，架构改进仍有巨大空间。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]]
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]]
