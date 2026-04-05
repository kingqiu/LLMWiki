---
title: "Sandbox Architectures"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Sandbox Architectures

## Definition

Isolation patterns that contain AI agent execution within controlled boundaries, preventing unauthorized access to production systems. The choice of sandbox technology involves clear trade-offs between isolation strength, startup latency, and ecosystem maturity.

## Details

### Two Fundamental Patterns (Harrison Chase / LangChain)

| Pattern | How It Works | Isolation | Latency | Used By |
|---------|-------------|-----------|---------|---------|
| **Agent-Inside-Sandbox** | Agent runs inside the sandbox | Lower | Lower | OpenAI Assistants, Claude Code |
| **Sandbox-As-Tool** | Sandbox is a remote tool called via API | Higher | Higher | DeerFlow 2.0, E2B |

### Technology Comparison

| Technology | Startup Time | Isolation Level | Ecosystem |
|-----------|-------------|----------------|-----------|
| Docker containers | ~50ms | Weak (shared kernel) | Mature |
| gVisor | ~100ms | Medium (user-space kernel) | Growing |
| Firecracker microVMs | ~150-500ms | **Hardware-level** | Growing |
| Kata Containers | ~200ms | Hardware-level | Moderate |
| WebAssembly (WASM) | **<10ms** | High | **Immature** |

### Real-World Products

- **NVIDIA OpenShell**: Kernel-level security via Landlock and Seccomp
- **DeerFlow 2.0** (ByteDance): Per-task Docker containers with independent filesystems, shells, and browsers (37k+ GitHub stars)
- **AWS Bedrock AgentCore**: Managed sandbox service

### Why Hardware Isolation Matters

A real incident where a Claude Code agent disabled its own container sandbox demonstrates that software-level isolation is insufficient for high-privilege agents. Firecracker microVMs provide the recommended default for production use.

## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- Mentioned in: [[ai-agent-architecture/sources/harness-deep-dive|Harness Deep Dive]], [[ai-agent-architecture/sources/higher-privilege-agent-infra|Higher Privilege Agent Infra]]
