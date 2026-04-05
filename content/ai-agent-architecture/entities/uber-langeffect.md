---
title: "Uber LangEffect"
date: 2026-04-05
tags: [entity, ai-agent]
entity_type: framework
---

# Uber LangEffect

## Overview
Uber LangEffect is Uber's internal framework for tracking and reversing agent-caused side effects in production systems. Developed to solve the problem of agents failing mid-task and leaving production systems in inconsistent states, LangEffect adapts the distributed systems Saga pattern for agentic workflows.

## Key Facts
- **Organization**: Uber (internal framework, publicly documented)
- **Problem Solved**: Atomic rollback of agent-caused side effects across long-running tasks
- **Pattern**: Saga pattern adapted for LLM agent workflows
- **Production Result**: 99.2% successful rollback rate over 6 months
- **Scope**: Production deployment on rider matching, driver assignment, payment systems

## Technical Design

### Effect Log
Every agent tool call is intercepted by LangEffect middleware and registered in an effect log with two entries:
1. The forward action (what was done)
2. The compensating transaction (how to undo it)

### Compensating Transaction Sources
- **Pre-specified**: For known operations (cancel payment → refund)
- **LLM-generated**: For novel operations, with human review for high-value compensations
- **Non-compensable flag**: Operations that cannot be reversed, requiring human intervention

### Rollback Execution
When an agent task fails or is interrupted, LangEffect executes compensating transactions in reverse chronological order, unwinding the agent's actions to restore a known-good state.

## Significance
LangEffect addresses the reliability problem that blocks enterprise adoption of agentic systems: the inability to safely interrupt or recover from failed multi-step agent tasks. The 99.2% rollback success rate demonstrates that production-grade agent reliability is achievable with the right infrastructure.

## Limitation
0.8% of cases are non-compensable — external systems processed the agent's actions beyond reversal. These cases require human intervention, highlighting that some agent actions remain fundamentally irreversible regardless of framework sophistication.

## Related Sources
- [[ai-agent-architecture/sources/uber-agent|Uber LangEffect: Agent Side Effect Management]]

## Related Concepts
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
