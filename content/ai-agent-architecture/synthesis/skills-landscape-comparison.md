---
title: "Skills Landscape Comparison"
date: 2026-04-05
tags: [synthesis, ai-agent]
---

# Skills Landscape Comparison

## Analysis

The Skills ecosystem is fragmenting into three distinct layers: **specification** (how skills are defined), **platform** (where skills run), and **evolution** (how skills improve). No single player dominates all three.
<div class="zh-trans">技能生态系统正分化为三个独立层级：**规范**（技能如何定义）、**平台**（技能运行场所）和**演进**（技能如何改进）。尚无单一参与者同时主导这三个层级。</div>


### Landscape Matrix

| Project | Layer | Skill Ecosystem | Self-Evolution | Enterprise Ready | Open Source |
|---------|-------|----------------|---------------|-----------------|-------------|
| **agentskills.io** | Specification | 100K+ installs, 20+ platforms | No | Partial | Yes |
| **SkillNet** | Platform | 200K+ skills (500+ curated) | No | Research stage | Yes |
| **Memento-Skills** | Evolution | Growing | **Yes** (Read-Execute-Reflect-Write) | Partial | Yes |
| **OpenClaw** | Platform | Growing | No | In progress | Yes |
| **Deep Agents** | Platform | Via LangChain | No | Partial | Yes |
<div class="zh-trans">| 项目 | 层级 | 技能生态 | 自我进化 | 企业级就绪 | 开源 |
|---------|-------|----------------|---------------|-----------------|-------------|
| **agentskills.io** | 规范 | 10万+ 安装量，20+ 平台 | 否 | 部分支持 | 是 |
| **SkillNet** | 平台 | 20万+ 技能（500+ 经过筛选） | 否 | 研究阶段 | 是 |
| **Memento-Skills** | 演进 | 持续增长中 | **是**（读取-执行-反思-写入） | 部分支持 | 是 |
| **OpenClaw** | 平台 | 持续增长中 | 否 | 进行中 | 是 |
| **Deep Agents** | 平台 | 通过 LangChain | 否 | 部分支持 | 是 |</div>


### Key Tensions

1. **Portability vs. Depth**: agentskills.io prioritizes cross-platform portability (write once, 20+ platforms). SkillNet prioritizes depth (5-dimensional evaluation, relationship graph). These goals partially conflict.
<div class="zh-trans">1. **可移植性与深度**：agentskills.io 优先考虑跨平台可移植性（一次编写，支持 20 多个平台）。SkillNet 优先考虑深度（5 维评估、关系图谱）。这些目标存在部分冲突。</div>


2. **Human-authored vs. Self-generated**: Most skills today are human-written. SkillNet automates creation from trajectories and code. Memento-Skills enables self-rewriting. The question: can automated skills match human quality?
<div class="zh-trans">2. **人工编写 vs. 自主生成**：当前大多数技能均由人工编写。SkillNet 实现了从轨迹和代码自动创建技能。Memento-Skills 支持技能的自我重写。核心问题是：自动生成的技能能否达到人工编写的质量？</div>


3. **Open ecosystem vs. Enterprise control**: Public skill marketplaces enable discovery but introduce security risks (skill poisoning, context injection). Enterprises need private registries with governance.
<div class="zh-trans">3. **开放生态与企业管控**：公共技能市场促进了发现，但引入了安全风险（技能投毒、上下文注入）。企业需要具备治理能力的私有仓库。</div>


### Three Possible Futures (from risk analysis)

| Scenario | Probability | Description |
|----------|------------|-------------|
| Full Skills Era | 35% | Skills become the standard way to extend agents |
| Developer Tools Only | 40% | Skills succeed as dev tools but don't reach business users |
| Hype Collapse | 25% | Replaced by new paradigms (e.g., end-to-end learning) |
<div class="zh-trans">| 场景 | 概率 | 描述 | |----------|------------|-------------| | 全技能时代 | 35% | 技能成为扩展智能体的标准方式 | | 仅限开发者工具 | 40% | 技能作为开发工具获得成功，但未能触达业务用户 | | 热度崩塌 | 25% | 被新范式（例如端到端学习）所取代 |</div>


### Product Implications

- Don't bet everything on Skills alone — use them as a customer acquisition lever
- Build industry know-how and governance expertise as the true defensible moat
- The dual-track distribution strategy (internal registry + public ecosystem) hedges risk
<div class="zh-trans">- 不要将一切押注在 Skill 本身——应将其作为获客抓手
- 构建行业 Know-how 与治理专长，将其作为真正的可防御护城河
- 双轨分发策略（内置注册中心 + 公共生态）能够对冲风险</div>


## Supporting Evidence

- From [[ai-agent-architecture/sources/agentskills-io-ecosystem|agentskills.io]]: 20+ platforms, backed by Anthropic, Microsoft, Google, OpenAI
- From [[ai-agent-architecture/sources/skillnet-paper|SkillNet]]: +40% reward improvement, -30% execution steps
- From [[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills]]: Self-evolution via failure-as-signal
- From [[ai-agent-architecture/sources/skill-factory-risk-analysis|Risk Analysis]]: 93% of employees report inadequate AI skills
<div class="zh-trans">- 来自 [[ai-agent-architecture/sources/agentskills-io-ecosystem|agentskills.io]]：20 多个平台，由 Anthropic、Microsoft、Google 和 OpenAI 支持
- 来自 [[ai-agent-architecture/sources/skillnet-paper|SkillNet]]：奖励提升 40% 以上，执行步骤减少 30%
- 来自 [[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills]]：通过“失败即信号”实现自我演进
- 来自 [[ai-agent-architecture/sources/skill-factory-risk-analysis|风险分析]]：93% 的员工报告 AI 技能不足</div>

