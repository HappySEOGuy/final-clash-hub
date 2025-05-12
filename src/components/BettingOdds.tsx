
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Euro } from "lucide-react";

const BettingOdds = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Euro className="text-ucl-gold mr-2 h-6 w-6" />
          <h2 className="text-3xl font-bold text-center text-ucl-blue">
            Kursy Bukmacherskie
          </h2>
          <Euro className="text-ucl-gold ml-2 h-6 w-6" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Liga Mistrzów finał 2025: kursy na PSG – Inter</h3>
          <p className="mb-4">
            Liga Mistrzów Finał Kursy na PSG – Inter wskazują, że bukmacherzy widzą lekką przewagę PSG, czekające na swój pierwszy raz, jeśli chodzi o triumf w LM. Oto przykładowe kursy z oferty Superbet na wynik w regulaminowym czasie gry:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>PSG: 2.25</li>
            <li>Remis w regulaminowym czasie gry: 3.35</li>
            <li>Inter: 3.20 (28% szans na zwycięstwo)</li>
          </ul>
          <p className="mb-4">
            Warto zauważyć, że finały Ligi Mistrzów często kończą się emocjonującymi wynikami, takimi jak 3:2, co podkreśla nieprzewidywalność i dramatyzm tych spotkań.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Kursy na zwycięstwo w finale (uwzględniając dogrywkę i karne):</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>PSG: 1.66</li>
            <li>Inter: 2.22</li>
          </ul>
          
          <p className="mb-4">
            Kursy na finał Ligi Mistrzów PSG – Inter sugerują, że PSG jest faworytem dzięki swojej ofensywnej sile, ale Inter może zaskoczyć dzięki dyscyplinie taktycznej.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Typy Bukmacherskie na PSG – Inter</h3>
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

        <Tabs defaultValue="match-result" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="match-result">Wynik Meczu</TabsTrigger>
            <TabsTrigger value="goalscorers">Strzelcy</TabsTrigger>
            <TabsTrigger value="specials">Specjalne</TabsTrigger>
          </TabsList>
          
          {/* Match Result Odds */}
          <TabsContent value="match-result">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">90 Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Bet365", inter: 2.50, draw: 3.40, psg: 2.70 },
                      { name: "Paddy Power", inter: 2.55, draw: 3.30, psg: 2.75 },
                      { name: "William Hill", inter: 2.45, draw: 3.50, psg: 2.65 },
                      { name: "Betfair", inter: 2.60, draw: 3.25, psg: 2.80 },
                      { name: "888sport", inter: 2.50, draw: 3.40, psg: 2.75 }
                    ].map((bookmaker, idx) => (
                      <div key={idx} className="col-span-3 grid grid-cols-4 items-center py-2 border-b last:border-0">
                        <div className="font-medium">{bookmaker.name}</div>
                        <div className="bg-gray-100 rounded text-center py-1 cursor-pointer hover:bg-gray-200 transition-colors">
                          {bookmaker.inter}
                        </div>
                        <div className="bg-gray-100 rounded text-center py-1 cursor-pointer hover:bg-gray-200 transition-colors">
                          {bookmaker.draw}
                        </div>
                        <div className="bg-gray-100 rounded text-center py-1 cursor-pointer hover:bg-gray-200 transition-colors">
                          {bookmaker.psg}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">To Lift The Trophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Bet365", inter: 1.85, psg: 1.95 },
                      { name: "Paddy Power", inter: 1.80, psg: 2.00 },
                      { name: "William Hill", inter: 1.85, psg: 1.95 },
                      { name: "Betfair", inter: 1.90, psg: 1.90 },
                      { name: "888sport", inter: 1.85, psg: 1.95 }
                    ].map((bookmaker, idx) => (
                      <div key={idx} className="col-span-3 grid grid-cols-3 items-center py-2 border-b last:border-0">
                        <div className="font-medium">{bookmaker.name}</div>
                        <div className="bg-gray-100 rounded text-center py-1 cursor-pointer hover:bg-gray-200 transition-colors">
                          {bookmaker.inter}
                        </div>
                        <div className="bg-gray-100 rounded text-center py-1 cursor-pointer hover:bg-gray-200 transition-colors">
                          {bookmaker.psg}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Goalscorer Odds */}
          <TabsContent value="goalscorers">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">First Goalscorer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-center">Inter Milan</h4>
                    <div className="space-y-2">
                      {[
                        { player: "Lautaro Martínez", odds: 5.50 },
                        { player: "Marcus Thuram", odds: 6.00 },
                        { player: "Mehdi Taremi", odds: 7.00 },
                        { player: "Henrikh Mkhitaryan", odds: 12.00 },
                        { player: "Nicolò Barella", odds: 15.00 }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between py-1 border-b">
                          <span>{item.player}</span>
                          <span className="font-medium bg-gray-100 px-2 rounded">{item.odds}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-center">PSG</h4>
                    <div className="space-y-2">
                      {[
                        { player: "Kylian Mbappé", odds: 4.50 },
                        { player: "Gonçalo Ramos", odds: 6.50 },
                        { player: "Ousmane Dembélé", odds: 8.00 },
                        { player: "Bradley Barcola", odds: 9.00 },
                        { player: "Lee Kang-in", odds: 15.00 }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between py-1 border-b">
                          <span>{item.player}</span>
                          <span className="font-medium bg-gray-100 px-2 rounded">{item.odds}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Special Bets */}
          <TabsContent value="specials">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Special Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Both Teams To Score</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">Yes</div>
                        <div className="text-lg">1.80</div>
                      </div>
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">No</div>
                        <div className="text-lg">2.00</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Over/Under 2.5 Goals</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">Over</div>
                        <div className="text-lg">1.95</div>
                      </div>
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">Under</div>
                        <div className="text-lg">1.85</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Match To Go To Extra Time</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">Yes</div>
                        <div className="text-lg">3.25</div>
                      </div>
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">No</div>
                        <div className="text-lg">1.30</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Match To Go To Penalties</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">Yes</div>
                        <div className="text-lg">5.50</div>
                      </div>
                      <div className="bg-gray-100 rounded p-3 text-center">
                        <div className="font-medium">No</div>
                        <div className="text-lg">1.15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BettingOdds;
