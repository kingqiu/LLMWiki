---
title: "Cognitive Depth Adaptation"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Cognitive Depth Adaptation

## Definition

A technique that dynamically allocates different levels of reasoning depth to each step of a multi-step agent task, rather than applying uniform thinking depth everywhere. Inspired by ACT-R cognitive architecture from psychology.

## Details

### The Problem: Cognitive Rigidity

- **Non-thinking models** (standard LLMs): apply shallow intuition to every step → fail on complex decisions
- **Thinking models** (DeepSeek-R1, o3): apply deep reasoning everywhere → waste tokens on trivial steps

### CogRouter: Four Cognitive Levels

| Level | Name | Description | Example |
|-------|------|-------------|---------|
| L1 | Instinctive | Immediate pattern match | "Click the blue button" |
| L2 | Pattern Matching | Template-based reasoning | "This looks like a login form" |
| L3 | Tool Use | Deliberate tool selection | "I need to search for this" |
| L4 | Strategic Planning | Multi-step planning | "First I need X, which requires Y and Z" |

### Results (Qwen2.5-7B with CogRouter)

- **82.3% success rate** — surpassing GPT-4o by 40.3% and o3 by 18.3%
- **62% token reduction** compared to standard RL approaches
- A 7B model with proper cognitive allocation beats models 100x larger

### Key Insight

> Appropriate cognitive resource allocation matters more than raw model scale.

## Connections

- Related to: [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]]
- Mentioned in: [[ai-agent-architecture/sources/cogrouter-paper|CogRouter Paper]]
