---
title: "Private Deployment Architecture"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# Private Deployment Architecture

## Definition
<div class="zh-trans">定义</div>

Private deployment architecture refers to the technical patterns and infrastructure for running AI agents entirely within an enterprise's own data centers or private cloud, without relying on public cloud services or external APIs.
<div class="zh-trans">私有化部署架构是指在企业的自有数据中心或私有云中完全运行 AI Agent 的技术模式与基础设施，无需依赖公有云服务或外部 API。</div>

## Details
<div class="zh-trans">详情</div>

Private deployment is the dominant model for enterprise agents in China, driven by regulatory requirements and security concerns. The architecture consists of four layers:
<div class="zh-trans">受监管要求和安全顾虑的驱动，私有化部署是中国企业 Agent 的主流模式。其架构由以下四层组成：</div>

**1. Infrastructure Layer**
- **Compute**: On-premise GPU clusters or domestic cloud (Alibaba, Tencent, Huawei)
- **Storage**: Distributed file systems for model weights and training data
- **Network**: Isolated VPC with no internet egress for sensitive workloads
- **Hardware**: Domestic alternatives (Huawei Ascend NPU) to reduce foreign dependency
<div class="zh-trans">**1. 基础设施层**
- **计算**：本地 GPU 集群或国内云（阿里、腾讯、华为）
- **存储**：用于存储模型权重和训练数据的分布式文件系统
- **网络**：针对敏感工作负载的无互联网出口隔离 VPC
- **硬件**：国产替代方案（华为昇腾 NPU），以降低对外依赖</div>

**2. Model Layer**
- **LLM hosting**: Self-hosted Qianwen, ERNIE, GLM, or Pangu models
- **Model serving**: vLLM, TensorRT-LLM for inference optimization
- **Fine-tuning**: LoRA adapters for domain-specific customization
- **Version control**: Model registry for tracking and rollback
<div class="zh-trans">**2. 模型层**
- **LLM hosting**：自托管 Qianwen、ERNIE、GLM 或 Pangu 模型
- **Model serving**：使用 vLLM、TensorRT-LLM 进行推理优化
- **Fine-tuning**：利用 LoRA adapters 进行领域定制
- **Version control**：使用 Model Registry 进行跟踪与回滚</div>

**3. Agent Runtime Layer**
- **Orchestration**: OpenClaw or proprietary frameworks
- **Skill registry**: Internal catalog of approved skills
- **Harness**: Permission enforcement, audit logging, rate limiting
- **Sandbox**: Firecracker microVMs for isolated execution
<div class="zh-trans">**3. Agent Runtime Layer**
- **编排**：OpenClaw 或专有框架
- **技能注册表**：已审批技能的内部目录
- **Harness**：权限管控、审计日志、速率限制
- **沙箱**：Firecracker microVMs 用于隔离执行</div>

**4. Integration Layer**
- **Enterprise systems**: Connectors for ERP, CRM, HRIS
- **Authentication**: LDAP/AD integration, SSO support
- **Monitoring**: OpenTelemetry for observability
- **Compliance**: Audit logs for MLPS 2.0, PIPL requirements
<div class="zh-trans">**4. 集成层**
- **企业系统**：适用于 ERP、CRM、HRIS 的连接器
- **身份认证**：LDAP/AD 集成，支持 SSO
- **可观测性**：基于 OpenTelemetry 的监控
- **合规性**：满足 MLPS 2.0 和 PIPL 要求的审计日志</div>

**Deployment Patterns**
<div class="zh-trans">部署模式</div>

**Pattern A: Full On-Premise**
- All components run in enterprise data center
- No external dependencies
- Highest security, highest cost
- Typical for: Government, finance, defense
<div class="zh-trans">**模式 A：全本地部署**
- 所有组件均运行于企业数据中心
- 无外部依赖
-安全性最高，成本最高
- 典型场景：政府、金融、国防</div>

**Pattern B: Hybrid Cloud**
- Non-sensitive workloads on domestic cloud
- Sensitive data and models on-premise
- Balance of cost and security
- Typical for: Manufacturing, retail, healthcare
<div class="zh-trans">**模式 B：混合云**
- 非敏感工作负载部署于国内云端
- 敏感数据与模型部署于本地 (On-premise)
- 平衡成本与安全性
- 典型适用场景：制造业、零售业、医疗行业</div>

**Pattern C: Private Cloud**
- Dedicated VPC on Alibaba/Tencent/Huawei Cloud
- Isolated from other tenants
- Compliance with data localization
- Typical for: Tech companies, startups
<div class="zh-trans">**模式 C：私有云**
- 基于 Alibaba/Tencent/Huawei Cloud 的专用 VPC
- 与其他租户隔离
- 符合数据本地化合规要求
- 典型用户：科技公司、初创企业</div>

**Key Challenges**
- **GPU shortage**: Limited access to NVIDIA hardware, domestic alternatives immature
- **Talent gap**: Shortage of engineers who can deploy and maintain infrastructure
- **Cost**: 10-100x more expensive than public cloud APIs
- **Maintenance**: Model updates, security patches, infrastructure upgrades
<div class="zh-trans">**核心挑战**
- **GPU 短缺**：NVIDIA 硬件获取受限，国产替代方案尚不成熟
- **人才缺口**：缺乏能够部署和维护基础设施的工程师
- **成本**：比公有云 API 贵 10 到 100 倍
- **维护**：模型更新、安全补丁、基础设施升级</div>

**Drivers for Private Deployment**
- **Regulatory**: MLPS 2.0 (Multi-Level Protection Scheme), PIPL (Personal Information Protection Law)
- **Security**: Prevent data exfiltration, IP theft
- **Control**: Full ownership of models and data
- **Sovereignty**: Reduce dependency on foreign technology
<div class="zh-trans">**私有化部署的驱动因素**
- **合规性**：MLPS 2.0（多级保护方案）、PIPL（个人信息保护法）
- **安全性**：防止数据泄露和 IP 盗窃
- **控制权**：完全拥有模型和数据
- **主权**：减少对外国技术的依赖</div>

## Connections
<div class="zh-trans">连接</div>

- Related to: [[enterprise-agent-china/concepts/on-prem-infra|On-Premise Infrastructure]], [[enterprise-agent-china/concepts/china-agent-landscape|China Agent Landscape]], [[ai-agent-architecture/concepts/harness|Harness]]
- Mentioned in: [[enterprise-agent-china/sources/china-enterprise-agent-landscape|China Enterprise Agent Landscape]], [[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]
<div class="zh-trans">- 出现于：[[enterprise-agent-china/sources/china-enterprise-agent-landscape|China Enterprise Agent Landscape]]，[[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]</div>
