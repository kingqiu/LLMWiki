---
title: "Skills"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Skills

## Definition

Skills are modular, reusable, evolvable units of agent capability. Unlike traditional tools (single-function APIs), Skills encode both **what to do** and **how to behave** — they include procedural instructions, domain knowledge, security constraints, and reference materials.

## Details

### Skill vs. Related Concepts

| Concept | What It Does | Analogy |
|---------|-------------|---------|
| **Tool** | Single function API (e.g., web search) | A hammer |
| **MCP** | Connection protocol between agent and tools | USB cable |
| **Skill** | Procedural knowledge + tools + constraints | A recipe |
| **Harness** | Runtime constraint and isolation layer | Safety goggles |

### SKILL.md Structure (agentskills.io Standard)

A Skill is a folder containing a `SKILL.md` file with three layers:
1. **Frontmatter** — metadata: name, description, version, allowed-tools, compatibility
2. **Body** — procedural instructions the agent follows
3. **References** — supporting files loaded on demand

### Progressive Disclosure Principle

- ~100 tokens of metadata loaded at startup (always)
- <5000 tokens of instructions loaded on activation (on-demand)
- Reference files loaded only when needed (lazy)

### Key Properties

- **Portable**: Write once, use across 20+ platforms (Claude Code, Cursor, VS Code, Gemini CLI, etc.)
- **Composable**: Skills can orchestrate other skills
- **Evolvable**: Frameworks like Memento-Skills enable skills to rewrite themselves from failures
- **Securable**: `allowed-tools` field provides native per-action permission whitelisting

### Agent Capability Formula

> Agent Capability = Base Model + Σ(Available Skills × Activation Probability)

## Connections

- Related to: [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle]], [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
- Mentioned in: [[ai-agent-architecture/sources/skill-factory-framework|Skill Factory]], [[ai-agent-architecture/sources/agentskills-io-ecosystem|agentskills.io]], [[ai-agent-architecture/sources/skillnet-paper|SkillNet]]
