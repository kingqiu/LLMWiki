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
<div class="zh-trans">SkillCraft 解决了技能创建的瓶颈问题：大多数企业级技能的编写需要专家知识，从而导致了供给难题。该系统通过观察智能体成功的任务完成情况，识别轨迹中可复用的模式（特定的工具序列、决策启发法），并合成一个可应用于未来类似任务的通用化 SKILL.md。</div>


The technical pipeline: (1) trajectory collection from production agent logs, (2) success filtering and semantic clustering to identify repeated patterns, (3) abstraction via an LLM that identifies what's task-specific vs. generalizable, (4) SKILL.md generation with appropriate tool declarations and procedural body, (5) automated test generation from the original trajectories.

Evaluation on the SkillBench benchmark shows synthesized skills outperform hand-written equivalents by 12% on novel-but-related tasks, because the synthesis captures implicit heuristics that human writers often omit. However, synthesized skills show 34% degradation when tool availability changes, revealing they encode assumptions about the execution environment that are invisible in the SKILL.md text.
<div class="zh-trans">在 SkillBench 基准测试上的评估表明，在相关的新任务中，合成技能的表现优于人工编写的技能 12%，这是因为合成过程捕获了人类编写者经常遗漏的隐式启发式规则。然而，当工具可用性发生变化时，合成技能表现出 34% 的性能下降，这表明它们编码了关于执行环境的假设，而这些假设在 SKILL.md 文本中是不可见的。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
