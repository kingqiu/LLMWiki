---
title: "Harness as Agent Infrastructure Core"
date: 2026-04-05
tags: [source, ai-agent]
source_type: article
source_path: "Learning/research/20260328_Harness_深度展开_Harness如何成为Agent_Infra核心.md"
---

# Harness as Agent Infrastructure Core

## Key Takeaways
- Harness: controlled boundary between "thinking" (LLM) and "acting" (production systems)
- Two patterns: Agent-Inside-Sandbox vs. Sandbox-As-Tool
- OpenAI proof: 1M lines of code shipped with zero manual source code using Harness
- Industry shifted from capability competition to reliability competition
- Sandbox comparison: Docker (~50ms, weak) vs. Firecracker (~150-500ms, hardware-level) vs. WASM (<10ms, immature)

## Summary
This deep-dive (March 28, 2026) examines the Harness as the emerging core of agent infrastructure. LangChain founder Harrison Chase identified two fundamental sandbox patterns: agents running inside sandboxes (lower latency, used for low-risk tool calls) versus agents using sandboxes as remote tools via network calls (higher isolation, suited for high-risk code execution).

The strategic argument: AI has shifted from "capability competition" (2025) to "reliability competition" (2026). Models from Claude, GPT-4, and Gemini are converging in capability, making the Harness layer the primary venue for differentiation. OpenAI's internal proof — one million lines of code with no manual source code, guided through Harness-controlled PR and CI workflows — demonstrates that Harness is an enabler, not just a safety mechanism.

## Relevant Concepts
- [[ai-agent-architecture/concepts/harness|Harness]]
- [[ai-agent-architecture/concepts/sandbox-architectures|Sandbox Architectures]]
