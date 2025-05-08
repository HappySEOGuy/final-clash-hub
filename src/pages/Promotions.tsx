
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Promotions from "@/components/Promotions";

const PromotionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="bg-ucl-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Bookmaker Promotions</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Exclusive Champions League final offers from leading bookmakers. Take advantage of these special promotions for the big match.
            </p>
          </div>
        </div>
        <Promotions />
      </main>
      <Footer />
    </div>
  );
};

export default PromotionsPage;
