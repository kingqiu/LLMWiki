---
title: "AgentSkills.io"
date: 2026-04-05
tags: [entity, ai-agent]
entity_type: platform
---

# AgentSkills.io

## Overview
AgentSkills.io is the first public marketplace for discoverable, installable AI agent skills following the SKILL.md format specification. Launched in early 2026, the platform enables developers and enterprises to publish, version, and distribute skills compatible with any SKILL.md-compliant agent runtime.
<div class="zh-trans">AgentSkills.io 是首个遵循 SKILL.md 格式规范的可发现、可安装 AI 智能体技能的公共市场。该平台于 2026 年初上线，支持开发者和企业发布、版本控制及分发兼容任何符合 SKILL.md 标准的智能体运行时的技能。</div>


## Key Facts
- **Founded**: Early 2026
- **Model**: Freemium marketplace with enterprise governance tier
- **Format**: npm-style semantic versioning for SKILL.md packages
- **Discovery**: Embedding-based semantic search over skill capability descriptions
- **Scale**: Growing catalog of community and enterprise skills; community contributors 10:1 vs enterprise contributors
<div class="zh-trans">- **成立时间**：2026年初
- **模式**：带有企业治理层的免费增值（Freemium）市场
- **格式**：用于 SKILL.md 包的 npm 式语义化版本控制
- **发现机制**：基于能力描述的嵌入（Embedding）语义搜索
- **规模**：不断增长的企业与社区技能目录；社区贡献者与企业贡献者比例为 10:1</div>


## Architecture
- Public registry API for skill search and installation
- Semantic similarity search (agents can find skills by describing what they need)
- Enterprise tier: private registries, skill approval workflows, audit logs
- Versioning with dependency declarations following npm conventions
<div class="zh-trans">- 用于技能搜索与安装的公开注册表 API
- 语义相似性搜索（智能体可通过描述需求查找技能）
- 企业版：私有注册表、技能审批工作流、审计日志
- 遵循 npm 规范的依赖声明与版本控制</div>


## Significance
AgentSkills.io represents the emergence of a skills distribution layer analogous to npm for code packages. The platform creates network effects: more skills attract more agents, attracting more publishers. The governance tier positions it for regulated enterprise markets.
<div class="zh-trans">AgentSkills.io 代表了一个技能分发层的兴起，类似于代码包领域的 npm。该平台构建了网络效应：更多技能吸引更多智能体，进而吸引更多发布者。其治理层使其能够胜任受监管的企业市场。</div>


## Key Tension
Community skills ship faster but lack security review; enterprise skills are safer but lag innovation by 3-6 months. This quality/speed tradeoff is a core market structure challenge.
<div class="zh-trans">社区技能发布更快，但缺乏安全审查；企业技能更安全，但创新滞后 3-6 个月。这种质量与速度的权衡是核心市场结构挑战。</div>


## Related Sources
- [[ai-agent-architecture/sources/agentskills-io-ecosystem|AgentSkills.io Ecosystem Overview]]
- [[ai-agent-architecture/sources/dangerous-skills|Dangerous Skills: Red-Teaming Agent Capabilities]]

## Related Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
