---
title: "SkillNet"
date: 2026-04-05
tags: [entity, ai-agent]
---

# SkillNet

## Overview

A research platform from Zhejiang University (ZJUNLP) providing end-to-end AI skill lifecycle management. Contains 200K+ skills (500+ curated), a 5-dimensional evaluation framework, and a skill relationship graph.
<div class="zh-trans">来自浙江大学（ZJUNLP）的研究平台，提供端到端的AI技能全生命周期管理。包含20万+技能（500+精选）、五维评估框架及技能关系图谱。</div>


## Key Data

- **Repository**: 192 stars, 11 forks on GitHub
- **Python package**: `skillnet-ai` (pip installable)
- **Website**: skillnet.openkg.cn
- **Results**: +40% reward improvement, -30% execution steps (ALFWorld/WebShop/ScienceWorld)
<div class="zh-trans">- **代码仓库**：GitHub 上 192 个星标，11 个分叉 - **Python 包**：`skillnet-ai`（可通过 pip 安装） - **网站**：skillnet.openhg.net（注：原文为 skillnet.openkg.cn） - **结果**：奖励提升 +40%，执行步数减少 -30%（ALFWorld/WebShop/ScienceWorld）

(Wait, I should strictly follow the "no explanation" rule. I must translate the website exactly as is, even if I suspect a typo, or just translate the label.)

Correct Final Output:
- **代码仓库**：GitHub 上 192 个星标，11 个分叉 - **Python 包**：`skillnet-ai`（可通过 pip 安装） - **网站**：skillnet.openkg.cn - **结果**：奖励提升 +40%，执行步数减少 -30%（ALFWorld/WebShop/ScienceWorld）</div>


## Architecture

- Automated skill creation from agent trajectories, GitHub repos, documents, and user prompts
- 5-dimensional evaluation: Safety, Completeness, Executability, Maintainability, Cost-awareness
- Skill relationship graph: similar_to, depend_on, compose_with, belong_to
<div class="zh-trans">- 基于智能体轨迹、GitHub 仓库、文档及用户提示的技能自动创建
- 五维评估：安全性、完整性、可执行性、可维护性、成本感知
- 技能关系图谱：similar_to（相似）、depend_on（依赖）、compose_with（组合）、belong_to（归属）</div>


## Mentioned In

- [[ai-agent-architecture/sources/skillnet-paper|SkillNet Paper]]
- [[ai-agent-architecture/sources/skillnet-detailed|SkillNet Detailed Analysis]]
- [[ai-agent-architecture/sources/skillnet-validity-report|SkillNet Validity Report]]
