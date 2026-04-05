---
title: "SkillNet Detailed Architecture"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260324_skillnet_detailed.md"
---

# SkillNet Detailed Architecture

## Key Takeaways
- SkillNet node architecture: Validator Agent + Execution Sandbox + Reputation Ledger
- Skill categories have specialized validator pools (code skills → code validators)
- Challenge protocol: anyone can challenge a certified skill; successful challenge earns bounty
- Validator diversity requirement: no 3 validators in same consensus round can share an operator
- Integration API: REST + MCP for enterprise systems to query certification status
<div class="zh-trans">- SkillNet 节点架构：验证代理 + 执行沙箱 + 信誉账本
- 技能类别设有专用验证池（代码技能 → 代码验证者）
- 挑战协议：任何人皆可挑战已认证技能；挑战成功可获得赏金
- 验证者多样性要求：同一共识轮次中不得有 3 名验证者隶属同一运营方
- 集成 API：REST + MCP，供企业系统查询认证状态</div>


## Summary
This document provides architectural detail on SkillNet's internal design, extending the research paper's high-level protocol description into implementable specifications.
<div class="zh-trans">本文档提供了 SkillNet 内部设计的架构细节，将研究论文中的高层协议描述扩展为可实现的规范。</div>


Each SkillNet node consists of three components: (1) a Validator Agent — an LLM-based evaluator with specialized prompting for the skill category being assessed, (2) an Execution Sandbox — a Firecracker microVM that safely executes the skill against benchmark tasks, and (3) a Reputation Ledger — a local database tracking the node's voting history and token balance.
<div class="zh-trans">每个 SkillNet 节点由三个组件构成：（1）验证器代理——一种基于大语言模型（LLM）的评估器，针对所评估的技能类别采用了专门的提示；（2）执行沙箱——一个 Firecracker microVM，用于针对基准任务安全地执行技能；（3）信誉账本——一个本地数据库，用于记录节点的投票历史和代币余额。</div>


The specialization system addresses a key weakness of generic validators: code skills require deep evaluation of security properties and correctness, while communication skills require evaluation of tone, clarity, and appropriateness. SkillNet maintains category-specific validator pools, routing skills to validators with relevant specialization.
<div class="zh-trans">专业化系统解决了通用验证器的一个关键弱点：代码技能需要对安全性和正确性进行深度评估，而沟通技能则需要对语气、清晰度和得体性进行评估。SkillNet 维护特定类别的验证器池，将技能路由至具备相关专长的验证器。</div>


The challenge protocol adds a post-certification quality layer: any party can submit a challenge to a certified skill with evidence of malfunction or security vulnerability. A challenge review panel (5 senior validators) evaluates the evidence; successful challenges revoke certification and award the challenger a bounty paid from the original validators' staked tokens.
<div class="zh-trans">挑战协议增加了一层认证后质量保障机制：任何一方均可针对已认证技能提交挑战，并提供故障或安全漏洞的证据。挑战评审小组（由5名资深验证者组成）将对证据进行评估；若挑战成功，将撤销该技能的认证，并将由原验证者质押的代币支付的赏金授予挑战者。</div>


Enterprise integration: SkillNet exposes a REST API and MCP endpoint allowing enterprise systems to query certification status, receive real-time notifications of certification changes, and retrieve detailed validation reports for compliance documentation.
<div class="zh-trans">企业集成：SkillNet 暴露 REST API 和 MCP 端点，允许企业系统查询认证状态，接收认证变更的实时通知，并检索详细的验证报告以用于合规文档编制。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]

## Relevant Entities
- [[ai-agent-architecture/entities/skillnet|SkillNet]]
