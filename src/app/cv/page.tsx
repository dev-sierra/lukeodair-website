export default function Cv() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">CV</h1>
        <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-zinc-500 dark:border-white/10">
          PDF download coming soon
        </span>
      </div>

      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Data leader with 8+ years at Unilever across data engineering, data
        science, and platform leadership. Built a multi-cloud data lakehouse
        from scratch for a portfolio of six acquired businesses ($1B+
        revenue), and as Data Director at Nutrafol now owns the automated
        revenue-recognition pipelines integrating direct-to-consumer and
        marketplace revenue into Microsoft Dynamics 365.
      </p>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Experience</h2>
        <div>
          <h3 className="font-medium">
            Data Director, Nutrafol (Unilever) — Oct 2025&ndash;Present
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Own Nutrafol&apos;s revenue data platform: automated
            revenue-recognition pipelines posting ~$57M and ~650,000
            transactions a month across Stripe, PayPal, and Amazon into
            Dynamics 365, zero reconciliation gaps, KPMG-tested controls.
          </p>
        </div>
        <div>
          <h3 className="font-medium">
            Head of Data Engineering, Health &amp; Wellbeing (Unilever) — Oct
            2023&ndash;Oct 2025
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            Zero-to-one data platform build inside six newly-acquired
            businesses; data engineering standards, team growth, and
            infrastructure across Azure, GCP, and AWS.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Python, PySpark, SQL &middot; Databricks (Delta Lake, Unity
          Catalog), Snowflake &middot; Azure, GCP, AWS &middot; Microsoft
          Dynamics 365 F&amp;O, REST/OAuth APIs
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Certifications</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Databricks Certified Data Engineer Associate (2024) &middot;
          Databricks Certified Associate Developer for Apache Spark 3.0
          (2022) &middot; Azure Data Engineer Associate (2021) &middot; Azure
          Data Science Associate (2021)
        </p>
      </section>
    </main>
  );
}
