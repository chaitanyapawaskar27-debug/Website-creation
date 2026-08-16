import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { projects, disciplines } from "@/data/projects";

const Work = () => {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.discipline === filter);

  return (
    <div data-testid="work-page" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Work</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Project index
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-inksoft md:text-lg">
          Product, lighting, mobility, systems, and research projects — each one an
          exercise in turning complex constraints into thoughtful physical solutions.
        </p>
      </FadeIn>

      <div data-testid="work-filters" className="mt-10 flex flex-wrap gap-2">
        {disciplines.map((d) => (
          <button
            key={d}
            data-testid={`filter-${d.toLowerCase()}`}
            onClick={() => setFilter(d)}
            className={`border px-4 py-2.5 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ember ${
              filter === d
                ? "border-ink bg-ink text-white"
                : "border-border text-inksoft hover:border-ink hover:text-ink"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {visible.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
      {visible.length === 0 && (
        <p data-testid="work-empty-state" className="mt-14 text-sm text-inkmuted">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
};

export default Work;
