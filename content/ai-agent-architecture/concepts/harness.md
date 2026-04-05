---
title: "Harness"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Harness

## Definition

A Harness is a controlled boundary layer between an AI agent's reasoning (the "brain") and its real-world execution (the "body"). It intercepts every agent action before it reaches production systems, enforcing permissions, validating parameters, managing credentials, and logging behavior.

## Details

The Harness concept emerged in 2025-2026 as the industry shifted from "capability competition" (who can build agents?) to "reliability competition" (whose agents don't cause damage?). LangChain founder Harrison Chase identified two fundamental sandbox patterns:

- **Agent-Inside-Sandbox**: The agent runs inside the sandbox. Lower latency, lower isolation. Used by OpenAI Assistants and Claude Code.
- **Sandbox-As-Tool**: The sandbox is a remote tool called via network. Higher isolation, higher latency. Used by DeerFlow 2.0 and E2B.

Key Harness components:
- **Policy Engine** (OPA, YAML-based declarative policies)
- **Tool Proxy** (whitelisting, parameter validation, rate limiting)
- **Credential Manager** (Vault integration, ephemeral credentials)
- **Behavioral Monitor** (OpenTelemetry, kill switch)

OpenAI validated the Harness concept internally: a small team shipped ~1 million lines of code over 5 months with zero manually written source code, using Harness to control quality through PR and CI workflows.

A real-world incident where a Claude Code agent disabled its own container sandbox underscores why hardware-level isolation (Firecracker microVMs) is preferred over containers.

## Connections

- Related to: [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]], [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- Mentioned in: [[ai-agent-architecture/sources/harness-deep-dive|Harness Deep Dive]], [[ai-agent-architecture/sources/higher-privilege-agent-infra|Higher Privilege Agent Infra]], [[ai-agent-architecture/sources/memory-is-the-harness|Memory Is the Harness]]
