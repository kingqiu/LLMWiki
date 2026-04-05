---
title: "Agentic Problem Frames Paper"
date: 2026-04-05
tags: [source, ai-agent]
source_type: paper
source_path: "Learning/research/20260320_agentic_problem_frames.md"
---

# Agentic Problem Frames Paper

## Key Takeaways
- Five canonical agentic problem frames: Search, Planning, Execution, Reflection, Coordination
- Frame selection determines appropriate architecture — wrong frame → wrong agent design
- Most enterprise failures map to frame mismatch, not model capability gaps
- Cognitive depth should match problem complexity: shallow for routine, deep for novel
- Hybrid frames (Search+Execution, Planning+Reflection) needed for complex real-world tasks
<div class="zh-trans">- 五种典型的智能体问题框架：搜索、规划、执行、反思、协同
- 框架的选择决定了恰当的架构——错误的框架会导致错误的智能体设计
- 大多数企业级失败归因于框架错配，而非模型能力不足
- 认知深度应与问题复杂度相匹配：常规任务宜浅，新颖任务宜深
- 复杂的现实任务需要混合框架（如搜索+执行、规划+反思）</div>


## Summary
This paper introduces a taxonomy of "agentic problem frames" — a structured way to classify what kind of cognitive work an agent task actually requires. The core argument: most agent system failures are not model failures but architecture failures stemming from applying the wrong problem frame.
<div class="zh-trans">本文介绍了“代理型问题框架”的分类体系——一种对代理任务实际所需的认知工作进行分类的结构化方法。核心论点是：大多数代理系统的故障并非模型故障，而是源于应用了错误问题框架的架构故障。</div>


The five canonical frames:
1. **Search**: navigating a large information space to find relevant content
2. **Planning**: decomposing a goal into a sequence of achievable sub-steps
3. **Execution**: carrying out well-specified actions reliably with minimal deviation
4. **Reflection**: evaluating outputs against criteria and revising iteratively
5. **Coordination**: managing dependencies and communication across multiple agents or humans
<div class="zh-trans">五种规范框架：1. **搜索**：在庞大的信息空间中导航以查找相关内容 2. **规划**：将目标分解为一系列可实现的子步骤 3. **执行**：以最小的偏差可靠地执行明确规定的动作 4. **反思**：依据标准评估输出并进行迭代修正 5. **协调**：管理多智能体或人类之间的依赖关系与通信</div>


The paper's practical contribution is a decision tree for frame selection based on task characteristics: how well-specified is the goal? How large is the action space? How reversible are actions? The decision tree maps to architecture recommendations (single-agent vs. multi-agent, tool-use depth, human checkpoints).
<div class="zh-trans">本文的实践贡献在于提出了一个基于任务特征的框架选择决策树：目标定义的明确程度如何？动作空间有多大？动作的可逆性如何？该决策树映射到架构建议（单智能体 vs. 多智能体、工具使用深度、人工检查点）。</div>


Enterprise case study: a contract review workflow initially built as a Planning frame agent (generating review checklists) failed because the real bottleneck was inconsistent Execution. Reframing as Execution + Reflection reduced error rates by 73%.
<div class="zh-trans">企业案例研究：一个合同审查工作流最初被构建为规划型智能体（用于生成审查清单），但最终失败，因为真正的瓶颈在于执行不一致。将其重构为执行 + 反思后，错误率降低了 73%。</div>


## Relevant Concepts
- [[ai-agent-architecture/concepts/agentic-problem-frames|Agentic Problem Frames]]
- [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]]
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
