---
title: "AgentSkills.io Ecosystem Overview"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260326_skills-agent-research/agentskills-ecosystem.md"
---

# AgentSkills.io Ecosystem Overview

## Key Takeaways
- AgentSkills.io: first public marketplace for discoverable, installable AI agent skills
- Skills published as SKILL.md directories with semantic versioning
- Category taxonomy: Productivity, Research, Code, Communication, Data, Domain-specific
- Community-contributed skills growing faster than enterprise-contributed
- Revenue model: freemium with enterprise governance tier

## Summary
AgentSkills.io emerged in early 2026 as the first structured marketplace for AI agent skills following the SKILL.md format specification. The platform allows developers and enterprises to publish, version, and distribute skills that any compatible agent runtime can discover and install.

The platform's design follows npm-style ergonomics: skills have semantic versions, dependency declarations, and README documentation. A public registry API allows agents to search skills by capability description using embedding-based similarity search — meaning an agent can find relevant skills without knowing exact skill names.

Early traction shows community contributors outpacing enterprise publishers 10:1, though enterprise skills have significantly higher install rates due to production-grade testing and support SLAs. The governance tier adds audit logs, private registries, and skill approval workflows for regulated industries.

Key tension identified: community skills ship faster but lack enterprise security review; enterprise skills are safer but lag the innovation frontier by 3-6 months.

## Relevant Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]

## Relevant Entities
- [[ai-agent-architecture/entities/agentskills-io|AgentSkills.io]]
