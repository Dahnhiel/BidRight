/**
 * SectionHeading, consistent section title block
 *
 * Props:
 *  - eyebrow: small label above the title (optional)
 *  - title: main heading (required)
 *  - subtitle: paragraph below title (optional)
 *  - align: "left" | "center" (default "center")
 *  - light: bool, use white text (for dark backgrounds)
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "left" ? "text-left" : "text-center mx-auto";
  const maxW = align === "center" ? "max-w-2xl" : "";

  return (
    <div className={`${alignClass} ${maxW} mb-12`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? "text-[#F59E0B]" : "text-[#2563EB]"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-['Poppins'] text-3xl sm:text-4xl font-bold leading-tight ${light ? "text-white" : "text-[#111827]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-blue-200" : "text-[#6B7280]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}