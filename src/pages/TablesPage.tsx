
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Tables from "@/components/Tables";

const TablesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="bg-ucl-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Tournament Tables</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Follow Inter Milan and PSG's journey to the final through their group stage performances and knockout matches.
            </p>
          </div>
        </div>
        <Tables />
      </main>
      <Footer />
    </div>
  );
};

export default TablesPage;
