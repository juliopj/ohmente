import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Services />
        <Booking />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
