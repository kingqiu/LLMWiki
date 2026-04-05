---
title: "Memento-Skills"
date: 2026-04-05
tags: [entity, ai-agent]
---

# Memento-Skills

## Overview

A self-evolving agent framework that enables agents to learn from deployment experience. The model weights stay frozen; improvement happens through an evolving external skill memory. Optimized for open-source Chinese LLM platforms.
<div class="zh-trans">一种使智能体能够从部署经验中学习的自进化智能体框架。模型权重保持冻结；通过不断进化的外部技能记忆实现提升。针对开源中文大语言模型平台进行了优化。</div>


## Core Architecture

The **Read-Execute-Reflect-Write** loop:
1. Read relevant skill from memory
2. Execute the task
3. Reflect on outcome (failures become training signals)
4. Write updated or new skill back to memory
<div class="zh-trans">**读取-执行-反思-写入** 循环：1. 从记忆中读取相关技能 2. 执行任务 3. 反思结果（失败转化为训练信号） 4. 将更新或新的技能写回记忆</div>


## Key Features

- Autonomous skill rewriting and creation
- Cloud skill directory with deduplication
- Utility tracking per skill
- Supports Kimi/Moonshot, MiniMax, GLM/Zhipu
- CLI, desktop GUI, and Feishu bridge deployment options
<div class="zh-trans">- 自主技能重写与创建
- 具备去重功能的云端技能库
- 单技能效用追踪
- 支持 Kimi/月之暗面、MiniMax、GLM/智谱
- 支持 CLI、桌面 GUI 及飞书桥接等多种部署选项</div>


## Benchmarks

Tested on HLE (Humanity's Last Exam) and GAIA (General AI Assistants)
<div class="zh-trans">在 HLE（人类最后考试）和 GAIA（通用人工智能助手）上进行了测试</div>


## Mentioned In

- [[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills Framework]]
- [[ai-agent-architecture/sources/skills-agent-research|Skills Agent Research]]
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
