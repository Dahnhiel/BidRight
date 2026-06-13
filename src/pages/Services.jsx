import { Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  Search,
  FileText,
  Briefcase,
  Building2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import CTABanner from "../sections/CTABanner";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "sourcing",
    icon: <Search size={22} />,
    title: "Tender Sourcing",
    price: "£45 per search",
    description:
      "Don't waste hours hunting portals yourself. We scan Find a Tender, Contracts Finder, and regional council portals to surface live, relevant tenders matched to your trade and location.",
    features: [
      "Matched to your trade category & region",
      "Sourced from Find a Tender, Contracts Finder & council portals",
      "Delivered within 48 hours",
      "Plain-English summary of each opportunity",
      "Contract value & deadline included",
    ],
    to: "/contact",
    featured: false,
  },
  {
    id: "pack",
    icon: <FileText size={22} />,
    title: "Tender Pack & Documentation",
    price: "£90 per tender",
    description:
      "We do the paperwork heavy lifting. You get a fully prepared document pack — method statements, pricing schedules, compliance forms — ready for you to review and submit.",
    features: [
      "Everything in Tender Sourcing",
      "Full document pack prepared for self-submission",
      "Method statement written for your trade",
      "Pricing schedule & compliance forms completed",
      "2 rounds of revisions included",
    ],
    to: "/contact",
    featured: true,
  },
  {
    id: "full",
    icon: <Briefcase size={22} />,
    title: "Full Bid Support",
    price: "£200 per tender",
    description:
      "End-to-end support from opportunity to submission. We handle document prep, pricing strategy, compliance review, and walk you through every step until your bid goes in.",
    features: [
      "Everything in Tender Pack",
      "Pricing strategy & margin guidance",
      "Compliance review before submission",
      "Submission support & checklist walkthrough",
      "Post-submission debrief notes",
    ],
    to: "/contact",
    featured: false,
  },
  {
    id: "dps",
    icon: <Building2 size={22} />,
    title: "DPS & Framework Registration",
    price: "Price on request",
    description:
      "Get on supplier lists that keep paying out. We register your business on Dynamic Purchasing Systems and procurement frameworks — so you're eligible for contracts without bidding from scratch each time.",
    features: [
      "Full DPS / framework application prepared",
      "Pre-qualification questionnaire (PQQ) support",
      "Supplier profile setup & optimisation",
      "Ongoing eligibility monitoring",
      "Ideal for repeat contract opportunities",
    ],
    to: "/contact",
    featured: false,
  },
];

const tableFeatures = [
  {
    label: "Tender opportunity search",
    sourcing: true,
    pack: true,
    full: true,
  },
  {
    label: "Plain-English tender summary",
    sourcing: true,
    pack: true,
    full: true,
  },
  {
    label: "Method statement written",
    sourcing: false,
    pack: true,
    full: true,
  },
  {
    label: "Pricing schedule completed",
    sourcing: false,
    pack: true,
    full: true,
  },
  {
    label: "Compliance forms handled",
    sourcing: false,
    pack: true,
    full: true,
  },
  {
    label: "Revision rounds",
    sourcing: false,
    pack: "2 rounds",
    full: "Unlimited",
  },
  {
    label: "Pricing strategy guidance",
    sourcing: false,
    pack: false,
    full: true,
  },
  {
    label: "Pre-submission compliance review",
    sourcing: false,
    pack: false,
    full: true,
  },
  {
    label: "Submission walkthrough support",
    sourcing: false,
    pack: false,
    full: true,
  },
  {
    label: "Post-submission debrief",
    sourcing: false,
    pack: false,
    full: true,
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function CheckCell({ value }) {
  if (value === true)
    return <CheckCircle size={18} className="text-blue-500 mx-auto" />;
  if (value === false)
    return <XCircle size={16} className="text-slate-300 mx-auto" />;
  return (
    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
      {value}
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="font-inter">
      {/* ── Page Hero ── */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Our Services
          </span>
          <h1 className="font-poppins text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            From Finding Tenders to Winning Them
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Pick the level of support that fits where you are. Whether you just
            need a starting point or want someone in your corner from search to
            submission — we've got a service for that.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm font-medium text-blue-200 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-full transition-colors duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Cards Grid ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-28">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                  to={service.to}
                  featured={service.featured}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Compare
            </span>
            <h2 className="font-poppins text-3xl font-extrabold text-slate-900 mt-4 mb-3">
              What's Included in Each Tier
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Not sure which service fits? Here's a clear breakdown of what you
              get at each level.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 font-semibold text-slate-500 w-1/2">
                    Feature
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-slate-700">
                    Sourcing
                    <div className="text-xs font-normal text-slate-400 mt-0.5">
                      £45
                    </div>
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-blue-700 bg-blue-50/60">
                    Doc Pack
                    <div className="text-xs font-normal text-blue-400 mt-0.5">
                      £90
                    </div>
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-slate-700">
                    Full Bid
                    <div className="text-xs font-normal text-slate-400 mt-0.5">
                      £200
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 last:border-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                    }`}
                  >
                    <td className="px-6 py-3.5 text-slate-700 font-medium">
                      {row.label}
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <CheckCell value={row.sourcing} />
                    </td>
                    <td className="px-4 py-3.5 text-center bg-blue-50/30">
                      <CheckCell value={row.pack} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <CheckCell value={row.full} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-slate-400 mt-5">
            DPS & Framework Registration is quoted separately —{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              contact us
            </Link>{" "}
            for pricing.
          </p>
        </div>
      </section>

      {/* ── Reassurance Strip ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "No win, no shame",
                body: "Not every bid succeeds — that's the nature of procurement. We'll debrief with you so the next one is stronger.",
              },
              {
                title: "No hidden fees",
                body: "The price you see is the price you pay. No retainers, no surprise add-ons, no percentage of contract value.",
              },
              {
                title: "No jargon",
                body: "We explain every step in plain English. If you've never seen a tender before, that's exactly who we built this for.",
              },
            ].map((item, i) => (
              <div key={i} className="px-4">
                <div className="w-8 h-0.5 bg-blue-600 mx-auto mb-4" />
                <h4 className="font-poppins font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Not Sure CTA ── */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-3">
            Not sure which service you need?
          </h3>
          <p className="text-slate-500 text-sm mb-7">
            Send us a quick message on WhatsApp — describe your trade and what
            you're looking to win, and we'll point you in the right direction.
            No sales pitch, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href="https://wa.me/447340596714"
              variant="primary"
              size="lg"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Send a Message
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
