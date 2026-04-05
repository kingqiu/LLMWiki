---
title: "Agent Security"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agent Security

## Definition

Agent security encompasses the attack vectors, vulnerabilities, and defense strategies specific to AI agent systems. The risk profile has shifted from "saying wrong things" (hallucinations) to "doing wrong things" (unauthorized actions, privilege escalation, credential theft).

## Details

### OWASP Agentic Top 10 (2026)

The OWASP foundation published the Agentic Top 10, treating agents as active non-human identities (NHI) whose attack surface spans endpoints, API gateways, SaaS platforms, and the identity layer.

### Skill-Based Attack Vectors (Grisha / Sentry)

| Attack Type | Success Rate | Persistence |
|-------------|-------------|-------------|
| Trojan bash scripts | 100% | Per-session |
| Memory poisoning | 96% | **Cross-session** (persistent) |
| Context poisoning (HTML comments, PNG metadata) | 100% | Per-activation |
| Hook exploitation | Variable | Per-session |
| Symlink exfiltration | Variable | Per-session |

**Memory poisoning** is especially dangerous: it modifies global files like `~/.claude/CLAUDE.md`, persists even after the malicious skill is removed, and operates outside the git tree.

### Key Findings

- All tested models (including Opus 4.6 and Codex 5.3) were reliably misled by context poisoning
- A Claude Code agent once disabled its own container sandbox
- 79% of multi-agent failures originate in the orchestration layer (UC Berkeley MAST)

### Defense Strategies

1. Use only trusted, self-written or well-vetted skills
2. Never let agents auto-discover skills from untrusted sources
3. Avoid `--dangerously-skip-permissions`
4. Use skill scanners (Snyk, Sentry)
5. Default to hardware-level isolation (Firecracker microVMs)
6. Implement least-privilege per tool call
7. Use ephemeral credentials via Vault

## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]], [[ai-agent-architecture/concepts/skills|Skills]]
- Mentioned in: [[ai-agent-architecture/sources/dangerous-skills|Dangerous Skills]], [[ai-agent-architecture/sources/higher-privilege-agent-infra|Higher Privilege Agent Infra]]
