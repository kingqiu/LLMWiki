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
<div class="zh-trans">- 念念技能：读取-执行-反思-写入循环将失败转化为可复用的技能补丁
- 失败分析：78%的重复失败源于20%的重复任务模式
- 技能补丁：针对现有 SKILL.md 的定向修正，旨在解决特定的失效模式
- 人工管理员角色：在补丁晋升为生产技能前进行审核
- 局限性：优化的是整体错误率，而非特定用户的边缘情况</div>


## Summary
Memento-Skills is a framework that operationalizes agent self-improvement through structured failure analysis. The core mechanism is the Read-Execute-Reflect-Write (RERW) cycle:
<div class="zh-trans">Memento-Skills 是一个通过结构化失败分析实现智能体自我改进的框架。其核心机制是读取-执行-反思-写入（RERW）循环：</div>


1. **Read**: agent loads the current skill and task context
2. **Execute**: agent performs the task, logging all decision points and outcomes
3. **Reflect**: upon failure, agent analyzes what went wrong: which decision was incorrect, what information was missing, what assumption failed
4. **Write**: agent generates a "skill patch" — a targeted amendment to the SKILL.md that would have prevented this failure
<div class="zh-trans">1. **读取**：智能体加载当前技能与任务上下文
2. **执行**：智能体执行任务，记录所有决策点与结果
3. **反思**：失败时，智能体分析错误原因：哪项决策不正确、缺失了哪些信息、哪个假设失效
4. **写入**：智能体生成“技能补丁”——针对 SKILL.md 的定向修正，该修正本可防止此次失败</div>


The 78/20 finding: by analyzing 90 days of production agent logs, Memento-Skills identifies that 78% of repeated failures trace to 20% of recurring task patterns, specifically: ambiguous goal specifications, missing tool permissions, and incorrect assumptions about data formats. This concentration makes failure-driven learning tractable — patching the top failure modes has outsized impact.
<div class="zh-trans">78/20 发现：通过分析 90 天的生产环境智能体日志，Memento-Skills 识别出 78% 的重复性失败可追溯至 20% 的反复出现的任务模式，具体包括：目标规格说明模糊、工具权限缺失以及对数据格式的错误假设。这种集中性使得失败驱动学习变得切实可行——修补排名靠前的失败模式具有显著的杠杆效应。</div>


The human curator role is critical: patches are automatically generated but require human review before promotion. This gate prevents the system from encoding incorrect fixes and maintains human oversight of skill evolution.
<div class="zh-trans">人工审核者的角色至关重要：补丁虽为自动生成，但在晋升前需经人工审查。这一关卡防止了系统将错误的修复编码，并确保了对技能演进的人工监督。</div>


The key limitation, noted by critics: the system optimizes for reducing aggregate error rates measured across all executions. Edge cases that affect a small number of users — even if they're highly important to those users — receive less attention than high-frequency, lower-severity failures.
<div class="zh-trans">批评者指出的关键局限在于：该系统以降低所有执行过程中的总体错误率为优化目标。那些仅影响少数用户的边缘情况——即使对这些用户至关重要——所受到的关注度也低于高频但严重程度较低的故障。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/agent-memory|Agent Memory]]

## Relevant Entities
- [[ai-agent-architecture/entities/memento-skills|Memento-Skills]]
