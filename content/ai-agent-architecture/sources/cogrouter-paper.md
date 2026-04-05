---
title: "CogRouter: Cognitive Load-Based Agent Routing Paper"
date: 2026-04-05
tags: [source, ai-agent]
source_type: paper
source_path: "Learning/research/20260321_cogrouter_paper.md"
---

# CogRouter: Cognitive Load-Based Agent Routing Paper

## Key Takeaways
- CogRouter: dynamically routes tasks to agents calibrated to cognitive complexity
- Cognitive complexity estimated via task embedding + historical difficulty distribution
- Routes between: fast/cheap (Haiku-class), balanced (Sonnet-class), deep (Opus-class)
- 47% cost reduction vs. always-using-frontier-model with equivalent task completion rate
- Routing errors (over/under-routing) cost more than the savings — threshold tuning critical
<div class="zh-trans">- CogRouter：将任务动态路由至与其认知复杂度相匹配的代理
- 认知复杂度通过任务嵌入与历史难度分布进行估算
- 路由类别：快速/低成本（Haiku级）、均衡（Sonnet级）、深度（Opus级）
- 在任务完成率相当的情况下，相比始终使用前沿模型，成本降低47%
- 路由错误（过度路由或路由不足）造成的成本高于节省的收益——阈值调优至关重要</div>


## Summary
CogRouter addresses agent cost optimization by matching task cognitive demand to model capability. The paper's central insight: most enterprise agent tasks follow a bimodal distribution — either simple and highly repetitive (routing inquiry, data extraction) or complex and novel (strategic analysis, open-ended research). Using frontier models for simple tasks wastes compute; using lightweight models for complex tasks degrades quality.
<div class="zh-trans">CogRouter 通过将任务的认知需求与模型能力相匹配，解决了 Agent 成本优化问题。该论文的核心洞察在于：大多数企业 Agent 任务呈现双峰分布——要么是简单且高度重复的任务（如路由查询、数据提取），要么是复杂且新颖的任务（如战略分析、开放式研究）。使用前沿模型处理简单任务会浪费算力；而使用轻量级模型处理复杂任务则会降低质量。</div>


The routing mechanism: tasks are embedded and compared against a calibrated complexity distribution derived from historical performance data. A classifier assigns each task to a cognitive tier (fast/balanced/deep), with confidence thresholds that default to the higher tier when uncertain.
<div class="zh-trans">路由机制：对任务进行嵌入处理，并与从历史性能数据中得出的校准复杂度分布进行比较。分类器将每个任务分配至特定的认知层级（快速/均衡/深度），并在不确定时依据置信度阈值默认分配至更高层级。</div>


The 47% cost reduction result is measured on a 90-day production deployment at a mid-sized e-commerce company. Critical finding: routing threshold miscalibration is more dangerous than no routing — over-routing to cheap models on complex tasks causes cascading failures that are expensive to recover from. The paper recommends conservative initial thresholds with gradual loosening as calibration data accumulates.
<div class="zh-trans">47% 的成本降低结果是在一家中型电商公司的 90 天生产部署中测得的。关键发现：路由阈值校准不当比无路由更为危险 —— 在复杂任务上过度路由至廉价模型会导致级联故障，且恢复成本高昂。论文建议采用保守的初始阈值，并随着校准数据的积累逐步放宽。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]]
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]]
