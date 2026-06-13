import SectionHeading from "../components/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "I had no idea where to start with tendering. BidRight walked me through the whole thing, I actually understood what I was submitting for the first time.",
    name: "Marcus T.",
    role: "Electrical Contractor, Birmingham",
    initials: "MT",
    color: "bg-blue-100 text-[#1E3A8A]",
  },
  {
    quote:
      "The document pack was worth every penny. Saved me hours of trying to figure out what they even wanted. Submitted in confidence and it paid off.",
    name: "Sandra O.",
    role: "Cleaning Services, Manchester",
    initials: "SO",
    color: "bg-amber-100 text-[#92400E]",
  },
  {
    quote:
      "Didn't think a small firm like mine could compete with bigger companies. BidRight showed me that size doesn't matter if your bid is well-prepared.",
    name: "James R.",
    role: "General Builder, Leeds",
    initials: "JR",
    color: "bg-emerald-100 text-[#065F46]",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Our Clients Say"
          subtitle="Real tradespeople. Real results. No fluff."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map(({ quote, name, role, initials, color }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#374151] text-sm leading-relaxed flex-1 mb-6">
                "{quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${color}`}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{name}</p>
                  <p className="text-xs text-[#6B7280]">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="text-center text-xs text-[#9CA3AF] mt-8">
          * Placeholder testimonials, replace with verified client feedback before launch.
        </p>
      </div>
    </section>
  );
}