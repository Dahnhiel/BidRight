import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Tender Sourcing",
    description:
      "We do the legwork, scanning live procurement portals to surface contracts matched to your trade and region.",
    features: ["Live tender alerts", "Regional & national scope", "Trade-specific matching"],
    price: "From £40",
    to: "/services",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Tender Pack & Docs",
    description:
      "Full document pack prepared for self-submission, everything you need to bid, clearly organised and explained.",
    features: ["Complete document preparation", "Compliance checklist", "Submission-ready format"],
    price: "From £90",
    to: "/services",
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Full Bid Support",
    description:
      "End-to-end guidance: pricing strategy, document prep, compliance review, and support right up to submission.",
    features: ["Pricing strategy", "Compliance review", "Submission support"],
    price: "From £200",
    to: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built for Tradespeople"
          subtitle="Whether you're exploring your first tender or ready to go all-in with full support, we have a tier that fits where you are."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="ghost" size="lg">
            View All Services & Compare →
          </Button>
        </div>
      </div>
    </section>
  );
}