# Demo Script: Identity Go-Live Assurance Core

## 30-second explanation

This package is the reusable open-source domain core behind the SSM identity assurance workflow. It models scenarios, report snapshots, scoring, and Markdown output for SSO/SCIM readiness reviews.

## 2-minute walkthrough

1. Show the README distinction between SSM and the core package.
2. Open the usage example.
3. Run or show `npm run verify`.
4. Show a scenario definition and sample report output.

## 5-minute technical walkthrough

Explain how scenarios map to identity rollout risks, how report snapshots summarize execution, how scoring and executive summaries are generated, and why the package avoids hosted workflow concerns.

## What to show in an interview

- Public API example
- Scenario library
- Sample report output
- Tests and verify script

## What not to overclaim

- Do not call it a full product.
- Do not call it a compliance certification system.
- Do not imply sample data is real.

## Likely interviewer questions

### How does this relate to SSM?

SSM is the full workflow app. This package is the reusable core/domain layer for scenarios and report models.

### Why make it separate?

It makes the domain easier to test, reuse, and explain independently of the web product.

