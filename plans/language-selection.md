---
planStatus:
  planId: plan-language-selection
  title: Add language selection as initial question
  status: draft
  planType: feature
  priority: medium
  owner: rbnfdez
  stakeholders: []
  tags: [skill, ux, i18n]
  created: "2026-03-20"
  updated: "2026-03-20T00:00:00.000Z"
  progress: 0
---

# Add language selection as initial question

## Goal

Replace the auto-detect language behavior with an explicit language selection question before the assessment begins. The entire session (welcome, questions, scoring, recommendations, CTA) should be conducted in the selected language.

## Changes

### File: `qa-assessment/SKILL.md`

**1. Modify Step 1 (Welcome) — lines 20-32**

Replace the current welcome message with a language selection prompt. The welcome itself should be multilingual so any user understands it:

```
Before we begin, please select your preferred language:

🇬🇧 English → Type "EN"
🇪🇸 Español → Type "ES"
🇫🇷 Français → Type "FR"
🇩🇪 Deutsch → Type "DE"
🇵🇹 Português → Type "PT"

(Or type any language name and I'll conduct the assessment in that language)
```

After the user selects, show the welcome message translated to their chosen language, then proceed with Step 2.

**2. Modify Behaviour rules — line 341**

Replace:
```
- **Language** — respond in the same language the user uses. If the user writes in Spanish, conduct the entire session in Spanish. If in English, in English.
```

With:
```
- **Language** — conduct the entire session (questions, acknowledgements, scoring, recommendations, CTA) in the language selected in Step 1. All content must be translated, including the radar chart labels and recommendations.
```

**3. Update README — line 37**

Replace the auto-detect tip:
```
> 💡 The skill auto-detects the language you write in.
```

With something like:
```
> 💡 The skill asks your preferred language at the start and conducts the entire assessment in that language.
```

## Files to modify

1. `qa-assessment/SKILL.md` — Step 1 welcome + behaviour rules
2. `README.md` — language tip (line 37)

## Not changing

- Questions remain written in English in the source file — the agent translates at runtime based on the selected language
- Scoring logic unchanged
- No new files needed
