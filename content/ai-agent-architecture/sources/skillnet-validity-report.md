---
title: "SkillNet Validity Report"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260326_skills-agent-research/skillnet-validity.md"
---

# SkillNet Validity Report

## Key Takeaways
- SkillNet validity: do peer-reviewed skills actually perform better than unreviewed ones?
- Controlled study: 87% of SkillNet-validated skills passed production acceptance tests vs 61% baseline
- Validity certificate decays: skills need re-validation after model updates or dependency changes
- Human expert review still outperforms automated validation for edge-case correctness
- SkillNet's automated test suite catches tool misuse but misses prompt injection vulnerabilities
<div class="zh-trans">- SkillNet 有效性：经同行评审的技能是否确实优于未经评审的技能？
- 对照研究：87% 经 SkillNet 验证的技能通过了生产验收测试，而基准线仅为 61%
- 有效性证书衰减：在模型更新或依赖项变更后，技能需要重新验证
- 在边缘案例的正确性方面，人类专家审查仍然优于自动化验证
- SkillNet 的自动化测试套件能够捕获工具误用，但无法检测提示词注入漏洞</div>


## Summary
This validity report assesses whether SkillNet's peer-review and automated testing pipeline produces meaningfully better skills. The central finding: validated skills show a 26-percentage-point improvement in production acceptance rates, confirming the value of structured review. However, the improvement concentrates in well-defined task categories (data transformation, API calls) and nearly disappears for open-ended reasoning tasks.
<div class="zh-trans">本有效性报告评估了 SkillNet 的同行评审与自动化测试流程是否能显著提升技能质量。核心发现显示：经过验证的技能在生产环境接受率上提升了 26 个百分点，证实了结构化评审的价值。然而，这种提升主要集中在定义明确的任务类别（如数据转换、API 调用）中，而在开放式推理任务中则几乎消失。</div>


The temporal validity problem is newly identified: a skill validated against GPT-4 Turbo may behave differently after a model update, because skills encode assumptions about model behavior that can silently break. SkillNet's current approach treats skill validity as a static certificate rather than a living assessment.
<div class="zh-trans">新近识别出了时效性有效期问题：针对 GPT-4 Turbo 验证的技能在模型更新后可能表现异常，因为技能中编码了关于模型行为的假设，这些假设可能会发生隐性失效。SkillNet 目前的做法将技能有效性视为一种静态证书，而非动态评估。</div>


Recommendation: implement continuous monitoring via a shadow-mode execution harness that flags behavioral drift post-validation. Human expert review should remain mandatory for skills touching financial, medical, or legal domains.
<div class="zh-trans">建议：通过影子模式执行线束实施持续监控，标记验证后的行为漂移。对于涉及金融、医疗或法律领域的技能，应强制保留人工专家审查。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]

## Relevant Entities
- [[ai-agent-architecture/entities/skillnet|SkillNet]]
