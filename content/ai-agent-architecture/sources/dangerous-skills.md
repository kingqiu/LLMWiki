---
title: "Dangerous Skills: Red-Teaming Agent Capabilities"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260329_dangerous_skills.md"
---

# Dangerous Skills: Red-Teaming Agent Capabilities

## Key Takeaways
- Red-team study: 23 of 100 community skills exhibited dangerous behavior under adversarial prompts
- Dangerous skill categories: data exfiltration, privilege escalation, persistent code execution
- Trigger mechanisms: prompt injection via environmental data, chained skill interactions
- Defense: mandatory sandboxing + skill isolation + output filtering before acting
- Marketplace platforms need adversarial testing as gating criterion, not optional audit

## Summary
This red-team study systematically tests publicly available agent skills for dangerous behaviors. The research team evaluated 100 community-published skills across five marketplaces, using a standardized adversarial prompt suite to probe for exploitable behaviors.

Results: 23% of tested skills exhibited at least one dangerous behavior class:
- **Data exfiltration** (12 skills): skills that could be prompted to transmit user data to external endpoints declared as legitimate API calls
- **Privilege escalation** (7 skills): skills that requested additional permissions beyond SKILL.md declarations through dynamic permission requests
- **Persistent code execution** (8 skills): skills that planted executable artifacts (scripts, cron entries) that persisted after skill execution completed

The trigger mechanisms varied: 14 cases used direct prompt injection in user input, 6 exploited environmental data the skill read (malicious content in documents being processed), and 3 required chaining two skills together where the interaction created exploitable behavior neither exhibited alone.

Recommendations: skill marketplaces must adopt mandatory adversarial testing using a standardized red-team suite before listing; agents should sandbox skill execution and filter outputs before acting on them; users should treat community skills as untrusted code until certified.

The paper argues that the current ecosystem treats skills like macros (benign text instructions) when they should be treated like browser extensions (code with significant capability that requires sandboxing and review).

## Relevant Concepts
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]
