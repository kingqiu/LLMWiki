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

## Summary
This paper extends neural scaling law research to multi-step agentic systems. The central finding: agent task performance (measured on standardized benchmarks like GAIA and SWE-bench) scales predictably with compute budget when compute is properly allocated across inference calls, context retrieval, and tool use.

The paper characterizes three distinct scaling regimes:
1. **Single-step scaling**: more inference compute per step improves single-action quality
2. **Sequential scaling**: longer agent trajectories (more steps) improve complex task completion
3. **Parallel scaling**: more concurrent agents improve throughput for decomposable tasks

A key empirical result: for tasks requiring coordination, performance peaks at 8-16 agents and degrades above that threshold due to coordination overhead exceeding task complexity gains. This establishes a practical ceiling for naive horizontal scaling.

The paper also introduces "agent efficiency" as a metric: task completion rate per unit of total compute. Current best agents achieve 40-60% efficiency on complex tasks, leaving significant room for architectural improvement versus simply scaling compute.

## Relevant Concepts
- [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]]
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]]
