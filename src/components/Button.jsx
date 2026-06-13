import { Link } from "react-router-dom";

/**
 * BidRight Button
 *
 * Props:
 *  - variant: "primary" | "secondary" | "outline" | "ghost"
 *  - size: "sm" | "md" | "lg"
 *  - to: internal route (renders as <Link>)
 *  - href: external URL (renders as <a>)
 *  - children, className, ...rest
 */
export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  children,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#F59E0B] hover:bg-[#D97706] text-white focus:ring-[#F59E0B] shadow-sm hover:shadow-md",
    secondary:
      "bg-[#1E3A8A] hover:bg-[#2563EB] text-white focus:ring-[#1E3A8A] shadow-sm hover:shadow-md",
    outline:
      "border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white focus:ring-[#1E3A8A]",
    ghost:
      "text-[#2563EB] hover:bg-blue-50 focus:ring-[#2563EB]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3.5",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}