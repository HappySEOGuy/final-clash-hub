
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const BookmakerFeatured = () => {
  const features = [
    { id: 'sports', name: 'Sporty', active: true },
    { id: 'casino', name: 'Kasyno', active: false },
    { id: 'virtuals', name: 'Sporty wirtualne', active: false },
    { id: 'poker', name: 'Poker', active: false },
  ];
  
  const bookmakers = [
    {
      name: 'STS',
      description: 'Polski lider zakładów bukmacherskich',
      rating: 4.8,
      bonus: '760 zł',
      specialOffer: 'Bez podatku',
      color: '#1652b3',
      prosCons: {
        pros: ['Najszerszy wybór zakładów', 'Wysokie kursy', 'Świetna aplikacja mobilna'],
        cons: ['Wymagany dokument tożsamości', 'Minimalny depozyt 10 zł']
      }
    },
    {
      name: 'Superbet',
      description: 'Bukmacher z najlepszymi promocjami',
      rating: 4.7,
      bonus: '3755 zł',
      specialOffer: 'Cashback',
      color: '#d92121',
      prosCons: {
        pros: ['Wysoki bonus powitalny', 'Regularne promocje', 'Szybkie wypłaty'],
        cons: ['Mniej popularnych lig', 'Skomplikowany interfejs']
      }
    },
    {
      name: 'Fortuna',
      description: 'Najstarszy polski bukmacher',
      rating: 4.5,
      bonus: '375 zł',
      specialOffer: 'Darmowe zakłady',
      color: '#fccc00',
      prosCons: {
        pros: ['Stabilność i doświadczenie', 'Szeroki wybór metod płatności', 'Korzystne kursy'],
        cons: ['Mniej nowości', 'Przeciętna aplikacja']
      }
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl font-bold text-[#001c58] mb-6 text-center">
            Najwyżej oceniani bukmacherzy
          </h2>
          <p className="text-center max-w-2xl text-slate-600 mb-8">
            Sprawdź naszych rekomendowanych bukmacherów z najwyższymi ocenami użytkowników i najlepszymi ofertami powitalnymi.
          </p>
          
          <div className="border border-slate-200 rounded-full p-1 bg-slate-50">
            <ToggleGroup type="single" defaultValue="sports" className="flex">
              {features.map((feature) => (
                <ToggleGroupItem 
                  key={feature.id} 
                  value={feature.id}
                  className={`rounded-full px-4 py-2 ${feature.id === 'sports' ? 'bg-[#001c58] text-white' : 'bg-transparent text-slate-700'}`}
                >
                  {feature.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bookmakers.map((bookmaker, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div 
                    className="text-xl font-bold rounded-full px-4 py-1.5"
                    style={{
                      backgroundColor: bookmaker.color,
                      color: bookmaker.color === '#fccc00' ? '#000' : '#fff'
                    }}
                  >
                    {bookmaker.name}
                  </div>
                  <div className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 font-bold">{bookmaker.rating}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">{bookmaker.description}</p>
                
                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-slate-500 mb-1">Oferta powitalna</div>
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-[#001c58]">{bookmaker.bonus}</div>
                    <div className="bg-[#001c58] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {bookmaker.specialOffer}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-[#001c58] mb-2">Zalety</h4>
                    <ul className="space-y-1">
                      {bookmaker.prosCons.pros.map((pro, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#001c58] mb-2">Wady</h4>
                    <ul className="space-y-1">
                      {bookmaker.prosCons.cons.map((con, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#001c58] hover:bg-[#0a2b6b] text-white rounded-full"
                >
                  Zarejestruj się
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookmakerFeatured;
