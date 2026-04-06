---
title: "agentskills.io"
date: 2026-04-06
tags: [entity, enterprise-agent-china]
---

# agentskills.io

## Overview
<div class="zh-trans">概述</div>

agentskills.io is the leading open standard for agent skill interoperability, with 20+ platforms, 100K+ installs, and 500+ published skills. It provides the specification, SDK, and public registry for cross-platform skill distribution.
<div class="zh-trans">agentskills.io 是 Agent Skill 互操作性的领先开源标准，拥有 20+ 平台支持、100K+ 安装量以及 500+ 已发布的 Skill。它为跨平台 Skill 分发提供了规范、SDK 和公共注册中心。</div>

## Details
<div class="zh-trans">详情</div>

**Mission**: "Write once, run everywhere" for agent skills
<div class="zh-trans">**使命**：Agent 技能的“一次编写，到处运行”</div>

**Key Components**
- **Specification**: JSON schema for skill manifests, execution protocol, registry API
- **skills-ref SDK**: Reference implementations in Python, TypeScript, Go
- **Public registry**: Centralized catalog of open-source skills
- **Community governance**: Technical steering committee, open contribution model
<div class="zh-trans">**核心组件**
- **Specification**：技能清单的 JSON schema、执行协议、注册表 API
- **skills-ref SDK**：Python、TypeScript 和 Go 语言的参考实现
- **Public registry**：开源技能的集中式目录
- **Community governance**：技术指导委员会、开放贡献模式</div>

**Adoption Metrics (Q1 2026)**
- 20+ platforms supporting the standard
- 100K+ total skill installs across platforms
- 500+ published skills in public registry
- 15+ enterprise private registries deployed
<div class="zh-trans">**采用率指标（2026 年第一季度）**
*   20+ 个平台支持该标准
*   跨平台累计 Skill 安装量 100K+
*   公共 Registry 中发布 500+ 个 Skill
*   15+ 个企业私有 Registry 已部署</div>

**Supported Platforms**
- Claude Code
- OpenClaw
- Windsurf
- Cursor
- Cline
- Continue
- Aider
- 13+ others
<div class="zh-trans">**支持的平台**
- Claude Code
- OpenClaw
- Windsurf
- Continue
- 及其他 13+ 个平台</div>

**Skill Manifest Format**
<div class="zh-trans">**Skill Manifest 格式**</div>
```json
{
  "name": "github-pr-review",
  "version": "2.1.0",
  "description": "Review GitHub pull requests with AI analysis",
  "permissions": ["github:read", "github:write"],
  "dependencies": ["github-api@^3.0.0"],
  "platforms": ["claude-code", "openclaw"],
  "author": "community",
  "license": "MIT"
}
```

**Registry API**
- `GET /api/skills` - List all skills
- `GET /api/skills/{name}` - Get skill details
- `GET /api/skills/{name}/versions` - List versions
- `POST /api/skills` - Publish new skill (requires auth)
- `DELETE /api/skills/{name}` - Unpublish skill
<div class="zh-trans">**Registry API**
- `GET /api/skills` - 列出所有 skills
- `GET /api/skills/{name}` - 获取 skill 详情
- `GET /api/skills/{name}/versions` - 列出版本
- `POST /api/skills` - 发布新 skill (需要认证)
- `DELETE /api/skills/{name}` - 取消发布 skill</div>

**Security Model**
- Explicit permission declarations
- User approval flows for sensitive permissions
- Sandboxed execution
- Audit hooks for compliance
<div class="zh-trans">**安全模型**
- 显式权限声明
- 敏感权限的用户审批流程
- 沙箱化执行
- 用于合规的审计钩子</div>

**China Adoption**
- Used by domestic platforms (Coze, DingTalk AI)
- Private registries hosted on Alibaba Cloud, Tencent Cloud
- Compliance with MLPS 2.0 through audit logging
- Localized documentation and examples
<div class="zh-trans">**中国落地应用**
- 被国内平台（Coze、钉钉 AI）采用
- 私有 Registry 托管于阿里云、腾讯云
- 通过审计日志满足 MLPS 2.0 合规要求
- 本地化的文档与示例</div>

**Competitive Landscape**
- **MCP (Model Context Protocol)**: Anthropic's tool protocol, higher token overhead
- **LangChain Tools**: Python-specific, not cross-platform
- **OpenAI Function Calling**: OpenAI-specific, not portable
<div class="zh-trans">**竞争格局**
- **MCP (Model Context Protocol)**：Anthropic 的工具协议，Token 开销较高
- **LangChain Tools**：仅支持 Python，不具备跨平台能力
- **OpenAI Function Calling**：仅限 OpenAI 使用，不可移植</div>

**Advantages**
- Platform-agnostic: Skills work across 20+ platforms
- Open governance: Community-driven, not vendor-controlled
- Low overhead: Minimal token usage compared to MCP
- Proven scale: 100K+ installs demonstrate viability
<div class="zh-trans">**优势**
- 平台无关：Skills 可在 20 多个平台上通用
- 开放治理：社区驱动，不受供应商控制
- 低开销：与 MCP 相比，Token 占用极少
- 经过验证的规模：10 万+ 次安装证明了其可行性</div>

## Connections
<div class="zh-trans">连接</div>

- Related to: [[enterprise-agent-china/concepts/skill-registry|Skill Registry]], [[enterprise-agent-china/concepts/skill-factory-layers|Skill Factory Layers]]
- Mentioned in: [[enterprise-agent-china/sources/agentskills-io-analysis|agentskills.io Analysis]], [[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]]
<div class="zh-trans">- 相关内容：[[enterprise-agent-china/concepts/skill-registry|Skill Registry]], [[enterprise-agent-china/concepts/skill-factory-layers|Skill Factory Layers]]
- 提及于：[[enterprise-agent-china/sources/agentskills-io-analysis|agentskills.io Analysis]], [[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]]</div>
