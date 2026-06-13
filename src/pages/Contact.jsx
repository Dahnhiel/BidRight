import { useState, useRef } from "react";
import {
  MessageCircle,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  ExternalLink,
} from "lucide-react";

// ─── EmailJS config, replace these with your real values ───────────────────
// 1. Sign up at https://emailjs.com
// 2. Create a service (Gmail / Outlook etc.) → get SERVICE_ID
// 3. Create an email template → get TEMPLATE_ID
// 4. Get your PUBLIC_KEY from Account → API Keys
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// EmailJS template variables expected:
// {{from_name}}, {{from_email}}, {{phone}}, {{trade}}, {{message}}

// ─── Data ────────────────────────────────────────────────────────────────────

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Fastest response, usually same day",
    href: "https://wa.me/447340596714",
    cta: "Message on WhatsApp",
    color: "green",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@bidright.co.uk",
    href: "mailto:hello@bidright.co.uk",
    cta: "Send an Email",
    color: "blue",
  },
  {
    icon: ExternalLink,
    label: "Fiverr",
    value: "Order directly on Fiverr",
    href: "https://fiverr.com/yourusername",
    cta: "View on Fiverr",
    color: "slate",
  },
];

const trades = [
  "Construction & Building",
  "Electrical",
  "Plumbing & Heating",
  "Cleaning & Facilities",
  "Landscaping & Grounds",
  "Painting & Decorating",
  "Roofing",
  "Security & CCTV",
  "IT & Technology",
  "Catering & Food",
  "Transport & Logistics",
  "Healthcare & Social Care",
  "Other / Not Listed",
];

// ─── Form ────────────────────────────────────────────────────────────────────

const initialForm = {
  from_name: "",
  from_email: "",
  phone: "",
  trade: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.from_name.trim()) e.from_name = "Please enter your name.";
    if (!form.from_email.trim() || !/\S+@\S+\.\S+/.test(form.from_email))
      e.from_email = "Please enter a valid email address.";
    if (!form.trade) e.trade = "Please select your trade or service area.";
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = "Please add a bit more detail (at least 20 characters).";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("sending");

    try {
      // Dynamically import EmailJS to keep bundle lean
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          phone: form.phone || "Not provided",
          trade: form.trade,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-150";
  const inputNormal = `${inputBase} border-slate-200 bg-white focus:border-blue-400 focus:ring-blue-100`;
  const inputError = `${inputBase} border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100`;

  return (
    <div className="font-inter">
      {/* ── Hero ── */}
      {/* <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] text-white py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Get in Touch
          </span>
          <h1 className="font-poppins text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Let's Talk About Your Next Contract
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Tell us your trade and what you're looking to win. We'll come back to you with honest advice on what's out there and how we can help.
          </p>
        </div>
      </section> */}

      <section className="bg-[#1E3A8A] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB] rounded-full opacity-20 translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="font-['Poppins'] text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Let's Talk About Your Next Contract
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us your trade and what you're looking to win. We'll come back
              to you with honest advice on what's out there and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact methods ── */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const colorMap = {
              green: {
                icon: "bg-green-100 text-green-600",
                cta: "bg-green-500 hover:bg-green-600 text-white",
              },
              blue: {
                icon: "bg-blue-100 text-blue-600",
                cta: "bg-blue-700 hover:bg-blue-800 text-white",
              },
              slate: {
                icon: "bg-slate-100 text-slate-600",
                cta: "bg-slate-800 hover:bg-slate-900 text-white",
              },
            };
            const c = colorMap[method.color];
            return (
              <div
                key={method.label}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4 shadow-sm"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.icon}`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    {method.value}
                  </p>
                </div>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto text-sm font-semibold px-4 py-2.5 rounded-xl text-center transition-colors duration-200 ${c.cta}`}
                >
                  {method.cta}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Form + sidebar ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <h2 className="font-poppins text-2xl font-bold text-slate-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Fill in the form and we'll get back to you within one business
                day. For faster replies, WhatsApp is the best route.
              </p>
            </div>

            {/* Response time */}
            <div className="rounded-xl bg-blue-50 border border-blue-100 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={15} className="text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Response Times
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  ["WhatsApp", "Same day (usually within hours)"],
                  ["Contact form", "Within 1 business day"],
                  ["Email", "Within 1–2 business days"],
                ].map(([channel, time]) => (
                  <li key={channel} className="flex justify-between gap-3">
                    <span className="font-medium text-slate-700">
                      {channel}
                    </span>
                    <span className="text-slate-500 text-right">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-400 leading-relaxed">
              BidRight is an independent procurement consultancy. We are not
              affiliated with any government body, the Cabinet Office, or Crown
              Commercial Service. Services provided are consultancy and document
              preparation only, we do not guarantee contract awards.
            </p>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={30} className="text-green-500" />
                </div>
                <h3 className="font-poppins text-xl font-bold text-slate-900">
                  Message Sent!
                </h3>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. We'll get back to you within one
                  business day. For anything urgent, WhatsApp us directly.
                </p>
                <a
                  href="https://wa.me/447700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </a>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Error banner */}
                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                    <AlertCircle
                      size={16}
                      className="text-red-500 shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-red-700">
                      Something went wrong sending your message. Please try
                      again, or{" "}
                      <a
                        href="https://wa.me/447700000000"
                        className="underline font-medium"
                      >
                        reach us on WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                )}

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={errors.from_name ? inputError : inputNormal}
                    />
                    {errors.from_name && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.from_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={form.from_email}
                      onChange={handleChange}
                      placeholder="john@example.co.uk"
                      className={errors.from_email ? inputError : inputNormal}
                    />
                    {errors.from_email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.from_email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Phone / WhatsApp{" "}
                    <span className="text-slate-400 font-normal normal-case tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 000000"
                    className={inputNormal}
                  />
                </div>

                {/* Trade */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Trade / Service Area <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="trade"
                    value={form.trade}
                    onChange={handleChange}
                    className={`${errors.trade ? inputError : inputNormal} appearance-none`}
                  >
                    <option value="">Select your trade…</option>
                    {trades.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.trade && (
                    <p className="text-xs text-red-500 mt-1">{errors.trade}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what you're looking to bid for, where you're based, and any questions you have…"
                    className={`${errors.message ? inputError : inputNormal} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm"
                >
                  {status === "sending" ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Your details are used only to respond to your enquiry. We
                  don't share your data with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
