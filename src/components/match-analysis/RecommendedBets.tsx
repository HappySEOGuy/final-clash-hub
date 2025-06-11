
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp, Shield } from 'lucide-react';

const RecommendedBets = () => {
  const recommendedBets = [
    {
      id: 1,
      title: 'PSG wygra lub remis (1X)',
      odds: '1.55',
      confidence: 'Wysoka',
      reasoning: 'PSG pokazało lepszą formę w półfinałach. Solidny wybór na bezpieczny typ.',
      icon: Shield,
      color: 'text-green-600'
    },
    {
      id: 2,
      title: 'Powyżej 2.5 gola',
      odds: '1.90',
      confidence: 'Średnia',
      reasoning: 'Oba zespoły mają silne ataki. Spodziewamy się otwartego meczu.',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Obie drużyny strzelą',
      odds: '1.75',
      confidence: 'Wysoka',
      reasoning: 'Inter i PSG mają jakość w ataku. Trudno o czyste konto w finale.',
      icon: Star,
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001c58] mb-8 text-center font-rubik">
          Polecane Typy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recommendedBets.map((bet) => {
            const IconComponent = bet.icon;
            return (
              <Card key={bet.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <IconComponent className={`w-8 h-8 mx-auto mb-2 ${bet.color}`} />
                  <CardTitle className="text-lg">{bet.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-[#001c58] mb-2">{bet.odds}</div>
                  <div className={`text-sm font-medium mb-3 ${bet.color}`}>
                    Pewność: {bet.confidence}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{bet.reasoning}</p>
                  <Button className="w-full bg-[#001c58] hover:bg-[#0a2b6b]">
                    Postaw zakład
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-[#001c58] to-[#0a2b6b] text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Triple Combo</h3>
                <p className="text-white/90">PSG wygra + Powyżej 2.5 + BTTS</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-superbet-gold">@7.50</div>
                <Button variant="secondary" className="mt-2">
                  Postaw kombinację
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Pamiętaj: hazard może prowadzić do uzależnienia. Graj odpowiedzialnie.
            <br />
            Minimalna kwota zakładu: 2 PLN | Maksymalna wygrana: 800,000 PLN
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBets;
