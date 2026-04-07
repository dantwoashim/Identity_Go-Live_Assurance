# Known limitations

This repository is useful, but it is not the full product and it should not be mistaken for one.

## Current boundaries

- The readiness score is a heuristic. It is meant to summarize a report snapshot, not certify a system.
- Scenario coverage is static. This library does not connect to live Okta, Entra, or Google Workspace tenants.
- There is no evidence storage or artifact review workflow here.
- There is no customer portal, operator UI, or hosted workflow engine in this repository.
- There is no compliance guarantee, trust-center workflow, or procurement sign-off mechanism.

## What this means in practice

You can use this library to model rollout coverage, generate report snapshots, and build your own tooling around the public core.

You cannot use it, by itself, as proof that an enterprise rollout is production-ready.
