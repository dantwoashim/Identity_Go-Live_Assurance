# Identity Go-Live Assurance Core

Identity Go-Live Assurance Core is the open-source core behind a larger identity rollout assurance product. It gives you the domain model, scenario library, report helpers, and sample data needed to reason about enterprise SSO and SCIM readiness without shipping the full commercial platform.

## What problem this solves

Enterprise identity rollouts fail in predictable ways. Vendors say they "support SSO" or "have SCIM," but that leaves a lot unanswered:

- Does SP-initiated login resolve to the right tenant?
- Does deprovisioning actually remove access on the first pass?
- Do group mappings grant the right role, or the wrong one?
- Can you hand a buyer or IAM reviewer a report that explains what was tested and what still needs work?

This repository is the reusable core for that work. It is useful if you want a shared vocabulary for identity rollout checks, a sane starting scenario library, and a consistent way to turn test outcomes into buyer-safe report snapshots.

## What is in this repo

- Shared types for providers, features, scenarios, findings, and report snapshots
- A scenario library covering SSO, SCIM, group mapping, tenant isolation, certificate rollover, and auditability
- Report helpers for readiness scoring, publication assessment, executive summary generation, and Markdown output
- Fake sample data for demos, tests, and downstream examples
- Tests for the public core
- High-level documentation for the public architecture and scope

## What is not in this repo

This repository is not the full product.

It does not include:

- hosted workflows
- customer or operator portals
- authentication, session handling, or account recovery
- evidence upload, download, or storage pipelines
- queueing, worker orchestration, or notification delivery
- managed assessments, buyer packet workflows, or internal operations tooling
- deployment internals for the commercial offering

Those parts live separately.

## Current status

This is early open-source core, not a finished platform. The APIs may still move. The scenario coverage is useful today, but it is not a compliance guarantee and it is not a substitute for a full production rollout program.

If you need the hosted workflows, managed assessments, or enterprise delivery support, see [Commercial offering](#commercial-offering).

## Quick start

```bash
npm install
npm run verify
npm run example:basic
```

That installs the package, runs the full verification pass, and then builds and runs a small example against the fake sample snapshot.

## Usage

```ts
import {
  computeReadinessScore,
  formatExecutiveSummary,
  sampleReportSnapshot,
  selectScenarios,
  toMarkdown,
} from "identity-go-live-assurance-core";

const scopedScenarios = selectScenarios("entra", [
  "sp-initiated-sso",
  "scim-deactivate",
  "group-role-mapping",
]);

const readinessScore = computeReadinessScore(sampleReportSnapshot);
const executiveSummary = formatExecutiveSummary(sampleReportSnapshot);
const markdown = toMarkdown(sampleReportSnapshot);

console.log(scopedScenarios.length, readinessScore, executiveSummary, markdown);
```

You can also use the sample snapshot directly when building demos, docs, or tests:

```ts
import { sampleReportSnapshot } from "identity-go-live-assurance-core";

console.log(sampleReportSnapshot.summary.providerValidation.supportStatement);
```

If you want a runnable reference, see [examples/basic-report.mjs](examples/basic-report.mjs).

## Architecture overview

The public repository is intentionally small. It is a library, not an app.

- `src/lib/types.ts` defines the shared domain language
- `src/lib/scenarios.ts` holds the scenario catalog and selection helpers
- `src/lib/report.ts` turns scenario outcomes into report-friendly output
- `src/lib/sample-data.ts` provides fake sample snapshots for demos and tests

If you want the high-level system picture, start with [docs/architecture.md](docs/architecture.md) and [docs/overview.md](docs/overview.md).

## Portfolio docs

- [Case study](docs/CASE_STUDY.md)
- [Architecture](docs/architecture.md)
- [Sample report](docs/sample-report.md)

## Roadmap

The short version:

- keep the public types and scenario library stable
- expand provider-aware coverage without pretending the library is a full hosted product
- improve report ergonomics and downstream integrations

The longer view is in [ROADMAP.md](ROADMAP.md).

## Contributing

If you want to contribute, read [CONTRIBUTING.md](CONTRIBUTING.md) first. The public scope is deliberate. Changes that pull private workflow logic, hosted runtime behavior, or monetizable product internals into this repo are likely to be declined.

## Known limitations

This library does not:

- validate a live Okta, Entra, or Google tenant on its own
- store evidence artifacts
- replace rollout testing by an operator or delivery team
- guarantee publishability, compliance, or procurement acceptance

There is a fuller list in [docs/known-limitations.md](docs/known-limitations.md).

## Commercial offering

This repository contains the community core only.

Hosted workflows, managed assessments, support, and enterprise capabilities are offered separately.

- Contact: `twodan033@gmail.com`
- More information: `mailto:twodan033@gmail.com`

There is also a short boundary note in [COMMERCIAL.md](COMMERCIAL.md).

## License

This project is licensed under Apache-2.0. See [LICENSE](LICENSE). Trademark and commercial-boundary notes live in [NOTICE](NOTICE).

## Feedback

Issues and pull requests are welcome for the public core. If you need to discuss a security issue, use the private path in [SECURITY.md](SECURITY.md).

For commercial inquiries, use:

- `twodan033@gmail.com`
- `mailto:twodan033@gmail.com`
