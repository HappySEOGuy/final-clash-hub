
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TeamComparison from "@/components/TeamComparison";
import BettingOdds from "@/components/BettingOdds";
import Promotions from "@/components/Promotions";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="prose max-w-none">
            <h1 className="text-3xl font-bold text-center mb-6">Finał Ligi Mistrzów 2025 PSG – Inter: kursy, promocje, gdzie obejrzeć?</h1>
            <p className="mb-4">
              Finał Ligi Mistrzów to wydarzenie, na które czeka cały piłkarski świat! Tak było w zeszłym roku, gdy o uszate trofeum walczyli piłkarze Realu Madryt i Borussii Dortmund, tak samo będzie i teraz. Nic w tym jednak dziwnego, skoro ostatniego dnia maja, na Allianz Arena w Monachium, naprzeciw siebie staną piłkarze Paris Saint-Germain i Interu Mediolan – równie wielkich piłkarskich marek.
            </p>
            <p className="mb-4">
              Zbliżające się spotkanie zapowiadane jest jako starcie dwóch gigantów, które już teraz elektryzuje kibiców nie tylko tych klubów, ale też sympatyków Manchesteru City, Manchesteru United oraz miliony postronnych obserwatorów futbolu. Emocje towarzyszące meczom półfinałowym były ogromne, a dramatyczne zwroty akcji na boisku przechylały szalę zwycięstwa na jedną lub drugą stronę, co tylko podgrzewało atmosferę wśród kibiców.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Kiedy finał Ligi Mistrzów 2025?</h2>
            <p className="mb-4">
              Mecz odbędzie się 31 maja 2025 roku (sobota) o godzinie 21:00. Wcześniej finały Ligi Mistrzów odbywały się w środy, co jest istotne w odniesieniu do zmiany terminu na sobotę, która miała miejsce w 2010 roku. Finał Ligi Mistrzów w Monachium to kulminacja sezonu, która przyciągnie miliony kibiców przed ekrany i na stadion.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Gdzie Odbędzie się Finał Ligi Mistrzów 2025?</h2>
            <p className="mb-4">
              Finał Ligi Mistrzów w Monachium zostanie rozegrany na Allianz Arena, jednym z najpiękniejszych stadionów świata, na którym na co dzień w roli gospodarza występuje Bayern Monachium. Obiekt o pojemności 70 000 miejsc był już gospodarzem finału w 2012 roku, gdy Chelsea triumfowała nad monachijczykami właśnie.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Liga Mistrzów finał – gdzie obejrzeć transmisję?</h2>
            <p className="mb-4">
              Kibice w Polsce mają sporo opcji, by śledzić Finał Ligi Mistrzów 2025. Decydujące o losach trofeum starcie pokaże bowiem CANAL+, ale także telewizja Polska. W przypadku tej drugiej w grę wchodzą: kanały TVP 1 i TVP Sport, strona TVPSPORT.PL, aplikacja mobilna, Smart TV i HbbTV. Jeśli ktoś zaś ktoś preferuje oglądanie wydarzeń sportowych w kinowych warunkach, należy wspomnieć, że także będzie to możliwe – dzięki współpracy CANAL+ z Multikinem.
            </p>
          </div>
        </div>
        <TeamComparison />
        <BettingOdds />
        <Promotions />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
