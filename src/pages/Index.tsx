import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import DeliveryOptions from "@/components/DeliveryOptions";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <DeliveryOptions />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
