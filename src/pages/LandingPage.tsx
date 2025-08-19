import { ButtonBooking } from "../components/elements/ui/btn-booking";
import { Navbar } from "../components/elements/ui/navbar";
import { AboutSection } from "../components/layout/about-sect";
import { AdvantageSection } from "../components/layout/advantage-sect";
import { LatestArticles } from "../components/layout/articles-sect";
import { Footer } from "../components/layout/footer";
import { HeroSection } from "../components/layout/hero-sect";
import { ServicesSection } from "../components/layout/service-sect";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantageSection />
      <LatestArticles />
      <Footer />
      <ButtonBooking />
    </>
  );
};
