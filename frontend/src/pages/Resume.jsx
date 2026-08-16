import { Download, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/data/site";

const highlights = [
  ["Education", "M.Des Integrated Product Design (IIITDM Kancheepuram) · B.Des Product Design (MIT School of Design)"],
  ["Experience", "Wipro Consumer Lighting — tool-less modular outdoor luminaire system (3 mechanism directions, 5 appearance prototypes, 1:1 prototype) · Carlos Philip Watches — 12 watch form concepts, production-ready assets across 3 product lines"],
  ["Recognition", "Runner-up, Wipro iDesign Challenge 2025 · Patent in progress (Universal Travel Adapter)"],
  ["Capabilities", "Product architecture, mechanism design, systems thinking, ethnographic research, ergonomics, prototyping, CMF, visual communication"],
  ["Tools", "Fusion 360, Rhino 7, SolidWorks, KeyShot, Figma, Blender, Adobe Illustrator, Adobe Photoshop, Vizcom"],
];

const Resume = () => (
  <div data-testid="resume-page" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
    <div className="grid gap-12 md:grid-cols-12">
      <FadeIn className="md:col-span-7">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Resume</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Chaitanya Pawaskar
        </h1>
        <p className="mt-4 text-base text-inksoft md:text-lg">
          Multidisciplinary Product & Industrial Designer
        </p>
        <p className="mt-8 max-w-xl leading-relaxed text-inksoft">
          Product and industrial designer with hands-on experience across consumer
          products, lighting, mobility, medical systems, and field research — combining
          research, systems thinking, mechanism design, and visual exploration.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={SITE.resumeUrl}
            data-testid="resume-download-button"
            className="group inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-ember-hover focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
          >
            Download resume (PDF)
            <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="resume-linkedin-link"
            className="group inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
          >
            LinkedIn
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="md:col-span-5">
        <div className="border border-border bg-white p-8" data-testid="resume-summary-card">
          <p className="text-xs font-medium uppercase tracking-widest text-inkmuted">At a glance</p>
          <dl className="mt-6 flex flex-col gap-6">
            {highlights.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs font-medium uppercase tracking-widest text-ember">{k}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-inksoft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default Resume;
