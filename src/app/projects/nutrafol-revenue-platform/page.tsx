export default function NutrafolRevenuePlatform() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        Nutrafol Revenue Integration Platform
      </h1>
      <p className="text-sm uppercase tracking-wide text-zinc-500">
        Shipped — in production
      </p>

      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Automated revenue-recognition pipelines that post direct-to-consumer
        (Stripe, PayPal) and Amazon marketplace revenue into Microsoft
        Dynamics 365 Finance &amp; Operations, replacing a manual,
        spreadsheet-based month-end close with a scheduled, audited
        integration.
      </p>

      <h2 className="mt-2 text-lg font-semibold">Architecture</h2>
      <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
        <li>
          Snowflake + Databricks medallion lakehouse (PySpark, Delta Lake,
          Unity Catalog)
        </li>
        <li>
          Federated Snowflake SQL transforms, packaged as Dynamics 365 Data
          Management Framework XML for REST-API posting
        </li>
        <li>
          Idempotent Delta MERGE control tables with send-once guards to
          prevent double-posting
        </li>
        <li>
          Severity-tiered data-quality gate of 60+ automated checks (nulls,
          uniqueness, referential integrity, sign enforcement, freshness,
          end-to-end amount reconciliation) — a failed check aborts the run
          before any data reaches D365
        </li>
        <li>
          Every control mapped to the Risk &amp; Control Matrix, enabling
          Internal Audit and KPMG to test order-to-cash controls; journals
          enter D365 pending Finance Controller approval, never posting
          directly to the GL
        </li>
      </ul>

      <h2 className="mt-2 text-lg font-semibold">Scale</h2>
      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        ~$57M and ~650,000 transactions processed per month across Stripe,
        PayPal, and Amazon, with zero reconciliation gaps.
      </p>
    </main>
  );
}
