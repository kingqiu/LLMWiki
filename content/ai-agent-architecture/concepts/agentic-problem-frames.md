---
title: "Agentic Problem Frames"
date: 2026-04-05
tags: [concept, ai-agent]
---

# Agentic Problem Frames

## Definition

An engineering framework adapted from classical software engineering Problem Frames theory, providing structured approaches to designing reliable AI agents. It introduces Agentic Job Descriptions (AJD) and the Act-Verify-Refine (AVR) loop.

## Details

### Three Fatal Risks in Current Agent Development

1. **Unbounded scope** — agents acting beyond their authority
2. **Knowledge gaps** — agents filling ambiguity with hallucinated assumptions
3. **Open-loop execution** — no verification of outcomes

### Agentic Job Description (AJD)

Like a human job description, an AJD defines:
- **Jurisdictional boundaries** — what the agent is allowed to do
- **Operational contexts** — environments and constraints
- **Knowledge anchors** — domain knowledge sources
- **Evaluation criteria** — how to measure success
- **Feedback mechanisms** — how to learn and improve

### Act-Verify-Refine (AVR) Loop

1. **Act** — execute according to dynamically generated specification
2. **Verify** — check outcome through callbacks and user confirmations
3. **Refine** — update knowledge for next iteration

This shifts from static one-shot specification to **progressive convergence**.

### Key Insight

> The framework treats the agent as a black box and instead structures its interactions with the environment.

## Connections

- Related to: [[ai-agent-architecture/concepts/harness|Harness]], [[ai-agent-architecture/concepts/multi-agent-architectures|Multi-Agent Architectures]]
- Mentioned in: [[ai-agent-architecture/sources/agentic-problem-frames-paper|APF Paper]]
