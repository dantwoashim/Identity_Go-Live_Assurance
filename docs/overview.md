# Overview

Identity Go-Live Assurance Core is the reusable public part of a larger product.

It exists for teams that want a well-defined starting point for:

- modeling enterprise identity rollout scope
- selecting scenario coverage from product claims
- turning scenario outcomes into report-friendly output
- building demos, docs, or internal tooling on top of a consistent schema

## Public surface

- domain types
- scenario definitions
- report helpers
- fake sample data

## Private surface

The product layers that make delivery, hosting, and monetization work are not in this repository. That includes workflow control, portals, evidence pipelines, background jobs, notification delivery, and operator tooling.

## Why the split matters

Open source works best when the boundary is clear. This repository should be useful on its own, but it should not pretend to be the entire product.
