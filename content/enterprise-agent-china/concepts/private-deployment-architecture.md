---
title: "Private Deployment Architecture"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# Private Deployment Architecture

## Definition

Private deployment architecture refers to the technical patterns and infrastructure for running AI agents entirely within an enterprise's own data centers or private cloud, without relying on public cloud services or external APIs.

## Details

Private deployment is the dominant model for enterprise agents in China, driven by regulatory requirements and security concerns. The architecture consists of four layers:

**1. Infrastructure Layer**
- **Compute**: On-premise GPU clusters or domestic cloud (Alibaba, Tencent, Huawei)
- **Storage**: Distributed file systems for model weights and training data
- **Network**: Isolated VPC with no internet egress for sensitive workloads
- **Hardware**: Domestic alternatives (Huawei Ascend NPU) to reduce foreign dependency

**2. Model Layer**
- **LLM hosting**: Self-hosted Qianwen, ERNIE, GLM, or Pangu models
- **Model serving**: vLLM, TensorRT-LLM for inference optimization
- **Fine-tuning**: LoRA adapters for domain-specific customization
- **Version control**: Model registry for tracking and rollback

**3. Agent Runtime Layer**
- **Orchestration**: OpenClaw or proprietary frameworks
- **Skill registry**: Internal catalog of approved skills
- **Harness**: Permission enforcement, audit logging, rate limiting
- **Sandbox**: Firecracker microVMs for isolated execution

**4. Integration Layer**
- **Enterprise systems**: Connectors for ERP, CRM, HRIS
- **Authentication**: LDAP/AD integration, SSO support
- **Monitoring**: OpenTelemetry for observability
- **Compliance**: Audit logs for MLPS 2.0, PIPL requirements

**Deployment Patterns**

**Pattern A: Full On-Premise**
- All components run in enterprise data center
- No external dependencies
- Highest security, highest cost
- Typical for: Government, finance, defense

**Pattern B: Hybrid Cloud**
- Non-sensitive workloads on domestic cloud
- Sensitive data and models on-premise
- Balance of cost and security
- Typical for: Manufacturing, retail, healthcare

**Pattern C: Private Cloud**
- Dedicated VPC on Alibaba/Tencent/Huawei Cloud
- Isolated from other tenants
- Compliance with data localization
- Typical for: Tech companies, startups

**Key Challenges**
- **GPU shortage**: Limited access to NVIDIA hardware, domestic alternatives immature
- **Talent gap**: Shortage of engineers who can deploy and maintain infrastructure
- **Cost**: 10-100x more expensive than public cloud APIs
- **Maintenance**: Model updates, security patches, infrastructure upgrades

**Drivers for Private Deployment**
- **Regulatory**: MLPS 2.0 (Multi-Level Protection Scheme), PIPL (Personal Information Protection Law)
- **Security**: Prevent data exfiltration, IP theft
- **Control**: Full ownership of models and data
- **Sovereignty**: Reduce dependency on foreign technology

## Connections

- Related to: [[enterprise-agent-china/concepts/on-prem-infra|On-Premise Infrastructure]], [[enterprise-agent-china/concepts/china-agent-landscape|China Agent Landscape]], [[ai-agent-architecture/concepts/harness|Harness]]
- Mentioned in: [[enterprise-agent-china/sources/china-enterprise-agent-landscape|China Enterprise Agent Landscape]], [[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]
