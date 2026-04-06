---
title: "CLI Design Principles for AI Agents"
date: 2026-04-06
tags: [source, enterprise-agent-china]
source_type: article
source_path: "research/企业API改造为CLI/02_CLI设计原则.md"
---

# CLI Design Principles for AI Agents

## Key Takeaways
<div class="zh-trans">关键要点</div>

- **Non-interactive by default**: No prompts or confirmations that block execution
- **Structured output**: JSON/YAML for easy parsing
- **Fast-fail errors**: Clear exit codes and error messages on stderr
- **Idempotency**: Same input always produces same output
- **Progressive help**: `--help` flag for on-demand documentation
- **Composable structure**: Pipe output between commands
- **Bounded responses**: Limit output size to prevent token overflow
<div class="zh-trans">- **默认非交互**：无阻断执行的提示或确认
- **结构化输出**：输出 JSON/YAML 格式，易于解析
- **快速失败**：提供明确的退出码和 stderr 错误信息
- **幂等性**：相同的输入始终产生相同的输出
- **渐进式帮助**：通过 `--help` 标志获取即时文档
- **可组合结构**：支持在命令间通过管道传递输出
- **有界响应**：限制输出大小以防止 token 溢出</div>

## Summary
<div class="zh-trans">摘要</div>

Agent-friendly CLIs follow seven core design principles that differ from traditional human-oriented CLIs:
<div class="zh-trans">对 Agent 友好的 CLI 遵循七项核心设计原则，这些原则不同于传统面向人类的 CLI：</div>

**1. Non-Interactive by Default**
<div class="zh-trans">**1. 默认非交互**</div>
```bash
# BAD: Prompts block agent execution
$ delete-user alice
Are you sure? (y/n): _

# GOOD: Use --yes flag for confirmation
$ delete-user alice --yes
{"status": "deleted", "user_id": "alice"}
```

**2. Structured Output**
<div class="zh-trans">**2. 结构化输出**</div>
```bash
# BAD: Human-readable but unparseable
$ list-users
Users:
  - Alice (alice@example.com)
  - Bob (bob@example.com)

# GOOD: JSON by default
$ list-users
[
  {"name": "Alice", "email": "alice@example.com"},
  {"name": "Bob", "email": "bob@example.com"}
]
```

**3. Fast-Fail Errors**
<div class="zh-trans">**3. Fast-Fail 错误**</div>
```bash
# BAD: Silent failure or unclear error
$ create-user alice
Error occurred

# GOOD: Clear error on stderr with exit code
$ create-user alice
Error: User 'alice' already exists (code: USER_EXISTS)
$ echo $?
1
```

**4. Idempotency**
<div class="zh-trans">**4. 幂等性**</div>
```bash
# GOOD: Running twice produces same result
$ create-user alice --email alice@example.com
{"status": "created", "user_id": "alice"}

$ create-user alice --email alice@example.com
{"status": "already_exists", "user_id": "alice"}
```

**5. Progressive Help**
<div class="zh-trans">**5. 渐进式帮助**</div>
```bash
# Minimal help in main output
$ enterprise-cli
Usage: enterprise-cli <command> [options]
Commands: users, orders, reports
Use --help for details

# Detailed help on demand
$ enterprise-cli users --help
Manage users in the system
Commands:
  create  Create a new user
  list    List all users
  delete  Delete a user
```

**6. Composable Structure**
<div class="zh-trans">**6. 可组合结构**</div>
```bash
# Pipe output between commands
$ list-users | filter-by-role admin | export-csv > admins.csv
```

**7. Bounded Responses**
<div class="zh-trans">**7. 有界响应**</div>
```bash
# BAD: Unbounded output can overflow context
$ list-all-logs
[... 100,000 lines ...]

# GOOD: Pagination and limits
$ list-logs --limit 100 --page 1
{"logs": [...], "total": 10000, "page": 1, "pages": 100}
```

## Relevant Concepts
<div class="zh-trans">相关概念</div>

- [[enterprise-agent-china/concepts/enterprise-cli-design|Enterprise CLI Design]]
