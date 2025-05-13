
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Percent, Gift, Star, Ticket } from 'lucide-react';

const SuperbetPromoCode = () => {
  return (
    <div className="py-14 bg-promo-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Main promo */}
          <div className="w-full md:w-2/3">
            <Card className="overflow-hidden shadow-card rounded-xl">
              <div className="bg-white p-6 border-b border-promo-lightGray">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-promo-navy">Kod promocyjny Superbet</h1>
                  <div className="bg-promo-navy text-white font-bold py-2 px-4 rounded-md">SUPERBET</div>
                </div>
                <p className="mt-4 text-lg text-gray-600">
                  Aktualny kod promocyjny dla nowych graczy. Najlepsze bonusy na start!
                </p>
              </div>

              <div className="p-8 bg-white text-gray-700">
                <div className="flex items-center justify-between mb-8 bg-subtle-blue p-6 rounded-lg border border-blue-100">
                  <div className="flex gap-4 items-center">
                    <div className="bg-promo-blue text-white p-3 rounded-full">
                      <Gift size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Kod promocyjny</p>
                      <p className="text-2xl font-bold text-promo-navy">KODVIPA</p>
                    </div>
                  </div>
                  <Button 
                    className="bg-promo-purple hover:bg-promo-sapphire text-white font-bold transition-colors"
                    onClick={() => navigator.clipboard.writeText('KODVIPA')}
                  >
                    Kopiuj kod
                  </Button>
                </div>

                <div className="border-t border-promo-lightGray pt-8 mt-8">
                  <h2 className="text-2xl font-semibold mb-6 text-promo-navy">Co zyskujesz z kodem KODVIPA?</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full mt-1">
                        <Star className="text-promo-sapphire" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Cashback do 3500 PLN</p>
                        <p className="text-gray-600">Zwrot zakładów w pierwszym tygodniu po rejestracji</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full mt-1">
                        <Ticket className="text-promo-sapphire" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Freebet 200 PLN</p>
                        <p className="text-gray-600">Darmowy zakład od pierwszej wpłaty</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full mt-1">
                        <Gift className="text-promo-sapphire" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Freebet 35 PLN</p>
                        <p className="text-gray-600">Za pierwszy depozyt min. 50 PLN</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-50 p-3 rounded-full mt-1">
                        <Gift className="text-promo-sapphire" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Freebet 20 PLN</p>
                        <p className="text-gray-600">Za pobranie aplikacji mobilnej</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 text-center max-w-md mx-auto">
                  <Button className="w-full bg-promo-navy hover:bg-promo-blue text-white py-3 px-8 font-bold text-lg rounded-lg">
                    ODBIERZ BONUS 3755 ZŁ
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    18+. Graj odpowiedzialnie. Obowiązuje regulamin.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right side - Additional info */}
          <div className="w-full md:w-1/3">
            <Card className="mb-6 shadow-card rounded-xl bg-white">
              <div className="border-b border-promo-lightGray p-5">
                <h2 className="text-xl font-bold text-promo-navy">Jak skorzystać z kodu?</h2>
              </div>
              <div className="p-5">
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  <li>Kliknij przycisk "Odbierz bonus"</li>
                  <li>Zarejestruj konto w Superbet</li>
                  <li>Wpisz kod promocyjny <span className="font-bold text-promo-navy">KODVIPA</span> podczas rejestracji</li>
                  <li>Wpłać minimum 50 zł</li>
                  <li>Ciesz się bonusami powitalnymi</li>
                </ol>
              </div>
            </Card>

            <Card className="shadow-card rounded-xl bg-white">
              <div className="border-b border-promo-lightGray p-5">
                <h2 className="text-xl font-bold text-promo-navy">Aktualne promocje Superbet</h2>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-subtle-purple p-4 rounded-md border border-purple-100">
                  <div className="flex items-center gap-3">
                    <Percent className="text-promo-purple" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Bonus bez ryzyka</p>
                      <p className="text-sm text-gray-600">Zwrot do 200 zł</p>
                    </div>
                  </div>
                </div>
                <div className="bg-subtle-purple p-4 rounded-md border border-purple-100">
                  <div className="flex items-center gap-3">
                    <Percent className="text-promo-purple" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Cashback Liga Mistrzów</p>
                      <p className="text-sm text-gray-600">Do 100 zł zwrotu</p>
                    </div>
                  </div>
                </div>
                <div className="bg-subtle-purple p-4 rounded-md border border-purple-100">
                  <div className="flex items-center gap-3">
                    <Percent className="text-promo-purple" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Happy Hours</p>
                      <p className="text-sm text-gray-600">Podwójne punkty w aplikacji</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bonus details tabs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-promo-navy">Szczegóły bonusu Superbet</h2>
          <Tabs defaultValue="cashback" className="w-full">
            <TabsList className="mb-6 bg-promo-background border-b border-promo-lightGray w-full justify-start">
              <TabsTrigger 
                value="cashback" 
                className="rounded-t-lg data-[state=active]:bg-white data-[state=active]:text-promo-navy data-[state=active]:border-b-0 data-[state=active]:border-t-2 data-[state=active]:border-t-promo-blue"
              >
                Cashback 3500 PLN
              </TabsTrigger>
              <TabsTrigger 
                value="freebet" 
                className="rounded-t-lg data-[state=active]:bg-white data-[state=active]:text-promo-navy data-[state=active]:border-b-0 data-[state=active]:border-t-2 data-[state=active]:border-t-promo-blue"
              >
                Freebet 200 PLN
              </TabsTrigger>
              <TabsTrigger 
                value="app" 
                className="rounded-t-lg data-[state=active]:bg-white data-[state=active]:text-promo-navy data-[state=active]:border-b-0 data-[state=active]:border-t-2 data-[state=active]:border-t-promo-blue"
              >
                Bonus za aplikację
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cashback" className="bg-white p-6 rounded-lg shadow-card border border-promo-lightGray">
              <h3 className="text-xl font-semibold mb-3 text-promo-navy">Cashback do 3500 PLN</h3>
              <p className="mb-4 text-gray-700">Bukmacher Superbet oferuje nowym graczom, którzy rejestrują się z kodem promocyjnym KODVIPA, możliwość uzyskania cashbacku do 3500 PLN.</p>
              
              <h4 className="text-lg font-medium mt-5 mb-2 text-gray-800">Zasady promocji:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Promocja dotyczy pierwszego tygodnia po rejestracji</li>
                <li>Otrzymujesz zwrot postawionych zakładów do kwoty 3500 PLN</li>
                <li>Minimalna stawka zakładu: 2 PLN</li>
                <li>Minimalny kurs zakładu: 1.50</li>
                <li>Czas na wykorzystanie bonusu: 30 dni od przyznania</li>
                <li>Wymagany jednokrotny obrót środkami bonusowymi</li>
              </ul>
            </TabsContent>

            <TabsContent value="freebet" className="bg-white p-6 rounded-lg shadow-card border border-promo-lightGray">
              <h3 className="text-xl font-semibold mb-3 text-promo-navy">Freebet 200 PLN</h3>
              <p className="mb-4 text-gray-700">W ramach pakietu powitalnego, Superbet oferuje freebet w wysokości do 200 PLN przy pierwszej wpłacie.</p>
              
              <h4 className="text-lg font-medium mt-5 mb-2 text-gray-800">Zasady promocji:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Minimalna wpłata: 50 PLN</li>
                <li>Otrzymujesz freebet w wysokości 100% pierwszej wpłaty do 200 PLN</li>
                <li>Freebet zostaje przyznany w ciągu 48 godzin od wpłaty</li>
                <li>Czas na wykorzystanie freebetu: 7 dni od przyznania</li>
                <li>Wymagania obrotu: brak (wyplata wygranej bez obrotu)</li>
              </ul>
            </TabsContent>

            <TabsContent value="app" className="bg-white p-6 rounded-lg shadow-card border border-promo-lightGray">
              <h3 className="text-xl font-semibold mb-3 text-promo-navy">Bonus za aplikację 20 PLN</h3>
              <p className="mb-4 text-gray-700">Superbet nagradza graczy, którzy pobiorą i zalogują się do aplikacji mobilnej, bonusem 20 PLN.</p>
              
              <h4 className="text-lg font-medium mt-5 mb-2 text-gray-800">Zasady promocji:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Pobierz aplikację Superbet na urządzenie mobilne</li>
                <li>Zaloguj się do swojego konta w aplikacji</li>
                <li>Otrzymaj freebet 20 PLN w ciągu 24 godzin</li>
                <li>Czas na wykorzystanie freebetu: 7 dni od przyznania</li>
                <li>Minimalny kurs zakładu z freebetem: 2.00</li>
                <li>Brak wymogu obrotu wygranej z freebetu</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SuperbetPromoCode;
