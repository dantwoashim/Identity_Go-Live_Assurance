# Sample report

This sample is fake. It exists to show the shape of the public report model and the sort of Markdown the helpers can produce.

## Executive summary

Acme SaaS was assessed for Northwind Financial against Entra enterprise identity rollout requirements. 1 of 3 scoped scenarios passed, and 3 scenarios were fully executed in the current cycle. Execution coverage in this cycle is reviewer-managed: 1 manual scenario and 2 guided scenarios. Current Entra coverage is reviewer-managed. The product preserves scope, evidence, and publication controls, but tenant validation is still operator-run. No scoped scenarios remain pending. No scoped scenarios were skipped. 1 blocking issue remains before go-live. 1 additional high-risk issue should be remediated. Coverage is sufficient to publish the report with the stated caveats.

## Readiness coverage

- Total scenarios: 3
- Executed: 3
- Passed: 1
- Failed: 2
- Skipped: 0
- Pending: 0
- Manual scenarios: 1
- Guided scenarios: 2
- Readiness score: 12

## Provider validation

Current Entra coverage is reviewer-managed. The product preserves scope, evidence, and publication controls, but tenant validation is still operator-run.

Warnings:

- The Entra label reflects scenario coverage and checklist validation, not live tenant introspection.

## Publication assessment

- Can publish: yes
- Warning: 2 open findings remain in scope

## Scenario results

- SP-initiated SSO [saml, guided] - passed
- SCIM deactivate user [scim, guided] - failed
- Group-to-role mapping [ops, manual] - failed

## Findings

- SCIM deactivate delays access removal (blocks-go-live)
- Group-to-role mapping under-assigns Finance-Admin (high-risk)

The exact fixture behind this document lives in `src/lib/sample-data.ts`.
