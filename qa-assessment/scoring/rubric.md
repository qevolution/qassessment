# Scoring Rubric

## Answer-to-Score Mapping

| Answer | Score |
|--------|-------|
| A      | 1     |
| B      | 2     |
| C      | 3     |
| D      | 4     |
| E      | 5     |

---

## Radar Dimensions

Each dimension is the **average** of its two question scores (rounded to 1 decimal place).

| Dimension              | Questions | Icon |
|------------------------|-----------|------|
| Culture & Feedback     | Q1 + Q2   | 🏢   |
| Quality Ownership      | Q3 + Q4   | 🎯   |
| Testing Strategy       | Q5 + Q6   | 🧪   |
| Automation & Tools     | Q7 + Q8   | 🤖   |
| CI/CD & Deployment     | Q9 + Q10  | 🚀   |
| Monitoring & Incidents | Q11 + Q12 | 📊   |

**Overall score** = average of all 6 dimension scores (or equivalently, average of all 12 question scores).

---

## Maturity Levels

| Score Range | Level | Label           | Description |
|-------------|-------|-----------------|-------------|
| 1.0 – 1.9   | L1    | 🔴 Initial       | Processes are absent or entirely ad-hoc. Quality is reactive. Significant risk to product stability. |
| 2.0 – 2.9   | L2    | 🟠 Basic         | Some practices exist but are inconsistent, undocumented, or siloed. Progress is happening but not systematically. |
| 3.0 – 3.5   | L3    | 🟡 Intermediate  | Defined processes, cross-team consistency, partial automation. A solid foundation — ready to scale. |
| 3.6 – 4.4   | L4    | 🟢 Advanced      | Best practices are consolidated and enforced. Quality is measurable and continuously improved. |
| 4.5 – 5.0   | L5    | 🏆 Champion      | Industry-leading practices. Quality is embedded in culture, automated end-to-end, and treated as a competitive advantage. |

---

## Dimension Interpretation Guide

Use this when writing the personalised interpretation in Step 5 and recommendations in Step 6.

### 🏢 Culture & Feedback

**What it measures:** Whether quality improvement is embedded in the team's habits — retrospectives, feedback cycles, and proactive management of technical debt.

| Score | Meaning |
|-------|---------|
| 1–2   | Processes are informal; debt accumulates silently; no systematic learning from past mistakes. |
| 3     | Retrospectives happen; some debt management; improvements tracked but inconsistently. |
| 4–5   | Culture of continuous improvement; debt is a first-class citizen; retrospectives drive measurable change. |

**Key improvement levers:**
- Formalise retrospectives with clear action ownership and follow-up in the next sprint.
- Start tracking technical debt as a metric in your team dashboard (e.g. SonarQube, CodeClimate).
- Dedicate a fixed percentage of each sprint to debt reduction (start with 10–15%).

---

### 🎯 Quality Ownership

**What it measures:** How early QA is involved in the SDLC and whether the team practises Quality Engineering (prevention) vs. traditional Testing (detection).

| Score | Meaning |
|-------|---------|
| 1–2   | QA is an afterthought; testing happens at the end; quality is not a shared responsibility. |
| 3     | QA is involved in development but still mostly reactive; acceptance criteria owned by QA alone. |
| 4–5   | QA drives quality from business requirements; the whole team shares ownership; quality persists even without a dedicated tester. |

**Key improvement levers:**
- Include QA in story refinement and sprint planning — not just in the "testing" column.
- Shift Definition of Done to include quality criteria (unit tests, automation, docs).
- Train developers on testing principles so quality isn't a bottleneck at one role.

---

### 🧪 Testing Strategy

**What it measures:** The breadth, depth, and intentionality of the team's testing approach — from coverage targets to human-driven exploratory testing.

| Score | Meaning |
|-------|---------|
| 1–2   | Mostly manual or no testing; no coverage goals; no exploratory sessions. |
| 3     | Mix of manual and basic automation; exploratory testing done by QA in isolation. |
| 4–5   | Full test suite across all levels; coverage targets met; whole-team exploratory testing complements automation. |

**Key improvement levers:**
- Define minimum coverage thresholds per layer (unit: 80%, integration: 50%, E2E: critical paths).
- Schedule regular exploratory testing sessions with dev and product — not just QA.
- Introduce accessibility and usability checks as part of the Definition of Done.

---

### 🤖 Automation & Tools

**What it measures:** Whether the team has a coherent automation strategy, follows engineering best practices for test code, and integrates automation into the pipeline.

| Score | Meaning |
|-------|---------|
| 1–2   | No strategy; tests are fragile and poorly maintained; low confidence in automation. |
| 3     | A strategy exists and is followed by QA; basic patterns applied; CI integration partial. |
| 4–5   | Strategy is public, enforced, reviewed; test code treated as production code; full CI integration with zero flakiness tolerance. |

**Key improvement levers:**
- Document and publish your automation strategy (test pyramid/trophy) in your team wiki.
- Apply code review to test code, same as production code — no exceptions.
- Adopt design patterns (Page Object Model, SOLID) to reduce maintenance cost.

---

### 🚀 CI/CD & Deployment

**What it measures:** The frequency, safety, and automation level of deployments — from build pipelines to infrastructure management.

| Score | Meaning |
|-------|---------|
| 1–2   | Manual, infrequent, risky deployments; no real pipeline; infrastructure managed ad-hoc. |
| 3     | Weekly deployments; CI pipeline exists; some infrastructure as code; manual approval gates. |
| 4–5   | Daily deployments; fully automated CD with quality gates; immutable infrastructure; canary/blue-green strategies. |

**Key improvement levers:**
- Aim to deploy at least weekly — if it's painful, it's a signal to improve, not a reason to avoid it.
- Introduce infrastructure as code (ex: Terraform) for at least one environment.
- Add automated quality gates to your pipeline: tests must pass, coverage must not drop, security scans must be clean.

---

### 📊 Monitoring & Incidents

**What it measures:** Whether the team can detect problems before users do, and whether incidents are handled systematically with learning built in.

| Score | Meaning |
|-------|---------|
| 1–2   | No monitoring; issues discovered via user complaints; no post-mortem process. |
| 3     | Basic alerts and runbooks; post-mortems for major incidents; some tracking. |
| 4–5   | Proactive monitoring with anomaly detection; blameless post-mortems for all incidents; public status pages; QA involved in monitoring review. |

**Key improvement levers:**
- Define and alert on SLAs/SLOs — don't just monitor infrastructure, monitor user experience.
- Run blameless post-mortems for all incidents (not just P1/P2) and track action items to completion.
- Involve QA and product in reviewing monitoring dashboards — observability is not only ops' job.

---

## Radar Bar Rendering

For the visual bar in the radar chart:

```
score 1.0 → ████░░░░░░░░░░░░░░░░  (4 filled)
score 2.0 → ████████░░░░░░░░░░░░  (8 filled)
score 3.0 → ████████████░░░░░░░░  (12 filled)
score 4.0 → ████████████████░░░░  (16 filled)
score 5.0 → ████████████████████  (20 filled)
```

Formula: `filled = round(score * 4)`, total bar width = 20 characters.

For fractional scores, round to nearest integer for the bar fill.

---

## Full Assessment Upsell Context

The free assessment (12 questions, 6 dimensions) is intentionally a representative sample. The **Full QA Assessment** expands to:

| Area                        | Free | Full |
|-----------------------------|------|------|
| Culture & Feedback          | 2 Q  | 6 Q  |
| Quality Ownership           | 2 Q  | 5 Q  |
| Testing Strategy            | 2 Q  | 6 Q  |
| Automation & Tools          | 2 Q  | 6 Q  |
| CI/CD & Deployment          | 2 Q  | 5 Q  |
| Monitoring & Incidents      | 2 Q  | 5 Q  |
| Security                    | —    | 4 Q  |
| Platform & Infrastructure   | —    | 5 Q  |
| FinOps                      | —    | 3 Q  |
| **Total**                   | **12 Q** | **45 Q** |

Plus: benchmarking data, custom roadmap, expert review session, executive report.
