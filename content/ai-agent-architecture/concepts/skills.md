---
title: "Skills"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Skills

## Definition

Skills are modular, reusable, evolvable units of agent capability. Unlike traditional tools (single-function APIs), Skills encode both **what to do** and **how to behave** — they include procedural instructions, domain knowledge, security constraints, and reference materials.
<div class="zh-trans">技能是代理能力的模块化、可复用、可演进单元。与传统工具（单功能 API）不同，技能不仅编码了**做什么**，还编码了**如何表现**——它们包含过程指令、领域知识、安全约束和参考资料。</div>


## Details

### Skill vs. Related Concepts

| Concept | What It Does | Analogy |
|---------|-------------|---------|
| **Tool** | Single function API (e.g., web search) | A hammer |
| **MCP** | Connection protocol between agent and tools | USB cable |
| **Skill** | Procedural knowledge + tools + constraints | A recipe |
| **Harness** | Runtime constraint and isolation layer | Safety goggles |
<div class="zh-trans">| 概念 | 功能 | 类比 | |---------|-------------|---------| | **工具 (Tool)** | 单一功能 API（例如：网络搜索） | 锤子 | | **MCP** | 智能体与工具之间的连接协议 | USB 线 | | **技能 (Skill)** | 过程性知识 + 工具 + 约束 | 食谱 | | **约束框架 (Harness)** | 运行时约束与隔离层 | 护目镜 |</div>


### SKILL.md Structure (agentskills.io Standard)

A Skill is a folder containing a `SKILL.md` file with three layers:
1. **Frontmatter** — metadata: name, description, version, allowed-tools, compatibility
2. **Body** — procedural instructions the agent follows
3. **References** — supporting files loaded on demand
<div class="zh-trans">技能（Skill）是一个包含 `SKILL.md` 文件的文件夹，该文件由三个层级组成：1. **前言（Frontmatter）** — 元数据：名称、描述、版本、允许使用的工具（allowed-tools）、兼容性 2. **正文（Body）** — 智能体遵循的过程性指令 3. **参考资料（References）** — 按需加载的支持文件</div>


### Progressive Disclosure Principle

- ~100 tokens of metadata loaded at startup (always)
- <5000 tokens of instructions loaded on activation (on-demand)
- Reference files loaded only when needed (lazy)
<div class="zh-trans">- 启动时加载约 100 个词元的元数据（始终）
- 激活时加载 <5000 个词元的指令（按需）
- 引用文件仅在需要时加载（延迟）</div>


### Key Properties

- **Portable**: Write once, use across 20+ platforms (Claude Code, Cursor, VS Code, Gemini CLI, etc.)
- **Composable**: Skills can orchestrate other skills
- **Evolvable**: Frameworks like Memento-Skills enable skills to rewrite themselves from failures
- **Securable**: `allowed-tools` field provides native per-action permission whitelisting
<div class="zh-trans">- **可移植**：一次编写，即可在 20 多个平台（Claude Code、Cursor、VS Code、Gemini CLI 等）上通用
- **可组合**：技能能够编排其他技能
- **可演进**：借助 Memento-Skills 等框架，技能能够从失败中实现自我重写
- **可安保**：`allowed-tools` 字段提供了原生的单次操作权限白名单机制</div>


### Agent Capability Formula

> Agent Capability = Base Model + Σ(Available Skills × Activation Probability)
<div class="zh-trans">智能体能力 = 基础模型 + Σ(可用技能 × 激活概率)</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle]], [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]]
- Mentioned in: [[ai-agent-architecture/sources/skill-factory-framework|Skill Factory]], [[ai-agent-architecture/sources/agentskills-io-ecosystem|agentskills.io]], [[ai-agent-architecture/sources/skillnet-paper|SkillNet]]
<div class="zh-trans">相关于：[[ai-agent-architecture/concepts/skill-lifecycle|技能生命周期]]，[[ai-agent-architecture/concepts/self-evolving-agents|自进化智能体]] - 提及于：[[ai-agent-architecture/sources/skill-factory-framework|技能工厂]]，[[ai-agent-architecture/sources/agentskills-io-ecosystem|agentskills.io]]，[[ai-agent-architecture/sources/skillnet-paper|SkillNet]]</div>

