import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import CardsSection from "@/components/sections/CardsSection";
import NewSection from "@/components/sections/NewSection";
import ImagesSection from "@/components/sections/ImagesSection";
import NextSection from "@/components/sections/NextSection";
import AboveFooter from "@/components/sections/AboveFooter";
// <-- import AboveFooter

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CardsSection />
      <NewSection />
      <ImagesSection />
      <NextSection/>
      <AboveFooter />
      {/* AboveFooter section added below ImagesSection */}
 

      <Footer />
    </div>
  );
}
