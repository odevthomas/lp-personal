import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ResultsCarousel from "@/components/ResultsCarousel";
import UrgencyTimer from "@/components/UrgencyTimer";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <ResultsCarousel />
      <UrgencyTimer />
      <FAQ />
      <CallToAction />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
