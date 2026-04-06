---
title: "High-Privilege Agent"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# High-Privilege Agent

## Definition

A high-privilege agent is an AI agent with access to production systems, databases, and APIs that can make consequential changes. These agents require specialized security infrastructure to prevent catastrophic failures.

## Details

High-privilege agents differ from read-only or sandboxed agents because their actions have real-world consequences: deleting customer records, transferring funds, deploying code, modifying infrastructure.

**OWASP Agentic Top 10 (2026)**

The OWASP foundation identified 10 critical risks specific to high-privilege agents:

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

**Per-Action Least Privilege**

Instead of granting broad permissions upfront, evaluate each action:

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

**Harness Pattern**
The harness sits between agent reasoning and production systems:
- Permission enforcement before every action
- Audit logging with full context
- Rate limiting to prevent runaway agents
- Circuit breakers after repeated failures
- Rollback mechanisms for error recovery

**Firecracker MicroVM Sandboxing**
- Lightweight: 5MB memory overhead, <125ms startup
- Isolation: Separate kernel, network, filesystem per agent
- Resource limits: CPU, memory, disk I/O caps
- Snapshot/restore: Fast rollback on errors
- Used by: AWS Lambda, Fly.io, Railway

**Behavioral Observability**
- OpenTelemetry traces for every agent action
- Structured logs for debugging
- Real-time alerting on anomalies
- Post-mortem analysis of failures

**China-Specific Requirements**

**MLPS 2.0 Compliance**
- Multi-Level Protection Scheme requires audit logs for all data access
- Agents must log: who, what, when, why, result
- Logs retained for 6 months minimum
- Regular security audits

**Data Localization**
- Agents cannot send data outside China
- Harness enforces network egress rules
- All API calls to domestic services only

**Approval Workflows**
- Critical actions require human approval
- Approval chains based on organizational hierarchy
- Timeout if approval not received within SLA

**Domestic Infrastructure**
- Deploy on Alibaba Cloud, Tencent Cloud, Huawei Cloud
- Use domestic LLMs (Qianwen, ERNIE, Pangu)
- Avoid foreign dependencies

**Use Cases**

**Finance**
- Fraud detection and account freezing
- Loan approval and disbursement
- Regulatory reporting

**Manufacturing**
- Production line control
- Quality inspection and rejection
- Supply chain optimization

**Healthcare**
- Diagnosis assistance
- Treatment recommendations
- Medical record updates

**Government**
- Citizen service automation
- Administrative approvals
- Public safety monitoring

## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]], [[enterprise-agent-china/concepts/private-deployment-architecture|Private Deployment Architecture]]
- Mentioned in: [[enterprise-agent-china/sources/high-privilege-agent-infra|High-Privilege Agent Infrastructure]]
