---
title: "High-Privilege Agent"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# High-Privilege Agent

## Definition
<div class="zh-trans">定义</div>

A high-privilege agent is an AI agent with access to production systems, databases, and APIs that can make consequential changes. These agents require specialized security infrastructure to prevent catastrophic failures.
<div class="zh-trans">高权限 Agent 是一种能够访问生产系统、数据库和 API 并可执行关键变更的 AI Agent。此类 Agent 需要专门的安全基础设施来防止灾难性故障。</div>

## Details
<div class="zh-trans">详细信息</div>

High-privilege agents differ from read-only or sandboxed agents because their actions have real-world consequences: deleting customer records, transferring funds, deploying code, modifying infrastructure.
<div class="zh-trans">High-privilege agents 与只读或沙箱化的 agents 不同，因为它们的操作会产生现实世界的影响：删除客户记录、转账、部署代码、修改基础设施。</div>

**OWASP Agentic Top 10 (2026)**
<div class="zh-trans">**OWASP Agent Top 10 (2026)**</div>

The OWASP foundation identified 10 critical risks specific to high-privilege agents:
<div class="zh-trans">OWASP Foundation 识别了针对高权限 Agent 的 10 大关键风险：</div>

1. **Prompt injection → privilege escalation**: Malicious prompts trick agent into unauthorized actions
2. **Unbounded resource consumption**: Agent exhausts CPU, memory, or API quotas
3. **Data exfiltration via tool misuse**: Agent leaks sensitive data through logging or external APIs
4. **Cascading failures**: Agent errors propagate across systems
5. **Insufficient audit logging**: Cannot reconstruct what agent did or why
6. **Lack of human-in-the-loop**: Critical actions execute without approval
7. **Model hallucinations**: Agent makes incorrect decisions based on false information
8. **Dependency vulnerabilities**: Agent tools have security flaws
9. **Inadequate rollback**: Cannot undo agent actions
10. **Missing rate limits**: Agent overwhelms backend systems
<div class="zh-trans">1. **Prompt 注入 → 权限提升**：恶意 Prompt 诱骗 Agent 执行未授权操作
2. **资源无限制消耗**：Agent 耗尽 CPU、内存或 API 配额
3. **因工具滥用导致的数据泄露**：Agent 通过日志或外部 API 泄露敏感数据
4. **级联故障**：Agent 错误在系统间传播
5. **审计日志不足**：无法复盘 Agent 的行为或原因
6. **缺乏人工干预（Human-in-the-loop）**：关键操作未经审批即执行
7. **模型幻觉**：Agent 基于错误信息做出错误决策
8. **依赖项漏洞**：Agent 工具存在安全缺陷
9. **回滚机制不足**：无法撤销 Agent 的操作
10. **缺失速率限制**：Agent 导致后端系统过载</div>

**Per-Action Least Privilege**
<div class="zh-trans">每 Action 最小权限</div>

Instead of granting broad permissions upfront, evaluate each action:
<div class="zh-trans">与其预先授予宽泛的权限，不如评估每一个 Action：</div>

```
Agent: "Delete customer record ID 12345"

Harness checks:
1. Does agent have delete permission?
2. Is record marked for deletion in CRM?
3. Has required approval been obtained?
4. Is this within agent's rate limit?

If all checks pass:
5. Log action for audit
6. Execute with 30-second timeout
7. Verify success
8. Update state
```

**Security Infrastructure**
<div class="zh-trans">安全基础设施</div>

**Harness Pattern**
The harness sits between agent reasoning and production systems:
- Permission enforcement before every action
- Audit logging with full context
- Rate limiting to prevent runaway agents
- Circuit breakers after repeated failures
- Rollback mechanisms for error recovery
<div class="zh-trans">**Harness 模式**
Harness 位于 Agent 推理与生产系统之间：
- 在每次操作前执行权限校验
- 包含完整上下文的审计日志
- 限流控制，以防止 Agent 失控
- 连续失败后的熔断机制
- 用于错误恢复的回滚机制</div>

**Firecracker MicroVM Sandboxing**
- Lightweight: 5MB memory overhead, <125ms startup
- Isolation: Separate kernel, network, filesystem per agent
- Resource limits: CPU, memory, disk I/O caps
- Snapshot/restore: Fast rollback on errors
- Used by: AWS Lambda, Fly.io, Railway
<div class="zh-trans">**Firecracker MicroVM 沙箱机制**
- **轻量级**：5MB 内存开销，<125ms 启动时间
- **隔离性**：每个 Agent 拥有独立的内核、网络和文件系统
- **资源限制**：支持 CPU、内存和磁盘 I/O 配额限制
- **快照/恢复**：错误发生时支持快速回滚
- **应用案例**：AWS Lambda、Fly.io、Railway</div>

**Behavioral Observability**
- OpenTelemetry traces for every agent action
- Structured logs for debugging
- Real-time alerting on anomalies
- Post-mortem analysis of failures
<div class="zh-trans">**行为可观测性**
- 针对每个 Agent 动作的 OpenTelemetry traces
- 用于调试的结构化日志
- 针对异常情况的实时告警
- 针对故障的 Post-mortem 分析</div>

**China-Specific Requirements**
<div class="zh-trans">**中国特定要求**</div>

**MLPS 2.0 Compliance**
- Multi-Level Protection Scheme requires audit logs for all data access
- Agents must log: who, what, when, why, result
- Logs retained for 6 months minimum
- Regular security audits
<div class="zh-trans">**MLPS 2.0 合规**
- Multi-Level Protection Scheme 要求对所有数据访问进行审计日志记录
- Agent 必须记录：操作人、操作内容、操作时间、操作原因及结果
- 日志保留时间至少 6 个月
- 定期进行安全审计</div>

**Data Localization**
- Agents cannot send data outside China
- Harness enforces network egress rules
- All API calls to domestic services only
<div class="zh-trans">**数据本地化**
- Agent 无法向中国境外发送数据
- Harness 强制执行网络出站规则
- 所有 API 调用仅限于国内服务</div>

**Approval Workflows**
- Critical actions require human approval
- Approval chains based on organizational hierarchy
- Timeout if approval not received within SLA
<div class="zh-trans">**审批工作流**
- 关键操作需人工审批
- 基于组织层级的审批链
- 若在 SLA 内未收到审批则超时</div>

**Domestic Infrastructure**
- Deploy on Alibaba Cloud, Tencent Cloud, Huawei Cloud
- Use domestic LLMs (Qianwen, ERNIE, Pangu)
- Avoid foreign dependencies
<div class="zh-trans">**国内基础设施**
- 在阿里云、腾讯云、华为云上部署
- 使用国内 LLM（Qianwen、ERNIE、Pangu）
- 避免国外依赖</div>

**Use Cases**
<div class="zh-trans">**用例**</div>

**Finance**
- Fraud detection and account freezing
- Loan approval and disbursement
- Regulatory reporting
<div class="zh-trans">**金融**
- 欺诈检测和账户冻结
- 贷款审批与发放
- 监管报告</div>

**Manufacturing**
- Production line control
- Quality inspection and rejection
- Supply chain optimization
<div class="zh-trans">**制造业**
- 生产线控制
- 质量检测与剔除
- 供应链优化</div>

**Healthcare**
- Diagnosis assistance
- Treatment recommendations
- Medical record updates
<div class="zh-trans">**医疗保健**
- 诊断辅助
- 治疗建议
- 病历更新</div>

**Government**
- Citizen service automation
- Administrative approvals
- Public safety monitoring
<div class="zh-trans">**政府**
- 公民服务自动化
- 行政审批
- 公共安全监控</div>

## Connections
<div class="zh-trans">连接</div>

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]], [[enterprise-agent-china/concepts/private-deployment-architecture|Private Deployment Architecture]]
- Mentioned in: [[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]
<div class="zh-trans">- 出自：[[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]</div>
