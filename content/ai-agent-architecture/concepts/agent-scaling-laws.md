---
title: "Agent Scaling Laws"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agent Scaling Laws

## Definition

Empirical laws governing how multi-agent system performance changes with the number of agents, tools, and task characteristics. Derived from 180 controlled configurations across 5 architectures, 3 model families, and 4 benchmarks (Google Research + MIT).

## Details

### Three Scaling Laws

**Law 1: Tool-Coordination Trade-off**
More tools in the environment makes multi-agent coordination disproportionately costly (beta = -0.267, p < 0.001). Token budgets fragment across agents.

**Law 2: Capability Ceiling**
When single-agent accuracy exceeds ~45%, adding more agents hurts rather than helps (beta = -0.404, p < 0.001). The coordination overhead outweighs any parallelization benefit.

**Law 3: Topology-Dependent Error Amplification**
- Independent (no communication): errors amplify **17.2x**
- Centralized (orchestrator): errors amplify **4.4x**
- The communication topology determines how badly errors propagate.

### Predictive Model

A mixed-effects model achieves R² = 0.524 and **87% accuracy** in recommending the right architecture for new tasks. Validated on GPT-5.2 (released after the paper).

### Limitations

- Assumes fixed token budgets
- Synchronous collaboration only
- Homogeneous agents (same model for all)

## Connections

- Related to: [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- Mentioned in: [[ai-agent-architecture/sources/agent-scaling-laws-paper|Agent Scaling Laws Paper]]
