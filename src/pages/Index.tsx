import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ApproachSection from "@/components/ApproachSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PhotographySection from "@/components/PhotographySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "hsl(0 0% 6.7%)" }}>
      <div className="aurora-glow" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <LogoMarquee />
        <ApproachSection />
        <PortfolioSection />
        <StatsSection />
        <ServicesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PhotographySection />
        <ExpertiseSection />
        <PricingSection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
