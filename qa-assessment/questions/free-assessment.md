# Free Assessment — 12 Questions

These questions cover 6 key dimensions of QA and software quality maturity.
Each question maps to a maturity level: **A = L1 (Initial) → E = L5 (Champion)**.

---

## Dimension 1: Culture & Feedback

### Q1 — Process Improvement & Retrospectives

How does your team handle retrospectives and process improvement?

- **A)** We don't do retrospectives; processes are mostly ad-hoc and undocumented.
- **B)** We do occasional retrospectives within the team, but improvements rarely get implemented.
- **C)** We run regular retrospectives across teams and track action items with some follow-through.
- **D)** We have a structured retrospective process with measurable improvement goals and ownership.
- **E)** Continuous improvement is embedded in our culture — retrospectives drive documented process changes with clear metrics.

---

### Q2 — Technical Debt & Code Quality

How does your team manage technical debt?

- **A)** Technical debt is ignored until it causes a critical production issue.
- **B)** We address it reactively when it blocks new features.
- **C)** We occasionally dedicate sprint time to reducing debt.
- **D)** We track technical debt as a metric and regularly allocate time to reduce it.
- **E)** We manage debt proactively with automated quality gates, metrics dashboards, and continuous refactoring cycles.

---

## Dimension 2: Quality Ownership

### Q3 — QA Integration in the SDLC

When does QA get involved in the development lifecycle?

- **A)** QA only tests at the very end, before release — or there is no dedicated QA.
- **B)** QA joins during development but mainly tests finished features.
- **C)** QA is involved from requirements definition, writing acceptance criteria alongside developers.
- **D)** QA participates from story refinement, contributes to design decisions, and shapes Definition of Done.
- **E)** QA is part of business conversations — involved before product or design starts, shaping quality from the earliest stages.

---

### Q4 — Quality Engineering vs. Traditional Testing

How would you describe the role of your QA/testing team?

- **A)** There is no QA team or dedicated testing role.
- **B)** QA tests manually after development; findings are mostly bug reports.
- **C)** QA writes automated tests and contributes to CI pipelines alongside dev work.
- **D)** QA drives automation strategy, defines standards, and mentors developers on quality practices.
- **E)** The team practises Quality Engineering — prevention over detection, embedded in architecture decisions, automation at every level, and a quality culture that doesn't depend on a single role.

---

## Dimension 3: Testing Strategy

### Q5 — Testing Scope & Coverage

Which best describes your current testing approach?

- **A)** Primarily manual ad-hoc testing; unit test coverage below 20%.
- **B)** Basic unit tests, some manual regression; coverage between 20–40%.
- **C)** Unit and integration tests in place; coverage 40–60%; some E2E automation.
- **D)** Unit, integration, and E2E tests; coverage 60–80%; performance tests in controlled environments.
- **E)** Full test suite: unit, integration, E2E, performance, and security; coverage above 80%; continuous testing in ephemeral environments.

---

### Q6 — Exploratory & Human-Driven Testing

How does your team approach exploratory and human-driven testing?

- **A)** No exploratory testing — only scripted manual checks or nothing.
- **B)** QA does occasional exploratory sessions, independently and informally.
- **C)** Regular exploratory testing sessions are planned and documented by QA.
- **D)** Exploratory testing is structured and involves developers and product; findings feed into automation backlog.
- **E)** The whole team — QA, dev, product, design — participates in exploratory sessions guided by QA, complementing full automation coverage.

---

## Dimension 4: Automation & Tools

### Q7 — Automation Strategy

How would you describe your test automation strategy?

- **A)** No automation strategy exists; we automate whatever is convenient at the time.
- **B)** We have some automation but it's inconsistent, fragile, and not connected to a strategy.
- **C)** We follow a documented strategy (e.g. test pyramid) known by the QA team.
- **D)** We have a clear, public automation strategy (pyramid/trophy) with standards, code reviews, and design patterns.
- **E)** The strategy is globally defined, versioned, and enforced across teams; different team contexts allowed under unified governance.

---

### Q8 — Automation Best Practices & Maintenance

How is your test automation code managed and maintained?

- **A)** No standards; tests break often and nobody owns them.
- **B)** Some tests exist but there are no naming, structure, or maintenance conventions.
- **C)** We apply basic patterns (e.g. Page Object Model) and tests are reviewed occasionally.
- **D)** Automated tests follow enforced standards, pass code review, and are integrated in CI/CD pipelines.
- **E)** Tests follow architectural patterns (SOLID, POM, etc.), are code-reviewed, auto-run in CI, and treated as production-grade code with zero tolerance for flakiness.

---

## Dimension 5: CI/CD & Deployment

### Q9 — Deployment Frequency

How often does your team deploy to production?

- **A)** Monthly or less frequently; deployments are manual and stressful events.
- **B)** Every 2–3 weeks; partially scripted but require significant manual coordination.
- **C)** Weekly; CI pipeline exists but deployments need manual approval and intervention.
- **D)** Several times per week; automated pipeline with approval gates and rollback capability.
- **E)** Daily or more frequently; fully automated CD pipeline with canary/blue-green releases and quality gates.

---

### Q10 — Pipeline Automation & Infrastructure

How automated is your build, test, and deployment pipeline?

- **A)** No automation; everything is done manually step by step.
- **B)** Basic version control and some build scripts; deployments still manual.
- **C)** CI pipeline runs automated builds and tests on commits; some infrastructure as code.
- **D)** Full CI/CD pipeline with automated quality checks, approval gates, and infrastructure as code for all environments.
- **E)** Fully automated, immutable infrastructure; CD pipeline includes security scanning, performance checks, and self-healing mechanisms.

---

## Dimension 6: Monitoring & Incidents

### Q11 — Error Detection & Production Monitoring

How does your team detect and respond to production issues?

- **A)** Issues are discovered through user complaints; no monitoring in place.
- **B)** Basic monitoring and alerts exist but are reactive; no structured runbooks.
- **C)** Alerts are configured by severity; runbooks exist for common incidents; on-call rotations defined.
- **D)** Alerts are tied to user impact; detailed runbooks and dashboards; automated incident escalation.
- **E)** Proactive detection with anomaly detection, auto-remediation for known patterns, and QA/product involved in monitoring review — not just engineering.

---

### Q12 — Incident Management & Post-Mortems

How does your team manage incidents and learn from them?

- **A)** Incidents are handled ad-hoc; no post-mortem process exists.
- **B)** We hold post-mortems for major incidents (P1/P2) but follow-up actions rarely get done.
- **C)** Structured post-mortems for all significant incidents; action items tracked in a backlog.
- **D)** Post-mortems for all incidents including non-production; action items owned and measured; trends analysed over time.
- **E)** Blameless post-mortems for all incidents; findings feed product and architecture decisions; public status pages and transparent user communication when relevant.

---

## Question-to-Dimension Mapping

| Question | Dimension                  |
|----------|----------------------------|
| Q1       | Culture & Feedback         |
| Q2       | Culture & Feedback         |
| Q3       | Quality Ownership          |
| Q4       | Quality Ownership          |
| Q5       | Testing Strategy           |
| Q6       | Testing Strategy           |
| Q7       | Automation & Tools         |
| Q8       | Automation & Tools         |
| Q9       | CI/CD & Deployment         |
| Q10      | CI/CD & Deployment         |
| Q11      | Monitoring & Incidents     |
| Q12      | Monitoring & Incidents     |
