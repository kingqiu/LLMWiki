---
title: "AgentSkills.io Ecosystem Overview"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260326_skills-agent-research/agentskills-ecosystem.md"
---

# AgentSkills.io Ecosystem Overview

## Key Takeaways
- AgentSkills.io: first public marketplace for discoverable, installable AI agent skills
- Skills published as SKILL.md directories with semantic versioning
- Category taxonomy: Productivity, Research, Code, Communication, Data, Domain-specific
- Community-contributed skills growing faster than enterprise-contributed
- Revenue model: freemium with enterprise governance tier
<div class="zh-trans">- AgentSkills.io：首个面向可发现、可安装 AI 智能体技能的公共市场
- 技能以 SKILL.md 目录形式发布，并采用语义化版本控制
- 分类体系：生产力、研究、代码、沟通、数据、特定领域
- 社区贡献的技能增长速度超过企业贡献
- 收入模式：免费增值（Freemium），包含企业治理层级</div>


## Summary
AgentSkills.io emerged in early 2026 as the first structured marketplace for AI agent skills following the SKILL.md format specification. The platform allows developers and enterprises to publish, version, and distribute skills that any compatible agent runtime can discover and install.
<div class="zh-trans">AgentSkills.io 于 2026 年初上线，是首个遵循 SKILL.md 格式规范的 AI 智能体技能结构化市场。该平台允许开发者与企业发布、版本化及分发技能，任何兼容的智能体运行时均可发现并安装这些技能。</div>


The platform's design follows npm-style ergonomics: skills have semantic versions, dependency declarations, and README documentation. A public registry API allows agents to search skills by capability description using embedding-based similarity search — meaning an agent can find relevant skills without knowing exact skill names.
<div class="zh-trans">该平台的设计遵循 npm 风格的易用性：技能具备语义化版本、依赖声明和 README 文档。公共注册表 API 允许智能体通过能力描述，利用基于嵌入的相似性搜索来检索技能——这意味着智能体无需知晓确切的技能名称即可发现相关技能。</div>


Early traction shows community contributors outpacing enterprise publishers 10:1, though enterprise skills have significantly higher install rates due to production-grade testing and support SLAs. The governance tier adds audit logs, private registries, and skill approval workflows for regulated industries.
<div class="zh-trans">早期运营数据显示，社区贡献者的数量以 10:1 的比例超过企业发布者；然而，凭借生产级测试和支持服务等级协议（SLA），企业技能的安装率显著更高。治理层为受监管行业增加了审计日志、私有注册表以及技能审批工作流。</div>


Key tension identified: community skills ship faster but lack enterprise security review; enterprise skills are safer but lag the innovation frontier by 3-6 months.
<div class="zh-trans">识别出的关键矛盾：社区技能交付更快，但缺乏企业安全审查；企业技能更安全，但落后创新前沿3-6个月。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]

## Relevant Entities
- [[ai-agent-architecture/entities/agentskills-io|AgentSkills.io]]
