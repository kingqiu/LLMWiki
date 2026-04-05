---
title: "Memento-Skills: Failure-Driven Skill Learning Framework"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260327_memento_skills_framework.md"
---

# Memento-Skills: Failure-Driven Skill Learning Framework

## Key Takeaways
- Memento-Skills: Read-Execute-Reflect-Write cycle turns failures into reusable skill patches
- Failure analysis: 78% of repeated failures stem from 20% of recurring task patterns
- Skill patches: targeted amendments to existing SKILL.md that address specific failure modes
- Human curator role: reviews patches before promotion to production skill
- Limitation: optimizes aggregate error rate, not user-specific edge cases

## Summary
Memento-Skills is a framework that operationalizes agent self-improvement through structured failure analysis. The core mechanism is the Read-Execute-Reflect-Write (RERW) cycle:

1. **Read**: agent loads the current skill and task context
2. **Execute**: agent performs the task, logging all decision points and outcomes
3. **Reflect**: upon failure, agent analyzes what went wrong: which decision was incorrect, what information was missing, what assumption failed
4. **Write**: agent generates a "skill patch" — a targeted amendment to the SKILL.md that would have prevented this failure

The 78/20 finding: by analyzing 90 days of production agent logs, Memento-Skills identifies that 78% of repeated failures trace to 20% of recurring task patterns, specifically: ambiguous goal specifications, missing tool permissions, and incorrect assumptions about data formats. This concentration makes failure-driven learning tractable — patching the top failure modes has outsized impact.

The human curator role is critical: patches are automatically generated but require human review before promotion. This gate prevents the system from encoding incorrect fixes and maintains human oversight of skill evolution.

The key limitation, noted by critics: the system optimizes for reducing aggregate error rates measured across all executions. Edge cases that affect a small number of users — even if they're highly important to those users — receive less attention than high-frequency, lower-severity failures.

## Relevant Concepts
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/agent-memory|Agent Memory]]

## Relevant Entities
- [[ai-agent-architecture/entities/memento-skills|Memento-Skills]]
