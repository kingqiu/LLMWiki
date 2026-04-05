---
title: "Self-Evolving Agents"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Self-Evolving Agents

## Definition

Self-evolving agents are AI systems that improve their own capabilities through deployment experience, treating failures as training signals rather than just retry opportunities. The model weights stay frozen; improvement happens through an evolving external skill/memory layer.

## Details

### The Evolution Spectrum

1. **Static tools** — manually added, never change
2. **Learnable skills** — agent creates skills from successful runs (SkillCraft)
3. **Self-rewriting skills** — agent rewrites failing skills (Memento-Skills)
4. **Meta-level improvement** — agent improves its own improvement methods (HyperAgents / Facebook FAIR)

### Memento-Skills: Read-Execute-Reflect-Write Loop

The core loop:
1. **Read** — retrieve relevant skill from memory
2. **Execute** — attempt the task using the skill
3. **Reflect** — analyze outcome, attribute success/failure to specific skills
4. **Write** — update, rewrite, or create new skill based on reflection

When a task fails, the system records the state, updates a utility score for the responsible skill, and triggers a reflection pass that may rewrite or replace the skill entirely.

### SkillCraft Findings

- Enabling "Skill Mode" reduces token consumption by up to **80%** on repetitive tasks
- Stronger models are better at discovering and reusing skills within the same task
- **Deep skill nesting (skills calling skills) increases error propagation** rather than helping

### Limitations

- When agents rewrite their own skills, they optimize for aggregate error rates rather than the specific edge cases users care about
- Self-optimization performs hidden value judgments through loss functions
- No guaranteed convergence — skills can degrade

## Connections

- Related to: [[ai-agent-architecture/concepts/skills|Skills]], [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle]]
- Mentioned in: [[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills]], [[ai-agent-architecture/sources/skillcraft-paper|SkillCraft]], [[ai-agent-architecture/sources/skills-agent-research|Skills Agent Research]]
