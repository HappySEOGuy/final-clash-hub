
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Percent, Gift, Star, Ticket } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const SuperbetPromoCode = () => {
  return (
    <div className="py-14 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Main promo */}
          <div className="w-full md:w-2/3">
            <Card className="overflow-hidden shadow-lg">
              <div className="bg-[#001c58] p-6 text-white">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">Kod promocyjny Superbet</h1>
                  <div className="bg-white text-[#001c58] font-bold py-2 px-4 rounded-md">SUPERBET</div>
                </div>
                <p className="mt-4 text-lg">
                  Aktualny kod promocyjny dla nowych graczy. Najlepsze bonusy na start!
                </p>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-lg">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[#001c58] text-white p-2 rounded-full">
                      <Gift size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Kod promocyjny</p>
                      <p className="text-2xl font-bold">KODVIPA</p>
                    </div>
                  </div>
                  <Button 
                    className="bg-[#001c58] hover:bg-[#0a2b6b] text-white font-bold"
                    onClick={() => navigator.clipboard.writeText('KODVIPA')}
                  >
                    Kopiuj kod
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Co zyskujesz z kodem KODVIPA?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-[#001c58]/10 p-2 rounded-full mt-1">
                        <Star className="text-[#001c58]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Cashback do 3500 PLN</p>
                        <p className="text-gray-600">Zwrot zakładów w pierwszym tygodniu po rejestracji</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#001c58]/10 p-2 rounded-full mt-1">
                        <Ticket className="text-[#001c58]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Freebet 200 PLN</p>
                        <p className="text-gray-600">Darmowy zakład od pierwszej wpłaty</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#001c58]/10 p-2 rounded-full mt-1">
                        <Gift className="text-[#001c58]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Freebet 35 PLN</p>
                        <p className="text-gray-600">Za pierwszy depozyt min. 50 PLN</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#001c58]/10 p-2 rounded-full mt-1">
                        <Gift className="text-[#001c58]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Freebet 20 PLN</p>
                        <p className="text-gray-600">Za pobranie aplikacji mobilnej</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-[#d92121] hover:bg-[#c51c1c] text-white py-6 font-bold text-lg">
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
            <Card className="mb-6 shadow-md">
              <div className="bg-[#001c58] p-4 text-white">
                <h2 className="text-xl font-bold">Jak skorzystać z kodu?</h2>
              </div>
              <div className="p-4">
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Kliknij przycisk "Odbierz bonus"</li>
                  <li>Zarejestruj konto w Superbet</li>
                  <li>Wpisz kod promocyjny <span className="font-bold">KODVIPA</span> podczas rejestracji</li>
                  <li>Wpłać minimum 50 zł</li>
                  <li>Ciesz się bonusami powitalnymi</li>
                </ol>
              </div>
            </Card>

            <Card className="shadow-md">
              <div className="bg-[#001c58] p-4 text-white">
                <h2 className="text-xl font-bold">Aktualne promocje Superbet</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Percent className="text-[#d92121]" size={20} />
                    <div>
                      <p className="font-medium">Bonus bez ryzyka</p>
                      <p className="text-sm text-gray-600">Zwrot do 200 zł</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Percent className="text-[#d92121]" size={20} />
                    <div>
                      <p className="font-medium">Cashback Liga Mistrzów</p>
                      <p className="text-sm text-gray-600">Do 100 zł zwrotu</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center gap-3">
                    <Percent className="text-[#d92121]" size={20} />
                    <div>
                      <p className="font-medium">Happy Hours</p>
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
          <h2 className="text-2xl font-bold mb-6">Szczegóły bonusu Superbet</h2>
          <Tabs defaultValue="cashback" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="cashback">Cashback 3500 PLN</TabsTrigger>
              <TabsTrigger value="freebet">Freebet 200 PLN</TabsTrigger>
              <TabsTrigger value="app">Bonus za aplikację</TabsTrigger>
            </TabsList>

            <TabsContent value="cashback" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Cashback do 3500 PLN</h3>
              <p className="mb-4">Bukmacher Superbet oferuje nowym graczom, którzy rejestrują się z kodem promocyjnym KODVIPA, możliwość uzyskania cashbacku do 3500 PLN.</p>
              
              <h4 className="text-lg font-medium mt-5 mb-2">Zasady promocji:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Promocja dotyczy pierwszego tygodnia po rejestracji</li>
                <li>Otrzymujesz zwrot postawionych zakładów do kwoty 3500 PLN</li>
                <li>Minimalna stawka zakładu: 2 PLN</li>
                <li>Minimalny kurs zakładu: 1.50</li>
                <li>Czas na wykorzystanie bonusu: 30 dni od przyznania</li>
                <li>Wymagany jednokrotny obrót środkami bonusowymi</li>
              </ul>
            </TabsContent>

            <TabsContent value="freebet" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Freebet 200 PLN</h3>
              <p className="mb-4">W ramach pakietu powitalnego, Superbet oferuje freebet w wysokości do 200 PLN przy pierwszej wpłacie.</p>
              
              <h4 className="text-lg font-medium mt-5 mb-2">Zasady promocji:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimalna wpłata: 50 PLN</li>
                <li>Otrzymujesz freebet w wysokości 100% pierwszej wpłaty do 200 PLN</li>
                <li>Freebet zostaje przyznany w ciągu 48 godzin od wpłaty</li>
                <li>Czas na wykorzystanie freebetu: 7 dni od przyznania</li>
                <li>Wymagania obrotu: brak (wyplata wygranej bez obrotu)</li>
              </ul>
            </TabsContent>

            <TabsContent value="app" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Bonus za aplikację 20 PLN</h3>
              <p className="mb-4">Superbet nagradza graczy, którzy pobiorą i zalogują się do aplikacji mobilnej, bonusem 20 PLN.</p>
              
              <h4 className="text-lg font-medium mt-5 mb-2">Zasady promocji:</h4>
              <ul className="list-disc pl-6 space-y-2">
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
