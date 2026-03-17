# QA Assessment — Agent Skill

> A freemium AI agent skill that guides any software team through a structured QA & software quality maturity assessment in under 5 minutes.

---

## What it does

The skill runs a conversational 12-question assessment with your AI agent (Claude Code, Cursor, Windsurf, or any agent that supports skills). At the end it generates:

- **Radar chart** across 6 quality dimensions
- **Maturity level** (L1 Initial → L5 Champion)
- **Top 3 actionable recommendations** based on your weakest areas
- **CTA** to the full 45-question expert assessment

---

## Maturity Model

Questions are based on two validated frameworks:

- **QPAM** (Quality Practice & Assessment Model) — radar dimensions adapted from the QA Practice Assessment Model used in production QA consulting
- **Software Quality Tech Assessment** — industry-validated criteria covering culture, testing, automation, CI/CD, monitoring, and security

### Dimensions

| # | Dimension              | What it measures |
|---|------------------------|------------------|
| 1 | 🏢 Culture & Feedback   | Retrospectives, continuous improvement, technical debt management |
| 2 | 🎯 Quality Ownership    | How early QA is involved; Quality Engineering vs. traditional testing |
| 3 | 🧪 Testing Strategy     | Test coverage, breadth (unit→E2E), exploratory testing |
| 4 | 🤖 Automation & Tools   | Automation strategy, tooling selection, best practices |
| 5 | 🚀 CI/CD & Deployment   | Deployment frequency, pipeline automation, infrastructure |
| 6 | 📊 Monitoring & Incidents | Error detection, alerting, incident management, post-mortems |

### Maturity Levels

| Level | Label        | Score |
|-------|--------------|-------|
| L1    | 🔴 Initial    | 1.0–1.9 |
| L2    | 🟠 Basic      | 2.0–2.9 |
| L3    | 🟡 Intermediate | 3.0–3.5 |
| L4    | 🟢 Advanced   | 3.6–4.4 |
| L5    | 🏆 Champion   | 4.5–5.0 |

---

## File structure

```
qa-assessment/
├── SKILL.md                    # Core agent instructions (the skill entrypoint)
├── bin/
│   └── install.js              # npx installer
├── questions/
│   └── free-assessment.md      # 12 questions with A–E options (L1→L5)
├── scoring/
│   └── rubric.md               # Scoring logic, radar chart rendering, interpretation guide
├── package.json
└── README.md                   # This file
```

---

## How to use

### Install via npx (recommended)

Run this once to install the skill in your AI editor:

```bash
npx qa-assessment
```

This automatically installs the skill to `~/.claude/commands/qa-assessment.md` (Claude Code global) or `.claude/commands/` (project-level if detected).

Then run the assessment:

```bash
/skill qa-assessment
```

### Claude Code (manual)

Clone the repo and invoke directly:

```
Run the QA assessment skill from qa-assessment/SKILL.md
```

### Cursor / Windsurf

Add the skill to your agent context and prompt:

```
Run the QA maturity assessment for our team.
```

### Manual (any LLM)

Paste the contents of `SKILL.md` as a system prompt, then start the conversation.

---

## Free vs. Full Assessment

| Feature                        | Free (this skill) | Full Assessment |
|-------------------------------|-------------------|-----------------|
| Questions                      | 12                | 45+             |
| Dimensions                     | 6                 | 10              |
| Radar chart                    | ✅                | ✅              |
| Industry benchmarking          | ❌                | ✅              |
| Custom maturity roadmap        | ❌                | ✅              |
| Expert review session          | ❌                | ✅              |
| Executive-ready report         | ❌                | ✅              |
| Security & FinOps dimensions   | ❌                | ✅              |

**Book the Full Assessment:** https://www.qevolution.tech
**Contact:** info@qevolution.tech

---

## Contributing

This skill is open to community improvements. If you spot a question that could be more precise, a scoring edge case, or a missing dimension — open a PR or issue.

---

## License

MIT — free to use, fork, and adapt. Attribution appreciated.
