
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
            
            <div className="bg-[#f0f9f1] border-l-4 border-superbet-navy p-4 my-6">
              <p className="text-sm font-medium">
                Dzięki współpracy z Superbet możemy zaoferować naszym czytelnikom ekskluzywne kody promocyjne, 
                które nie są dostępne na innych stronach. Oznacza to, że korzystając z naszych kodów, możesz liczyć 
                na wyższe bonusy i lepsze oferty!
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 font-rubik">Pakiet bonusów Superbet z kodem KODVIPA</h3>
            
            {/* Example table from the screenshot */}
            <div className="overflow-x-auto my-6">
              <Table className="w-full border-collapse">
                <TableHeader className="bg-white">
                  <TableRow className="border border-gray-200">
                    <TableHead className="border border-gray-200 text-center font-medium py-3 px-4 text-gray-800">
                      Kod promocyjny Superbet
                    </TableHead>
                    <TableHead className="border border-gray-200 text-center font-medium py-3 px-4 text-superbet-navy">
                      KODVIPA
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border border-gray-200">
                    <TableCell className="border border-gray-200 py-3 px-4 text-gray-700">
                      Freebet z kodem
                    </TableCell>
                    <TableCell className="border border-gray-200 text-center font-bold py-3 px-4">
                      35 PLN
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-gray-200">
                    <TableCell className="border border-gray-200 py-3 px-4 text-gray-700">
                      Zakład bez ryzyka
                    </TableCell>
                    <TableCell className="border border-gray-200 text-center font-bold py-3 px-4">
                      100 PLN
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-gray-200">
                    <TableCell className="border border-gray-200 py-3 px-4 text-gray-700">
                      Bonus bez depozytu
                    </TableCell>
                    <TableCell className="border border-gray-200 text-center font-bold py-3 px-4">
                      20 PLN
                    </TableCell>
                  </TableRow>
                  <TableRow className="border border-gray-200">
                    <TableCell className="border border-gray-200 py-3 px-4 text-gray-700">
                      Cashback tygodniowy
                    </TableCell>
                    <TableCell className="border border-gray-200 text-center font-bold py-3 px-4">
                      3500 PLN
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <p className="text-center text-gray-600 mb-6">Superbet kod promocyjny – bonusy na start</p>
            
            {/* CTA Button from the screenshot */}
            <div className="flex justify-center my-8">
              <Button className="bg-superbet-navy hover:bg-superbet-navy/90 text-white rounded-full py-3 px-6 text-lg font-medium flex items-center gap-2">
                Zarejestruj się w Superbet
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4 font-rubik">W jakiej kolejności otrzymasz bonusy?</h3>
            
            <p className="mb-4">
              Kwestia kolejności w przypadku Superbet jest dość elastyczna i wiele może zależeć np. od sposobu rejestracji. 
              Jeśli zdecydujesz się na standardową rejestrację, bonusy zostaną przyznane w następującej kolejności:
            </p>
            
            {/* Highlighted bullet points like in the screenshot */}
            <ul className="space-y-6 my-6">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-superbet-navy flex items-center justify-center"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">100 zł zakład bez ryzyka</p>
                  <p className="text-gray-600 text-sm">
                    Bonusy te przyznane zostaną od razu po rejestracji konta. Od momentu przyznania, 
                    będziesz miał 24 godziny na wykorzystanie ich.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-superbet-navy flex items-center justify-center"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Freebet od depozytu 35 PLN</p>
                  <p className="text-gray-600 text-sm">
                    Zostanie przyznany po dokonaniu pierwszej wpłaty, pod warunkiem że zarejestrujesz konto 
                    z kodem promocyjnym. Bonus przyznawany jest we freebecie, który pojawi 
                    się na koncie w ciągu 24h i należy go wykorzystać w ciągu 48h.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-superbet-navy flex items-center justify-center"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Bonus bez depozytu 20 PLN</p>
                  <p className="text-gray-600 text-sm">
                    Bonus przyznawany za przejście pełnej rejestracji, ze zgodami marketingowymi. Można 
                    uzyskać go bezpośrednio po założeniu konta lub po weryfikacji przesłanych 
                    dokumentów. Bonus we freebecie do wykorzystania w ciągu 48h.
                  </p>
                </div>
              </li>
            </ul>
            
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
