import {
  buildPublicationAssessment,
  computeReadinessScore,
  formatExecutiveSummary,
  sampleReportSnapshot,
  selectScenarios,
  toMarkdown,
} from "../dist/index.js";

const scopedScenarios = selectScenarios("entra", [
  "sp-initiated-sso",
  "scim-deactivate",
  "group-role-mapping",
]);

const publication = buildPublicationAssessment(sampleReportSnapshot);
const score = computeReadinessScore(sampleReportSnapshot);
const summary = formatExecutiveSummary(sampleReportSnapshot);
const markdown = toMarkdown(sampleReportSnapshot);

console.log("scoped scenarios:", scopedScenarios.map((scenario) => scenario.scenarioId));
console.log("score:", score);
console.log("can publish:", publication.canPublish);
console.log("summary:", summary);
console.log("markdown preview:", markdown.slice(0, 220) + "...");
