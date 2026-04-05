---
title: "Jumperz: Multi-Agent Coordination in Production"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260328_jumperz_multi_agent.md"
---

# Jumperz: Multi-Agent Coordination in Production

## Key Takeaways
- Jumperz: production multi-agent orchestration system handling 2M+ tasks/day
- Hub-and-spoke vs. peer-to-peer: Jumperz uses hierarchical routing with specialist agents
- Key insight: explicit task queues outperform emergent agent-to-agent communication for reliability
- Failure isolation: one agent's failure should not cascade to the entire agent graph
- Monitoring: every agent-to-agent handoff is a logged, queryable event

## Summary
Jumperz is a production multi-agent coordination system deployed at scale (2M+ daily tasks). The system represents the engineering counterpoint to research-focused multi-agent architectures: it prioritizes reliability, debuggability, and operational simplicity over theoretical coordination elegance.

The core architectural decision: explicit task queues rather than emergent agent-to-agent messaging. When one agent needs another agent's output, it publishes a task to a typed queue and waits for a result, rather than calling the agent directly. This creates clear audit trails, allows retries, and prevents cascading failures — if a specialist agent crashes, its queue accumulates and resumes when the agent recovers, rather than propagating the failure to dependent agents.

The hub-and-spoke topology: a coordinator agent receives all user requests, decomposes them into subtasks, routes to specialist agents (search, code, data, communication), and aggregates results. Peer-to-peer communication between specialists is explicitly prohibited — all coordination flows through the coordinator. This constraint sacrifices theoretical efficiency for operational clarity.

Monitoring architecture: every task submission, routing decision, agent handoff, and result collection is logged as a structured event. The observability layer allows post-hoc debugging of any task's full execution trace, which proved essential when diagnosing the 2% of tasks that required human intervention.

## Relevant Concepts
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]]
- [[ai-agent-architecture/concepts/harness|Harness]]
