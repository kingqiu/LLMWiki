---
title: "On-Premise Infrastructure"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# On-Premise Infrastructure

## Definition
<div class="zh-trans">定义</div>

On-premise infrastructure refers to the hardware, software, and networking components deployed within an enterprise's own data centers for running AI agents, as opposed to using public cloud services.
<div class="zh-trans">On-premise 基础设施是指在企业的自建数据中心内部署的硬件、软件和网络组件，用于运行 AI Agent，而非使用公有云服务。</div>

## Details
<div class="zh-trans">详情</div>

On-premise deployment is the gold standard for Chinese enterprises with strict security and compliance requirements. The infrastructure stack consists of:
<div class="zh-trans">对于有严格安全与合规要求的中国企业而言，On-premise 部署是黄金标准。其基础设施 Stack 包含：</div>

**Compute Layer**
- **GPU clusters**: NVIDIA A100/H100 or Huawei Ascend NPU
- **CPU servers**: For orchestration and non-inference workloads
- **Storage**: Distributed file systems (Ceph, GlusterFS) for model weights
- **Networking**: 100Gbps InfiniBand for GPU-to-GPU communication
<div class="zh-trans">**计算层**
- **GPU 集群**：NVIDIA A100/H100 或华为 Ascend NPU
- **CPU 服务器**：用于编排和非推理工作负载
- **存储**：用于存储模型权重的分布式文件系统（Ceph、GlusterFS）
- **网络**：用于 GPU 间通信的 100Gbps InfiniBand</div>

**Model Serving Layer**
- **Inference engines**: vLLM, TensorRT-LLM, TGI (Text Generation Inference)
- **Load balancing**: Distribute requests across GPU replicas
- **Caching**: KV cache optimization for repeated queries
- **Batching**: Dynamic batching to maximize GPU utilization
<div class="zh-trans">**模型服务层**
- **推理引擎**：vLLM、TensorRT-LLM、TGI (Text Generation Inference)
- **负载均衡**：在多个 GPU 副本间分发请求
- **缓存**：针对重复查询的 KV cache 优化
- **批处理**：通过动态批处理（Dynamic batching）最大化 GPU 利用率</div>

**Agent Runtime Layer**
- **Orchestration**: OpenClaw, LangChain, or proprietary frameworks
- **Skill registry**: Internal catalog of approved skills
- **Harness**: Permission enforcement, audit logging
- **Sandbox**: Firecracker microVMs for isolated execution
<div class="zh-trans">**Agent 运行时层**
- **编排**：OpenClaw、LangChain 或自研框架
- **技能注册表**：已批准技能的内部目录
- **Harness**：权限强制执行与审计日志记录
- **沙箱**：用于隔离执行的 Firecracker microVMs</div>

**Integration Layer**
- **API gateway**: Kong, Tyk, or Nginx for routing
- **Message queue**: RabbitMQ, Kafka for async workflows
- **Database**: PostgreSQL, MongoDB for agent state
- **Monitoring**: Prometheus, Grafana, OpenTelemetry
<div class="zh-trans">**集成层**
- **API gateway**：Kong、Tyk 或 Nginx，用于路由
- **消息队列**：RabbitMQ、Kafka，用于异步工作流
- **数据库**：PostgreSQL、MongoDB，用于存储 Agent 状态
- **监控**：Prometheus、Grafana、OpenTelemetry</div>

**Key Challenges**
<div class="zh-trans">**主要挑战**</div>

**GPU Shortage**
- NVIDIA export restrictions limit H100 availability in China
- Domestic alternatives (Huawei Ascend, Cambricon) less mature
- Long lead times (6-12 months) for GPU procurement
- High cost: $30K-$40K per H100 GPU
<div class="zh-trans">**GPU 短缺**
- NVIDIA 出口限制导致 H100 在中国供应受限
- 国产替代方案（华为 Ascend、Cambricon）成熟度较低
- GPU 采购周期长（6-12 个月）
- 成本高昂：每块 H100 GPU 售价 3 万至 4 万美元</div>

**Talent Gap**
- Shortage of engineers who can deploy and maintain infrastructure
- Need expertise in: GPU programming, distributed systems, LLM serving
- Training takes 6-12 months minimum
- Competition for talent drives up salaries
<div class="zh-trans">**人才缺口**
- 缺乏能够部署和维护基础设施的工程师
- 需要具备以下领域的专业知识：GPU 编程、分布式系统、LLM serving
- 培训周期至少需要 6-12 个月
- 人才争夺战推高了薪资水平</div>

**Cost**
- 10-100x more expensive than public cloud APIs
- Upfront capital expenditure for hardware
- Ongoing costs: power, cooling, maintenance
- Underutilization during off-peak hours
<div class="zh-trans">- 成本比公有云 API 高出 10 到 100 倍
- 硬件需要预先资本投入
- 持续成本：电力、散热、维护
- 非高峰时段的资源利用率低</div>

**Maintenance**
- Model updates require redeployment
- Security patches for OS, drivers, frameworks
- Hardware failures and replacements
- Capacity planning for growth
<div class="zh-trans">**维护**
- 模型更新需要重新部署
- 针对 OS、驱动程序和框架的安全补丁
- 硬件故障与更换
- 针对业务增长的容量规划</div>

**Advantages**
<div class="zh-trans">**优势**</div>

**Security**
- Full control over data, no external access
- Prevent data exfiltration and IP theft
- Meet air-gap requirements for defense/government
<div class="zh-trans">**安全性**
- 完全掌控数据，无外部访问
- 防止数据泄露和知识产权盗窃
- 满足国防及政府领域的物理隔离要求</div>

**Compliance**
- Satisfy MLPS 2.0, PIPL data localization requirements
- Audit logs under enterprise control
- No foreign cloud provider dependencies
<div class="zh-trans">**合规性**
- 满足 MLPS 2.0 及 PIPL 数据本地化要求
- 审计日志由企业自主管控
- 不依赖国外云厂商</div>

**Performance**
- Lower latency for internal applications
- Predictable performance, no noisy neighbors
- Optimized for specific workloads
<div class="zh-trans">**性能**
- 降低内部应用延迟
- 性能表现可预测，无邻居干扰
- 针对特定工作负载进行优化</div>

**Cost (at scale)**
- Cheaper than public cloud for sustained high usage
- No egress fees or API call charges
- Amortize hardware cost over 3-5 years
<div class="zh-trans">**成本（规模化）**
- 对于持续高负载使用，成本低于公有云
- 无流量费或 API 调用费
- 硬件成本可在 3-5 年内摊销</div>

**Deployment Patterns**
<div class="zh-trans">部署模式</div>

**Pattern A: Centralized Data Center**
- All infrastructure in single location
- Easier to manage, lower cost
- Single point of failure
- Higher latency for remote offices
<div class="zh-trans">**模式 A：集中式数据中心**
- 所有基础设施位于单一位置
- 易于管理，成本更低
- 存在单点故障
- 远程办公地点延迟较高</div>

**Pattern B: Distributed Edge**
- Infrastructure in multiple regional data centers
- Lower latency, higher availability
- Complex synchronization
- Higher cost
<div class="zh-trans">**模式 B：分布式边缘**
- 基础设施分布在多个区域数据中心
- 更低延迟，更高可用性
- 同步机制复杂
- 成本较高</div>

**Pattern C: Hybrid**
- Core infrastructure on-premise
- Burst to domestic cloud for peak loads
- Balance cost and control
- Requires secure connectivity
<div class="zh-trans">**模式 C：混合模式**
- 核心基础设施 On-premise
- 高峰负载突发至国内云
- 平衡成本与控制
- 需要安全的网络连接</div>

## Connections
<div class="zh-trans">连接</div>

- Related to: [[enterprise-agent-china/concepts/private-deployment-architecture|Private Deployment Architecture]], [[enterprise-agent-china/concepts/china-agent-landscape|China Agent Landscape]]
- Mentioned in: [[enterprise-agent-china/sources/ai-infrastructure-industry-report|AI Infrastructure Industry Report]]
<div class="zh-trans">- 相关内容：[[enterprise-agent-china/concepts/private-deployment-architecture|私有化部署架构]]，[[enterprise-agent-china/concepts/china-agent-landscape|中国 Agent 格局]]
- 提及于：[[enterprise-agent-china/sources/ai-infrastructure-industry-report|AI 基础设施行业报告]]</div>
