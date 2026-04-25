import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import EnquireForm from "@/components/EnquireForm";
import IndiaTours from "@/components/IndiaTours";
import AboutUs from "@/components/AboutUs";
import InternationalTours from "@/components/InternationalTours";
import SpecialOffer from "@/components/SpecialOffer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroCarousel />
      <EnquireForm />
      <IndiaTours />
      <AboutUs />
      <InternationalTours />
      <SpecialOffer />
      <WhyChooseUs />
      <Gallery />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
