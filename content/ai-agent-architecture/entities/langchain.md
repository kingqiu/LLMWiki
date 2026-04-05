---
title: "LangChain"
date: 2026-04-05
tags: [entity, ai-agent]
---

# LangChain

## Overview

Open-source agent framework ecosystem. Key products include LangGraph (production-grade agent runtime) and Deep Agents (CLI agent toolkit). Harrison Chase (founder) identified the two fundamental sandbox architecture patterns.
<div class="zh-trans">开源智能体框架生态系统。核心产品包括 LangGraph（生产级智能体运行时）和 Deep Agents（命令行智能体工具包）。创始人 Harrison Chase 识别出了两种基础沙盒架构模式。</div>


## Key Contributions

- **LangGraph**: Runtime with streaming, persistence, checkpoints for production agents
- **Deep Agents**: Open-source Claude Code alternative (MIT license), LLM-provider agnostic
- **Sandbox patterns**: Agent-Inside-Sandbox vs. Sandbox-As-Tool framework
- **Uber LangEffect**: Uber built its custom agent framework on top of LangChain/LangGraph
<div class="zh-trans">- **LangGraph**：具备流式处理、持久化及检查点功能的生产级智能体运行时
- **Deep Agents**：开源 Claude Code 替代方案（MIT 许可证），与 LLM 提供商无关
- **沙箱模式**：“智能体内置沙箱”与“沙箱即工具”框架
- **Uber LangEffect**：Uber 基于 LangChain/LangGraph 构建的自定义智能体框架</div>


## Mentioned In

- [[ai-agent-architecture/sources/deep-agents|Deep Agents]]
- [[ai-agent-architecture/sources/uber-agent|Uber Agent Case Study]]
- [[ai-agent-architecture/sources/harness-deep-dive|Harness Deep Dive]]
