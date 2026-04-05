---
title: "Harness"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Harness

## Definition

A Harness is a controlled boundary layer between an AI agent's reasoning (the "brain") and its real-world execution (the "body"). It intercepts every agent action before it reaches production systems, enforcing permissions, validating parameters, managing credentials, and logging behavior.
<div class="zh-trans">Harness 是位于 AI 智能体的推理（即“大脑”）与其现实世界执行（即“身体”）之间的受控边界层。它在每个智能体动作到达生产系统之前进行拦截，从而强制执行权限、验证参数、管理凭证并记录行为。</div>


## Details

The Harness concept emerged in 2025-2026 as the industry shifted from "capability competition" (who can build agents?) to "reliability competition" (whose agents don't cause damage?). LangChain founder Harrison Chase identified two fundamental sandbox patterns:
<div class="zh-trans">Harness 概念于 2025 至 2026 年间兴起，当时行业重心正从“能力竞争”（谁能构建智能体？）转向“可靠性竞争”（谁的智能体不会造成损害？）。LangChain 创始人 Harrison Chase 识别出了两种基础沙箱模式：</div>


- **Agent-Inside-Sandbox**: The agent runs inside the sandbox. Lower latency, lower isolation. Used by OpenAI Assistants and Claude Code.
- **Sandbox-As-Tool**: The sandbox is a remote tool called via network. Higher isolation, higher latency. Used by DeerFlow 2.0 and E2B.
<div class="zh-trans">- **智能体位于沙箱内**：智能体在沙箱内部运行。延迟较低，隔离性较低。由 OpenAI Assistants 和 Claude Code 采用。
- **沙箱即工具**：沙箱是通过网络调用的远程工具。隔离性较高，延迟较高。由 DeerFlow 2.0 和 E2B 采用。</div>


Key Harness components:
- **Policy Engine** (OPA, YAML-based declarative policies)
- **Tool Proxy** (whitelisting, parameter validation, rate limiting)
- **Credential Manager** (Vault integration, ephemeral credentials)
- **Behavioral Monitor** (OpenTelemetry, kill switch)
<div class="zh-trans">核心 Harness 组件： - **策略引擎** (OPA、基于 YAML 的声明式策略) - **工具代理** (白名单、参数验证、速率限制) - **凭证管理器** (Vault 集成、临时凭证) - **行为监控器** (OpenTelemetry、熔断开关)</div>


OpenAI validated the Harness concept internally: a small team shipped ~1 million lines of code over 5 months with zero manually written source code, using Harness to control quality through PR and CI workflows.
<div class="zh-trans">OpenAI 在内部验证了 Harness 的概念：一个小型团队在 5 个月内交付了约 100 万行代码，且零人工编写源代码，通过 Harness 利用 PR 和 CI 工作流把控质量。</div>


A real-world incident where a Claude Code agent disabled its own container sandbox underscores why hardware-level isolation (Firecracker microVMs) is preferred over containers.

## Connections

- Related to: [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]], [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- Mentioned in: [[ai-agent-architecture/sources/harness-deep-dive|Harness Deep Dive]], [[ai-agent-architecture/sources/higher-privilege-agent-infra|Higher Privilege Agent Infra]], [[ai-agent-architecture/sources/memory-is-the-harness|Memory Is the Harness]]
<div class="zh-trans">- 相关条目：[[ai-agent-architecture/concepts/sandbox-architectures|沙箱架构]]，[[ai-agent-architecture/concepts/agent-security|智能体安全]] - 提及于：[[ai-agent-architecture/sources/harness-deep-dive|Harness 深度解析]]，[[ai-agent-architecture/sources/higher-privilege-agent-infra|高权限智能体基础设施]]，[[ai-agent-architecture/sources/memory-is-the-harness|记忆即 Harness]]</div>

