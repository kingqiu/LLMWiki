---
title: "Memento-Skills"
date: 2026-04-05
tags: [entity, ai-agent]
---

# Memento-Skills

## Overview

A self-evolving agent framework that enables agents to learn from deployment experience. The model weights stay frozen; improvement happens through an evolving external skill memory. Optimized for open-source Chinese LLM platforms.

## Core Architecture

The **Read-Execute-Reflect-Write** loop:
1. Read relevant skill from memory
2. Execute the task
3. Reflect on outcome (failures become training signals)
4. Write updated or new skill back to memory

## Key Features

- Autonomous skill rewriting and creation
- Cloud skill directory with deduplication
- Utility tracking per skill
- Supports Kimi/Moonshot, MiniMax, GLM/Zhipu
- CLI, desktop GUI, and Feishu bridge deployment options

## Benchmarks

Tested on HLE (Humanity's Last Exam) and GAIA (General AI Assistants)

## Mentioned In

- [[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills Framework]]
- [[ai-agent-architecture/sources/skills-agent-research|Skills Agent Research]]
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
