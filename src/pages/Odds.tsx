
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BettingOdds from "@/components/BettingOdds";

const Odds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="bg-ucl-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Betting Odds</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Compare the latest betting odds from top bookmakers for the Champions League final between Inter Milan and PSG.
            </p>
          </div>
        </div>
        <BettingOdds />
      </main>
      <Footer />
    </div>
  );
};

export default Odds;
