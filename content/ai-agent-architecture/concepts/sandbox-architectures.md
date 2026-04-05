---
title: "Sandbox Architectures"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Sandbox Architectures

## Definition

Isolation patterns that contain AI agent execution within controlled boundaries, preventing unauthorized access to production systems. The choice of sandbox technology involves clear trade-offs between isolation strength, startup latency, and ecosystem maturity.
<div class="zh-trans">将 AI 智能体执行限制在受控边界内的隔离模式，可防止对生产系统的未授权访问。沙箱技术的选择需要在隔离强度、启动延迟和生态系统成熟度之间进行明确的权衡。</div>


## Details

### Two Fundamental Patterns (Harrison Chase / LangChain)

| Pattern | How It Works | Isolation | Latency | Used By |
|---------|-------------|-----------|---------|---------|
| **Agent-Inside-Sandbox** | Agent runs inside the sandbox | Lower | Lower | OpenAI Assistants, Claude Code |
| **Sandbox-As-Tool** | Sandbox is a remote tool called via API | Higher | Higher | DeerFlow 2.0, E2B |
<div class="zh-trans">| 模式 | 工作原理 | 隔离性 | 延迟 | 使用者 |
|---------|-------------|-----------|---------|---------|
| **沙箱内代理 (Agent-Inside-Sandbox)** | 代理在沙箱内部运行 | 较低 | 较低 | OpenAI Assistants, Claude Code |
| **沙箱即工具 (Sandbox-As-Tool)** | 沙箱是通过 API 调用的远程工具 | 较高 | 较高 | DeerFlow 2.0, E2B |</div>


### Technology Comparison

| Technology | Startup Time | Isolation Level | Ecosystem |
|-----------|-------------|----------------|-----------|
| Docker containers | ~50ms | Weak (shared kernel) | Mature |
| gVisor | ~100ms | Medium (user-space kernel) | Growing |
| Firecracker microVMs | ~150-500ms | **Hardware-level** | Growing |
| Kata Containers | ~200ms | Hardware-level | Moderate |
| WebAssembly (WASM) | **<10ms** | High | **Immature** |
<div class="zh-trans">| 技术 | 启动时间 | 隔离级别 | 生态系统 |
|-----------|-------------|----------------|-----------|
| Docker 容器 | ~50ms | 弱 (共享内核) | 成熟 |
| gVisor | ~100ms | 中 (用户空间内核) | 增长中 |
| Firecracker microVMs | ~150-500ms | **硬件级** | 增长中 |
| Kata Containers | ~200ms | 硬件级 | 适中 |
| WebAssembly (WASM) | **<10ms** | 高 | **不成熟** |</div>


### Real-World Products

- **NVIDIA OpenShell**: Kernel-level security via Landlock and Seccomp
- **DeerFlow 2.0** (ByteDance): Per-task Docker containers with independent filesystems, shells, and browsers (37k+ GitHub stars)
- **AWS Bedrock AgentCore**: Managed sandbox service
<div class="zh-trans">- **NVIDIA OpenShell**：通过 Landlock 和 Seccomp 实现内核级安全
- **DeerFlow 2.0** (ByteDance)：具备独立文件系统、Shell 和浏览器的按任务 Docker 容器（GitHub Star 数 37k+）
- **AWS Bedrock AgentCore**：托管式沙箱服务</div>


### Why Hardware Isolation Matters

A real incident where a Claude Code agent disabled its own container sandbox demonstrates that software-level isolation is insufficient for high-privilege agents. Firecracker microVMs provide the recommended default for production use.
<div class="zh-trans">一起 Claude Code 代理禁用其自身容器沙箱的真实事件表明，软件级隔离对于高权限代理而言是不够的。Firecracker microVM 提供了生产环境推荐使用的默认配置。</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- Mentioned in: [[ai-agent-architecture/sources/harness-deep-dive|Harness Deep Dive]], [[ai-agent-architecture/sources/higher-privilege-agent-infra|Higher Privilege Agent Infra]]
<div class="zh-trans">相关于：[[ai-agent-architecture/concepts/harness|Harness]]、[[ai-agent-architecture/concepts/agent-security|Agent Security]] - 提及于：[[ai-agent-architecture/sources/harness-deep-dive|Harness 深度剖析]]、[[ai-agent-architecture/sources/higher-privilege-agent-infra|高权限 Agent 基础设施]]</div>

