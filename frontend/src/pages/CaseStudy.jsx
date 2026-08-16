import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

const Section = ({ number, title, children, wide = false, testid }) => (
  <section data-testid={testid} className="border-t border-border py-14 md:py-20">
    <div className="grid gap-8 md:grid-cols-12">
      <div className="md:col-span-3">
        <span className="font-display text-sm font-semibold text-ember">{number}</span>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
      </div>
      <div className={wide ? "md:col-span-9" : "md:col-span-8"}>{children}</div>
    </div>
  </section>
);

const Figure = ({ src, alt, caption }) => (
  <figure className="mt-8">
    <div className="overflow-hidden bg-paperdark">
      <img src={src} alt={alt} loading="lazy" className="w-full" />
    </div>
    {caption && <figcaption className="mt-3 text-xs tracking-wide text-inkmuted">{caption}</figcaption>}
  </figure>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/work" replace />;

  const cs = project.caseStudy;
  const idx = projects.indexOf(project);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const introFields = [
    ["Project type", cs.type],
    ["Role", cs.role],
    ["Timeline", cs.timeline],
    ["Team", cs.team],
    ["Tools", project.tools.join(", ")],
  ];

  return (
    <div data-testid={`case-study-${project.slug}`} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      {/* Intro */}
      <div className="pb-14 pt-12 md:pb-20 md:pt-16">
        <FadeIn>
          <Link
            to="/work"
            data-testid="case-study-back-link"
            className="group inline-flex items-center gap-2 text-sm text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
          >
            <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
            All work
          </Link>
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-ember">{project.category}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-inksoft md:text-lg">{cs.outcome}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {introFields.map(([k, v]) => (
              <div key={k} className="bg-paper p-5">
                <dt className="text-xs uppercase tracking-widest text-inkmuted">{k}</dt>
                <dd className="mt-2 text-sm font-medium leading-snug text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Figure src={project.image} alt={project.imageAlt} caption={project.context} />
        </FadeIn>
      </div>

      <Section number="02" title="The problem" testid="cs-problem">
        {cs.problemBody.map((p, i) => (
          <p key={i} className={`leading-relaxed text-inksoft ${i > 0 ? "mt-4" : ""}`}>{p}</p>
        ))}
        <Figure src={cs.problemImage} alt={`${project.title} problem context`} caption={cs.problemCaption} />
      </Section>

      <Section number="03" title="Research & insight" testid="cs-research">
        <ul className="flex flex-col gap-4">
          {cs.insights.map((ins, i) => (
            <li key={i} className="flex gap-4 border-l-2 border-ember pl-4 leading-relaxed text-inksoft">
              {ins}
            </li>
          ))}
        </ul>
      </Section>

      <Section number="04" title="Design direction" testid="cs-direction">
        <p className="leading-relaxed text-inksoft">{cs.direction.body}</p>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
          {cs.direction.decisions.map((d) => (
            <div key={d.title} className="bg-paper p-6">
              <h3 className="font-display text-base font-semibold text-ink">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-inksoft">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section number="05" title="Ideation & exploration" testid="cs-ideation" wide>
        <p className="leading-relaxed text-inksoft">{cs.ideation.body}</p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {cs.ideation.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-inksoft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ember" aria-hidden="true" />
              {pt}
            </li>
          ))}
        </ul>
        <Figure src={cs.ideation.image} alt={cs.ideation.imageAlt} caption={cs.ideation.caption} />
        {cs.ideation.image2 && (
          <Figure src={cs.ideation.image2} alt={cs.ideation.image2Alt} caption={cs.ideation.caption2} />
        )}
      </Section>

      <Section number="06" title="Mechanisms & system diagrams" testid="cs-mechanisms">
        <p className="leading-relaxed text-inksoft">{cs.mechanisms.body}</p>
        <div className="mt-8 flex flex-col gap-px border border-border bg-border">
          {cs.mechanisms.items.map((m, i) => (
            <div key={m.title} className="flex gap-6 bg-paper p-6">
              <span className="font-display text-sm font-semibold text-ember">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-inksoft">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {cs.mechanisms.image && (
          <Figure
            src={cs.mechanisms.image}
            alt={cs.mechanisms.imageAlt || `${project.title} mechanism diagram`}
            caption={cs.mechanisms.caption}
          />
        )}
      </Section>

      <Section number="07" title="Prototyping & iteration" testid="cs-prototyping">
        <p className="leading-relaxed text-inksoft">{cs.prototyping.body}</p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {cs.prototyping.tests.map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-inksoft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ember" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
        {cs.prototyping.image && (
          <Figure
            src={cs.prototyping.image}
            alt={cs.prototyping.imageAlt || `${project.title} prototype`}
            caption={cs.prototyping.caption}
          />
        )}
      </Section>

      <Section number="08" title="Final solution" testid="cs-solution" wide>
        <p className="leading-relaxed text-inksoft">{cs.solution.body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {cs.solution.features.map((f) => (
            <span key={f} className="border border-border px-3 py-1.5 text-xs text-inksoft">{f}</span>
          ))}
        </div>
        <Figure src={cs.solution.image} alt={cs.solution.imageAlt} caption={cs.solution.caption} />
      </Section>

      <Section number="09" title="Outcome & metrics" testid="cs-outcomes">
        <ul className="flex flex-col gap-4">
          {cs.outcomes.map((o, i) => (
            <li key={i} className="flex gap-4 border-l-2 border-ember pl-4 leading-relaxed text-inksoft">
              {o}
            </li>
          ))}
        </ul>
      </Section>

      <Section number="10" title="Reflection" testid="cs-reflection">
        <div className="flex flex-col gap-8">
          {[
            ["What I learned", cs.reflection.learned],
            ["What I'd improve next", cs.reflection.improve],
            ["What this says about my approach", cs.reflection.approach],
          ].map(([k, v]) => (
            <div key={k}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-inkmuted">{k}</h3>
              <p className="mt-2 leading-relaxed text-inksoft">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Prev / Next */}
      <nav data-testid="case-study-nav" className="grid gap-px border border-border bg-border sm:grid-cols-2">
        <Link
          to={`/work/${prev.slug}`}
          data-testid="prev-project-link"
          className="group bg-paper p-8 transition-colors duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ember"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-inkmuted">
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Previous project
          </span>
          <p className="mt-3 font-display text-xl font-semibold text-ink">{prev.title}</p>
        </Link>
        <Link
          to={`/work/${next.slug}`}
          data-testid="next-project-link"
          className="group bg-paper p-8 text-right transition-colors duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ember"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-inkmuted">
            Next project
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
          <p className="mt-3 font-display text-xl font-semibold text-ink">{next.title}</p>
        </Link>
      </nav>
      <div className="pb-20" />
    </div>
  );
};

export default CaseStudy;
