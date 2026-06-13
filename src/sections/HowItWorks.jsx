import SectionHeading from "../components/SectionHeading";

const STEPS = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "We Find Relevant Tenders",
    description:
      "Tell us your trade and region. We search live public procurement portals, councils, NHS, housing associations, education, and surface contracts that actually match your work.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Plain English Breakdown",
    description:
      "Procurement documents can be dense. We translate what's required, eligibility criteria, mandatory questions, scoring frameworks, into clear steps you can actually follow.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
      </svg>
    ),
    title: "We Help Prepare Your Bid",
    description:
      "From pricing strategy to compliance checklists, we work alongside you to build a submission that's competitive, credible, and complete, no corners cut.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.25 9.71 2 12 2c2.291 0 4.545.25 6.75.721v1.515M19.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 5.492M19.75 4.236V4.5a9 9 0 01-2.48 5.228" />
      </svg>
    ),
    title: "You Win and Grow",
    description:
      "Submit with confidence. Whether you win on the first bid or need to refine for the next one, we stay with you, because building a track record takes more than one contract.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="From Zero to Contract, Step by Step"
          subtitle="No guesswork. No jargon. Just a clear path from finding the right opportunity to submitting a bid that stands out."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-6 h-0.5 bg-[#DBEAFE] z-10" />
              )}

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-[#2563EB] flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-['Poppins'] text-3xl font-bold text-[#DBEAFE]">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-['Poppins'] text-lg font-semibold text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}