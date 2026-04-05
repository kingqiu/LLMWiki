---
title: "AI Agent Architecture"
date: 2026-04-05
tags: [topic, overview, ai-agent]
sources: 24
---

# AI Agent Architecture

## Summary

AI Agent architecture has undergone a fundamental shift from 2024 to 2026. The industry has moved beyond asking "can we build agents?" to asking "can we make agents work reliably?" This wiki captures the full landscape — from foundational design patterns and scaling laws to enterprise deployment strategies and security considerations.

The architecture of modern AI agents can be understood through three interrelated layers: the **reasoning core** (LLM with cognitive depth adaptation), the **harness** (the controlled boundary between thinking and acting), and the **skill layer** (modular, reusable, evolvable capabilities). The harness has emerged as the most critical infrastructure component, serving as a mandatory firewall between LLM reasoning and production system execution. Meanwhile, Skills — standardized capability units defined by the agentskills.io open specification — are crystallizing as the fundamental building blocks of agent capability.

Key empirical findings challenge common assumptions: multi-agent systems do NOT always outperform single agents (performance drops up to 70% on sequential reasoning tasks), a small 7B model with proper cognitive depth adaptation can outperform GPT-4o by 40%, and 79% of multi-agent failures originate in the orchestration layer. These findings underscore that architecture decisions matter more than raw model capability.

## Key Concepts

- [[ai-agent-architecture/concepts/harness|Harness]] - The controlled boundary between agent reasoning and real-world execution
- [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]] - Five topology patterns and when to use each
- [[ai-agent-architecture/concepts/agent-scaling-laws|Agent Scaling Laws]] - Empirical laws governing multi-agent system performance
- [[ai-agent-architecture/concepts/cognitive-depth-adaptation|Cognitive Depth Adaptation]] - Dynamic reasoning depth allocation per step
- [[ai-agent-architecture/concepts/agent-memory|Agent Memory]] - Memory as a core harness function, not a plugin
- [[ai-agent-architecture/concepts/skills|Skills]] - The fundamental unit of agent capability
- [[ai-agent-architecture/concepts/skill-lifecycle|Skill Lifecycle Management]] - Create, evaluate, connect, and evolve skills
- [[ai-agent-architecture/concepts/self-evolving-agents|Self-Evolving Agents]] - Agents that learn from deployment experience
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]] - Isolation patterns for agent execution
- [[ai-agent-architecture/concepts/agent-security|Agent Security]] - Attack vectors and defenses for agent systems
- [[ai-agent-architecture/concepts/agentic-problem-frames|Agentic Problem Frames]] - Engineering framework for reliable agent design
- [[ai-agent-architecture/concepts/ai-infrastructure-stack|AI Infrastructure Stack]] - The layered architecture powering AI systems

## Key Entities

- [[ai-agent-architecture/entities/anthropic|Anthropic]] - Creator of Claude and the agentskills.io standard
- [[ai-agent-architecture/entities/langchain|LangChain]] - Agent framework ecosystem (LangGraph, Deep Agents)
- [[ai-agent-architecture/entities/nvidia|NVIDIA]] - GPU ecosystem and OpenShell harness
- [[ai-agent-architecture/entities/letta-ai|Letta AI]] - Memory-first agent architecture (formerly MemGPT)
- [[ai-agent-architecture/entities/skillnet|SkillNet]] - Unified skill ontology platform (Zhejiang University)
- [[ai-agent-architecture/entities/agentskills-io|agentskills.io]] - Open standard for portable agent skills
- [[ai-agent-architecture/entities/memento-skills|Memento-Skills]] - Self-evolving agent framework
- [[ai-agent-architecture/entities/uber-langeffect|Uber LangEffect]] - Enterprise agent case study

## Open Questions

- At what scale does the index-based approach to wiki/knowledge management break down, requiring embedding-based RAG?
- Can self-evolving skill frameworks (Memento-Skills) reliably improve without introducing regressions?
- How do you prevent skill poisoning in open skill ecosystems?
- What is the right balance between agent autonomy and human oversight for enterprise deployment?
- Will the ~45% capability ceiling for multi-agent benefit hold as models improve?

## Sources

- [[ai-agent-architecture/sources/higher-privilege-agent-infra|Higher Privilege AI Agent Infrastructure Research]]
- [[ai-agent-architecture/sources/ai-agent-enterprise|AI Agent Enterprise Applications]]
- [[ai-agent-architecture/sources/harness-deep-dive|Harness as Agent Infrastructure Core]]
- [[ai-agent-architecture/sources/skills-agent-research|Skills and Agent Evolution Research]]
- [[ai-agent-architecture/sources/enterprise-value-of-skills|Enterprise Value of Skills]]
- [[ai-agent-architecture/sources/skill-factory-framework|Skill Factory Implementation Framework]]
- [[ai-agent-architecture/sources/skill-factory-risk-analysis|Skill Factory Hypothesis Testing and Risk Analysis]]
- [[ai-agent-architecture/sources/agentskills-io-ecosystem|agentskills.io Ecosystem Analysis]]
- [[ai-agent-architecture/sources/skillnet-validity-report|SkillNet Validity Report]]
- [[ai-agent-architecture/sources/ai-infrastructure-report|AI Infrastructure Industry Report]]
- [[ai-agent-architecture/sources/agentic-problem-frames-paper|Agentic Problem Frames Paper]]
- [[ai-agent-architecture/sources/agent-scaling-laws-paper|Agent Scaling Laws Paper]]
- [[ai-agent-architecture/sources/skillcraft-paper|SkillCraft Paper]]
- [[ai-agent-architecture/sources/pahf-paper|Personalized Agents from Human Feedback]]
- [[ai-agent-architecture/sources/cogrouter-paper|CogRouter - Think Fast and Slow]]
- [[ai-agent-architecture/sources/skillnet-paper|SkillNet Paper]]
- [[ai-agent-architecture/sources/deep-agents|Deep Agents - LangChain CLI Tool]]
- [[ai-agent-architecture/sources/memento-skills-framework|Memento-Skills Framework]]
- [[ai-agent-architecture/sources/uber-agent|Uber AI Agent Case Study]]
- [[ai-agent-architecture/sources/dangerous-skills|Dangerous Skills - Agent Security]]
- [[ai-agent-architecture/sources/jumperz-multi-agent|Multi-Agent Swarm Pattern]]
- [[ai-agent-architecture/sources/memory-is-the-harness|Why Memory Isn't a Plugin]]
- [[ai-agent-architecture/sources/ai-infrastructure-research|AI Infrastructure Research]]
- [[ai-agent-architecture/sources/skillnet-detailed|SkillNet Detailed Analysis]]
