import Button from "./Button";

/**
 * ServiceCard
 *
 * Props:
 *  - icon: JSX element
 *  - title: string
 *  - description: string
 *  - features: string[] (optional bullet list)
 *  - price: string (optional, e.g. "From £90")
 *  - to: internal route for CTA
 *  - featured: bool, highlight card (e.g. most popular)
 */
export default function ServiceCard({
  icon,
  title,
  description,
  features = [],
  price,
  to = "/contact",
  featured = false,
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "bg-[#1E3A8A] text-white shadow-lg ring-2 ring-[#F59E0B]"
          : "bg-white text-[#111827] shadow-md border border-gray-100"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
          featured ? "bg-white/15" : "bg-blue-50"
        }`}
      >
        <span className={featured ? "text-white" : "text-[#2563EB]"}>{icon}</span>
      </div>

      {/* Title */}
      <h3
        className={`font-['Poppins'] text-xl font-bold mb-2 ${
          featured ? "text-white" : "text-[#111827]"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-4 ${featured ? "text-blue-200" : "text-[#6B7280]"}`}>
        {description}
      </p>

      {/* Feature list */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckIcon
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  featured ? "text-[#F59E0B]" : "text-[#2563EB]"
                }`}
              />
              <span className={featured ? "text-blue-100" : "text-[#374151]"}>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Price */}
      {price && (
        <p
          className={`text-lg font-bold mb-5 ${
            featured ? "text-[#F59E0B]" : "text-[#1E3A8A]"
          }`}
        >
          {price}
        </p>
      )}

      {/* CTA */}
      <Button
        to={to}
        variant={featured ? "primary" : "outline"}
        className="w-full mt-auto"
      >
        Get Started
      </Button>
    </div>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}