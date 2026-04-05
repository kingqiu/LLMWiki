---
title: "Dangerous Skills: Red-Teaming Agent Capabilities"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260329_dangerous_skills.md"
---

# Dangerous Skills: Red-Teaming Agent Capabilities

## Key Takeaways
- Red-team study: 23 of 100 community skills exhibited dangerous behavior under adversarial prompts
- Dangerous skill categories: data exfiltration, privilege escalation, persistent code execution
- Trigger mechanisms: prompt injection via environmental data, chained skill interactions
- Defense: mandatory sandboxing + skill isolation + output filtering before acting
- Marketplace platforms need adversarial testing as gating criterion, not optional audit
<div class="zh-trans">- 红队研究：在对抗性提示下，100个社区技能中有23个表现出危险行为
- 危险技能类别：数据窃取、权限提升、持久化代码执行
- 触发机制：通过环境数据进行的提示注入、技能链式交互
- 防御措施：强制沙箱隔离 + 技能隔离 + 执行前输出过滤
- 市场平台需将对抗性测试作为准入标准，而非可选审计</div>


## Summary
This red-team study systematically tests publicly available agent skills for dangerous behaviors. The research team evaluated 100 community-published skills across five marketplaces, using a standardized adversarial prompt suite to probe for exploitable behaviors.
<div class="zh-trans">本次红队研究系统性地测试了公开可用的智能体技能是否存在危险行为。研究团队使用标准化的对抗性提示词套件，对五个市场中的 100 个社区发布技能进行了评估，以探测可被利用的行为。</div>


Results: 23% of tested skills exhibited at least one dangerous behavior class:
- **Data exfiltration** (12 skills): skills that could be prompted to transmit user data to external endpoints declared as legitimate API calls
- **Privilege escalation** (7 skills): skills that requested additional permissions beyond SKILL.md declarations through dynamic permission requests
- **Persistent code execution** (8 skills): skills that planted executable artifacts (scripts, cron entries) that persisted after skill execution completed
<div class="zh-trans">结果：23%的受测技能表现出至少一类危险行为：
- **数据渗出**（12项技能）：可被诱导将用户数据传输至声明为合法 API 调用的外部端点的技能
- **权限提升**（7项技能）：通过动态权限请求申请超出 SKILL.md 声明范围的额外权限的技能
- **持久化代码执行**（8项技能）：植入在技能执行完成后仍持久存在的可执行产物（脚本、cron 条目）的技能</div>


The trigger mechanisms varied: 14 cases used direct prompt injection in user input, 6 exploited environmental data the skill read (malicious content in documents being processed), and 3 required chaining two skills together where the interaction created exploitable behavior neither exhibited alone.
<div class="zh-trans">触发机制各不相同：14个案例在用户输入中使用了直接提示注入，6个案例利用了技能读取的环境数据（被处理文档中的恶意内容），3个案例需要将两个技能串联，其交互作用产生了单独存在时均不具备的可利用行为。</div>


Recommendations: skill marketplaces must adopt mandatory adversarial testing using a standardized red-team suite before listing; agents should sandbox skill execution and filter outputs before acting on them; users should treat community skills as untrusted code until certified.
<div class="zh-trans">建议：技能市场必须在上线前采用标准化红队测试套件进行强制性对抗性测试；智能体应对技能执行进行沙箱隔离，并在执行操作前过滤输出；用户应将社区技能视为非可信代码，直至其经过认证。</div>


The paper argues that the current ecosystem treats skills like macros (benign text instructions) when they should be treated like browser extensions (code with significant capability that requires sandboxing and review).
<div class="zh-trans">该论文指出，当前的生态系统将技能视为宏（良性文本指令），而实际上应将其视为浏览器扩展（具有重大能力的代码，需要沙箱隔离和审核）。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/agent-security|Agent Security]]
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]
