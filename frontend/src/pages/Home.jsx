import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { SITE, HERO_IMAGE } from "@/data/site";

const credentials = [
  { title: "M.Des", sub: "Integrated Product Design" },
  { title: "B.Des", sub: "Product Design" },
  { title: "Patent", sub: "In progress" },
  { title: "Runner-up", sub: "Wipro iDesign Challenge 2025" },
];

const steps = [
  { n: "01", name: "Understand", desc: "Observe people, context, and constraints before framing the problem." },
  { n: "02", name: "Map", desc: "Make the whole system visible — stakeholders, flows, and friction." },
  { n: "03", name: "Explore", desc: "Sketch widely across form, mechanism, and interaction directions." },
  { n: "04", name: "Prototype", desc: "Make ideas physical early; let testing replace opinion." },
  { n: "05", name: "Refine", desc: "Iterate relentlessly until the solution is useful and feasible." },
];

const Home = () => {
  const featured = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);

  return (
    <div data-testid="home-page">
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-6 md:grid-cols-12 md:pb-28 md:pt-24 lg:px-8">
        <div className="md:col-span-7">
          <FadeIn>
            <p data-testid="hero-eyebrow" className="text-xs font-medium uppercase tracking-[0.2em] text-ember">
              Multidisciplinary Product & Industrial Designer
            </p>
            <h1 className="mt-6 font-display text-[42px] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              I design thoughtful products for complex human and technical systems.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-inksoft md:text-lg">
              I'm Chaitanya Pawaskar, a product and industrial designer with 1 year of
              hands-on experience across consumer products, lighting, mobility, medical
              systems, and field research. I combine research, systems thinking,
              mechanism design, and visual exploration to create solutions that are
              useful, considered, and ready to move forward.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#selected-work"
                data-testid="hero-cta-explore"
                className="group inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-ember-hover focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
              >
                Explore my work
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={SITE.resumeUrl}
                data-testid="hero-cta-resume"
                className="group inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
              >
                Download resume
                <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
              <Link
                to="/contact"
                data-testid="hero-cta-contact"
                className="group inline-flex items-center gap-1.5 px-2 py-3.5 text-sm font-medium text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
              >
                Get in touch
                <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.15} className="md:col-span-5">
          <figure>
            <div className="overflow-hidden bg-paperdark">
              <img
                src={HERO_IMAGE}
                alt="Universal Travel Adapter — selected work by Chaitanya Pawaskar"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption data-testid="hero-caption" className="mt-3 text-xs tracking-wide text-inkmuted">
              Selected work across products, systems, and environments.
            </figcaption>
          </figure>
        </FadeIn>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-border bg-paperdark" data-testid="credibility-strip">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {credentials.map((c, i) => (
            <div
              key={c.title + c.sub}
              className={`px-6 py-8 ${i > 0 ? "border-l border-border" : ""} ${i >= 2 ? "border-t border-border md:border-t-0" : ""}`}
            >
              <p className="font-display text-xl font-semibold text-ink">{c.title}</p>
              <p className="mt-1 text-sm text-inksoft">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section id="selected-work" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-6 md:py-32 lg:px-8">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Selected work</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Designing from the detail outward.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-inksoft md:text-lg">
            From compact mechanisms to emergency mobility systems, my projects explore
            how form, function, people, and context can work together more effectively.
          </p>
        </FadeIn>
        <div className="mt-16 flex flex-col gap-20 md:mt-20 md:gap-28">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} large />
          ))}
        </div>
      </section>

      {/* Additional work */}
      <section className="border-t border-border bg-paperdark" data-testid="additional-work">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Additional work
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
            {additional.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.05} className="bg-paper">
                <Link
                  to={`/work/${p.slug}`}
                  data-testid={`additional-work-link-${p.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ember"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-inkmuted">{p.discipline} · {p.year}</span>
                    <ArrowRight size={16} className="text-inkmuted transition-all duration-200 group-hover:translate-x-1 group-hover:text-ember" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inksoft">{p.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32 lg:px-8" data-testid="process-section">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Process</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Research deeply. Make clearly. Refine relentlessly.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-inksoft md:text-lg">
            My process moves between observation, systems mapping, sketching,
            prototyping, and evaluation. I use each stage to reduce uncertainty and
            make the final solution more useful, understandable, and feasible.
          </p>
        </FadeIn>
        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.07} className="bg-paper">
              <div className="flex h-full flex-col p-7" data-testid={`process-step-${s.n}`}>
                <span className="font-display text-sm font-semibold text-ember">{s.n}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inksoft">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border bg-ink" data-testid="closing-cta">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32 lg:px-8">
          <FadeIn>
            <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Have a complex product problem to explore?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              I'm open to product design, industrial design, and design research
              opportunities where thoughtful making can create meaningful impact.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-testid="closing-cta-contact"
                className="group inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-ember-hover focus:outline-none focus:ring-2 focus:ring-white"
              >
                Start a conversation
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/resume"
                data-testid="closing-cta-resume"
                className="inline-flex items-center gap-2 border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-ink focus:outline-none focus:ring-2 focus:ring-white"
              >
                View resume
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
