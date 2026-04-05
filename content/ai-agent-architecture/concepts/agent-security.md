---
title: "Agent Security"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agent Security

## Definition

Agent security encompasses the attack vectors, vulnerabilities, and defense strategies specific to AI agent systems. The risk profile has shifted from "saying wrong things" (hallucinations) to "doing wrong things" (unauthorized actions, privilege escalation, credential theft).
<div class="zh-trans">智能体安全涵盖AI智能体系统特有的攻击向量、漏洞及防御策略。其风险特征已从“说错话”（幻觉）转变为“做错事”（未授权操作、权限提升、凭证窃取）。</div>


## Details

### OWASP Agentic Top 10 (2026)

The OWASP foundation published the Agentic Top 10, treating agents as active non-human identities (NHI) whose attack surface spans endpoints, API gateways, SaaS platforms, and the identity layer.
<div class="zh-trans">OWASP 基金会发布了 Agentic Top 10，将智能体视为活跃的非人类身份 (NHI)，其攻击面涵盖端点、API 网关、SaaS 平台以及身份层。</div>


### Skill-Based Attack Vectors (Grisha / Sentry)

| Attack Type | Success Rate | Persistence |
|-------------|-------------|-------------|
| Trojan bash scripts | 100% | Per-session |
| Memory poisoning | 96% | **Cross-session** (persistent) |
| Context poisoning (HTML comments, PNG metadata) | 100% | Per-activation |
| Hook exploitation | Variable | Per-session |
| Symlink exfiltration | Variable | Per-session |
<div class="zh-trans">| 攻击类型 | 成功率 | 持续性 |
|---|---|---|
| 特洛伊木马 Bash 脚本 | 100% | 按会话 (Per-session) |
| 内存投毒 | 96% | **跨会话 (Cross-session)** (持久性) |
| 上下文投毒 (HTML 注释、PNG 元数据) | 100% | 按激活 (Per-activation) |
| 钩子利用 | 可变 | 按会话 (Per-session) |
| 符号链接数据窃取 | 可变 | 按会话 (Per-session) |</div>


**Memory poisoning** is especially dangerous: it modifies global files like `~/.claude/CLAUDE.md`, persists even after the malicious skill is removed, and operates outside the git tree.
<div class="zh-trans">记忆投毒尤其危险：它会修改 `~/.claude/CLAUDE.md` 等全局文件，即使在移除恶意技能后依然存在，且在 git 树之外运行。</div>


### Key Findings

- All tested models (including Opus 4.6 and Codex 5.3) were reliably misled by context poisoning
- A Claude Code agent once disabled its own container sandbox
- 79% of multi-agent failures originate in the orchestration layer (UC Berkeley MAST)
<div class="zh-trans">- 所有受测模型（包括 Opus 4.6 和 Codex 5.3）均受上下文投毒误导
- Claude Code 智能体曾禁用其自身的容器沙箱
- 79% 的多智能体故障源于编排层（UC Berkeley MAST）</div>


### Defense Strategies

1. Use only trusted, self-written or well-vetted skills
2. Never let agents auto-discover skills from untrusted sources
3. Avoid `--dangerously-skip-permissions`
4. Use skill scanners (Snyk, Sentry)
5. Default to hardware-level isolation (Firecracker microVMs)
6. Implement least-privilege per tool call
7. Use ephemeral credentials via Vault
<div class="zh-trans">1. 仅使用可信、自研或经过严格审查的技能
2. 切勿允许代理从不受信任的来源自动发现技能
3. 避免使用 `--dangerously-skip-permissions`
4. 使用技能扫描工具（Snyk、Sentry）
5. 默认采用硬件级隔离（Firecracker microVM）
6. 对每次工具调用实施最小权限原则
7. 通过 Vault 使用临时凭证</div>


## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]], [[ai-agent-architecture/concepts/skills|Skills]]
- Mentioned in: [[ai-agent-architecture/sources/dangerous-skills|Dangerous Skills]], [[ai-agent-architecture/sources/higher-privilege-agent-infra|Higher Privilege Agent Infra]]
<div class="zh-trans">- 相关条目：[[ai-agent-architecture/concepts/harness|Harness]]、[[ai-agent-architecture/concepts/sandbox-architectures|沙箱架构]]、[[ai-agent-architecture/concepts/skills|技能]]
- 提及于：[[ai-agent-architecture/sources/dangerous-skills|危险技能]]、[[ai-agent-architecture/sources/higher-privilege-agent-infra|高权限智能体基础设施]]</div>

