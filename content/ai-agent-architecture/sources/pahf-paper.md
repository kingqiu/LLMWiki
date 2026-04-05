---
title: "PAHF: Privileged Agent Harness Framework Paper"
date: 2026-04-05
tags: [source, ai-agent]
source_type: paper
source_path: "Learning/research/20260325_pahf_paper.md"
---

# PAHF: Privileged Agent Harness Framework Paper

## Key Takeaways
- PAHF: formal framework for defining privilege levels in agent harness systems
- Three privilege tiers: read-only, write-sandboxed, write-production
- Privilege escalation requires explicit human authorization plus audit trail
- Formal verification of privilege boundaries in Firecracker microVM configurations
- PAHF adoption reduces privilege-related incidents by 89% in controlled deployment study
<div class="zh-trans">- PAHF：用于定义智能体管控系统中特权等级的形式化框架
- 三层特权层级：只读、写入-沙箱、写入-生产
- 特权提升需要明确的人工授权及审计追踪
- 针对 Firecracker microVM 配置中特权边界的形式化验证
- 在受控部署研究中，采用 PAHF 使特权相关事件减少了 89%</div>


## Summary
The Privileged Agent Harness Framework (PAHF) provides a formal specification for tiered privilege management in production agent systems. The core contribution is a three-tier model that maps agent capabilities to real-world impact:

- **Tier 1 (Read-Only)**: agent can observe system state, retrieve data, generate outputs for human review — no production side effects
- **Tier 2 (Write-Sandboxed)**: agent can modify state within an isolated environment that mirrors production but has no external impact — changes are staged for human approval
- **Tier 3 (Write-Production)**: agent can directly modify production systems — requires explicit human authorization per session and comprehensive audit logging
<div class="zh-trans">- **第 1 级（只读）**：智能体能够观察系统状态、检索数据并生成供人工审查的输出——不会对生产环境产生副作用
- **第 2 级（写入沙箱）**：智能体能够在镜像生产环境的隔离环境中修改状态，但不会产生外部影响——变更将被暂存以供人工批准
- **第 3 级（写入生产）**：智能体能够直接修改生产系统——要求每次会话均需获得明确的人工授权，并进行全面的审计日志记录</div>


The framework's technical contribution is a formal verification approach for Firecracker microVM configurations, proving at the hypervisor level that Tier 1 and Tier 2 agents cannot escape their privilege boundaries regardless of LLM output. This addresses the "jailbreak-to-privilege-escalation" attack vector.
<div class="zh-trans">该框架的技术贡献是针对 Firecracker microVM 配置的形式化验证方法，在 hypervisor 层面证明了无论 LLM 输出如何，Tier 1 和 Tier 2 代理都无法突破其权限边界。这解决了“越狱到权限提升”攻击向量。</div>


The deployment study (n=47 enterprise deployments) shows 89% reduction in privilege-related security incidents after PAHF adoption, primarily by eliminating the common pattern of agents with Tier 3 privileges being used for Tier 1 tasks.
<div class="zh-trans">这项部署研究（n=47 个企业部署）表明，采用 PAHF 后，与权限相关的安全事件减少了 89%，这主要得益于消除了使用拥有三级权限的代理来执行一级任务的常见模式。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]
