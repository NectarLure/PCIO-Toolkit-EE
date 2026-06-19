# PCIO Expert Review Portal Instructions

Thank you for participating in the formative expert review of PCIO Toolkit. The purpose of this review is to assess the artifact's design rationality, module structure, contextual fit, and evidence-boundary clarity.

This review does not ask experts to judge whether the tool has already improved organisational performance, because the current public evidence package does not include longitudinal retests or causal validation data.

## 1. How to View the Site

Open:

```text
public_expert_review_site/index_en.html
```

Or start a local static server in the `public_expert_review_site` directory:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

Suggested reading order:

1. `index_en.html`: research purpose, DSR positioning, and evidence boundaries.
2. `artifact_overview_en.html`: PCIO model, module structure, and design principles.
3. `module_demo_en.html`: module output structure without raw enterprise data.
4. `evidence_package_en.html`: automated tests, synthetic demonstrations, and real T0 baseline cases.
5. `case_p_en.html`: T0 baseline diagnosis for a process-manufacturing enterprise.
6. `case_t_en.html`: T0 baseline diagnosis for a tank-area storage and operations context.
7. `expert_review_en.html`: online blank form or downloadable English forms.

## 2. How to Score

Use the 1-5 Likert scale:

- 1 = Strongly disagree / clearly insufficient
- 2 = Disagree / several weaknesses
- 3 = Neutral / acceptable but needs revision
- 4 = Agree / reasonably sound
- 5 = Strongly agree / very sound

Dimensions:

- Rationality of the PCIO four-layer model;
- Coverage of diagnostic items;
- Rationality of risk rules;
- Executability of KPI suggestions;
- Cautious expression of ROI scenarios;
- Understandability of the report;
- Fit for process-manufacturing enterprises;
- Fit for tank-area storage and operations;
- Clarity of evidence boundaries;
- Overall practical potential.

Please add a short reason or revision suggestion for each score. If a dimension cannot be judged, state what additional material is needed.

## 3. How to Submit Feedback

Choose one of the following options:

1. Fill in `expert_review_en.html` and use browser print or save-as-PDF.
2. Download and complete `downloads/expert_review_form_en.md`.
3. Download and complete `downloads/expert_review_form_en.csv` for easier manual aggregation.

This public site does not automatically save or upload expert input. Please submit feedback through the channel specified by the research team. If no channel has been specified, contact the author before sharing files that contain reviewer identity information.

## 4. Evidence Boundaries

Please note:

- Real cases are T0 baseline diagnosis cases only. They support baseline diagnosis, contextual fit, risk identification, KPI suggestions, and PDCA follow-up planning.
- Real cases cannot support post-deployment improvement, causal effects, realised ROI, or long-term operating stability.
- Synthetic cases are used only for workflow demonstration, rule-response checks, and output differentiation.
- Automated tests support technical correctness, functional completeness, deployment feasibility, and module consistency only.
- ROI is used only for scenario estimation and option comparison.
- The current public site contains no expert evaluation results, interview results, T1/T2 retest data, or objective performance-improvement results.

## 5. Privacy Reminder

Do not include real company names, employee names, phone numbers, WeChat IDs, emails, customers, suppliers, contract numbers, project names, precise addresses, real equipment IDs, vehicle plates, or sensitive tank-area details in feedback.

Use generic labels such as Case P, Case T, Equipment M01, Area 1, Line 1, and generic roles or process names.
