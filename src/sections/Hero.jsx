import Button from "../components/Button";
import TrustBadges from "../components/TrustBadges";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F2460] via-[#1E3A8A] to-[#1d4ed8] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full opacity-20 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F59E0B] rounded-full opacity-10 -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">UK Public Sector Procurement</span>
          </div>

          {/* Headline */}
          <h1 className="font-['Poppins'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Win Public Sector Contracts,{" "}
            <span className="text-[#F59E0B]">Without the Confusion</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl">
            BidRight helps UK tradespeople and small businesses find, understand,
            and bid for government tenders, from first enquiry to final submission.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Find Your First Contract
            </Button>
            <Button to="/how-it-works" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1E3A8A]">
              See How It Works
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10">
            {[
              { stat: "£billions", label: "In UK public contracts annually" },
              { stat: "SME-First", label: "Approach to every engagement" },
              { stat: "24hr", label: "Average response time" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="font-['Poppins'] text-2xl sm:text-3xl font-bold text-[#F59E0B]">{stat}</p>
                <p className="text-xs sm:text-sm text-blue-200 mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust badges strip */}
      <div className="relative border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <TrustBadges className="[&_span]:text-blue-300 [&_span.text-\[\#2563EB\]]:text-[#F59E0B]" />
        </div>
      </div>
    </section>
  );
}