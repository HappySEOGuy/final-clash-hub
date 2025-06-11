
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Eye, MessageSquare } from 'lucide-react';

const PopularMatches = () => {
  const popularMatches = [
    {
      id: 1,
      match: 'Liverpool vs Chelsea',
      league: 'Premier League',
      date: '13.05.2025',
      views: 1245,
      comments: 89,
      rating: 4.8,
      tips: [
        { bet: '1X', odds: '1.55' },
        { bet: 'Powyżej 2.5', odds: '1.90' },
        { bet: 'BTTS', odds: '1.75' }
      ]
    },
    {
      id: 2,
      match: 'Juventus vs AC Milan',
      league: 'Serie A',
      date: '14.05.2025',
      views: 967,
      comments: 62,
      rating: 4.6,
      tips: [
        { bet: 'X2', odds: '1.85' },
        { bet: 'Poniżej 2.5', odds: '1.95' },
        { bet: 'Juventus wygra', odds: '2.30' }
      ]
    },
    {
      id: 3,
      match: 'Bayern vs Dortmund',
      league: 'Bundesliga',
      date: '15.05.2025',
      views: 1567,
      comments: 123,
      rating: 4.9,
      tips: [
        { bet: 'Bayern wygra', odds: '1.65' },
        { bet: 'Powyżej 3.5', odds: '2.20' },
        { bet: 'Obie strzelą', odds: '1.60' }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001c58] mb-8 font-rubik">
          Najpopularniejsze Mecze
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {popularMatches.map((match) => (
            <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-white bg-[#001c58] px-2 py-1 rounded">
                      {match.league}
                    </span>
                    <h3 className="font-bold text-lg mt-2 text-[#001c58]">{match.match}</h3>
                    <p className="text-sm text-gray-500">{match.date}</p>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm font-medium">{match.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-[#001c58]">Polecane typy:</h4>
                  <div className="space-y-2">
                    {match.tips.map((tip, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm font-medium">{tip.bet}</span>
                        <span className="font-bold text-[#001c58]">{tip.odds}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {match.views} wyświetleń
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {match.comments} komentarzy
                  </div>
                </div>

                <Button className="w-full bg-[#001c58] hover:bg-[#0a2b6b] text-white">
                  Zobacz szczegółową analizę
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-[#001c58] text-[#001c58] hover:bg-[#001c58] hover:text-white">
            Zobacz wszystkie mecze
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularMatches;
