import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "I had no idea where to start with tendering. BidRight walked me through the whole thing — I actually understood what I was submitting for the first time.",
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
  {
    quote:
      "Their review process picked up several issues I had completely missed. The final submission looked far more professional.",
    name: "Helen C.",
    role: "Facilities Management, London",
    initials: "HC",
    color: "bg-purple-100 text-purple-800",
  },
  {
    quote:
      "As a first-time bidder, I was overwhelmed by the requirements. The guidance made everything straightforward and manageable.",
    name: "David K.",
    role: "Security Services, Liverpool",
    initials: "DK",
    color: "bg-sky-100 text-sky-800",
  },
  {
    quote:
      "Clear communication, fast turnaround, and practical advice. Exactly what I needed before submission day.",
    name: "Rachel M.",
    role: "Recruitment Agency, Bristol",
    initials: "RM",
    color: "bg-pink-100 text-pink-800",
  },
  {
    quote:
      "We'd been unsuccessful on several bids before. After working with BidRight, our submissions became far more structured and competitive.",
    name: "Paul S.",
    role: "Construction Firm, Nottingham",
    initials: "PS",
    color: "bg-orange-100 text-orange-800",
  },
  {
    quote:
      "The compliance checks alone saved us from making costly mistakes. Everything was explained in plain English.",
    name: "Nadia A.",
    role: "Healthcare Supplier, Sheffield",
    initials: "NA",
    color: "bg-teal-100 text-teal-800",
  },
  {
    quote:
      "I appreciated how honest they were. If something needed improving, they told us directly and helped us fix it.",
    name: "Tom B.",
    role: "Groundworks Contractor, Coventry",
    initials: "TB",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    quote:
      "The support gave us confidence to bid for opportunities we would normally have ignored. We now approach tenders differently.",
    name: "Lisa W.",
    role: "Office Services Provider, Newcastle",
    initials: "LW",
    color: "bg-rose-100 text-rose-800",
  },
  {
    quote:
      "Everything was organised and delivered on time. No chasing, no confusion, no last-minute stress.",
    name: "Andrew P.",
    role: "IT Support Company, Reading",
    initials: "AP",
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    quote:
      "Their experience with public sector tenders showed throughout the process. The feedback was practical and relevant.",
    name: "Grace E.",
    role: "Training Provider, Cardiff",
    initials: "GE",
    color: "bg-lime-100 text-lime-800",
  },
  {
    quote:
      "We secured a place on a framework shortly after implementing the recommendations from our consultation.",
    name: "Michael D.",
    role: "Maintenance Services, Leicester",
    initials: "MD",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    quote:
      "The quality review highlighted gaps we hadn't considered. Our final submission was stronger because of it.",
    name: "Sarah J.",
    role: "Environmental Services, Southampton",
    initials: "SJ",
    color: "bg-fuchsia-100 text-fuchsia-800",
  },
  {
    quote:
      "Professional, responsive, and knowledgeable. A reliable partner for any business serious about winning contracts.",
    name: "Kevin L.",
    role: "Civil Engineering Consultant, Glasgow",
    initials: "KL",
    color: "bg-green-100 text-green-800",
  },
];

// How many cards visible per breakpoint
const VISIBLE = { mobile: 1, tablet: 2, desktop: 3 };

function TestimonialCard({ quote, name, role, initials, color }) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col h-full select-none">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-[#F59E0B]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[#374151] text-sm leading-relaxed flex-1 mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${color}`}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#111827]">{name}</p>
          <p className="text-xs text-[#6B7280]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(VISIBLE.desktop);
  const trackRef = useRef(null);

  // Responsive visible count
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(VISIBLE.mobile);
      else if (w < 1024) setVisibleCount(VISIBLE.tablet);
      else setVisibleCount(VISIBLE.desktop);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = TESTIMONIALS.length;
  const maxIndex = total - visibleCount;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  // Dot groups — one dot per "page" of visibleCount cards
  const pageCount = Math.ceil(total / visibleCount);
  const activePage = Math.floor(current / visibleCount);

  const goToPage = (page) => {
    const idx = page * visibleCount;
    setCurrent(Math.min(idx, maxIndex));
  };

  // Touch swipe support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  const cardWidthPct = 100 / visibleCount;
  const translateX = -(current * cardWidthPct);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Our Clients Say"
          subtitle="Real tradespeople. Real results. No fluff."
        />

        {/* Slider wrapper */}
        <div className="relative mt-12">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous testimonials"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full border flex items-center justify-center shadow-md transition-all duration-200
              ${
                current === 0
                  ? "bg-white border-slate-200 text-slate-300 cursor-not-allowed"
                  : "bg-white border-slate-200 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] hover:shadow-lg"
              }`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Track viewport — clips overflow */}
          <div
            className="overflow-hidden mx-6"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${cardWidthPct}%` }}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Next testimonials"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full border flex items-center justify-center shadow-md transition-all duration-200
              ${
                current === maxIndex
                  ? "bg-white border-slate-200 text-slate-300 cursor-not-allowed"
                  : "bg-white border-slate-200 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] hover:shadow-lg"
              }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activePage
                  ? "bg-[#1E3A8A] w-6 h-2.5"
                  : "bg-slate-300 hover:bg-slate-400 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-slate-400 mt-3">
          {current + 1}–{Math.min(current + visibleCount, total)} of {total}{" "}
          reviews
        </p>
      </div>
    </section>
  );
}
