---
title: "Multi-Agent Architectures"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Multi-Agent Architectures

## Definition

Multi-agent architectures are topology patterns that define how multiple AI agents communicate, coordinate, and share information to solve tasks. Research identifies five fundamental patterns, each with distinct trade-offs.

## Details

### Five Architecture Patterns

| Pattern | Description | Best For | Risk |
|---------|-------------|----------|------|
| **Single-Agent (SAS)** | One agent handles everything | Sequential reasoning, simple tasks | Context overload |
| **Independent** | Multiple agents, no communication | Embarrassingly parallel tasks | Error amplification 17.2x |
| **Centralized** | One orchestrator delegates to workers | Parallelizable tasks (e.g., financial analysis) | Orchestrator bottleneck |
| **Decentralized** | Agents communicate peer-to-peer | Dynamic exploration (e.g., web navigation) | Consensus overhead |
| **Hybrid** | Mix of centralized and decentralized | Complex multi-domain tasks | Design complexity |

### Key Empirical Findings (Google Research + MIT)

- Multi-agent does NOT always help. Sequential reasoning tasks see up to **-70% performance** with multi-agent.
- **Tool-coordination trade-off**: More tools makes multi-agent coordination disproportionately costly (beta = -0.267).
- **Capability ceiling**: When single-agent accuracy exceeds ~45%, adding agents hurts rather than helps (beta = -0.404).
- **Error amplification**: Independent architectures amplify errors 17.2x vs. 4.4x for centralized.
- **Predictive model**: 87% accuracy in recommending the right architecture for new tasks.

### Practical Decision Guide

- Parallelizable tasks (financial analysis) → **Centralized** (+80.8% improvement)
- Dynamic exploration (web navigation) → **Decentralized** (+9.2%)
- Sequential reasoning (game planning) → **Single Agent** (avoid multi-agent: -70%)

## Connections

- Related to: [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]], [[ai-agent-architecture/concepts/harness|Harness]]
- Mentioned in: [[ai-agent-architecture/sources/agent-scaling-laws-paper|Agent Scaling Laws Paper]], [[ai-agent-architecture/sources/jumperz-multi-agent|Multi-Agent Swarm]]
