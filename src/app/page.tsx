import FloatingButtons from "@/components/sections/FloatingButtons";
import UtilityBar from "@/components/sections/UtilityBar";
import Navbar from "@/components/sections/Navbar";
import { HeroBanner, HeroText } from "@/components/sections/Hero";
import MandalaDivider from "@/components/sections/MandalaDivider";
import FeaturedVendors from "@/components/sections/FeaturedVendors";
import ExploreVendors from "@/components/sections/ExploreVendors";
import AllInOne from "@/components/sections/AllInOne";
import CelebritySection from "@/components/sections/CelebritySection";
import EInvites from "@/components/sections/EInvites";
import Destinations from "@/components/sections/Destinations";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <FloatingButtons />
      <UtilityBar />
      <Navbar />
      <HeroBanner />
      <HeroText />
      <MandalaDivider />
      <FeaturedVendors />
      <ExploreVendors />
      <AllInOne />
      <MandalaDivider />
      <CelebritySection />
      <EInvites />
      <Destinations />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Gallery />
      <BlogSection />
      <Footer />
    </>
  );
}
