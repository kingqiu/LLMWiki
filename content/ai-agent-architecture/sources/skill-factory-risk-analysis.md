---
title: "Skill Factory Risk Analysis"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260329_Skill能力工厂具体实现框架深度研究.md"
---

# Skill Factory Risk Analysis

## Key Takeaways
- Three critical risk categories: skill poisoning, privilege escalation, supply chain attacks
- Cisco demonstrated live data exfiltration via malicious third-party skill
- Governance gap: most enterprises deploy skills without formal review processes
- Mitigation stack: sandboxing + permission scoping + skill provenance verification
- Enterprise procurement should mandate skill audits before production deployment

## Summary
This analysis extends the Skill Factory framework research with a focused examination of security risks in enterprise skill ecosystems. The central threat model identifies three attack vectors: skill poisoning (injecting malicious instructions into SKILL.md files), privilege escalation (a skill requesting broader permissions than declared), and supply chain attacks (compromised skills distributed through legitimate marketplaces).

The Cisco red-team demonstration — exfiltrating customer data through a seemingly benign OpenClaw skill — illustrates how the "helpful agent" mental model causes security teams to under-scrutinize skill packages. Unlike traditional software, skills operate with natural-language instructions that bypass conventional code review tooling.

Recommended mitigations: mandatory sandbox execution for all third-party skills, permission manifest verification at install time, and human-in-the-loop approval for skills requesting access to production data systems.

## Relevant Concepts
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
