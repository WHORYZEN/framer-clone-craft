import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const SUPPORT_EMAIL = "support@digifrenzy.com";
const WEB3FORMS_ACCESS_KEY = "361d4c5a-21f6-46c9-91d0-d6045017fef5";

const SERVICES = [
  "Social Media (2 platforms)",
  "SEO & Performance",
  "3D Animation & Branding",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  mobile: z.string().trim().min(7, "Enter a valid mobile number").max(20),
  businessName: z.string().trim().min(1, "Business name is required").max(120),
  businessType: z.string().trim().min(1, "Business type is required").max(120),
  services: z.string().trim().min(1, "Select at least one service"),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  email: "",
  mobile: "",
  businessName: "",
  businessType: "",
  services: "",
};

const ContactSection = () => {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleService = (s: string) => {
    const list = data.services ? data.services.split(", ").filter(Boolean) : [];
    const next = list.includes(s) ? list.filter((x) => x !== s) : [...list, s];
    update("services", next.join(", "));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${parsed.data.name} — ${parsed.data.businessName}`,
          from_name: "DigiFrenzy Website",
          replyto: parsed.data.email,
          name: parsed.data.name,
          email: parsed.data.email,
          mobile: parsed.data.mobile,
          business_name: parsed.data.businessName,
          business_type: parsed.data.businessType,
          services_required: parsed.data.services,
        }),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Thanks! We'll be in touch shortly.");
        setData(initial);
      } else {
        toast.error(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selected = data.services ? data.services.split(", ").filter(Boolean) : [];

  return (
    <section id="contact" className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Let's Work Together</span>
          <span className="section-tag">(DF® — Contact)</span>
        </div>
        <span className="section-tag mb-12 block">©2025</span>

        <motion.div
          className="glass-surface p-8 md:p-12 lg:p-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <span className="section-label text-accent mb-4 block">Start a Project</span>
            <h2 className="heading-section text-foreground mb-4">Tell us about your brand</h2>
            <p className="body-text max-w-lg mx-auto">
              Share a few details and we'll get back to you with a tailored plan to grow your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Jane Doe"
                className="form-input"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
                className="form-input"
              />
            </Field>
            <Field label="Mobile Number" error={errors.mobile}>
              <input
                type="tel"
                value={data.mobile}
                onChange={(e) => update("mobile", e.target.value)}
                placeholder="+91 98765 43210"
                className="form-input"
              />
            </Field>
            <Field label="Business Name" error={errors.businessName}>
              <input
                type="text"
                value={data.businessName}
                onChange={(e) => update("businessName", e.target.value)}
                placeholder="Acme Inc."
                className="form-input"
              />
            </Field>
            <Field label="Business Type" error={errors.businessType} className="md:col-span-2">
              <input
                type="text"
                value={data.businessType}
                onChange={(e) => update("businessType", e.target.value)}
                placeholder="e.g. SaaS, Healthcare, E-commerce"
                className="form-input"
              />
            </Field>
            <Field label="Services Required" error={errors.services} className="md:col-span-2">
              <div className="flex flex-wrap gap-2 pt-1">
                {SERVICES.map((s) => {
                  const active = selected.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-body border transition-all duration-300 ${
                        active
                          ? "border-accent text-foreground bg-accent/15"
                          : "border-keyline text-text-dim hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </Field>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
              <div className="flex flex-wrap items-center gap-6">
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-dim font-body">
                  <span className="w-2 h-2" style={{ background: "hsl(var(--accent))" }} />
                  24/7 Full Time Support
                </span>
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-dim font-body">
                  <span className="w-2 h-2" style={{ background: "hsl(var(--accent))" }} />
                  Available Worldwide
                </span>
              </div>
              <button type="submit" disabled={submitting} className="btn-primary text-xs inline-flex disabled:opacity-60 disabled:cursor-not-allowed">
                <span className="btn-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {submitting ? "Sending…" : "Send enquiry"}
              </button>
            </div>
          </form>

          <p className="text-xs text-text-dimmer font-body text-center mt-8">
            Prefer email? Reach us directly at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <label className={`flex flex-col gap-2 ${className}`}>
    <span className="text-[10px] uppercase tracking-widest text-text-dim font-body">{label}</span>
    {children}
    {error && <span className="text-[11px] text-destructive font-body">{error}</span>}
  </label>
);

export default ContactSection;
