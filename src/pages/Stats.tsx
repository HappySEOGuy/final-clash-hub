
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";

const StatsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="bg-ucl-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Team Statistics</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Dive deep into the numbers behind Inter Milan and PSG's performances throughout their Champions League campaigns.
            </p>
          </div>
        </div>
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default StatsPage;
