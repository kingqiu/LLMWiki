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

## Summary
This paper introduces a taxonomy of "agentic problem frames" — a structured way to classify what kind of cognitive work an agent task actually requires. The core argument: most agent system failures are not model failures but architecture failures stemming from applying the wrong problem frame.

The five canonical frames:
1. **Search**: navigating a large information space to find relevant content
2. **Planning**: decomposing a goal into a sequence of achievable sub-steps
3. **Execution**: carrying out well-specified actions reliably with minimal deviation
4. **Reflection**: evaluating outputs against criteria and revising iteratively
5. **Coordination**: managing dependencies and communication across multiple agents or humans

The paper's practical contribution is a decision tree for frame selection based on task characteristics: how well-specified is the goal? How large is the action space? How reversible are actions? The decision tree maps to architecture recommendations (single-agent vs. multi-agent, tool-use depth, human checkpoints).

Enterprise case study: a contract review workflow initially built as a Planning frame agent (generating review checklists) failed because the real bottleneck was inconsistent Execution. Reframing as Execution + Reflection reduced error rates by 73%.

## Relevant Concepts
- [[ai-agent-architecture/concepts/agentic-problem-frames|Agentic Problem Frames]]
- [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]]
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
