import { useState } from "react";
import axios from "axios";
import { ArrowRight, ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputClass =
  "w-full border border-input bg-white px-4 py-3 text-sm text-ink placeholder:text-inkmuted transition-colors duration-200 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — thank you. I'll get back to you soon.");
      setForm({ name: "", email: "", company: "", message: "", website: "" });
    } catch (err) {
      toast.error("Something went wrong sending your message. Please email me directly instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="contact-page" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid gap-14 md:grid-cols-12">
        <FadeIn className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Start a conversation
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-inksoft">
            Open to product design, industrial design, and design research
            opportunities where thoughtful making can create meaningful impact. Tell me
            a little about the problem you're exploring.
          </p>
          <div className="mt-10 flex flex-col gap-5 border-t border-border pt-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-inkmuted">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                data-testid="contact-email-link"
                className="mt-1 inline-block text-sm font-medium text-ink transition-colors duration-200 hover:text-ember focus:outline-none focus:ring-2 focus:ring-ember"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-inkmuted">LinkedIn</p>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin-link"
                className="group mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-ember focus:outline-none focus:ring-2 focus:ring-ember"
              >
                linkedin.com/in/chaitanya-pawaskar
                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-inkmuted">Resume</p>
              <a
                href={SITE.resumeUrl}
                data-testid="contact-resume-link"
                className="mt-1 inline-block text-sm font-medium text-ink transition-colors duration-200 hover:text-ember focus:outline-none focus:ring-2 focus:ring-ember"
              >
                Download PDF
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="md:col-span-7">
          <form onSubmit={submit} data-testid="contact-form" className="border border-border bg-white p-7 md:p-9">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-medium uppercase tracking-widest text-inkmuted">
                  Name *
                </label>
                <input
                  id="contact-name"
                  data-testid="contact-name-input"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-medium uppercase tracking-widest text-inkmuted">
                  Email *
                </label>
                <input
                  id="contact-email"
                  data-testid="contact-email-input"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-company" className="mb-2 block text-xs font-medium uppercase tracking-widest text-inkmuted">
                Company / organisation
              </label>
              <input
                id="contact-company"
                data-testid="contact-company-input"
                value={form.company}
                onChange={set("company")}
                placeholder="Optional"
                className={inputClass}
              />
            </div>
            <div className="mt-6">
              <label htmlFor="contact-message" className="mb-2 block text-xs font-medium uppercase tracking-widest text-inkmuted">
                Message *
              </label>
              <textarea
                id="contact-message"
                data-testid="contact-message-input"
                required
                minLength={10}
                rows={6}
                value={form.message}
                onChange={set("message")}
                placeholder="Tell me about the role, project, or problem you're exploring…"
                className={inputClass}
              />
            </div>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={set("website")}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              data-testid="contact-submit-button"
              disabled={sending}
              className="group mt-8 inline-flex items-center gap-2 bg-ember px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-ember-hover focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  Sending
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
