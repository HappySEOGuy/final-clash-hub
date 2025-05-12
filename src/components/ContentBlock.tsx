
import React from 'react';

const ContentBlock = () => {
  return (
    <div className="bg-slate-50 py-14">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Jak działają kody promocyjne bukmacherów?</h2>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Kody promocyjne to specjalne sekwencje znaków (liter i cyfr), które pozwalają graczom na otrzymanie dodatkowych bonusów 
              przy rejestracji u bukmachera. Działają one na bardzo prostej zasadzie:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                <span className="font-medium">Znajdź odpowiedni kod</span> - na naszej stronie znajdziesz zawsze aktualne 
                i sprawdzone kody promocyjne do wszystkich legalnych bukmacherów w Polsce.
              </li>
              <li>
                <span className="font-medium">Wpisz kod podczas rejestracji</span> - przy zakładaniu konta u bukmachera 
                znajdziesz specjalne pole na wpisanie kodu promocyjnego. Zazwyczaj znajduje się ono na ostatnim etapie 
                rejestracji i jest dobrze widoczne.
              </li>
              <li>
                <span className="font-medium">Odbierz bonusy</span> - po zarejestrowaniu się z kodem promocyjnym, należy 
                zazwyczaj dokonać pierwszej wpłaty, aby aktywować swoje bonusy. W niektórych przypadkach bonus jest 
                przyznawany od razu po rejestracji.
              </li>
            </ol>
            
            <p className="mb-4">
              Pamiętaj, że kody promocyjne mają ograniczoną ważność, dlatego warto na bieżąco sprawdzać naszą stronę. 
              Dodatkowo, każdy bukmacher ma swoje własne warunki obrotu bonusami, które należy spełnić, aby móc wypłacić 
              wygrane zdobyte za ich pomocą.
            </p>
            
            <div className="bg-[#f0f9f1] border-l-4 border-[#20c063] p-4 my-6">
              <p className="text-sm font-medium">
                Dzięki współpracy z bukmacherami możemy zaoferować naszym czytelnikom ekskluzywne kody promocyjne, 
                które nie są dostępne na innych stronach. Oznacza to, że korzystając z naszych kodów, możesz liczyć 
                na wyższe bonusy i lepsze oferty!
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Dlaczego warto korzystać z kodów promocyjnych?</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Wyższe bonusy na start - nawet do 3755 zł u niektórych bukmacherów</li>
              <li>Dodatkowe freebety, których nie otrzymasz bez kodu</li>
              <li>Specjalne oferty i promocje dostępne tylko dla graczy z kodem</li>
              <li>Możliwość gry bez podatku przez określony czas</li>
              <li>Lepsze warunki obrotu bonusami</li>
            </ul>
            
            <p className="mb-4">
              Wszystkie promocje opisane na naszej stronie dotyczą legalnych bukmacherów działających w Polsce 
              na podstawie licencji wydanej przez Ministerstwo Finansów. Pamiętaj, że gra u nielegalnych bukmacherów 
              jest zabroniona i grozi konsekwencjami prawnymi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
