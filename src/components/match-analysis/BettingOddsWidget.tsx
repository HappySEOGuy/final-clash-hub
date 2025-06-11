
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BettingOddsWidget = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001c58] mb-8 text-center font-rubik">
          Kursy Bukmacherskie
        </h2>

        <Tabs defaultValue="match-result" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="match-result">Wynik</TabsTrigger>
            <TabsTrigger value="goals">Bramki</TabsTrigger>
            <TabsTrigger value="players">Strzelcy</TabsTrigger>
            <TabsTrigger value="specials">Specjalne</TabsTrigger>
          </TabsList>

          <TabsContent value="match-result">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">1X2 (90 minut)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="flex flex-col p-4 h-auto">
                      <span className="text-sm font-medium mb-1">Inter</span>
                      <span className="text-xl font-bold text-[#001c58]">3.20</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col p-4 h-auto">
                      <span className="text-sm font-medium mb-1">Remis</span>
                      <span className="text-xl font-bold text-[#001c58]">3.35</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col p-4 h-auto">
                      <span className="text-sm font-medium mb-1">PSG</span>
                      <span className="text-xl font-bold text-[#001c58]">2.25</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Awans do finału</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="flex flex-col p-4 h-auto">
                      <span className="text-sm font-medium mb-1">Inter</span>
                      <span className="text-xl font-bold text-[#001c58]">2.22</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col p-4 h-auto">
                      <span className="text-sm font-medium mb-1">PSG</span>
                      <span className="text-xl font-bold text-[#001c58]">1.66</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Liczba bramek</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Powyżej 2.5</span>
                      <span className="font-bold">1.90</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Poniżej 2.5</span>
                      <span className="font-bold">1.85</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Powyżej 3.5</span>
                      <span className="font-bold">3.20</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Obie strzelą</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="flex flex-col p-4 h-auto">
                      <span className="text-sm font-medium mb-1">Tak</span>
                      <span className="text-xl font-bold text-[#001c58]">1.75</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col p-4 h-auto">
                      <span className="text-sm font-medium mb-1">Nie</span>
                      <span className="text-xl font-bold text-[#001c58]">2.05</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Pierwsza bramka</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Inter strzeli pierwsza</span>
                      <span className="font-bold">2.40</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>PSG strzeli pierwsza</span>
                      <span className="font-bold">1.95</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="players">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Pierwszy strzelec - Inter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Lautaro Martínez</span>
                      <span className="font-bold">5.50</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Marcus Thuram</span>
                      <span className="font-bold">6.00</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Mehdi Taremi</span>
                      <span className="font-bold">7.00</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Henrikh Mkhitaryan</span>
                      <span className="font-bold">12.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Pierwszy strzelec - PSG</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Kylian Mbappé</span>
                      <span className="font-bold">4.50</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Gonçalo Ramos</span>
                      <span className="font-bold">6.50</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Ousmane Dembélé</span>
                      <span className="font-bold">8.00</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-100 rounded">
                      <span>Bradley Barcola</span>
                      <span className="font-bold">9.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="specials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-sm">Dogrywka</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-100 rounded">
                      <div className="text-sm">Tak</div>
                      <div className="font-bold">3.25</div>
                    </div>
                    <div className="text-center p-3 bg-gray-100 rounded">
                      <div className="text-sm">Nie</div>
                      <div className="font-bold">1.30</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-sm">Rzuty karne</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-100 rounded">
                      <div className="text-sm">Tak</div>
                      <div className="font-bold">5.50</div>
                    </div>
                    <div className="text-center p-3 bg-gray-100 rounded">
                      <div className="text-sm">Nie</div>
                      <div className="font-bold">1.15</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-sm">Czerwona kartka</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gray-100 rounded">
                      <div className="text-sm">Tak</div>
                      <div className="font-bold">4.20</div>
                    </div>
                    <div className="text-center p-3 bg-gray-100 rounded">
                      <div className="text-sm">Nie</div>
                      <div className="font-bold">1.18</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BettingOddsWidget;
