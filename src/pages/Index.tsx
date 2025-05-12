
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
          </div>
        </div>
        
        {/* 1. Promotions section - widget and content */}
        <Promotions />
        
        {/* 2. Kursy section - widget and content */}
        <BettingOdds />
        
        {/* 3. Team comparison widget */}
        <TeamComparison />
        
        {/* 4. Typy section */}
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Typy Bukmacherskie na PSG – Inter</h2>
            <p className="mb-4">
              Eksperci przewidują, że Final Ligi Mistrzow 2025 będzie meczem taktycznym, z naciskiem na kontrolę w środku pola. A skoro tak, warto wziąć pod uwagę następujące typy:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <span className="font-medium">Poniżej 2,5 gola:</span> Inter słynie z solidnej defensywy, więc trudno spodziewać się wielu goli w decydującym o losach pucharu spotkaniu.
              </li>
              <li>
                <span className="font-medium">PSG wygra lub remis (1X):</span> piłkarze PSG zaprezentowali się pewniej w półfinałowym dwumeczu z Arsenalem (3:1 w dwumeczu) niż ich rywale na tym samym etapie rozgrywek, w którym ich przeciwnikiem była FC Barcelona. Pierwszy mecz zakończył się remisem 3:3, a rewanżu Włosi zwyciężyli 4:3 w dogrywce.
              </li>
              <li>
                <span className="font-medium">Obie drużyny strzelą (BTTS):</span> Kurs 1.80 (Fortuna). Zarówno PSG, jak i Inter mają zawodników zdolnych do przełamania defensywy rywala. We francuskiej ekipie jest to m.in. Ousamne Dembele, a we włoskiej – Lautaro Martinez.
              </li>
              <li>
                <span className="font-medium">Powyżej 8,5 rzutów rożnych:</span> Kurs 1.65 (Superbet). Oba zespoły grają ofensywnie, co zwiększa szanse na to, że będziemy świadkami wielu dośrodkowań z rogu boiska.
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Pamiętaj przy tym, że promocja Betbuilder – dostępna m.in. w Fortunie – pozwala łączyć typy, np. PSG wygra + poniżej 3,5 gola, co może zwiększyć potencjalną wygraną.
            </p>
          </div>
        </div>
        
        {/* 5. Statistics - content and widget */}
        <Statistics />
        
        {/* 6. Rest of the content in order */}
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="prose max-w-none">
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
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Liga Mistrzów 2025 finał – jak zdobyć bilety?</h2>
            <p className="mb-4">
              Bilety na finał Ligi Mistrzów to marzenie każdego kibica. Nadchodzący sezon Ligi Mistrzów UEFA 2024/2025 rozpocznie się w 2024 roku i zakończy finałem, zaplanowanym na 31 maja 2025 roku.
            </p>
            <p className="mb-4">
              Ceny biletów na Finał Ligi Mistrzów w Monachium zaczynają się od 70 euro dla kibiców klubowych, ale miejsca w lepszych sektorach kosztują nawet 960 euro.
            </p>
            <p className="text-sm text-gray-600 italic">
              Ważne: Jeżeli ktoś nie zarejestrował się do 11 kwietnia do godz. 11 czasu środkowoeuropejskiego, nie może w tej chwili ubiegać się o bilet.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
