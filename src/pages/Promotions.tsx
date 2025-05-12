
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
            <h1 className="text-3xl font-bold text-center">Promocje Bukmacherskie</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Ekskluzywne oferty na finał Ligi Mistrzów od czołowych bukmacherów. Skorzystaj z tych specjalnych promocji na wielki mecz.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Promocje bukmacherskie na finał Ligi Mistrzów 2025</h2>
            <p className="mb-4">
              Promocje na finał Ligi Mistrzów to doskonała okazja, by zwiększyć emocje podczas obstawiania meczu PSG – Inter. 
              Mecze półfinałowe, zwłaszcza rewanże, dostarczają niezapomnianych emocji, gdyż to właśnie one decydują o awansie do finału. 
              Bukmacherzy prześcigają się w ofertach, które przyciągają zarówno nowych, jak i doświadczonych graczy.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Najciekawsze promocje bukmacherskie na PSG – Inter:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <span className="font-medium">STS:</span> Największy polski bukmacher oferuje swoim nowym graczom zakład bez ryzyka o wartości 100 zł, 
                który można wykorzystać do obstawienia francusko-włoskiego starcia.
              </li>
              <li>
                <span className="font-medium">Fortuna:</span> ten bukmacher także posiada w swojej ofercie zakład bez ryzyka o wartości 100 zł. 
                Co jednak najważniejsze, zwróconymi środkami w razie ewentualnego niepowodzenia nie trzeba w jakikolwiek sposób obracać!
              </li>
              <li>
                <span className="font-medium">Superbet:</span> jeszcze większą kwotę cashbacku swoim nowym graczom ma do zaproponowania Superbet. 
                Dołączając do szerokiego grona jego klientów, można otrzymać aż do 3500 zł cashbacku po pierwszym tygodniu korzystania z jego usług!
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Gdzie obstawić finał Ligi Mistrzów z bonusem?</h2>
            <p className="mb-4">
              Aby w pełni wykorzystać Promocje na Finał Ligi Mistrzów, warto wybrać renomowanych bukmacherów, 
              takich jak STS, Fortuna, Superbet. Proces jest prosty:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Zarejestruj się na stronie bukmachera, podając kod promocyjny: KODVIPA.</li>
              <li>Wpłać wymagany depozyt, np. 50 zł.</li>
              <li>Postaw zakład na finał Ligi Mistrzów 2025, typując wynik lub inne wydarzenie – zależnie od promocji.</li>
              <li>Odbierz bonus po spełnieniu warunków promocji.</li>
            </ol>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Bilety na finał Ligi Mistrzów</h2>
            <p className="mb-4">
              Bilety na finał Ligi Mistrzów to marzenie każdego kibica. Nadchodzący sezon Ligi Mistrzów UEFA 2024/2025 
              rozpocznie się w 2024 roku i zakończy finałem, zaplanowanym na 31 maja 2025 roku.
            </p>
            <p className="mb-4">
              Ceny biletów na Finał Ligi Mistrzów w Monachium zaczynają się od 70 euro dla kibiców klubowych, 
              ale miejsca w lepszych sektorach kosztują nawet 960 euro.
            </p>
            <p className="text-sm text-gray-600 italic">
              Ważne: Jeżeli ktoś nie zarejestrował się do 11 kwietnia do godz. 11 czasu środkowoeuropejskiego, 
              nie może w tej chwili ubiegać się o bilet.
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
