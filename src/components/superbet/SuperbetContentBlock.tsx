
import React from 'react';
import { Card } from '@/components/ui/card';

const SuperbetContentBlock = () => {
  return (
    <div className="my-10" id="content-section">
      <Card className="overflow-hidden shadow-card rounded-xl bg-white">
        <div className="p-6 border-b border-superbet-lightGray">
          <h2 className="text-2xl font-bold text-superbet-navy font-rubik">Jak działają kody promocyjne Superbet?</h2>
        </div>
        <div className="p-8 bg-white text-gray-700">
          <div className="prose max-w-none font-inter">
            <p className="mb-4">
              Kody promocyjne Superbet to specjalne sekwencje znaków, które pozwalają graczom na otrzymanie dodatkowych bonusów 
              przy rejestracji konta. Działają one na bardzo prostej zasadzie:
            </p>
            
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                <span className="font-medium">Znajdź odpowiedni kod</span> - na naszej stronie znajdziesz zawsze aktualne 
                i sprawdzone kody promocyjne do Superbet.
              </li>
              <li>
                <span className="font-medium">Wpisz kod podczas rejestracji</span> - przy zakładaniu konta u bukmachera 
                znajdziesz specjalne pole na wpisanie kodu promocyjnego KODVIPA.
              </li>
              <li>
                <span className="font-medium">Odbierz bonusy</span> - po zarejestrowaniu się z kodem promocyjnym, należy 
                zazwyczaj dokonać pierwszej wpłaty, aby aktywować swoje bonusy.
              </li>
            </ol>
            
            <div className="bg-[#f0f9f1] border-l-4 border-superbet-red p-4 my-6">
              <p className="text-sm font-medium">
                Dzięki współpracy z Superbet możemy zaoferować naszym czytelnikom ekskluzywne kody promocyjne, 
                które nie są dostępne na innych stronach. Oznacza to, że korzystając z naszych kodów, możesz liczyć 
                na wyższe bonusy i lepsze oferty!
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4 font-rubik">Dlaczego warto korzystać z kodów promocyjnych Superbet?</h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Wyższe bonusy na start - nawet do 3755 zł</li>
              <li>Dodatkowe freebety, których nie otrzymasz bez kodu</li>
              <li>Specjalne oferty i promocje dostępne tylko dla graczy z kodem KODVIPA</li>
              <li>Możliwość gry bez podatku przez określony czas</li>
              <li>Lepsze warunki obrotu bonusami</li>
            </ul>
            
            <p className="mb-4">
              Wszystkie promocje opisane na naszej stronie dotyczą legalnego bukmachera Superbet działającego w Polsce 
              na podstawie licencji wydanej przez Ministerstwo Finansów.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SuperbetContentBlock;
