
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
            <h1 className="text-3xl font-bold text-center">Kursy Bukmacherskie</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Porównaj najnowsze kursy bukmacherskie od czołowych bukmacherów na finał Ligi Mistrzów między Interem Mediolan a PSG.
            </p>
            <div className="mt-6 text-center">
              <p className="text-lg">Finał: 31 maja 2025, 21:00</p>
              <p>Allianz Arena, Monachium</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Kursy na PSG – Inter</h2>
            <p className="mb-4">
              Kursy na finał Ligi Mistrzów PSG – Inter wskazują, że bukmacherzy widzą lekką przewagę PSG, 
              czekające na swój pierwszy raz, jeśli chodzi o triumf w LM. Oto przykładowe kursy z 
              oferty Superbet na wynik w regulaminowym czasie gry:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>PSG: 2.25</li>
              <li>Remis w regulaminowym czasie gry: 3.35</li>
              <li>Inter: 3.20 (28% szans na zwycięstwo)</li>
            </ul>
            <p className="mb-4">
              Warto zauważyć, że finały Ligi Mistrzów często kończą się emocjonującymi wynikami, 
              takimi jak 3:2, co podkreśla nieprzewidywalność i dramatyzm tych spotkań.
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2">Kursy na zwycięstwo w finale (uwzględniając dogrywkę i karne):</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>PSG: 1.66</li>
              <li>Inter: 2.22</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Typy Bukmacherskie na PSG – Inter</h2>
            <p className="mb-4">
              Eksperci przewidują, że Final Ligi Mistrzow 2025 będzie meczem taktycznym, 
              z naciskiem na kontrolę w środku pola. A skoro tak, warto wziąć pod uwagę następujące typy:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-medium">Poniżej 2,5 gola:</span> Inter słynie z solidnej defensywy, więc trudno spodziewać się wielu goli w decydującym o losach pucharu spotkaniu.</li>
              <li><span className="font-medium">PSG wygra lub remis (1X):</span> piłkarze PSG zaprezentowali się pewniej w półfinałowym dwumeczu z Arsenalem (3:1 w dwumeczu).</li>
              <li><span className="font-medium">Obie drużyny strzelą (BTTS):</span> Kurs 1.80 (Fortuna). Zarówno PSG, jak i Inter mają zawodników zdolnych do przełamania defensywy rywala.</li>
              <li><span className="font-medium">Powyżej 8,5 rzutów rożnych:</span> Kurs 1.65 (Superbet). Oba zespoły grają ofensywnie.</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              Pamiętaj przy tym, że promocja Betbuilder – dostępna m.in. w Fortunie – pozwala łączyć typy, 
              np. PSG wygra + poniżej 3,5 gola, co może zwiększyć potencjalną wygraną.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Gdzie obejrzeć transmisję?</h2>
            <p className="mb-4">
              Kibice w Polsce mają sporo opcji, by śledzić Finał Ligi Mistrzów 2025. Decydujące o losach trofeum 
              starcie pokaże bowiem CANAL+, ale także telewizja Polska. W przypadku tej drugiej w grę wchodzą:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Kanały TVP 1 i TVP Sport</li>
              <li>Strona TVPSPORT.PL</li>
              <li>Aplikacja mobilna, Smart TV i HbbTV</li>
            </ul>
            <p>
              Jeśli ktoś zaś ktoś preferuje oglądanie wydarzeń sportowych w kinowych warunkach, należy wspomnieć, 
              że także będzie to możliwe – dzięki współpracy CANAL+ z Multikinem.
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
