import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        Luke O&apos;Dair
      </h1>

      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        I build data platforms from zero to one — most recently a multi-cloud
        lakehouse for six newly-acquired Unilever brands ($1B+ combined
        revenue), and currently the automated revenue-recognition pipelines
        at Nutrafol that post ~$57M and 650,000 transactions a month from
        Stripe, PayPal, and Amazon into Dynamics 365 with zero reconciliation
        gaps and full audit traceability.
      </p>

      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        Eight years at Unilever, spanning data science, data engineering, and
        platform leadership — most of it inside acquisitions, where
        there&apos;s no existing platform to inherit and the constraints are
        real: finance controls, live revenue, no room for &ldquo;we&apos;ll
        fix it later.&rdquo;
      </p>

      <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        I&apos;m now applying the same rigor — production reliability,
        controls-mindedness, full-stack ownership — to LLM data
        infrastructure: evals, tool-use pipelines, and agent tooling.{" "}
        <Link href="/projects" className="underline underline-offset-4">
          Projects
        </Link>{" "}
        has what I&apos;m building in public.
      </p>

      <p className="mt-4 text-sm text-zinc-500">
        <Link href="/writing" className="underline underline-offset-4">
          Writing
        </Link>{" "}
        &middot;{" "}
        <Link href="/cv" className="underline underline-offset-4">
          CV
        </Link>
      </p>
    </main>
  );
}
