import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "FAQ", to: "/how-it-works#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2460] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">B</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight font-['Poppins']">
                Bid<span className="text-[#F59E0B]">Right</span>
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Helping UK tradespeople and small businesses find, understand, and
              win public sector contracts, without the confusion.
            </p>

            {/* Social / contact icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://wa.me/447340596714"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr"
                className="w-9 h-9 bg-white/10 hover:bg-[#1DBF73] rounded-full flex items-center justify-center transition-colors text-xs font-bold"
              >
                f
              </a>
              <a
                href="mailto:hello@bidright.co.uk"
                aria-label="Email"
                className="w-9 h-9 bg-white/10 hover:bg-[#2563EB] rounded-full flex items-center justify-center transition-colors"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B] mb-4">
              Legal
            </h3>
            <ul className="space-y-2 mb-6">
              {LEGAL_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B] mb-3">
              Contact
            </h3>
            <p className="text-sm text-blue-200">hello@bidright.co.uk</p>
            <p className="text-sm text-blue-200 mt-1">Response within 24 hours</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">
            © {year} BidRight · A BuildWithBlaq Service. All rights reserved.
          </p>
          <p className="text-xs text-blue-400">
            BidRight is a consultancy service. We do not guarantee contract award and are not affiliated with any government body.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.853L.057 23.57a.75.75 0 00.92.92l5.717-1.465A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.978-1.368l-.356-.212-3.694.948.964-3.594-.233-.37A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}