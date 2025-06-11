
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, Target } from 'lucide-react';

const MatchPrediction = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001c58] mb-8 text-center font-rubik">
          Analiza i Prognoza
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="w-8 h-8 mx-auto text-[#001c58] mb-2" />
              <CardTitle className="text-[#001c58]">Forma</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Inter (ostatnie 5)</h4>
                <div className="flex justify-center space-x-1">
                  {['W', 'W', 'D', 'W', 'W'].map((result, i) => (
                    <span
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        result === 'W' ? 'bg-green-500' : result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">PSG (ostatnie 5)</h4>
                <div className="flex justify-center space-x-1">
                  {['W', 'W', 'W', 'L', 'W'].map((result, i) => (
                    <span
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        result === 'W' ? 'bg-green-500' : result === 'D' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="w-8 h-8 mx-auto text-[#001c58] mb-2" />
              <CardTitle className="text-[#001c58]">Kluczowe statystyki</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Średnia bramek (Inter)</span>
                  <span className="font-bold">2.1</span>
                </div>
                <div className="flex justify-between">
                  <span>Średnia bramek (PSG)</span>
                  <span className="font-bold">2.4</span>
                </div>
                <div className="flex justify-between">
                  <span>Czyste konta (Inter)</span>
                  <span className="font-bold">65%</span>
                </div>
                <div className="flex justify-between">
                  <span>Czyste konta (PSG)</span>
                  <span className="font-bold">58%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="w-8 h-8 mx-auto text-[#001c58] mb-2" />
              <CardTitle className="text-[#001c58]">Nasza prognoza</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001c58] mb-2">2-1</div>
              <p className="text-sm text-gray-600 mb-4">Zwycięstwo PSG</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Prawdopodobieństwo</span>
                  <span className="font-bold">38%</span>
                </div>
                <div className="flex justify-between">
                  <span>Pewność</span>
                  <span className="font-bold text-green-600">Wysoka</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#001c58] mb-4">Analiza ekspertów</h3>
            <p className="mb-4">
              Finał Ligi Mistrzów 2025 zapowiada się jako starcie dwóch różnych filozofii gry. 
              Inter Mediolan stawia na solidną defensywę i skuteczne kontrataki, podczas gdy PSG 
              preferuje ofensywną grę z wysokim pressem.
            </p>
            <p className="mb-4">
              Kluczowym czynnikiem będzie forma Kyliana Mbappé, który w tym sezonie Ligi Mistrzów 
              strzelił już 12 goli. Po stronie Interu największą groźbę stanowi duet Lautaro Martínez - 
              Marcus Thuram, który w Champions League zdobył łącznie 15 bramek.
            </p>
            <p>
              Oczekujemy emocjonującego spotkania z co najmniej 3 golami, gdzie doświadczenie Interu 
              w europejskich pucharach zmierzy się z głodem sukcesu PSG.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MatchPrediction;
