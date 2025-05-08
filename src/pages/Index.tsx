
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TeamComparison from "@/components/TeamComparison";
import BettingOdds from "@/components/BettingOdds";
import Promotions from "@/components/Promotions";
import Statistics from "@/components/Statistics";
import Tables from "@/components/Tables";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <TeamComparison />
        <BettingOdds />
        <Promotions />
        <Statistics />
        <Tables />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
