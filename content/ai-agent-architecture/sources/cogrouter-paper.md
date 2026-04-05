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

## Summary
CogRouter addresses agent cost optimization by matching task cognitive demand to model capability. The paper's central insight: most enterprise agent tasks follow a bimodal distribution — either simple and highly repetitive (routing inquiry, data extraction) or complex and novel (strategic analysis, open-ended research). Using frontier models for simple tasks wastes compute; using lightweight models for complex tasks degrades quality.

The routing mechanism: tasks are embedded and compared against a calibrated complexity distribution derived from historical performance data. A classifier assigns each task to a cognitive tier (fast/balanced/deep), with confidence thresholds that default to the higher tier when uncertain.

The 47% cost reduction result is measured on a 90-day production deployment at a mid-sized e-commerce company. Critical finding: routing threshold miscalibration is more dangerous than no routing — over-routing to cheap models on complex tasks causes cascading failures that are expensive to recover from. The paper recommends conservative initial thresholds with gradual loosening as calibration data accumulates.

## Relevant Concepts
- [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]]
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]]
