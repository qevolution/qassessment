# QA Assessment — Free Agent Skill
> A conversational QA maturity assessment for AI agents. Ask your agent to run it — it interviews your team, scores 6 dimensions, and gives you a radar chart with actionable recommendations in ~5 minutes.

---
## ⚠️ This is not a CLI tool
This is an **AI agent skill** — it runs inside your AI coding assistant (Cursor, Claude Code, Windsurf, etc.), not in your terminal.
Your terminal is only used to **install** it. After that, you talk to your agent.

---
## Installation
Run this once in your terminal:
```bash
npx skills add qevolution/qassessment
```
The installer will ask you which agents to install to (Cursor, Claude Code, Windsurf, Copilot, etc.) and whether to install at project or global level.

---
## How to use it
**After installation, open your AI agent and start the skill:**

| Agent | How to run it |
| --- | --- |
| **Claude Code** | Type `/qa-assessment` in the chat |
| **Cursor** | Type `Run the QA assessment` in the chat (`Cmd+L`) |
| **Windsurf** | Type `Run the QA assessment` in Cascade |
| **GitHub Copilot** | Type `Run the QA assessment` in the chat (`Cmd+Shift+I`) |
| **Cline** | Type `Run the QA assessment` in the Cline panel |
| **Codex** | Type `Run the QA assessment` in the chat |

That's it. The agent takes over from there.
It will:
1. Ask you to choose your language
2. Ask 12 questions one at a time (you answer in natural language — no forms, no clicks)
3. Score your answers across 6 quality dimensions
4. Show you a radar chart with your maturity level
5. Give you 3 concrete recommendations based on your weakest areas
> 💡 The skill supports multiple languages. It asks your preferred language at the start and conducts the entire assessment in that language.
---
## What the assessment covers
12 questions across 6 dimensions, based on a validated QA consulting criteria:
| # | Dimension | What it evaluates |
| --- | --- | --- |
| 1 | 🏢 Culture & Feedback | Retrospectives, technical debt, process improvement |
| 2 | 🎯 Quality Ownership | When QA gets involved, Quality Engineering vs. traditional testing |
| 3 | 🧪 Testing Strategy | Coverage, test breadth (unit → E2E), exploratory testing |
| 4 | 🤖 Automation & Tools | Automation strategy, tooling, best practices |
| 5 | 🚀 CI/CD & Deployment | Deployment frequency, pipeline automation, infrastructure |
| 6 | 📊 Monitoring & Incidents | Error detection, alerting, incident management, post-mortems |
### Maturity levels
| Level | Label | Score |
| --- | --- | --- |
| L1 | 🔴 Initial | 1.0 – 1.9 |
| L2 | 🟠 Basic | 2.0 – 2.9 |
| L3 | 🟡 Intermediate | 3.0 – 3.5 |
| L4 | 🟢 Advanced | 3.6 – 4.4 |
| L5 | 🏆 Champion | 4.5 – 5.0 |
---
## Example output
```javascript
╔══════════════════════════════════════════════════════════╗
║          QA MATURITY RADAR — YOUR RESULTS                ║
╠══════════════════════════════════════════════════════════╣
║  Dimension                  Score   Visual               ║
╠══════════════════════════════════════════════════════════╣
║  🏢 Culture & Feedback       3.5/5  ██████████████░░░░░░ ║
║  🎯 Quality Ownership        2.0/5  ████████░░░░░░░░░░░░ ║
║  🧪 Testing Strategy         3.0/5  ████████████░░░░░░░░ ║
║  🤖 Automation & Tools       2.5/5  ██████████░░░░░░░░░░ ║
║  🚀 CI/CD & Deployment       4.0/5  ████████████████░░░░ ║
║  📊 Monitoring & Incidents   2.0/5  ████████░░░░░░░░░░░░ ║
╠══════════════════════════════════════════════════════════╣
║  ⭐ OVERALL MATURITY          2.8/5                      ║
╚══════════════════════════════════════════════════════════╝

Your team is at 🟠 L2 — Basic maturity.

🔧 Top 3 recommendations:
1. Quality Ownership — Include QA in story refinement from day one...
2. Monitoring & Incidents — Define SLAs/SLOs and run blameless post-mortems...
3. Automation & Tools — Document and publish your automation strategy...
```
---
## Free vs. Full Assessment
This skill is the **free tier**. It gives you a directional view of where your team stands.
| Feature | Free (this skill) | Full Assessment |
| --- | --- | --- |
| Questions | 12 | 45+ |
| Dimensions | 6 | 10+ |
| Radar chart | ✅ | ✅ |
| Industry benchmarking | ❌ | ✅ |
| Repo analysis | ❌ | ✅ |
| Custom maturity roadmap | ❌ | ✅ |
| Expert review session | ❌ | ✅ |
| Executive-ready report | ❌ | ✅ |
| Security & FinOps dimensions | ❌ | ✅ |
**👉 Book the Full Assessment: **[**qevolution.tech**](https://www.qevolution.tech/) **📧 Contact: **[mailto:info@qevolution.tech](./mailto:info@qevolution.tech)
---
## File structure
```
├── qa-assessment/
│   ├── SKILL.md                ← agent instructions (the skill entrypoint)
│   ├── questions/
│   │   └── free-assessment.md  ← 12 questions with L1→L5 options
│   └── scoring/
│       └── rubric.md           ← scoring logic and interpretation guide
├── README.md
└── package.json
```
---
## Contributing
Spotted a question that could be sharper? A scoring edge case? A missing dimension? Open a PR or an issue — contributions welcome.

---
## License
MIT — free to use, fork, and adapt. Attribution appreciated.
