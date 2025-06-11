
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const MatchStatistics = () => {
  const stats = [
    { label: 'Posiadanie piłki (%)', inter: 48, psg: 52 },
    { label: 'Strzały na bramkę', inter: 6, psg: 8 },
    { label: 'Strzały celne', inter: 3, psg: 5 },
    { label: 'Rzuty rożne', inter: 7, psg: 9 },
    { label: 'Faule', inter: 12, psg: 15 },
    { label: 'Spalone', inter: 2, psg: 4 }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001c58] mb-8 text-center font-rubik">
          Przewidywane Statystyki
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Porównanie podczas meczu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium w-16 text-center">{stat.inter}</span>
                      <span className="text-sm font-medium flex-1 text-center">{stat.label}</span>
                      <span className="text-sm font-medium w-16 text-center">{stat.psg}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 text-xs text-center font-medium">Inter</div>
                      <div className="flex-1 flex">
                        <Progress 
                          value={stat.inter / (stat.inter + stat.psg) * 100} 
                          className="flex-1 h-3 bg-gray-200 [&>div]:bg-blue-600"
                        />
                        <Progress 
                          value={stat.psg / (stat.inter + stat.psg) * 100} 
                          className="flex-1 h-3 bg-gray-200 [&>div]:bg-red-600"
                        />
                      </div>
                      <div className="w-16 text-xs text-center font-medium">PSG</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Kluczowi zawodnicy - Inter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      10
                    </div>
                    <div>
                      <p className="font-medium">Lautaro Martínez</p>
                      <p className="text-sm text-gray-600">8 goli w UCL</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      9
                    </div>
                    <div>
                      <p className="font-medium">Marcus Thuram</p>
                      <p className="text-sm text-gray-600">7 goli w UCL</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      23
                    </div>
                    <div>
                      <p className="font-medium">Nicolò Barella</p>
                      <p className="text-sm text-gray-600">4 asysty w UCL</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Kluczowi zawodnicy - PSG</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      7
                    </div>
                    <div>
                      <p className="font-medium">Kylian Mbappé</p>
                      <p className="text-sm text-gray-600">12 goli w UCL</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      10
                    </div>
                    <div>
                      <p className="font-medium">Ousmane Dembélé</p>
                      <p className="text-sm text-gray-600">6 asyst w UCL</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      9
                    </div>
                    <div>
                      <p className="font-medium">Gonçalo Ramos</p>
                      <p className="text-sm text-gray-600">5 goli w UCL</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStatistics;
