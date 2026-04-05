---
title: "SkillNet"
date: 2026-04-05
tags: [entity, ai-agent]
---

# SkillNet

## Overview

A research platform from Zhejiang University (ZJUNLP) providing end-to-end AI skill lifecycle management. Contains 200K+ skills (500+ curated), a 5-dimensional evaluation framework, and a skill relationship graph.

## Key Data

- **Repository**: 192 stars, 11 forks on GitHub
- **Python package**: `skillnet-ai` (pip installable)
- **Website**: skillnet.openkg.cn
- **Results**: +40% reward improvement, -30% execution steps (ALFWorld/WebShop/ScienceWorld)

## Architecture

- Automated skill creation from agent trajectories, GitHub repos, documents, and user prompts
- 5-dimensional evaluation: Safety, Completeness, Executability, Maintainability, Cost-awareness
- Skill relationship graph: similar_to, depend_on, compose_with, belong_to

## Mentioned In

- [[ai-agent-architecture/sources/skillnet-paper|SkillNet Paper]]
- [[ai-agent-architecture/sources/skillnet-detailed|SkillNet Detailed Analysis]]
- [[ai-agent-architecture/sources/skillnet-validity-report|SkillNet Validity Report]]
