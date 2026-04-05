---
title: "SkillCraft: Automated Skill Synthesis Paper"
date: 2026-04-05
tags: [source, ai-agent]
source_type: paper
source_path: "Learning/research/20260322_skillcraft_paper.md"
---

# SkillCraft: Automated Skill Synthesis Paper

## Key Takeaways
- SkillCraft: system that automatically synthesizes new skills from observed successful agent trajectories
- Skill synthesis pipeline: trajectory → abstraction → generalization → SKILL.md generation
- 68% of auto-generated skills pass expert review without modification
- Synthesized skills outperform hand-written skills on novel-but-similar tasks
- Major limitation: brittle to distribution shift — synthesized skills assume same tool availability

## Summary
SkillCraft addresses the bottleneck in skill creation: most enterprise skills require expert knowledge to write, creating a supply problem. The system observes successful agent task completions, identifies reusable patterns in the trajectory (specific tool sequences, decision heuristics), and synthesizes a generalized SKILL.md that can be applied to similar future tasks.

The technical pipeline: (1) trajectory collection from production agent logs, (2) success filtering and semantic clustering to identify repeated patterns, (3) abstraction via an LLM that identifies what's task-specific vs. generalizable, (4) SKILL.md generation with appropriate tool declarations and procedural body, (5) automated test generation from the original trajectories.

Evaluation on the SkillBench benchmark shows synthesized skills outperform hand-written equivalents by 12% on novel-but-related tasks, because the synthesis captures implicit heuristics that human writers often omit. However, synthesized skills show 34% degradation when tool availability changes, revealing they encode assumptions about the execution environment that are invisible in the SKILL.md text.

## Relevant Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
