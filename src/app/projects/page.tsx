import Link from "next/link";
import { projects } from "@/data/projects";

const statusLabel: Record<string, string> = {
  shipped: "Shipped",
  "in-progress": "In progress — Aug 2026",
  placeholder: "Coming soon",
  historical: "Historical — 2017",
};

export default function Projects() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-lg border border-black/10 p-6 dark:border-white/10"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="text-lg font-medium underline-offset-4 hover:underline"
            >
              {project.title}
            </Link>
            <p className="mt-1 text-sm uppercase tracking-wide text-zinc-500">
              {statusLabel[project.status]}
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              {project.summary}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
