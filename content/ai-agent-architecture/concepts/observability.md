---
title: "Agent Observability"
date: 2026-04-06
tags: [concept, ai-agent-architecture]
---

# Agent Observability

## Definition

Agent observability is the practice of monitoring, tracing, and evaluating LLM agents in production by capturing their reasoning chains, tool invocations, and decision points—enabling debugging, performance optimization, and quality assurance for non-deterministic agentic systems.

<div class="zh-trans">智能体可观测性是在生产环境中监控、追踪和评估 LLM 智能体的实践，通过捕获其推理链、工具调用和决策点，实现对非确定性智能体系统的调试、性能优化和质量保证。</div>

## Details

Agent observability differs fundamentally from traditional Application Performance Monitoring (APM). While APM focuses on system-level metrics (latency, error rates, infrastructure), agent observability must handle the non-deterministic, multi-step nature of AI reasoning.

<div class="zh-trans">智能体可观测性与传统应用性能监控（APM）有本质区别。APM 关注系统级指标（延迟、错误率、基础设施），而智能体可观测性必须处理 AI 推理的非确定性、多步骤特性。</div>

### Core Pillars

**1. Distributed Tracing**
Every step—LLM calls, tool invocations, decision points—is captured as a "span" in a trace. This reconstructs the exact chain of thought that led to an output. OpenTelemetry (OTel) is the emerging standard.

<div class="zh-trans">分布式追踪：每一步（LLM 调用、工具调用、决策点）都作为追踪中的"跨度"被捕获。这重建了导致输出的确切思维链。OpenTelemetry（OTel）是新兴标准。</div>

**2. Input/Output Monitoring**
Track not just system state but the *data*: prompts, completions, tool results. Key metrics include tool call failure rates, token usage per reasoning step, and latency breakdowns.

<div class="zh-trans">输入/输出监控：不仅追踪系统状态，还追踪数据：提示、完成、工具结果。关键指标包括工具调用失败率、每个推理步骤的 token 使用量和延迟分解。</div>

**3. Evaluation & Feedback Loops**
- **Automated Evals**: Detect hallucinations, factuality errors, toxic content in production
- **Production-to-Dataset Pipeline**: Convert real-world traces into test cases for regression suites

<div class="zh-trans">评估与反馈循环：自动评估（检测生产中的幻觉、事实错误、有毒内容）、生产到数据集管道（将真实世界追踪转换为回归测试用例）。</div>

**4. Guardrails**
Real-time monitoring for PII leakage, prompt injection attempts, and policy violations.

<div class="zh-trans">护栏：实时监控 PII 泄露、提示注入尝试和策略违规。</div>

### Key Metrics

Beyond technical metrics, focus on **quality and business metrics**:
- **Task Completion Rate**: Did the agent achieve the user's goal?
- **Hallucination Rate**: Frequency of factually incorrect outputs
- **Cost-per-Task**: Token consumption patterns across agent pathways
- **Tool Usage Efficiency**: Which tools are called, how often do they fail?

<div class="zh-trans">关键指标：除技术指标外，关注质量和业务指标：任务完成率（智能体是否达成用户目标）、幻觉率（事实错误输出频率）、每任务成本（智能体路径的 token 消耗模式）、工具使用效率（调用哪些工具，失败频率）。</div>

## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]] (harness provides the instrumentation layer for observability)
- Related to: [[ai-agent-architecture/concepts/agent-security|Agent Security]] (observability detects security violations)
- Mentioned in: [[ai-agent-architecture/sources/dangerous-skills|Dangerous Skills]]

---

*Sources added by Heal on 2026-04-06:*
- [LangChain - Agent Observability](https://langchain.com) · 2026-04
- [Datadog - LLM Observability](https://datadoghq.com) · 2026-04
- [Medium - Production Agent Monitoring](https://medium.com) · 2026-04
