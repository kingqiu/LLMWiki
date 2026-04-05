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

## Summary
This validity report assesses whether SkillNet's peer-review and automated testing pipeline produces meaningfully better skills. The central finding: validated skills show a 26-percentage-point improvement in production acceptance rates, confirming the value of structured review. However, the improvement concentrates in well-defined task categories (data transformation, API calls) and nearly disappears for open-ended reasoning tasks.

The temporal validity problem is newly identified: a skill validated against GPT-4 Turbo may behave differently after a model update, because skills encode assumptions about model behavior that can silently break. SkillNet's current approach treats skill validity as a static certificate rather than a living assessment.

Recommendation: implement continuous monitoring via a shadow-mode execution harness that flags behavioral drift post-validation. Human expert review should remain mandatory for skills touching financial, medical, or legal domains.

## Relevant Concepts
- [[ai-agent-architecture/concepts/skills|Skills]]
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]]

## Relevant Entities
- [[ai-agent-architecture/entities/skillnet|SkillNet]]
