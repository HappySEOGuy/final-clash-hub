
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
            Betting Odds
          </h2>
          <Euro className="text-ucl-gold ml-2 h-6 w-6" />
        </div>

        <Tabs defaultValue="match-result" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="match-result">Match Result</TabsTrigger>
            <TabsTrigger value="goalscorers">Goalscorers</TabsTrigger>
            <TabsTrigger value="specials">Specials</TabsTrigger>
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
