import HeroSection from "@/components/HeroSection";
import CaseRealSection from "@/components/CaseRealSection";
import TeamPerformanceSection from "@/components/TeamPerformanceSection";
import ResultSection from "@/components/ResultSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import ClientsCarousel from "@/components/ClientsCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CaseRealSection />
      <TeamPerformanceSection />
      <ResultSection />
      <ScreenshotsSection />
      <ClientsCarousel />
      <TestimonialsSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};

export default Index;
