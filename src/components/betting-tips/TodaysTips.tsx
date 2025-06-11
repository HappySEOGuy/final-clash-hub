
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Users } from 'lucide-react';

const TodaysTips = () => {
  const todaysTips = [
    {
      id: 1,
      match: 'Manchester City vs Arsenal',
      league: 'Premier League',
      time: '18:30',
      tip: 'Obie drużyny strzelą',
      odds: '1.85',
      confidence: 'Wysoka',
      analysis: 'Oba zespoły prezentują ofensywną grę w ostatnich meczach'
    },
    {
      id: 2,
      match: 'PSG vs Inter Milan',
      league: 'Liga Mistrzów',
      time: '21:00',
      tip: 'Poniżej 2.5 gola',
      odds: '2.10',
      confidence: 'Średnia',
      analysis: 'Defensywne nastawienie obu drużyn w fazie pucharowej'
    },
    {
      id: 3,
      match: 'Real Madrid vs Barcelona',
      league: 'La Liga',
      time: '16:15',
      tip: 'Real Madrid wygra',
      odds: '2.45',
      confidence: 'Wysoka',
      analysis: 'Real ma lepszy bilans w ostatnich El Clasico'
    }
  ];

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'Wysoka': return 'bg-green-100 text-green-800';
      case 'Średnia': return 'bg-yellow-100 text-yellow-800';
      case 'Niska': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#001c58] font-rubik">
            Dzisiejsze Typy
          </h2>
          <div className="text-sm text-gray-500 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Aktualizowano: 12.05.2025, 14:30
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {todaysTips.map((tip) => (
            <Card key={tip.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#001c58] to-[#1652b3] text-white p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">
                      {tip.league}
                    </span>
                    <span className="text-sm font-medium">{tip.time}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{tip.match}</h3>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-[#001c58] mr-2" />
                      <span className="font-semibold text-[#001c58]">{tip.tip}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#001c58]">{tip.odds}</div>
                      <div className="text-xs text-gray-500">kurs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getConfidenceColor(tip.confidence)}`}>
                      Pewność: {tip.confidence}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      23 typerów
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{tip.analysis}</p>
                  
                  <Button className="w-full bg-[#001c58] hover:bg-[#0a2b6b] text-white">
                    Zobacz pełną analizę
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaysTips;
