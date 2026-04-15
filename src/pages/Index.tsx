import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Founder } from "@/components/landing/Founder";
import { Problems } from "@/components/landing/Problems";
import { Solutions } from "@/components/landing/Solutions";
import { Methodology } from "@/components/landing/Methodology";
import { Testimonials } from "@/components/landing/Testimonials";
import { Stats } from "@/components/landing/Stats";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Founder />
      <Problems />
      <Solutions />
      <Methodology />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
