# Contributing

Thanks for taking a look.

## Local setup

Install dependencies and run the full local verification pass:

```bash
npm install
npm run verify
```

Individual commands:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## What kinds of changes fit here

Good contributions for this repo:

- improvements to shared types
- scenario library fixes and additions
- report helper fixes
- sample data and sample output improvements
- tests for the public core
- documentation that helps people understand or safely adopt the core

Changes that probably do not fit here:

- hosted workflow logic
- customer portal behavior
- queue or worker orchestration
- internal ops tooling
- private provider connectors
- business, pricing, or sales collateral

## How to propose a change

1. Open an issue if the change is large or changes public behavior.
2. Keep pull requests reviewable.
3. Add or update tests when behavior changes.
4. Update docs if the public API or examples change.

## Scope boundary

This repository is intentionally narrower than the commercial product. Please keep contributions inside the public-core boundary. If a change would make the private product easier to clone in full, it belongs somewhere else.
