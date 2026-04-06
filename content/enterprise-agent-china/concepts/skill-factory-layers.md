---
title: "Skill Factory Layers"
date: 2026-04-06
tags: [concept, enterprise-agent-china]
---

# Skill Factory Layers

## Definition
<div class="zh-trans">定义</div>

The Skill Factory 7-layer architecture is a reference model for building, testing, and distributing agent skills at enterprise scale. Each layer addresses a specific concern in the skill lifecycle.
<div class="zh-trans">The Skill Factory 7-layer architecture 是一个用于在企业级规模下构建、测试和分发 Agent skills 的参考模型。每一层都解决了 Skill 生命周期中的特定问题。</div>

## Details
<div class="zh-trans">详情</div>

The 7-layer model separates concerns from infrastructure to delivery:
<div class="zh-trans">7 层模型将关注点从基础设施层到交付层进行了分离：</div>

**Layer 1 - Infrastructure**
- **Runtime environments**: Docker, Firecracker microVMs, Kubernetes
- **Sandboxing**: Isolated execution to prevent skill interference
- **Resource limits**: CPU, memory, disk I/O caps per skill
- **Networking**: Controlled egress for external API calls
<div class="zh-trans">**第一层 - 基础设施**
- **运行环境**：Docker、Firecracker microVM、Kubernetes
- **沙箱机制**：隔离执行环境，防止 Skill 之间相互干扰
- **资源限制**：针对每个 Skill 设定 CPU、内存及磁盘 I/O 上限
- **网络管控**：针对外部 API 调用实施受控的出站流量管理</div>

**Layer 2 - Skill Definition**
- **SKILL.md specification**: Standardized format for skill documentation
- **Metadata schema**: Name, version, permissions, dependencies
- **Versioning**: Semantic versioning with compatibility declarations
- **Progressive disclosure**: ~100 tokens metadata, <5000 tokens body
<div class="zh-trans">**第 2 层 - Skill 定义**
- **SKILL.md 规范**：Skill 文档的标准化格式
- **Metadata schema**：包括名称、版本、权限、依赖项
- **版本控制**：语义化版本控制，包含兼容性声明
- **渐进式披露**：约 100 tokens 的 metadata，正文 < 5000 tokens</div>

**Layer 3 - Orchestration**
- **Skill composition**: Chaining multiple skills for complex tasks
- **Dependency resolution**: Installing required dependencies
- **Execution planning**: Determining skill invocation order
- **State management**: Passing data between skills
<div class="zh-trans">**第 3 层 - Orchestration**
- **Skill 组合**：链式调用多个 Skill 以处理复杂任务
- **依赖解析**：安装所需的依赖项
- **执行规划**：确定 Skill 的调用顺序
- **状态管理**：在 Skill 之间传递数据</div>

**Layer 4 - Secure Execution**
- **Permission enforcement**: Check ACLs before skill execution
- **Audit logging**: Record all skill invocations with context
- **Rollback mechanisms**: Undo actions when errors detected
- **Timeout controls**: Prevent runaway skills
<div class="zh-trans">**第 4 层 - 安全执行**
- **权限强制执行**：在 skill 执行前检查 ACL
- **审计日志**：记录所有 skill 调用及其上下文
- **回滚机制**：检测到错误时撤销操作
- **超时控制**：防止 skill 失控运行</div>

**Layer 5 - Behavioral Observability**
- **OpenTelemetry integration**: Distributed tracing for skill execution
- **Performance metrics**: Latency, throughput, error rates
- **Error tracking**: Structured logging for debugging
- **Usage analytics**: Which skills are used, by whom, how often
<div class="zh-trans">**第 5 层 - 行为可观测性**
- **OpenTelemetry 集成**：针对 Skill 执行的分布式追踪
- **性能指标**：延迟、吞吐量、错误率
- **错误追踪**：用于调试的结构化日志
- **使用分析**：Skill 使用情况、使用者及使用频率</div>

**Layer 6 - Governance**
- **Approval workflows**: Skills require review before publication
- **Compliance checks**: Validate skills meet security policies
- **Access control**: Role-based permissions for skill usage
- **Deprecation**: Sunset old skills with migration paths
<div class="zh-trans">**第 6 层 - 治理**
- **审批工作流**：Skill 发布前需经过审查
- **合规性检查**：验证 Skill 是否符合安全策略
- **访问控制**：基于角色的 Skill 使用权限管理
- **废弃**：按迁移路径逐步废弃旧 Skill</div>

**Layer 7 - Delivery**
- **Registry APIs**: Publish and discover skills
- **Package management**: Install, update, uninstall skills
- **Update distribution**: Push updates to deployed agents
- **Rollback**: Revert to previous skill versions
<div class="zh-trans">**第 7 层 - 交付**
- **Registry APIs**：发布和发现技能
- **Package management**：安装、更新和卸载技能
- **Update distribution**：向已部署的 Agent 推送更新
- **Rollback**：回退到之前的技能版本</div>

**6-Phase Build Workflow**
<div class="zh-trans">**六阶段构建 Workflow**</div>

The factory uses a standardized workflow for skill development:
<div class="zh-trans">工厂使用标准化的工作流进行技能开发：</div>

**Phase 1 - Spec**
- Define requirements and interface
- Identify permissions needed
- Document expected inputs/outputs
<div class="zh-trans">**阶段 1 - Spec**
- 定义需求与接口
- 确定所需的权限
- 记录预期的输入/输出</div>

**Phase 2 - Scaffold**
- Generate boilerplate from templates
- Set up testing infrastructure
- Configure CI/CD pipeline
<div class="zh-trans">**阶段 2 - Scaffold**
- 基于模板生成脚手架代码
- 搭建测试基础设施
- 配置 CI/CD 流水线</div>

**Phase 3 - Implement**
- Write core logic with security boundaries
- Handle errors and edge cases
- Optimize for token efficiency
<div class="zh-trans">**第 3 阶段 - 实施**
- 编写具有安全边界的核心逻辑
- 处理错误和边缘情况
- 针对 token 效率进行优化</div>

**Phase 4 - Test**
- Unit tests for individual functions
- Integration tests in sandbox
- Security tests for permission enforcement
<div class="zh-trans">**阶段 4 - 测试**
- 针对单个函数的单元测试
- 在沙箱环境中进行的集成测试
- 针对权限执行的安全测试</div>

**Phase 5 - Document**
- Generate SKILL.md with examples
- Write usage guides
- Document known limitations
<div class="zh-trans">**第 5 阶段 - 文档**
- 生成包含示例的 SKILL.md
- 编写使用指南
- 记录已知限制</div>

**Phase 6 - Publish**
- Push to registry with semantic versioning
- Announce to users
- Monitor adoption and errors
<div class="zh-trans">**第 6 阶段 - 发布**
- 推送至 Registry 并采用语义化版本控制
- 向用户发布公告
- 监控采用率及错误</div>

**Progressive Disclosure Principle**
<div class="zh-trans">**渐进式披露原则**</div>

Skills follow a token budget hierarchy:
- **Metadata**: ~100 tokens (name, description, permissions)
- **Body**: <5000 tokens (full implementation)
- **References**: On-demand (detailed docs, examples)
<div class="zh-trans">Skill 遵循 Token 预算层级结构：
- **Metadata**：约 100 Token（名称、描述、权限）
- **Body**：<5000 Token（完整实现）
- **References**：按需加载（详细文档、示例）</div>

This ensures skills remain discoverable without overwhelming agent context windows.
<div class="zh-trans">这确保了 skills 保持可发现性，同时不会耗尽 Agent 的上下文窗口。</div>

**China-Specific Adaptations**
- **Domestic registries**: Skills hosted on Alibaba Cloud, Tencent Cloud
- **Compliance layer**: MLPS 2.0 and PIPL checks built into Layer 6
- **Platform integration**: Skills packaged for DingTalk, Feishu, WeChat
- **Localization**: Documentation in Chinese, examples use domestic services
<div class="zh-trans">**中国区专属适配**

*   **国内镜像仓库**：托管于阿里云、腾讯云的 Skills
*   **合规层**：内置于 Layer 6 的 MLPS 2.0 和 PIPL 合规检查
*   **平台集成**：适配钉钉、飞书、微信的 Skills 封装
*   **本地化**：中文文档，示例采用国内服务</div>

## Connections
<div class="zh-trans">连接</div>

- Related to: [[enterprise-agent-china/concepts/skill-registry|Skill Registry]], [[enterprise-agent-china/entities/agentskills-io|agentskills.io]]
- Mentioned in: [[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]]
<div class="zh-trans">- 相关内容：[[enterprise-agent-china/concepts/skill-registry|Skill Registry]]，[[enterprise-agent-china/entities/agentskills-io|agentskills.io]]
- 提及于：[[enterprise-agent-china/sources/skill-factory-framework|Skill Factory Framework]]</div>
