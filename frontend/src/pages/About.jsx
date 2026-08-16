import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/data/site";

const education = [
  { degree: "M.Des — Integrated Product Design", school: "IIITDM Kancheepuram" },
  { degree: "B.Des — Product Design", school: "MIT School of Design" },
];

const experience = [
  {
    role: "Product Design Intern",
    org: "Wipro Consumer Lighting",
    detail:
      "Six-month industrial design internship: designed a tool-less modular outdoor luminaire system — three tool-less mechanism directions, five appearance prototypes, and a 1:1 prototype validating scale and handling.",
  },
  {
    role: "Product Design Consultant",
    org: "Carlos Philip Watches",
    detail:
      "12 watch form concepts and production-ready digital assets across 3 foundational product lines.",
  },
];

const capabilities = [
  "Product architecture",
  "Mechanism design",
  "Systems thinking",
  "Ethnographic research",
  "Ergonomics",
  "Prototyping",
  "CMF",
  "Visual communication",
];

const tools = [
  "Fusion 360",
  "Rhino 7",
  "SolidWorks",
  "KeyShot",
  "Figma",
  "Blender",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Vizcom",
];

const Block = ({ title, children, testid }) => (
  <section data-testid={testid} className="border-t border-border py-14 md:py-16">
    <div className="grid gap-8 md:grid-cols-12">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:col-span-3 md:text-3xl">
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </div>
  </section>
);

const About = () => (
  <div data-testid="about-page" className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
    <div className="py-16 md:py-24">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">About</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
          Curious about how products operate within larger systems.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-inksoft md:text-lg">
          I'm Chaitanya Pawaskar, a multidisciplinary product and industrial designer
          with a background in integrated product design and a curiosity for how
          products operate within larger systems. My work spans consumer products,
          lighting, mobility, medical design, and ethnographic research, allowing me
          to move comfortably between hands-on making and strategic problem solving.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-inksoft md:text-lg">
          I believe good design begins with understanding people, constraints, and
          context before shaping the right form or mechanism. Outside the work itself,
          I'm drawn to the small details that make objects feel intuitive, purposeful,
          and genuinely human.
        </p>
      </FadeIn>
    </div>

    <Block title="Education" testid="about-education">
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.degree} className="bg-paper p-7">
            <p className="font-display text-lg font-semibold text-ink">{e.degree}</p>
            <p className="mt-1.5 text-sm text-inksoft">{e.school}</p>
          </div>
        ))}
      </div>
    </Block>

    <Block title="Experience" testid="about-experience">
      <div className="flex flex-col gap-px border border-border bg-border">
        {experience.map((e) => (
          <div key={e.org} className="bg-paper p-7">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <p className="font-display text-lg font-semibold text-ink">{e.role}</p>
              <p className="text-sm font-medium text-ember">{e.org}</p>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-inksoft">{e.detail}</p>
          </div>
        ))}
      </div>
    </Block>

    <Block title="Capabilities" testid="about-capabilities">
      <div className="flex flex-wrap gap-2">
        {capabilities.map((c) => (
          <span key={c} className="border border-border bg-white px-4 py-2 text-sm text-ink">
            {c}
          </span>
        ))}
      </div>
    </Block>

    <Block title="Tools" testid="about-tools">
      <div className="flex flex-wrap gap-2">
        {tools.map((t) => (
          <span key={t} className="border border-border px-4 py-2 text-sm text-inksoft">
            {t}
          </span>
        ))}
      </div>
    </Block>

    <Block title="Recognition" testid="about-recognition">
      <div className="border-l-2 border-ember pl-6">
        <p className="font-display text-lg font-semibold text-ink">Runner-up — Wipro iDesign Challenge 2025</p>
        <p className="mt-2 text-sm leading-relaxed text-inksoft">
          Recognised for the Kairos Table Lamp concept. Patent in progress for the
          Universal Travel Adapter plug-switching mechanism.
        </p>
      </div>
    </Block>

    <Block title="Contact" testid="about-contact">
      <p className="max-w-xl leading-relaxed text-inksoft">
        Open to product design, industrial design, and design research opportunities.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${SITE.email}`}
          data-testid="about-email-link"
          className="group inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-ember-hover focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
        >
          {SITE.email}
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="about-linkedin-link"
          className="group inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
        >
          LinkedIn
          <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <Link
          to="/resume"
          data-testid="about-resume-link"
          className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
        >
          Download resume
        </Link>
      </div>
    </Block>
    <div className="pb-16" />
  </div>
);

export default About;
