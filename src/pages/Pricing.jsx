import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import CTABanner from "../sections/CTABanner";

// ─── Data ────────────────────────────────────────────────────────────────────

const plans = [
  {
    id: "sourcing",
    name: "Tender Sourcing",
    price: 45,
    priceNote: "per search",
    tag: null,
    tagColor: null,
    description:
      "Find out what's actually out there for your trade. We do the portal-hunting so you don't have to.",
    includes: [
      "Matched tenders for your trade & region",
      "Sourced from Find a Tender, Contracts Finder & council portals",
      "Delivered within 48 hours",
      "Plain-English summary per opportunity",
      "Contract value, deadline & buyer details included",
    ],
    notIncluded: [
      "Document preparation",
      "Bid writing or submission support",
    ],
    cta: "Get a Tender Search",
    color: "slate",
  },
  {
    id: "pack",
    name: "Tender Pack",
    price: 90,
    priceNote: "per tender",
    tag: "Most Popular",
    tagColor: "amber",
    description:
      "We prepare the full document pack so you can review, sign, and submit with confidence.",
    includes: [
      "Everything in Tender Sourcing",
      "Method statement written for your trade",
      "Pricing schedule completed",
      "Compliance & eligibility forms handled",
      "2 rounds of revisions included",
      "Submission-ready pack delivered",
    ],
    notIncluded: [
      "Pricing strategy guidance",
      "Pre-submission compliance review",
    ],
    cta: "Get the Doc Pack",
    color: "amber",
  },
  {
    id: "full",
    name: "Full Bid Support",
    price: 200,
    priceNote: "per tender",
    tag: "Best Value",
    tagColor: "blue",
    description:
      "End-to-end support. We handle everything from search to submission, and debrief you afterwards.",
    includes: [
      "Everything in Tender Pack",
      "Pricing strategy & margin guidance",
      "Pre-submission compliance review",
      "Submission walkthrough & checklist support",
      "Post-submission debrief notes",
      "Unlimited revision rounds",
    ],
    notIncluded: [],
    cta: "Start Full Support",
    color: "blue",
  },
  {
    id: "dps",
    name: "DPS & Framework",
    price: null,
    priceNote: "contact for quote",
    tag: "Long-Term",
    tagColor: "slate",
    description:
      "Get on supplier lists that keep generating work, without bidding from scratch every time.",
    includes: [
      "Full DPS / framework application prepared",
      "Pre-qualification questionnaire (PQQ) support",
      "Supplier profile setup & optimisation",
      "Ongoing eligibility monitoring",
      "Ideal for repeat contract opportunities",
    ],
    notIncluded: [],
    cta: "Enquire About DPS",
    color: "slate",
  },
];

const faqs = [
  {
    q: "Do I pay upfront or when the bid is submitted?",
    a: "Payment is made upfront before work begins. This covers the time, research, and document preparation involved, regardless of the tender outcome. We accept bank transfer and most major payment methods.",
  },
  {
    q: "What happens if I don't win the contract?",
    a: "That's the nature of public procurement, even strong bids don't always win. If you're on Full Bid Support, we'll provide a debrief so you understand where the bid stood and how to improve next time. We don't offer refunds based on outcome, but we do everything we can to give your bid the best possible chance.",
  },
  {
    q: "Can I upgrade from Tender Sourcing to Full Bid Support?",
    a: "Yes, the price of your initial Tender Sourcing (£45) can be credited toward a Full Bid Support package if you upgrade within 7 days. Just let us know on WhatsApp.",
  },
  {
    q: "How long does each service take?",
    a: "Tender Sourcing: delivered within 48 hours. Tender Pack: 3–5 working days depending on complexity. Full Bid Support: varies by tender deadline, typically 5–10 working days. DPS registration varies by framework.",
  },
  {
    q: "Do you guarantee I'll win?",
    a: "No, and anyone who does guarantee a win in public procurement is misleading you. What we do guarantee is a compliant, professional, well-structured bid that gives you a genuine chance. Public sector buyers score objectively, and a strong bid speaks for itself.",
  },
  {
    q: "What trades and sectors do you cover?",
    a: "We work across construction, cleaning, landscaping, maintenance, security, facilities management, IT services, and more. If your business provides goods or services, there's likely a public sector contract for it. Get in touch and we'll tell you what's currently live for your trade.",
  },
  {
    q: "Is BidRight affiliated with any government body?",
    a: "No. BidRight is an independent consultancy. We are not affiliated with the UK government, Cabinet Office, Crown Commercial Service, or any contracting authority. We help businesses navigate the public procurement process, we don't award contracts.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const tagStyles = {
  amber: "bg-amber-400 text-amber-900",
  blue: "bg-blue-600 text-white",
  slate: "bg-slate-200 text-slate-600",
};

const borderStyles = {
  amber: "border-amber-300 shadow-amber-100",
  blue: "border-blue-300 shadow-blue-100",
  slate: "border-slate-200 shadow-slate-50",
};

const priceStyles = {
  amber: "text-amber-500",
  blue: "text-blue-700",
  slate: "text-slate-700",
};

const ctaStyles = {
  amber: "bg-amber-400 hover:bg-amber-500 text-amber-900",
  blue: "bg-blue-700 hover:bg-blue-800 text-white",
  slate: "bg-slate-800 hover:bg-slate-900 text-white",
};

function PricingCard({ plan }) {
  const isHighlighted = plan.color === "amber" || plan.color === "blue";

  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 transition-all duration-300 ${
        isHighlighted
          ? `${borderStyles[plan.color]} shadow-xl`
          : "border-slate-200 shadow-sm hover:shadow-md"
      } bg-white`}
    >
      {/* Tag */}
      {plan.tag && (
        <div className="absolute -top-3.5 left-6">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
              tagStyles[plan.tagColor]
            }`}
          >
            {plan.tag}
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-5">
          <h3 className="font-poppins text-lg font-bold text-slate-900 mb-1">
            {plan.name}
          </h3>
          <div className="flex items-baseline gap-1.5 mb-3">
            {plan.price ? (
              <>
                <span
                  className={`text-4xl font-extrabold ${priceStyles[plan.color]}`}
                >
                  £{plan.price}
                </span>
                <span className="text-slate-400 text-sm">{plan.priceNote}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-slate-400 italic">
                Price on request
              </span>
            )}
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 mb-5" />

        {/* Includes */}
        <div className="flex-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            What's included
          </p>
          <ul className="space-y-2.5 mb-5">
            {plan.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle
                  size={15}
                  className={`mt-0.5 shrink-0 ${
                    plan.color === "amber"
                      ? "text-amber-500"
                      : plan.color === "blue"
                      ? "text-blue-500"
                      : "text-slate-400"
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Not included */}
          {plan.notIncluded.length > 0 && (
            <ul className="space-y-2 mb-6">
              {plan.notIncluded.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-400 line-through"
                >
                  <span className="w-3.5 h-3.5 mt-0.5 shrink-0 rounded-full border border-slate-300 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <a
          href={`https://wa.me/447340596714?text=Hi BidRight, I'm interested in your ${plan.name} service`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mt-4 ${
            ctaStyles[plan.color]
          }`}
        >
          <MessageCircle size={15} />
          {plan.cta}
        </a>
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

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="font-inter">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] text-white py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Pricing
          </span>
          <h1 className="font-poppins text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Clear Prices. No Surprises.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Public procurement already has enough complexity, your consultant's pricing shouldn't add to it. Pick a tier, know what you're getting, and let's get started.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Reassurance row */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-center">
            {[
              "No retainers or subscriptions",
              "Pay per tender, cancel anytime",
              "No percentage of contract value taken",
              "No hidden add-ons",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle size={14} className="text-blue-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── "Not a subscription" explainer ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <HelpCircle size={22} className="text-blue-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-poppins font-bold text-slate-900 text-lg mb-2">
                  How payments actually work
                </h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    BidRight operates on a <strong>per-tender, pay-as-you-go</strong> model. There are no monthly retainers, no onboarding fees, and no percentage taken from your contract value if you win.
                  </p>
                  <p>
                    You pay for the specific service you need, when you need it. If you want to run three tenders in a month, you pay three times. If you're quiet for two months, you pay nothing.
                  </p>
                  <p>
                    Payment is requested upfront before work begins, via bank transfer or other agreed method. For DPS / Framework registration, pricing is quoted based on the complexity of the application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="font-poppins text-3xl font-extrabold text-slate-900 mt-4 mb-2">
              Common Questions
            </h2>
            <p className="text-slate-500 text-sm">
              If you don't see your question here,{" "}
              <a
                href="https://wa.me/447340596714"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                just ask us on WhatsApp
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
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Still unsure ── */}
      <section className="py-14 px-4 bg-white text-center">
        <div className="max-w-lg mx-auto">
          <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-3">
            Still not sure which to pick?
          </h3>
          <p className="text-slate-500 text-sm mb-7 leading-relaxed">
            Message us on WhatsApp with your trade and a rough idea of the contracts you want to target. We'll tell you honestly which tier makes sense for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/447340596714"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <MessageCircle size={15} />
              Ask on WhatsApp
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Compare Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}