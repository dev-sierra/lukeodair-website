export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "shipped" | "in-progress" | "placeholder";
};

export const projects: Project[] = [
  {
    slug: "nutrafol-revenue-platform",
    title: "Nutrafol Revenue Integration Platform",
    summary:
      "Automated revenue-recognition pipelines posting Stripe, PayPal, and Amazon revenue into Dynamics 365 F&O — ~$57M and 650,000 transactions a month, zero reconciliation gaps.",
    status: "shipped",
  },
  {
    slug: "esp32-sensor-build",
    title: "ESP32 Sensor Build",
    summary: "Placeholder — details to come.",
    status: "placeholder",
  },
  {
    slug: "mcp-snowflake",
    title: "MCP Server for Snowflake",
    summary:
      "Open-source MCP server for Snowflake with PII-safe dynamic masking — read-only queries, masking enforcement, role-based access.",
    status: "in-progress",
  },
];
