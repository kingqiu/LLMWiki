---
title: "Skill Registry"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# Skill Registry

## Definition

A skill registry is a centralized catalog service that stores, indexes, and distributes agent skills with metadata, versioning, and access control. It serves as the "npm for agent skills."

## Details

Skill registries solve the distribution and discovery problem for agent capabilities. Instead of hardcoding tools into agents, registries enable dynamic skill acquisition at runtime.

**Core Components**

**1. Metadata Schema**
```json
{
  "name": "enterprise-user-management",
  "version": "1.2.0",
  "description": "Create, update, delete users in enterprise directory",
  "permissions": ["users:read", "users:write"],
  "dependencies": ["ldap-connector@^2.0.0"],
  "platforms": ["claude-code", "openclaw", "windsurf"],
  "author": "IT Department",
  "license": "proprietary"
}
```

**2. Registry API**
- `GET /skills` - List available skills
- `GET /skills/{name}` - Get skill details
- `GET /skills/{name}/versions` - List versions
- `POST /skills` - Publish new skill
- `DELETE /skills/{name}` - Unpublish skill

**3. Access Control**
- **Public registry**: Open skills (agentskills.io)
- **Private registry**: Enterprise-only skills
- **Role-based access**: Different skills for different user roles
- **Approval workflows**: Skills require review before publication

**4. Versioning**
- Semantic versioning (major.minor.patch)
- Compatibility declarations
- Deprecation warnings
- Automatic updates vs. pinned versions

**Registry Types**

**Public Registries**
- **agentskills.io**: 500+ skills, 100K+ installs, 20+ platforms
- **OpenClaw Registry**: Focus on open-source skills
- **Hugging Face Spaces**: Experimental skills and demos

**Private Registries**
- **Enterprise registries**: Internal skills for proprietary systems
- **Compliance**: Audit logs, approval workflows
- **Air-gapped**: No external dependencies for secure environments
- **Examples**: Alibaba Cloud ModelScope, Tencent Cloud AI Gallery

**China-Specific Considerations**
- **Domestic hosting**: Registries must be hosted in China for compliance
- **Content review**: Skills may require government approval
- **Vendor lock-in**: Platform-specific registries (DingTalk, Feishu)
- **Open source preference**: Government encourages domestic open-source alternatives

**Implementation Patterns**

**Pattern A: Centralized Registry**
- Single source of truth
- Easier governance and compliance
- Single point of failure
- Example: Alibaba Cloud ModelScope

**Pattern B: Federated Registry**
- Multiple registries with cross-references
- Resilience and redundancy
- Complex synchronization
- Example: agentskills.io + private enterprise registries

**Pattern C: Embedded Registry**
- Skills bundled with agent platform
- No external dependencies
- Limited sharing across platforms
- Example: Claude Code skills directory

**Key Challenges**
- **Quality control**: How to prevent malicious or buggy skills
- **Discovery**: How users find relevant skills among thousands
- **Versioning conflicts**: Dependency hell when skills require incompatible versions
- **Performance**: Registry lookups add latency to agent execution

## Connections

- Related to: [[enterprise-agent-china/concepts/skill-factory-layers|Skill Factory Layers]], [[enterprise-agent-china/entities/agentskills-io|agentskills.io]]
- Mentioned in: [[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]], [[enterprise-agent-china/sources/agentskills-io-analysis|agentskills.io Analysis]]
