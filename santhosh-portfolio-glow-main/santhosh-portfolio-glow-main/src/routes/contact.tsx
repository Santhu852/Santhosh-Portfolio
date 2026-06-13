import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Santhosh Kumar" },
      { name: "description", content: "Start a project with Santhosh Kumar — video editing and motion graphics." },
      { property: "og:title", content: "Contact — Santhosh Kumar" },
      { property: "og:description", content: "Let's talk about your next edit." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 md:mb-14">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h1 className="mt-3 text-4xl md:text-7xl font-semibold tracking-tight">
            Let's <span className="text-gradient">make</span> something.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            Have a project, an idea, or just want to say hi? Drop me a line and I'll get back within 48 hours.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* INFO */}
          <aside className="lg:col-span-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <div className="glass rounded-3xl p-6 md:p-7">
              <Mail className="h-5 w-5 text-gradient" />
              <h3 className="mt-3 font-medium">Email</h3>
              <p className="text-sm text-muted-foreground mt-1 break-all">hello@santhoshkumar.studio</p>
            </div>
            <div className="glass rounded-3xl p-6 md:p-7">
              <MapPin className="h-5 w-5 text-gradient" />
              <h3 className="mt-3 font-medium">Based in</h3>
              <p className="text-sm text-muted-foreground mt-1">India · Working worldwide</p>
            </div>
            <div className="glass rounded-3xl p-6 md:p-7">
              <h3 className="font-medium">Currently</h3>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_currentColor]" />
                Open for projects · Q3 2026
              </p>
            </div>
          </aside>

          {/* FORM */}
          <form onSubmit={onSubmit} className="lg:col-span-3 glass-strong rounded-[1.75rem] md:rounded-[2rem] p-5 md:p-10 space-y-5">
            {sent && (
              <div className="rounded-2xl px-4 py-3 text-sm bg-emerald-500/15 border border-emerald-400/30 text-emerald-100">
                Thanks — your message is on its way. I'll be in touch soon.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-glass"
                  placeholder="Your full name"
                  maxLength={100}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-glass"
                  placeholder="you@domain.com"
                  maxLength={255}
                />
              </Field>
            </div>
            <Field label="Subject" error={errors.subject}>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="input-glass"
                placeholder="Brand film, music video, reel package..."
                maxLength={150}
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-glass min-h-40 resize-none"
                placeholder="Tell me about your project, timeline and goals."
                maxLength={2000}
              />
            </Field>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
            >
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .input-glass {
          width: 100%;
          background: oklch(1 0 0 / 0.05);
          border: 1px solid oklch(1 0 0 / 0.12);
          border-radius: 1rem;
          padding: 0.85rem 1rem;
          color: var(--foreground);
          font-size: 0.925rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .input-glass::placeholder { color: oklch(0.7 0.02 270 / 0.6); }
        .input-glass:focus {
          outline: none;
          border-color: oklch(0.7 0.18 320 / 0.7);
          background: oklch(1 0 0 / 0.08);
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="text-xs text-red-300 mt-1 block">{error}</span>}
    </label>
  );
}
