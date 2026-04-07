# Roadmap

This repository is the public core, not the full product. The roadmap reflects that boundary.

## Short term

- tighten the core type surface so downstream consumers can depend on it with less churn
- expand scenario coverage where it is genuinely reusable across teams
- add more report fixtures and sample output variants
- improve the publication assessment helpers and their tests
- publish clearer migration notes as the public API settles

## Medium term

- add provider-aware metadata that downstream tools can use without exposing private connectors
- ship more examples for report rendering and custom scenario selection
- add contract-style tests for public report and scenario outputs
- improve package ergonomics for npm consumers

## Intentionally private or out of scope

The following are not part of this public repository:

- hosted workflows
- managed assessments
- customer and operator portals
- evidence ingestion, storage, review, and sharing pipelines
- notification delivery and queue orchestration
- internal operations tooling
- commercial pricing, sales, or launch strategy
- private provider connectors and delivery playbooks

## Stability expectations

The core model is headed toward stability, but it is not frozen yet. Expect some API changes while the public boundary settles. When changes are breaking, they should be obvious in the changelog and release notes.
