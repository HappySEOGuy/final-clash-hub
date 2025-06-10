
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Trophy, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuperbetReviewsComparison = () => {
  const competitors = [
    {
      name: "Superbet",
      rating: 4.9,
      bonus: "3755 zł",
      pros: ["Najlepsze promocje", "Transmisje live", "Szybkie wypłaty"],
      rank: 1,
      featured: true
    },
    {
      name: "Fortuna",
      rating: 4.7,
      bonus: "3000 zł", 
      pros: ["Duże doświadczenie", "Szeroka oferta", "Stabilność"],
      rank: 2,
      featured: false
    },
    {
      name: "STS",
      rating: 4.6,
      bonus: "2400 zł",
      pros: ["Polski operator", "Lokalne promocje", "Dobra obsługa"],
      rank: 3,
      featured: false
    }
  ];

  return (
    <Card className="p-6 shadow-card bg-white mb-10">
      <h3 className="text-xl font-bold text-superbet-navy mb-6 font-rubik">
        Porównanie z konkurencją
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competitors.map((bookmaker, index) => (
          <div 
            key={index} 
            className={`border rounded-lg p-4 ${bookmaker.featured ? 'border-superbet-red bg-red-50' : 'border-gray-200'}`}
          >
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                {bookmaker.rank === 1 && <Crown className="w-5 h-5 text-yellow-500" />}
                {bookmaker.rank === 2 && <Trophy className="w-5 h-5 text-gray-400" />}
                {bookmaker.rank === 3 && <Trophy className="w-5 h-5 text-orange-400" />}
                <span className="text-sm font-medium text-gray-600">#{bookmaker.rank}</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{bookmaker.name}</h4>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{bookmaker.rating}</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Bonus do <span className="font-bold text-superbet-red">{bookmaker.bonus}</span>
              </div>
            </div>
            
            <ul className="space-y-2 mb-4">
              {bookmaker.pros.map((pro, proIndex) => (
                <li key={proIndex} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {pro}
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full ${bookmaker.featured ? 'bg-superbet-red hover:bg-superbet-red/90 text-white' : 'bg-gray-600 hover:bg-gray-700 text-white'}`}
            >
              {bookmaker.featured ? 'Wybierz najlepszego' : 'Sprawdź ofertę'}
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-4">
          Porównanie oparte na kryteriach: kursy, promocje, funkcjonalność, obsługa klienta
        </p>
        <Button variant="outline">
          Zobacz pełne porównanie
        </Button>
      </div>
    </Card>
  );
};

export default SuperbetReviewsComparison;
