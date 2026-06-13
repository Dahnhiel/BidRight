import Button from "../components/Button";

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#1E3A8A] relative overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute right-0 top-0 w-80 h-80 border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute right-8 top-8 w-56 h-56 border border-white/10 rounded-full" />
      <div className="absolute left-0 bottom-0 w-48 h-48 border border-white/10 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to Get Started?
        </p>

        <h2 className="font-['Poppins'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Your First Tender Is Closer Than You Think
        </h2>

        <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Don't let confusing paperwork or unfamiliar jargon stop you from winning
          contracts your business deserves. We'll guide you from the very first step.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://wa.me/447340596714"
            variant="primary"
            size="lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Message Us on WhatsApp
          </Button>

          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#1E3A8A]"
          >
            Send Us a Message
          </Button>
        </div>

        {/* Reassurance line */}
        <p className="mt-8 text-sm text-blue-300">
          Free initial consultation · No obligation · Response within 24 hours
        </p>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.522 5.853L.057 23.57a.75.75 0 00.92.92l5.717-1.465A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.978-1.368l-.356-.212-3.694.948.964-3.594-.233-.37A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}