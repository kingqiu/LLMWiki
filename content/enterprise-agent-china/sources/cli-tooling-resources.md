---
title: "CLI Tooling Resources and References"
date: 2026-04-06
tags: [source, enterprise-agent-china]
source_type: article
source_path: "research/企业API改造为CLI/03_相关工具资料.md"
---

# CLI Tooling Resources and References

## Key Takeaways

- **OpenAPI Generator**: Automated CLI generation from OpenAPI specs
- **Cobra (Go)**: Most popular Go CLI framework, used by kubectl, Hugo, GitHub CLI
- **Click (Python)**: Decorator-based CLI with automatic help generation
- **Commander.js (Node)**: Lightweight CLI framework for JavaScript/TypeScript
- **oclif (Node)**: Heroku's CLI framework, used by Salesforce CLI

## Summary

This document catalogs the primary tools and frameworks for building agent-friendly CLIs.

**OpenAPI Generator**
- Website: https://openapi-generator.tech
- Languages: 50+ including Go, Python, Java, TypeScript
- Features: Generate CLI from OpenAPI 3.0 specs
- Use case: Automated CLI generation for existing APIs

**Cobra (Go)**
- Website: https://cobra.dev
- Used by: kubectl, Hugo, GitHub CLI, Docker CLI
- Features: Subcommands, flags, automatic help, shell completion
- Example:
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

## Relevant Concepts

- [[enterprise-agent-china/concepts/enterprise-cli-design|Enterprise CLI Design]]
