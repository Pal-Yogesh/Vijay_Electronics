import ContactUS from "@/components/frontend/ContactUS";
import HeroParticularProducts from "@/components/frontend/HomePages/HeroParticularProducts";
import HeroProducts from "@/components/frontend/HomePages/HeroProducts";
import HeroRecommendedProducts from "@/components/frontend/HomePages/HeroRecommendedProducts";
import HeroSection from "@/components/frontend/HomePages/HeroSection";

export default function Home() {
  return (
    <>
      
      <div className="bg-[#F0ECE4]">

      <HeroSection />
      <HeroProducts />
      <HeroParticularProducts />
      <HeroRecommendedProducts />
      </div>
      <ContactUS />
    </>
  );
}
