---
title: "CLI Tooling Resources and References"
date: 2026-04-06
tags: [source, enterprise-agent-china]
source_type: article
source_path: "research/企业API改造为CLI/03_相关工具资料.md"
---

# CLI Tooling Resources and References

## Key Takeaways
<div class="zh-trans">关键要点</div>

- **OpenAPI Generator**: Automated CLI generation from OpenAPI specs
- **Cobra (Go)**: Most popular Go CLI framework, used by kubectl, Hugo, GitHub CLI
- **Click (Python)**: Decorator-based CLI with automatic help generation
- **Commander.js (Node)**: Lightweight CLI framework for JavaScript/TypeScript
- **oclif (Node)**: Heroku's CLI framework, used by Salesforce CLI
<div class="zh-trans">- **OpenAPI Generator**：基于 OpenAPI 规范自动生成 CLI
- **Cobra (Go)**：最流行的 Go CLI 框架，kubectl、Hugo 和 GitHub CLI 均在使用
- **Click (Python)**：基于装饰器的 CLI，支持自动生成帮助信息
- **Commander.js (Node)**：适用于 JavaScript/TypeScript 的轻量级 CLI 框架
- **oclif (Node)**：Heroku 的 CLI 框架，Salesforce CLI 正在使用</div>

## Summary
<div class="zh-trans">摘要</div>

This document catalogs the primary tools and frameworks for building agent-friendly CLIs.
<div class="zh-trans">本文档汇总了用于构建 Agent 友好型 CLI 的主要工具和框架。</div>

**OpenAPI Generator**
- Website: https://openapi-generator.tech
- Languages: 50+ including Go, Python, Java, TypeScript
- Features: Generate CLI from OpenAPI 3.0 specs
- Use case: Automated CLI generation for existing APIs
<div class="zh-trans">**OpenAPI Generator**
- 网站：https://openapi-generator.tech
- 语言：50+ 种，包括 Go、Python、Java、TypeScript
- 特性：基于 OpenAPI 3.0 规范生成 CLI
- 使用场景：为现有 API 自动生成 CLI</div>

**Cobra (Go)**
- Website: https://cobra.dev
- Used by: kubectl, Hugo, GitHub CLI, Docker CLI
- Features: Subcommands, flags, automatic help, shell completion
- Example:
<div class="zh-trans">**Cobra (Go)**
- 网站：https://cobra.dev
- 使用者：kubectl、Hugo、GitHub CLI、Docker CLI
- 特性：子命令、flags、自动生成帮助信息、shell 补全
- 示例：</div>
```go
var rootCmd = &cobra.Command{
  Use:   "app",
  Short: "My application",
}
```

**Click (Python)**
- Website: https://click.palletsprojects.com
- Features: Decorators, automatic help, parameter validation
- Example:
<div class="zh-trans">**Click (Python)**
- 官网：https://click.palletsprojects.com
- 特性：Decorators、自动帮助、参数验证
- 示例：</div>
```python
@click.command()
@click.option('--name', required=True)
def hello(name):
    click.echo(f'Hello {name}')
```

**Commander.js (Node)**
- Website: https://github.com/tj/commander.js
- Used by: npm, yarn, webpack
- Features: Lightweight, chainable API
- Example:
<div class="zh-trans">**Commander.js (Node)**
- 网站：https://github.com/tj/commander.js
- 使用者：npm, yarn, webpack
- 特性：轻量级，支持链式 API
- 示例：</div>
```javascript
program
  .command('create <name>')
  .action((name) => {
    console.log(`Creating ${name}`);
  });
```

**oclif (Node)**
- Website: https://oclif.io
- Used by: Salesforce CLI, Heroku CLI
- Features: Plugin system, auto-documentation, testing utilities
- Best for: Large, extensible CLIs
<div class="zh-trans">**oclif (Node)**
- 官网：https://oclif.io
- 使用者：Salesforce CLI, Heroku CLI
- 特性：Plugin 系统、自动文档生成、测试工具
- 最适用于：大型、可扩展的 CLI</div>

## Relevant Concepts
<div class="zh-trans">相关概念</div>

- [[enterprise-agent-china/concepts/enterprise-cli-design|Enterprise CLI Design]]
