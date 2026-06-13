import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  FileText,
  Briefcase,
  Trophy,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    icon: Search,
    title: "We Find Relevant Tenders",
    summary: "Tell us your trade and region, we do the searching.",
    body: "Most public sector contracts are published across multiple portals: Find a Tender Service, Contracts Finder, regional council procurement hubs, NHS Supply Chain, and more. We monitor all of them so you don't have to. Once we know your trade category and location, we surface live, relevant opportunities matched to what your business actually does, filtered by contract value, deadline, and buyer type.",
    timeframe: "Delivered within 48 hours",
    outcome:
      "A shortlist of relevant live tenders with plain-English summaries",
    color: "blue",
  },
  {
    number: "02",
    icon: FileText,
    title: "We Explain What's Required",
    summary: "No jargon. We tell you exactly what the buyer wants.",
    body: "Tender documents can run to 40+ pages of specification, compliance requirements, and scoring criteria. We read through all of it and break it down into plain English, what the buyer is actually looking for, what documents you'll need to provide, how bids are scored, and whether your business is eligible to apply. You'll know exactly what you're getting into before committing.",
    timeframe: "Included with Tender Pack & Full Bid Support",
    outcome:
      "A clear breakdown of requirements, scoring criteria, and eligibility",
    color: "blue",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "We Prepare a Competitive Bid",
    summary: "Documents written, forms completed, pricing structured.",
    body: "This is where we do the heavy lifting. Depending on your service tier, we prepare method statements tailored to your trade, complete pricing schedules and compliance forms, and structure your bid to address the buyer's scoring criteria directly. For Full Bid Support clients, we also advise on pricing strategy, making sure your numbers are competitive without cutting your margins too thin.",
    timeframe: "3–10 working days depending on complexity",
    outcome:
      "A submission-ready bid pack, reviewed for compliance before it goes in",
    color: "amber",
  },
  {
    number: "04",
    icon: Trophy,
    title: "You Submit and Grow",
    summary: "Your bid goes in. We debrief you either way.",
    body: "For Full Bid Support clients, we walk you through the submission process step by step, no last-minute panics, no missed attachments. After submission, whether you win or not, we provide a debrief so you understand how your bid was positioned and what to strengthen next time. Winning a public sector contract is often a milestone that unlocks more, frameworks, repeat work, and credibility with other buyers.",
    timeframe: "Debrief provided within 5 working days of outcome",
    outcome: "A growing pipeline of public sector work",
    color: "blue",
  },
];

const faqs = [
  {
    q: "What is a tender?",
    a: "A tender is a formal invitation from a public sector buyer, a council, NHS trust, housing association, school, or government department, for businesses to submit a priced proposal to supply goods or services. Winning a tender means you're awarded a contract to do that work, often for 1–3 years. It's how the public sector buys almost everything, from cleaning and maintenance to IT and construction.",
  },
  {
    q: "Do I need experience to bid?",
    a: "Not necessarily. Many tenders, especially at lower contract values, are specifically designed to be accessible to SMEs and newer businesses. What matters is that you can demonstrate you have the capability to deliver the work safely and professionally. We help you present what you do have in the strongest possible light.",
  },
  {
    q: "What qualifications or accreditations do I need?",
    a: "It depends on the tender. Common requirements include public liability insurance (usually £2m–£5m), employer's liability insurance, a health and safety policy, and relevant trade qualifications. Some tenders ask for ISO certifications or specific accreditations, we'll flag exactly what's required when we review your opportunity.",
  },
  {
    q: "What does it cost?",
    a: "Tender Sourcing starts at £45 per search. A full document pack (Tender Pack) is £90 per tender. Full Bid Support, end-to-end from search to submission, is £200 per tender. DPS and Framework registration is quoted on request based on complexity. There are no retainers, no subscriptions, and no percentage of contract value taken if you win.",
  },
  {
    q: "How do payments work?",
    a: "Payment is requested upfront before work begins, via bank transfer or other agreed method. This covers the research, writing, and document preparation time, regardless of tender outcome. We don't offer refunds based on whether you win, but we do provide a debrief to help strengthen your next bid.",
  },
  {
    q: "How long does the process take?",
    a: "Tender Sourcing is delivered within 48 hours. A Tender Pack takes 3–5 working days depending on complexity. Full Bid Support timelines depend on the tender deadline, we typically need 5–10 working days. Always contact us as early as possible once you've spotted an opportunity, as tender deadlines are fixed and can't be extended.",
  },
  {
    q: "What happens after I submit?",
    a: "The buyer evaluates all submissions against their scoring criteria and awards the contract to the highest-scoring compliant bid. Timescales vary, some buyers respond within weeks, others take months. For Full Bid Support clients, we provide a debrief once the outcome is known, covering how your bid performed and what to do differently next time.",
  },
  {
    q: "Can I bid for contracts in any region of the UK?",
    a: "Yes. Public sector contracts are available across England, Wales, Scotland, and Northern Ireland. Some are national, others are regional or council-specific. When we source tenders for you, we filter by your preferred working area, so you're only seeing opportunities you can realistically deliver.",
  },
  {
    q: "Is BidRight affiliated with any government body?",
    a: "No. BidRight is an independent consultancy. We are not affiliated with the UK government, Cabinet Office, Crown Commercial Service, or any contracting authority. We help businesses navigate the public procurement process, we don't award contracts and have no influence over buyer decisions.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StepCard({ step, index }) {
  const Icon = step.icon;
  const isAmber = step.color === "amber";

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
      {/* Left: number + icon */}
      <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-0 md:text-right">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
            isAmber ? "bg-amber-100" : "bg-blue-100"
          }`}
        >
          <Icon
            size={24}
            className={isAmber ? "text-amber-600" : "text-blue-600"}
          />
        </div>
        <span
          className={`font-poppins text-6xl md:text-7xl font-extrabold leading-none md:mt-4 ${
            isAmber ? "text-amber-100" : "text-blue-100"
          }`}
        >
          {step.number}
        </span>
      </div>

      {/* Right: content */}
      <div
        className={`rounded-2xl border p-7 ${
          isAmber
            ? "border-amber-200 bg-amber-50/60"
            : "border-slate-200 bg-white"
        } shadow-sm`}
      >
        <h3 className="font-poppins text-xl font-bold text-slate-900 mb-1">
          {step.title}
        </h3>
        <p
          className={`text-sm font-semibold mb-4 ${
            isAmber ? "text-amber-600" : "text-blue-600"
          }`}
        >
          {step.summary}
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {step.body}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-start gap-2.5 bg-white rounded-xl border border-slate-100 p-3.5">
            <Clock size={14} className="text-slate-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-0.5">
                Timeframe
              </p>
              <p className="text-sm text-slate-700 font-medium">
                {step.timeframe}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 bg-white rounded-xl border border-slate-100 p-3.5">
            <CheckCircle
              size={14}
              className={`mt-0.5 shrink-0 ${isAmber ? "text-amber-500" : "text-blue-500"}`}
            />
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-0.5">
                You get
              </p>
              <p className="text-sm text-slate-700 font-medium">
                {step.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-medium text-slate-800 text-sm leading-snug group-hover:text-blue-700 transition-colors duration-150">
          {item.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggle = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="font-inter">
      {/* ── Hero ── */}
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
              The Process
            </p>
            <h1 className="font-['Poppins'] text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              How BidRight Works
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Four steps from not knowing where to start, to submitting a
              professional, competitive bid for a public sector contract.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick nav ── */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-6 overflow-x-auto scrollbar-hide text-sm">
          <span className="text-slate-400 font-medium shrink-0">Jump to:</span>
          {steps.map((s) => (
            <a
              key={s.number}
              href={`#step-${s.number}`}
              className="text-slate-600 hover:text-blue-700 font-medium shrink-0 transition-colors"
            >
              {s.number}. {s.title.split(" ").slice(0, 3).join(" ")}…
            </a>
          ))}
          <a
            href="#faq"
            className="text-slate-600 hover:text-blue-700 font-medium shrink-0 transition-colors"
          >
            FAQ
          </a>
        </div>
      </div>

      {/* ── Steps ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className="scroll-mt-24"
            >
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-10 bg-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Important note ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 flex items-start gap-4">
            <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-900 mb-1 text-sm">
                Contact us as early as possible
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tender deadlines are fixed, buyers never extend them. The
                earlier you get in touch after spotting an opportunity, the more
                time we have to prepare a strong bid. If a deadline is less than
                5 working days away, message us immediately and we'll let you
                know if we can still help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-4 bg-slate-50 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="font-poppins text-3xl font-extrabold text-slate-900 mt-4 mb-2">
              Everything You've Wondered About Tendering
            </h2>
            <p className="text-slate-500 text-sm">
              Still have a question?{" "}
              <a
                href="https://wa.me/447340596714"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ask us on WhatsApp
              </a>
              .
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-6">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready CTA ── */}
      <section className="py-14 px-4 bg-white text-center">
        <div className="max-w-lg mx-auto">
          <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-3">
            Ready to find your first contract?
          </h3>
          <p className="text-slate-500 text-sm mb-7 leading-relaxed">
            Tell us your trade and we'll search for what's currently live. A £45
            Tender Search is the lowest-risk way to see what public sector
            opportunities exist for your business right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/447340596714"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <MessageCircle size={15} />
              Start on WhatsApp
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              View Pricing
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
