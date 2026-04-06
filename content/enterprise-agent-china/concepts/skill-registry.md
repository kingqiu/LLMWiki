---
title: "Skill Registry"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# Skill Registry

## Definition
<div class="zh-trans">定义</div>

A skill registry is a centralized catalog service that stores, indexes, and distributes agent skills with metadata, versioning, and access control. It serves as the "npm for agent skills."
<div class="zh-trans">Skill Registry 是一种集中式的目录服务，用于存储、索引和分发 Agent 技能，并提供元数据、版本控制和访问控制功能。它充当了“Agent 技能界的 npm”。</div>

## Details
<div class="zh-trans">详细信息</div>

Skill registries solve the distribution and discovery problem for agent capabilities. Instead of hardcoding tools into agents, registries enable dynamic skill acquisition at runtime.
<div class="zh-trans">Skill registries 解决了 Agent 能力的分发与发现问题。Registry 支持在运行时动态获取 Skill，而无需将工具硬编码到 Agent 中。</div>

**Core Components**
<div class="zh-trans">**核心组件**</div>

**1. Metadata Schema**
<div class="zh-trans">**1. Metadata Schema**</div>
```json
{
  "name": "enterprise-user-management",
  "version": "1.2.0",
  "description": "Create, update, delete users in enterprise directory",
  "permissions": ["users:read", "users:write"],
  "dependencies": ["ldap-connector@^2.0.0"],
  "platforms": ["claude-code", "openclaw", "windsurf"],
  "author": "IT Department",
  "license": "proprietary"
}
```

**2. Registry API**
- `GET /skills` - List available skills
- `GET /skills/{name}` - Get skill details
- `GET /skills/{name}/versions` - List versions
- `POST /skills` - Publish new skill
- `DELETE /skills/{name}` - Unpublish skill
<div class="zh-trans">**2. Registry API**
- `GET /skills` - 列出可用 skills
- `GET /skills/{name}` - 获取 skill 详情
- `GET /skills/{name}/versions` - 列出版本
- `POST /skills` - 发布新 skill
- `DELETE /skills/{name}` - 下架 skill</div>

**3. Access Control**
- **Public registry**: Open skills (agentskills.io)
- **Private registry**: Enterprise-only skills
- **Role-based access**: Different skills for different user roles
- **Approval workflows**: Skills require review before publication
<div class="zh-trans">**3. 访问控制**
- **Public registry**：Open skills (agentskills.io)
- **Private registry**：企业专属 skills
- **基于角色的访问**：针对不同用户角色提供不同的 skills
- **审批流程**：Skills 发布前需经过审核</div>

**4. Versioning**
- Semantic versioning (major.minor.patch)
- Compatibility declarations
- Deprecation warnings
- Automatic updates vs. pinned versions
<div class="zh-trans">**4. 版本管理**
- 语义化版本控制 (major.minor.patch)
- 兼容性声明
- 弃用警告
- 自动更新 vs. 锁定版本</div>

**Registry Types**
<div class="zh-trans">**Registry 类型**</div>

**Public Registries**
- **agentskills.io**: 500+ skills, 100K+ installs, 20+ platforms
- **OpenClaw Registry**: Focus on open-source skills
- **Hugging Face Spaces**: Experimental skills and demos
<div class="zh-trans">**公共 Registry**
- **agentskills.io**：500+ 技能，100K+ 安装量，支持 20+ 平台
- **OpenClaw Registry**：专注于开源技能
- **Hugging Face Spaces**：实验性技能与 Demo</div>

**Private Registries**
- **Enterprise registries**: Internal skills for proprietary systems
- **Compliance**: Audit logs, approval workflows
- **Air-gapped**: No external dependencies for secure environments
- **Examples**: Alibaba Cloud ModelScope, Tencent Cloud AI Gallery
<div class="zh-trans">**私有 Registry**
- **企业级 Registry**：面向专有系统的内部技能
- **合规性**：审计日志、审批流程
- **Air-gapped**：无外部依赖，适用于安全环境
- **示例**：Alibaba Cloud ModelScope、Tencent Cloud AI Gallery</div>

**China-Specific Considerations**
- **Domestic hosting**: Registries must be hosted in China for compliance
- **Content review**: Skills may require government approval
- **Vendor lock-in**: Platform-specific registries (DingTalk, Feishu)
- **Open source preference**: Government encourages domestic open-source alternatives
<div class="zh-trans">**中国市场的特殊考量**
- **国内托管**：为了满足合规要求，Registry 必须托管在中国境内
- **内容审查**：Skills 可能需要经过政府部门审批
- **厂商锁定**：存在特定平台的 Registry（如钉钉、飞书）
- **开源偏好**：政府鼓励采用国产开源替代方案</div>

**Implementation Patterns**
<div class="zh-trans">**实现模式**</div>

**Pattern A: Centralized Registry**
- Single source of truth
- Easier governance and compliance
- Single point of failure
- Example: Alibaba Cloud ModelScope
<div class="zh-trans">**模式 A：集中式 Registry**
- 单一事实来源
- 更易于 Governance 和 Compliance
- 单点故障
- 示例：Alibaba Cloud ModelScope</div>

**Pattern B: Federated Registry**
- Multiple registries with cross-references
- Resilience and redundancy
- Complex synchronization
- Example: agentskills.io + private enterprise registries
<div class="zh-trans">**模式 B：联邦 Registry**
- 多个 Registry，具有交叉引用
- 弹性与冗余
- 复杂的同步
- 示例：agentskills.io + 私有企业 Registry</div>

**Pattern C: Embedded Registry**
- Skills bundled with agent platform
- No external dependencies
- Limited sharing across platforms
- Example: Claude Code skills directory
<div class="zh-trans">**模式 C：嵌入式 Registry**
- Skills 与 Agent 平台捆绑
- 无外部依赖
- 跨平台共享能力受限
- 示例：Claude Code Skills 目录</div>

**Key Challenges**
- **Quality control**: How to prevent malicious or buggy skills
- **Discovery**: How users find relevant skills among thousands
- **Versioning conflicts**: Dependency hell when skills require incompatible versions
- **Performance**: Registry lookups add latency to agent execution
<div class="zh-trans">**关键挑战**
- **质量控制**：如何防止恶意或有缺陷的 Skill
- **发现机制**：用户如何在成千上万个 Skill 中找到相关的 Skill
- **版本冲突**：当 Skill 依赖不兼容的版本时出现的依赖地狱问题
- **性能**：Registry 查询会增加 Agent 执行的延迟</div>

## Connections
<div class="zh-trans">连接</div>

- Related to: [[enterprise-agent-china/concepts/skill-factory-layers|Skill Factory Layers]], [[enterprise-agent-china/entities/agentskills-io|agentskills.io]]
- Mentioned in: [[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]], [[enterprise-agent-china/sources/agentskills-io-analysis|agentskills.io Analysis]]
<div class="zh-trans">- 关联至：[[enterprise-agent-china/concepts/skill-factory-layers|Skill Factory Layers]], [[enterprise-agent-china/entities/agentskills-io|agentskills.io]]
- 提及于：[[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]], [[enterprise-agent-china/sources/agentskills-io-analysis|agentskills.io Analysis]]</div>
