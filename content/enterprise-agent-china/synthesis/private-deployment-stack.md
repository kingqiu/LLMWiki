---
title: "Private Deployment Stack: China Enterprise Architecture"
date: 2026-04-06
tags: [synthesis, enterprise-agent-china]
---

# Private Deployment Stack: China Enterprise Architecture

## Analysis
<div class="zh-trans">分析</div>

This synthesis examines the complete technology stack for private agent deployment in Chinese enterprises, integrating insights from infrastructure, security, compliance, and platform integration.
<div class="zh-trans">本综述考察了中国企业私有化 Agent 部署的完整技术栈，融合了来自基础设施、安全、合规以及平台集成的洞察。</div>

**The Four-Layer Stack**
<div class="zh-trans">**四层 Stack**</div>

Chinese enterprises deploying private agents follow a standardized four-layer architecture:
<div class="zh-trans">中国企业在部署私有 Agent 时，遵循标准化的四层架构：</div>

**Layer 1 - Infrastructure (Hardware + Hosting)**
- **Compute**: Huawei Ascend NPU (domestic) or NVIDIA GPU (if available)
- **Hosting**: Alibaba Cloud VPC, Tencent Cloud, Huawei Cloud, or on-premise data centers
- **Storage**: Distributed file systems (Ceph) for model weights and training data
- **Network**: Isolated VPC with controlled egress, no direct internet access
<div class="zh-trans">**第一层 - 基础设施（硬件 + 托管）**
- **计算**：Huawei Ascend NPU（国产）或 NVIDIA GPU（如可用）
- **托管**：Alibaba Cloud VPC、Tencent Cloud、Huawei Cloud 或本地数据中心
- **存储**：用于存储模型权重和训练数据的分布式文件系统（Ceph）
- **网络**：隔离的 VPC，具有受控的出站访问，无直接互联网连接</div>

**Layer 2 - Model + Serving**
- **LLM**: Qianwen (Alibaba), ERNIE (Baidu), Hunyuan (Tencent), Pangu (Huawei)
- **Inference**: vLLM, TensorRT-LLM for optimization
- **Fine-tuning**: LoRA adapters for domain-specific customization
- **Registry**: Internal model catalog with version control
<div class="zh-trans">**第 2 层 - Model + Serving**
- **LLM**：Qianwen (Alibaba)、ERNIE (Baidu)、Hunyuan (Tencent)、Pangu (Huawei)
- **Inference**：vLLM、TensorRT-LLM，用于优化
- **Fine-tuning**：LoRA adapters，用于特定领域的定制
- **Registry**：内部模型目录，支持版本控制</div>

**Layer 3 - Agent Runtime + Security**
- **Framework**: OpenClaw (open-source) or proprietary
- **Harness**: Permission enforcement, audit logging, rate limiting
- **Sandbox**: Firecracker microVMs for isolated execution
- **Skill registry**: Internal catalog of approved skills
<div class="zh-trans">**第 3 层 - Agent Runtime + 安全**
- **框架**：OpenClaw（开源）或私有
- **Harness**：权限执行、审计日志、速率限制
- **沙箱**：Firecracker microVMs 用于隔离执行
- **技能注册表**：已批准技能的内部目录</div>

**Layer 4 - Integration + Compliance**
- **Enterprise systems**: ERP, CRM, HRIS connectors
- **Platform integration**: DingTalk, Feishu, WeChat Work
- **Monitoring**: OpenTelemetry, Prometheus, Grafana
- **Compliance**: MLPS 2.0 audit logs, PIPL data handling
<div class="zh-trans">**第 4 层 - 集成 + 合规**
- **企业系统**：ERP、CRM、HRIS 连接器
- **平台集成**：钉钉、飞书、企业微信
- **监控**：OpenTelemetry、Prometheus、Grafana
- **合规**：MLPS 2.0 审计日志，PIPL 数据处理</div>

**Three Deployment Patterns**
<div class="zh-trans">三种 Deployment Patterns</div>

**Pattern A: Full On-Premise (Government, Finance, Defense)**
- All four layers in enterprise data center
- Zero external dependencies
- Highest security, highest cost (10-100x vs. cloud)
- Example: Ministry of Finance using Huawei stack
<div class="zh-trans">**模式 A：全本地部署（政府、金融、国防）**
- 四层架构全部位于企业数据中心内
- 零外部依赖
- 安全性最高，成本最高（约为云成本的 10-100 倍）
- 示例：财政部使用华为技术栈</div>

**Pattern B: Hybrid Cloud (Manufacturing, Retail, Healthcare)**
- Layers 1-2 on domestic cloud (Alibaba/Tencent)
- Layers 3-4 on-premise for sensitive data
- Balance of cost and control
- Example: Manufacturing firm using Alibaba Cloud + on-premise harness
<div class="zh-trans">**模式 B：混合云（制造业、零售业、医疗保健）**
- 第 1-2 层部署于国内云平台（阿里云/腾讯云）
- 第 3-4 层本地部署，用于处理敏感数据
- 平衡成本与控制
- 示例：制造企业使用 Alibaba Cloud + 本地 Harness</div>

**Pattern C: Private Cloud (Tech Companies, Startups)**
- All layers on dedicated VPC (Alibaba/Tencent/Huawei)
- Isolated from other tenants
- Compliance with data localization
- Example: SaaS startup using Alibaba Cloud VPC
<div class="zh-trans">**模式 C：私有云（科技公司、初创企业）**
- 所有层级均部署在专用 VPC（阿里云/腾讯云/华为云）上
- 与其他租户隔离
- 符合数据本地化合规要求
- 示例：使用阿里云 VPC 的 SaaS 初创企业</div>

**Key Differentiators vs. Western Deployments**
<div class="zh-trans">**与西方部署的关键差异**</div>

**1. Domestic Technology Preference**
- 80% of large enterprises prefer Chinese vendors
- Driven by: Regulations, security concerns, government incentives
- Huawei Ascend NPU adoption growing despite NVIDIA superiority
<div class="zh-trans">**1. 倾向本土技术**
- 80% 的大型企业倾向于选择中国供应商
- 驱动因素：法规、安全考量、政府激励政策
- 尽管 NVIDIA 性能领先，但华为 Ascend NPU 的采用率仍在持续增长</div>

**2. Platform Integration Strategy**
- Agents embedded in DingTalk, Feishu, WeChat (not standalone apps)
- "Agent-as-feature" vs. Western "agent-as-product"
- Instant distribution to hundreds of millions of users
<div class="zh-trans">**2. 平台集成策略**
- Agent 嵌入钉钉、飞书、微信（非独立 App）
- “Agent 即功能”模式，对比西方的“Agent 即产品”模式
- 即刻触达数亿用户</div>

**3. Compliance-First Architecture**
- MLPS 2.0 and PIPL requirements baked into Layer 4
- Audit logging mandatory, not optional
- Data localization enforced at network layer
<div class="zh-trans">**3. 合规优先架构**
- MLPS 2.0 和 PIPL 要求内置于 Layer 4
- 审计日志强制开启，不可选
- 数据本地化在网络层强制执行</div>

**4. Government Support**
- Subsidies up to 10M yuan for agent projects
- Rent-free office space in tech zones
- Mandates driving adoption (67% of industrial firms)
<div class="zh-trans">**4. 政府支持**
- Agent 项目最高可获 1000 万元补贴
- 科技园区提供免租办公空间
- 政策推动应用落地（67% 的工业企业已采用）</div>

**Cost-Benefit Analysis**
<div class="zh-trans">**成本效益分析**</div>

**Full On-Premise**
- Upfront: ¥5-50M for hardware (GPUs, servers, storage)
- Annual: ¥2-10M for power, cooling, maintenance, staff
- Break-even: 3-5 years vs. cloud at high utilization
- Justification: Regulatory compliance, data sovereignty
<div class="zh-trans">**全本地部署**
- 初期投入：¥5-50M（用于硬件，如 GPU、服务器、存储）
- 年度支出：¥2-10M（用于电力、散热、维护及人员成本）
- 投资回报期：在高利用率下，相比云方案需 3-5 年回本
- 理由：满足合规要求，确保数据主权</div>

**Hybrid Cloud**
- Upfront: ¥1-5M for on-premise harness
- Annual: ¥500K-5M for cloud + on-premise
- Break-even: 1-2 years vs. full on-premise
- Justification: Balance cost and control
<div class="zh-trans">**混合云**
- 初期投入：本地 Harness 费用 ¥1-5M
- 年度支出：云端 + 本地费用 ¥500K-5M
- 投资回报平衡点：与完全本地部署相比为 1-2 年
- 理由：平衡成本与控制权</div>

**Private Cloud**
- Upfront: ¥100K-1M for setup
- Annual: ¥200K-2M for cloud services
- Break-even: Immediate vs. on-premise
- Justification: Compliance without infrastructure burden
<div class="zh-trans">**私有云**
- 初期投入：¥100K-1M（部署费用）
- 年度费用：¥200K-2M（云服务费）
- 盈亏平衡：相比本地部署即时实现
- 理由：既满足合规要求，又无基础设施负担</div>

**Critical Success Factors**
<div class="zh-trans">**关键成功因素**</div>

**1. Talent**
- Need hybrid skills: AI/ML + enterprise architecture + domain expertise
- Training takes 6-12 months minimum
- Shortage of qualified engineers drives up costs
<div class="zh-trans">**1. 人才**
- 需要具备混合技能：AI/ML + 企业架构 + 领域专业知识
- 培训周期至少需要 6-12 个月
- 合格工程师的短缺推高了成本</div>

**2. Vendor Selection**
- Alibaba: Best for e-commerce, retail, logistics
- Tencent: Best for consumer services, gaming, social
- Huawei: Best for government, SOEs, manufacturing
- ByteDance: Best for content, marketing, youth market
<div class="zh-trans">**2. 供应商选择**
- Alibaba：最适合电商、零售、物流
- Tencent：最适合消费服务、游戏、社交
- Huawei：最适合政府、国企、制造业
- ByteDance：最适合内容、营销、年轻市场</div>

**3. Phased Rollout**
- Start with single department, single use case
- Prove ROI before scaling
- Budget 2-3x initial estimates
- Expect 50% of experiments to fail
<div class="zh-trans">**3. 分阶段推广**
- 从单一部门、单一用例入手
- 扩展前验证 ROI
- 预算需为初始估算的 2-3 倍
- 预期 50% 的实验会失败</div>

**4. Compliance Planning**
- MLPS 2.0 certification takes 6-12 months
- Audit logs must be retained for 6+ months
- Data localization enforced at network layer
- Regular security audits required
<div class="zh-trans">**4. 合规规划**
- MLPS 2.0 认证需耗时 6-12 个月
- 审计日志必须保留 6 个月以上
- 数据本地化在网络层强制执行
- 需定期进行安全审计</div>

## Supporting Evidence
<div class="zh-trans">支持性证据</div>

- From [[enterprise-agent-china/sources/china-enterprise-agent-landscape|China Enterprise Agent Landscape]]: 80% of large enterprises require on-premise options, 67% of industrial firms have integrated AI
- From [[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]: Four-layer harness architecture, Firecracker sandboxing, OWASP Agentic Top 10
- From [[enterprise-agent-china/sources/ai-infrastructure-industry-report|AI Infrastructure Industry Report]]: Alibaba/Tencent/Huawei Cloud comparison, Ascend NPU vs. NVIDIA
- From [[enterprise-agent-china/sources/institutional-ai-vs-individual-ai|Institutional AI vs Individual AI]]: Institutional intelligence requirements align with Chinese enterprise culture
- From [[enterprise-agent-china/sources/skill-factory-risk-analysis|Skill Factory Risk Analysis]]: Gartner 40% failure prediction, cost-benefit analysis
<div class="zh-trans">- 摘自 [[enterprise-agent-china/sources/china-enterprise-agent-landscape|China Enterprise Agent Landscape]]：80% 的大型企业需要本地化部署（on-premise）方案，67% 的工业企业已集成 AI
- 摘自 [[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]：四层 Harness 架构、Firecracker 沙箱技术、OWASP Agentic Top 10
- 摘自 [[enterprise-agent-china/sources/ai-infrastructure-industry-report|AI Infrastructure Industry Report]]：阿里云/腾讯云/华为云对比分析，Ascend NPU 与 NVIDIA 对比
- 摘自 [[enterprise-agent-china/sources/institutional-ai-vs-individual-ai|Institutional AI vs Individual AI]]：机构智能（Institutional intelligence）需求与中国企业文化相契合
- 摘自 [[enterprise-agent-china/sources/skill-factory-risk-analysis|Skill Factory Risk Analysis]]：Gartner 40% 失败率预测，成本效益分析</div>
