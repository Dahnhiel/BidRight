import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import PricingPage from "./pages/Pricing";
import ContactPage from "./pages/Contact";
import HowItWorksPage from "./pages/HowItWorks";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Placeholder({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFF]">
      <div className="text-center px-4">
        <div className="w-16 h-16 bg-[#EFF6FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#2563EB]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </div>
        <h1 className="font-['Poppins'] text-3xl font-bold text-[#111827] mb-3">
          {title}
        </h1>
        <p className="text-[#6B7280] text-sm">
          This page is coming soon. Check back shortly.
        </p>
      </div>
    </div>
  );
}

// 404 page
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFF]">
      <div className="text-center px-4">
        <p className="font-['Poppins'] text-9xl font-bold text-[#DBEAFE] leading-none mb-4">
          404
        </p>
        <h1 className="font-['Poppins'] text-2xl font-bold text-[#111827] mb-3">
          Page Not Found
        </h1>
        <p className="text-[#6B7280] text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#2563EB] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* All routes share the Layout (Navbar + Footer + WhatsApp float) */}
        <Route element={<Layout />}>
          {/* Core pages */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Legal pages */}
          <Route path="privacy" element={<Placeholder title="Privacy Policy" />} />
          <Route path="terms" element={<Placeholder title="Terms of Service" />} />

          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}