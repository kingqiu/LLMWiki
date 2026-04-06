---
title: "agentskills.io"
date: 2026-04-06
tags: [entity, enterprise-agent-china]
---

# agentskills.io

## Overview

agentskills.io is the leading open standard for agent skill interoperability, with 20+ platforms, 100K+ installs, and 500+ published skills. It provides the specification, SDK, and public registry for cross-platform skill distribution.

## Details

**Mission**: "Write once, run everywhere" for agent skills

**Key Components**
- **Specification**: JSON schema for skill manifests, execution protocol, registry API
- **skills-ref SDK**: Reference implementations in Python, TypeScript, Go
- **Public registry**: Centralized catalog of open-source skills
- **Community governance**: Technical steering committee, open contribution model

**Adoption Metrics (Q1 2026)**
- 20+ platforms supporting the standard
- 100K+ total skill installs across platforms
- 500+ published skills in public registry
- 15+ enterprise private registries deployed

**Supported Platforms**
- Claude Code
- OpenClaw
- Windsurf
- Cursor
- Cline
- Continue
- Aider
- 13+ others

**Skill Manifest Format**
```json
{
  "name": "github-pr-review",
  "version": "2.1.0",
  "description": "Review GitHub pull requests with AI analysis",
  "permissions": ["github:read", "github:write"],
  "dependencies": ["github-api@^3.0.0"],
  "platforms": ["claude-code", "openclaw"],
  "author": "community",
  "license": "MIT"
}
```

**Registry API**
- `GET /api/skills` - List all skills
- `GET /api/skills/{name}` - Get skill details
- `GET /api/skills/{name}/versions` - List versions
- `POST /api/skills` - Publish new skill (requires auth)
- `DELETE /api/skills/{name}` - Unpublish skill

**Security Model**
- Explicit permission declarations
- User approval flows for sensitive permissions
- Sandboxed execution
- Audit hooks for compliance

**China Adoption**
- Used by domestic platforms (Coze, DingTalk AI)
- Private registries hosted on Alibaba Cloud, Tencent Cloud
- Compliance with MLPS 2.0 through audit logging
- Localized documentation and examples

**Competitive Landscape**
- **MCP (Model Context Protocol)**: Anthropic's tool protocol, higher token overhead
- **LangChain Tools**: Python-specific, not cross-platform
- **OpenAI Function Calling**: OpenAI-specific, not portable

**Advantages**
- Platform-agnostic: Skills work across 20+ platforms
- Open governance: Community-driven, not vendor-controlled
- Low overhead: Minimal token usage compared to MCP
- Proven scale: 100K+ installs demonstrate viability

## Connections

- Related to: [[enterprise-agent-china/concepts/skill-registry|Skill Registry]], [[enterprise-agent-china/concepts/skill-factory-layers|Skill Factory Layers]]
- Mentioned in: [[enterprise-agent-china/sources/agentskills-io-analysis|agentskills.io Analysis]], [[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]]
