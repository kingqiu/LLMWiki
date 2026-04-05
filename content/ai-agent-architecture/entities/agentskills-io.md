---
title: "AgentSkills.io"
date: 2026-04-05
tags: [entity, ai-agent]
entity_type: platform
---

# AgentSkills.io

## Overview
AgentSkills.io is the first public marketplace for discoverable, installable AI agent skills following the SKILL.md format specification. Launched in early 2026, the platform enables developers and enterprises to publish, version, and distribute skills compatible with any SKILL.md-compliant agent runtime.

## Key Facts
- **Founded**: Early 2026
- **Model**: Freemium marketplace with enterprise governance tier
- **Format**: npm-style semantic versioning for SKILL.md packages
- **Discovery**: Embedding-based semantic search over skill capability descriptions
- **Scale**: Growing catalog of community and enterprise skills; community contributors 10:1 vs enterprise contributors

## Architecture
- Public registry API for skill search and installation
- Semantic similarity search (agents can find skills by describing what they need)
- Enterprise tier: private registries, skill approval workflows, audit logs
- Versioning with dependency declarations following npm conventions

## Significance
AgentSkills.io represents the emergence of a skills distribution layer analogous to npm for code packages. The platform creates network effects: more skills attract more agents, attracting more publishers. The governance tier positions it for regulated enterprise markets.

## Key Tension
Community skills ship faster but lack security review; enterprise skills are safer but lag innovation by 3-6 months. This quality/speed tradeoff is a core market structure challenge.

## Related Sources
- [[ai-agent-architecture/sources/agentskills-io-ecosystem|AgentSkills.io Ecosystem Overview]]
- [[ai-agent-architecture/sources/dangerous-skills|Dangerous Skills: Red-Teaming Agent Capabilities]]

## Related Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
