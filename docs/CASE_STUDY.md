# Case Study: Identity Go-Live Assurance Core

## Summary

Identity Go-Live Assurance Core is a reusable TypeScript package for modeling SSO/SCIM readiness scenarios, report snapshots, scoring, and Markdown output.

## Problem

Identity rollout work needs consistent scenario language and report structures. Without a reusable core, product workflows can become tightly coupled to UI screens and one-off customer documents.

## Why this project matters

The package separates identity domain logic from the larger SSM workflow app, making the domain easier to test, document, and reuse.

## My role

I built the package structure, scenario library, report helpers, examples, and verification scripts.

## Tech stack

- TypeScript
- Vitest
- tsup
- ESLint
- Node 22+

## Architecture

```text
scenario library -> report snapshot model -> scoring/summary helpers -> Markdown output
```

## Key features

- SSO/SCIM scenario library
- Readiness scoring helpers
- Executive summary formatting
- Markdown report generation
- Fake sample data for demos and tests

## Hard technical problems

- Keeping the package useful without shipping the full product
- Modeling identity scenarios clearly enough for downstream workflows
- Avoiding compliance overclaims

## Important decisions and tradeoffs

- The package is the reusable open-source core, while SSM is the full product/workflow app.
- Sample data is fake and should stay fake.
- The package helps structure readiness, but does not certify compliance.

## Testing and validation

The package uses linting, typechecking, Vitest, build verification, and example execution through `npm run verify`.

## Security and limitations

The package does not include hosted workflows, authentication, evidence storage, or customer portal logic. It is not a substitute for a full security review.

## What I learned

- Package API design
- Domain modeling for identity workflows
- Report generation boundaries
- Keeping examples honest and safe

## What I would improve with more time

- Add more provider-specific scenarios
- Publish richer example reports
- Add generated API docs
- Expand downstream integration examples

## What this project proves to employers

It proves I can extract reusable domain logic from a larger product and document it as a consumable TypeScript package.

## Resume bullets

- Built a reusable TypeScript package for SSO/SCIM readiness scenarios, report snapshots, scoring helpers, and Markdown report generation.
- Modeled identity rollout risks including SP-initiated SSO, SCIM deactivation, group-role mapping, tenant isolation, certificate rollover, and auditability.
- Added examples and verification scripts for consumers to validate package behavior before using it in downstream workflows.

