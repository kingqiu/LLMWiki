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

## Summary
The Privileged Agent Harness Framework (PAHF) provides a formal specification for tiered privilege management in production agent systems. The core contribution is a three-tier model that maps agent capabilities to real-world impact:

- **Tier 1 (Read-Only)**: agent can observe system state, retrieve data, generate outputs for human review — no production side effects
- **Tier 2 (Write-Sandboxed)**: agent can modify state within an isolated environment that mirrors production but has no external impact — changes are staged for human approval
- **Tier 3 (Write-Production)**: agent can directly modify production systems — requires explicit human authorization per session and comprehensive audit logging

The framework's technical contribution is a formal verification approach for Firecracker microVM configurations, proving at the hypervisor level that Tier 1 and Tier 2 agents cannot escape their privilege boundaries regardless of LLM output. This addresses the "jailbreak-to-privilege-escalation" attack vector.

The deployment study (n=47 enterprise deployments) shows 89% reduction in privilege-related security incidents after PAHF adoption, primarily by eliminating the common pattern of agents with Tier 3 privileges being used for Tier 1 tasks.

## Relevant Concepts
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]
