import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import CTABanner from "../sections/CTABanner";

const VALUES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Transparency",
    description:
      "No hidden fees, no vague promises. We tell you exactly what we're doing, why we're doing it, and what to realistically expect from every tender you pursue.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Accessibility",
    description:
      "Public contracts should be open to everyone, not just large firms with dedicated procurement teams. We level the playing field for tradespeople and small businesses.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Support",
    description:
      "We don't hand you a document and disappear. We stay alongside you, answering questions, reviewing submissions, and helping you improve with every bid you make.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.25 9.71 2 12 2c2.291 0 4.545.25 6.75.721v1.515M19.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 5.492M19.75 4.236V4.5a9 9 0 01-2.48 5.228" />
      </svg>
    ),
    title: "Results",
    description:
      "Everything we do is aimed at one outcome, helping your business win work. We measure our success by yours, and we're not satisfied until you're walking away with contracts.",
  },
];

const STATS = [
  { value: "£billions", label: "Available in UK public contracts every year" },
  { value: "35%", label: "Of UK public contracts targeted at SMEs" },
  { value: "1 in 3", label: "SMEs never bid due to complexity" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#1E3A8A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB] rounded-full opacity-20 translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-4">
              About BidRight
            </p>
            <h1 className="font-['Poppins'] text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Built to Bridge the Gap Between Tradespeople and Public Contracts
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Billions of pounds in public contracts go to tender every year in the UK.
              Most small businesses never see them, or worse, see them and give up before
              they even start. BidRight exists to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-4">
                Our Story
              </p>
              <h2 className="font-['Poppins'] text-3xl sm:text-4xl font-bold text-[#111827] leading-tight mb-6">
                The Opportunity That Most Small Businesses Never Know Exists
              </h2>
              <div className="space-y-4 text-[#374151] text-base leading-relaxed">
                <p>
                  Every day, councils, NHS trusts, housing associations, and schools publish
                  contracts for work that tradespeople already do, cleaning, construction,
                  maintenance, catering, IT, and more. These aren't reserved for corporate giants.
                  They're legally required to be accessible to small businesses.
                </p>
                <p>
                  But most SMEs never bid. The documents are dense. The language is unfamiliar.
                  The process feels designed for someone with a procurement department, not a
                  one-man band or a small team juggling jobs and invoices.
                </p>
                <p>
                  BidRight was founded to close that gap. We take the complexity out of public
                  procurement and replace it with a clear, practical process that any tradesperson
                  or SME can follow, regardless of whether they've ever seen a tender before.
                </p>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-[#F8FAFF] rounded-3xl p-8 lg:p-10 border border-gray-100">
              <p className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-8">
                Why This Matters
              </p>
              <div className="space-y-8">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#1E3A8A] rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Poppins'] text-2xl font-bold text-[#1E3A8A]">{value}</p>
                      <p className="text-sm text-[#6B7280] mt-1 leading-snug">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-28 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Avatar / card */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                {/* Avatar */}
                <div className="flex items-center gap-5 mb-7 pb-7 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                    <span className="font-['Poppins'] text-2xl font-bold text-[#F59E0B]">D</span>
                  </div>
                  <div>
                    <p className="font-['Poppins'] text-xl font-bold text-[#111827]">Daniel</p>
                    <p className="text-sm text-[#6B7280]">Founder · BidRight / BuildWithBlaq</p>
                  </div>
                </div>

                {/* Quick bio facts */}
                <div className="space-y-4">
                  {[
                    { label: "Background", value: "Full-stack developer & procurement consultant" },
                    { label: "Focus", value: "UK public sector procurement for SMEs" },
                    { label: "Reach", value: "UK-based, serving clients nationally" },
                    { label: "Contact", value: "hello@bidright.co.uk" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] w-20 flex-shrink-0 pt-0.5">
                        {label}
                      </span>
                      <span className="text-sm text-[#374151]">{value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-7 pt-7 border-t border-gray-100 flex gap-3">
                  <Button href="https://wa.me/447340596714" variant="secondary" size="sm">
                    WhatsApp
                  </Button>
                  <Button to="/contact" variant="outline" size="sm">
                    Send a Message
                  </Button>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-4">
                The Person Behind It
              </p>
              <h2 className="font-['Poppins'] text-3xl sm:text-4xl font-bold text-[#111827] leading-tight mb-6">
                Procurement Insight, Technical Precision
              </h2>
              <div className="space-y-4 text-[#374151] text-base leading-relaxed">
                <p>
                  BidRight was founded by Daniel, a developer and consultant operating under
                  the BuildWithBlaq brand. With a background spanning full-stack development,
                  business compliance, and procurement advisory, the approach to every client
                  engagement is methodical: understand the opportunity, prepare thoroughly,
                  and submit with confidence.
                </p>
                <p>
                  Having helped clients navigate UK business formation, compliance frameworks,
                  and document preparation across multiple industries, the focus turned to a
                  problem closer to home: UK tradespeople being locked out of contracts they
                  were perfectly qualified to win, simply because the process was unfamiliar.
                </p>
                <p>
                  BidRight is the answer to that. Practical. Precise. Built by someone who
                  understands both the technical side and the plain-English translation that
                  makes the difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            subtitle="These aren't decorative words on a wall. They're the principles that shape how we work with every client."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {VALUES.map(({ icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center text-[#2563EB] flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-['Poppins'] text-lg font-bold text-[#111827] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}