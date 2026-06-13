import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import ServicesPreview from "../sections/ServicesPreview";
import Testimonials from "../sections/Testimonials";
import CTABanner from "../sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ServicesPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}