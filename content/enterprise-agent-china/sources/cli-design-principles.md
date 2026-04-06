---
title: "CLI Design Principles for AI Agents"
date: 2026-04-06
tags: [source, enterprise-agent-china]
source_type: article
source_path: "research/企业API改造为CLI/02_CLI设计原则.md"
---

# CLI Design Principles for AI Agents

## Key Takeaways

- **Non-interactive by default**: No prompts or confirmations that block execution
- **Structured output**: JSON/YAML for easy parsing
- **Fast-fail errors**: Clear exit codes and error messages on stderr
- **Idempotency**: Same input always produces same output
- **Progressive help**: `--help` flag for on-demand documentation
- **Composable structure**: Pipe output between commands
- **Bounded responses**: Limit output size to prevent token overflow

## Summary

Agent-friendly CLIs follow seven core design principles that differ from traditional human-oriented CLIs:

**1. Non-Interactive by Default**
```bash
# BAD: Prompts block agent execution
$ delete-user alice
Are you sure? (y/n): _

# GOOD: Use --yes flag for confirmation
$ delete-user alice --yes
{"status": "deleted", "user_id": "alice"}
```

**2. Structured Output**
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
```bash
# GOOD: Running twice produces same result
$ create-user alice --email alice@example.com
{"status": "created", "user_id": "alice"}

$ create-user alice --email alice@example.com
{"status": "already_exists", "user_id": "alice"}
```

**5. Progressive Help**
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
```bash
# Pipe output between commands
$ list-users | filter-by-role admin | export-csv > admins.csv
```

**7. Bounded Responses**
```bash
# BAD: Unbounded output can overflow context
$ list-all-logs
[... 100,000 lines ...]

# GOOD: Pagination and limits
$ list-logs --limit 100 --page 1
{"logs": [...], "total": 10000, "page": 1, "pages": 100}
```

## Relevant Concepts

- [[enterprise-agent-china/concepts/enterprise-cli-design|Enterprise CLI Design]]
