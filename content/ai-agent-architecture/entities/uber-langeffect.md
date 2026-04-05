---
title: "Uber LangEffect"
date: 2026-04-05
tags: [entity, ai-agent]
entity_type: framework
---

# Uber LangEffect

## Overview
Uber LangEffect is Uber's internal framework for tracking and reversing agent-caused side effects in production systems. Developed to solve the problem of agents failing mid-task and leaving production systems in inconsistent states, LangEffect adapts the distributed systems Saga pattern for agentic workflows.
<div class="zh-trans">Uber LangEffect 是 Uber 的内部框架，用于追踪并撤销生产系统中由智能体引发的副作用。该框架旨在解决智能体在任务执行中途失败从而导致生产系统处于不一致状态的问题，它将分布式系统中的 Saga 模式适配应用于智能体工作流。</div>


## Key Facts
- **Organization**: Uber (internal framework, publicly documented)
- **Problem Solved**: Atomic rollback of agent-caused side effects across long-running tasks
- **Pattern**: Saga pattern adapted for LLM agent workflows
- **Production Result**: 99.2% successful rollback rate over 6 months
- **Scope**: Production deployment on rider matching, driver assignment, payment systems
<div class="zh-trans">- **组织**：Uber（内部框架，已公开文档）- **解决的问题**：跨长时运行任务的智能体引发副作用（side effects）的原子性回滚 - **模式**：适配 LLM 智能体工作流的 Saga 模式 - **生产环境结果**：6 个月内实现 99.2% 的回滚成功率 - **范围**：在生产环境部署于乘客匹配、司机分配及支付系统</div>


## Technical Design

### Effect Log
Every agent tool call is intercepted by LangEffect middleware and registered in an effect log with two entries:
1. The forward action (what was done)
2. The compensating transaction (how to undo it)
<div class="zh-trans">每一个智能体工具调用都会被 LangEffect 中间件拦截，并在效应日志中注册两个条目：1. 正向动作（做了什么） 2. 补偿事务（如何撤销）。</div>


### Compensating Transaction Sources
- **Pre-specified**: For known operations (cancel payment → refund)
- **LLM-generated**: For novel operations, with human review for high-value compensations
- **Non-compensable flag**: Operations that cannot be reversed, requiring human intervention
<div class="zh-trans">- **预定义**：适用于已知操作（如：取消支付 → 退款）
- **LLM生成**：适用于新颖操作，针对高额补偿需人工审核
- **不可补偿标记**：适用于无法逆转的操作，需人工介入</div>


### Rollback Execution
When an agent task fails or is interrupted, LangEffect executes compensating transactions in reverse chronological order, unwinding the agent's actions to restore a known-good state.
<div class="zh-trans">当智能体任务失败或被中断时，LangEffect 会按逆时间顺序执行补偿事务，回滚智能体的操作以恢复至已知良好状态。</div>


## Significance
LangEffect addresses the reliability problem that blocks enterprise adoption of agentic systems: the inability to safely interrupt or recover from failed multi-step agent tasks. The 99.2% rollback success rate demonstrates that production-grade agent reliability is achievable with the right infrastructure.
<div class="zh-trans">LangEffect 解决了阻碍企业采用智能体系统的可靠性难题：即无法安全中断失败的多步骤智能体任务或从中恢复。99.2% 的回滚成功率表明，依托适当的基础设施，生产级智能体可靠性是可以实现的。</div>


## Limitation
0.8% of cases are non-compensable — external systems processed the agent's actions beyond reversal. These cases require human intervention, highlighting that some agent actions remain fundamentally irreversible regardless of framework sophistication.
<div class="zh-trans">0.8%的案例属于不可补偿——外部系统对智能体（Agent）行为的处理已超出可撤销范围。此类情况需人工介入，这表明无论框架多么精密复杂，智能体的某些行为在本质上仍具有不可逆性。</div>


## Related Sources
- [[ai-agent-architecture/sources/uber-agent|Uber LangEffect: Agent Side Effect Management]]

## Related Concepts
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
