---
title: "Skill Factory Layers"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# Skill Factory Layers

## Definition

The Skill Factory 7-layer architecture is a reference model for building, testing, and distributing agent skills at enterprise scale. Each layer addresses a specific concern in the skill lifecycle.

## Details

The 7-layer model separates concerns from infrastructure to delivery:

**Layer 1 - Infrastructure**
- **Runtime environments**: Docker, Firecracker microVMs, Kubernetes
- **Sandboxing**: Isolated execution to prevent skill interference
- **Resource limits**: CPU, memory, disk I/O caps per skill
- **Networking**: Controlled egress for external API calls

**Layer 2 - Skill Definition**
- **SKILL.md specification**: Standardized format for skill documentation
- **Metadata schema**: Name, version, permissions, dependencies
- **Versioning**: Semantic versioning with compatibility declarations
- **Progressive disclosure**: ~100 tokens metadata, <5000 tokens body

**Layer 3 - Orchestration**
- **Skill composition**: Chaining multiple skills for complex tasks
- **Dependency resolution**: Installing required dependencies
- **Execution planning**: Determining skill invocation order
- **State management**: Passing data between skills

**Layer 4 - Secure Execution**
- **Permission enforcement**: Check ACLs before skill execution
- **Audit logging**: Record all skill invocations with context
- **Rollback mechanisms**: Undo actions when errors detected
- **Timeout controls**: Prevent runaway skills

**Layer 5 - Behavioral Observability**
- **OpenTelemetry integration**: Distributed tracing for skill execution
- **Performance metrics**: Latency, throughput, error rates
- **Error tracking**: Structured logging for debugging
- **Usage analytics**: Which skills are used, by whom, how often

**Layer 6 - Governance**
- **Approval workflows**: Skills require review before publication
- **Compliance checks**: Validate skills meet security policies
- **Access control**: Role-based permissions for skill usage
- **Deprecation**: Sunset old skills with migration paths

**Layer 7 - Delivery**
- **Registry APIs**: Publish and discover skills
- **Package management**: Install, update, uninstall skills
- **Update distribution**: Push updates to deployed agents
- **Rollback**: Revert to previous skill versions

**6-Phase Build Workflow**

The factory uses a standardized workflow for skill development:

**Phase 1 - Spec**
- Define requirements and interface
- Identify permissions needed
- Document expected inputs/outputs

**Phase 2 - Scaffold**
- Generate boilerplate from templates
- Set up testing infrastructure
- Configure CI/CD pipeline

**Phase 3 - Implement**
- Write core logic with security boundaries
- Handle errors and edge cases
- Optimize for token efficiency

**Phase 4 - Test**
- Unit tests for individual functions
- Integration tests in sandbox
- Security tests for permission enforcement

**Phase 5 - Document**
- Generate SKILL.md with examples
- Write usage guides
- Document known limitations

**Phase 6 - Publish**
- Push to registry with semantic versioning
- Announce to users
- Monitor adoption and errors

**Progressive Disclosure Principle**

Skills follow a token budget hierarchy:
- **Metadata**: ~100 tokens (name, description, permissions)
- **Body**: <5000 tokens (full implementation)
- **References**: On-demand (detailed docs, examples)

This ensures skills remain discoverable without overwhelming agent context windows.

**China-Specific Adaptations**
- **Domestic registries**: Skills hosted on Alibaba Cloud, Tencent Cloud
- **Compliance layer**: MLPS 2.0 and PIPL checks built into Layer 6
- **Platform integration**: Skills packaged for DingTalk, Feishu, WeChat
- **Localization**: Documentation in Chinese, examples use domestic services

## Connections

- Related to: [[enterprise-agent-china/concepts/skill-registry|Skill Registry]], [[enterprise-agent-china/entities/agentskills-io|agentskills.io]]
- Mentioned in: [[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]]
