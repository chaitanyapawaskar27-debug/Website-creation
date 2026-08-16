import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const ProjectCard = ({ project, index = 0, large = false }) => {
  const flip = large && index % 2 === 1;

  return (
    <FadeIn data-testid={`project-card-${project.slug}`}>
      <Link
        to={`/work/${project.slug}`}
        data-testid={`project-card-link-${project.slug}`}
        className={`group block focus:outline-none focus:ring-2 focus:ring-ember ${
          large ? "grid items-center gap-8 md:grid-cols-12 md:gap-10" : ""
        }`}
      >
        <div
          className={`overflow-hidden bg-paperdark ${
            large ? `md:col-span-7 ${flip ? "md:order-2" : ""}` : ""
          }`}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className={`w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] group-hover:blur-[3px] ${
              large ? "aspect-[4/3]" : "aspect-[4/3]"
            }`}
          />
        </div>
        <div className={large ? `mt-6 md:col-span-5 md:mt-0 ${flip ? "md:order-1" : ""}` : "mt-5"}>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-inkmuted">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <span>{project.category}</span>
          </div>
          <h3 className={`mt-3 font-display font-semibold text-ink ${large ? "text-3xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-inkmuted">{project.context}</p>
          <p className={`mt-4 leading-relaxed text-inksoft ${large ? "text-base" : "text-sm"}`}>
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.meta.map((m) => (
              <span key={m} className="border border-border px-2.5 py-1 text-xs text-inksoft">
                {m}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ember">
            View case study
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
};

export default ProjectCard;
