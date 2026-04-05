---
title: "Self-Evolving Agents"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Self-Evolving Agents

## Definition

Self-evolving agents are AI systems that improve their own capabilities through deployment experience, treating failures as training signals rather than just retry opportunities. The model weights stay frozen; improvement happens through an evolving external skill/memory layer.
<div class="zh-trans">自进化智能体是一类通过部署经验提升自身能力的人工智能系统，它们将失败视为训练信号，而非单纯的重试机会。模型权重保持冻结；改进是通过不断演化的外部技能/记忆层实现的。</div>


## Details

### The Evolution Spectrum

1. **Static tools** — manually added, never change
2. **Learnable skills** — agent creates skills from successful runs (SkillCraft)
3. **Self-rewriting skills** — agent rewrites failing skills (Memento-Skills)
4. **Meta-level improvement** — agent improves its own improvement methods (HyperAgents / Facebook FAIR)
<div class="zh-trans">1. **静态工具** —— 人工添加，永不改变
2. **可习得技能** —— 智能体从成功运行中创建技能（SkillCraft）
3. **自重写技能** —— 智能体重写失败的技能（Memento-Skills）
4. **元级改进** —— 智能体改进自身的改进方法（HyperAgents / Facebook FAIR）</div>


### Memento-Skills: Read-Execute-Reflect-Write Loop

The core loop:
1. **Read** — retrieve relevant skill from memory
2. **Execute** — attempt the task using the skill
3. **Reflect** — analyze outcome, attribute success/failure to specific skills
4. **Write** — update, rewrite, or create new skill based on reflection
<div class="zh-trans">核心循环：1. **读取** — 从记忆中检索相关技能 2. **执行** — 使用该技能尝试任务 3. **反思** — 分析结果，将成功或失败归因于特定技能 4. **写入** — 基于反思更新、重写或创建新技能</div>


When a task fails, the system records the state, updates a utility score for the responsible skill, and triggers a reflection pass that may rewrite or replace the skill entirely.
<div class="zh-trans">当任务失败时，系统记录状态，更新负责技能的效用分数，并触发反思过程，该过程可能会重写或彻底替换该技能。</div>


### SkillCraft Findings

- Enabling "Skill Mode" reduces token consumption by up to **80%** on repetitive tasks
- Stronger models are better at discovering and reusing skills within the same task
- **Deep skill nesting (skills calling skills) increases error propagation** rather than helping
<div class="zh-trans">- 启用“技能模式”最多可减少 **80%** 的重复任务 Token 消耗
- 更强的模型更擅长在同一任务中发现并复用技能
- **深层技能嵌套（技能调用技能）会增加错误传播**，而并非有所助益</div>


### Limitations

- When agents rewrite their own skills, they optimize for aggregate error rates rather than the specific edge cases users care about
- Self-optimization performs hidden value judgments through loss functions
- No guaranteed convergence — skills can degrade
<div class="zh-trans">- 当智能体重写自身技能时，它们优化的是聚合错误率，而非用户关心的特定边缘情况 - 自我优化通过损失函数执行隐性的价值判断 - 无法保证收敛——技能可能会退化</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/skills|Skills]], [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle]]
- Mentioned in: [[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills]], [[ai-agent-architecture/sources/skillcraft-paper|SkillCraft]], [[ai-agent-architecture/sources/skills-agent-research|Skills Agent Research]]
<div class="zh-trans">- 相关于：[[ai-agent-architecture/concepts/skills|技能]]，[[ai-agent-architecture/concepts/skill-lifecycle|技能生命周期]] - 提及于：[[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills]]，[[ai-agent-architecture/sources/skillcraft-paper|SkillCraft]]，[[ai-agent-architecture/sources/skills-agent-research|技能智能体研究]]</div>

