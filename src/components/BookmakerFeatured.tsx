
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BookmakerFeatured = () => {
  const bonuses = [
    {
      name: 'STS',
      shortcode: 'ST',
      color: '#1652b3',
      textColor: '#fff',
      description: 'Zakład bez ryzyka do 100 zł ze zwrotem na konto główne + 800 zł od trzech pierwszych wpłat'
    },
    {
      name: 'Superbet',
      shortcode: 'Su',
      color: '#d92121',
      textColor: '#fff',
      description: '3500 zł tydzień bez ryzyka + 200 zł od depozytu + 35 zł freebet + 20 zł aplikacja'
    },
    {
      name: 'Fortuna',
      shortcode: 'Fo',
      color: '#fccc00',
      textColor: '#000',
      description: '100 zł zakład bez ryzyka (zwrot na konto główne) + freebety 245 zł + 300 zł więcej'
    },
    {
      name: 'Betclic',
      shortcode: 'Be',
      color: '#00a563',
      textColor: '#fff',
      description: '50 zł bez ryzyka (zwrot na konto bonusowe) + GRA BEZ PODATKU!'
    },
    {
      name: 'Betfan',
      shortcode: 'Be',
      color: '#00a563',
      textColor: '#fff',
      description: 'Bonus 200% do 600 zł od 1. depozytu = POTROJENIE wpłaty!'
    },
    {
      name: 'Fuksiarz',
      shortcode: 'Fu',
      color: '#d92121',
      textColor: '#fff',
      description: 'Bonus od depozytu 1200 PLN + 100 PLN we freebetach!'
    }
  ];

  return (
    <div className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#001c58] mb-10 border-l-4 border-[#001c58] pl-4">
          Bonusy bukmacherskie
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-5 flex items-center gap-4">
                <div 
                  className="h-14 w-14 flex items-center justify-center rounded-md text-xl font-bold"
                  style={{ backgroundColor: bonus.color, color: bonus.textColor }}
                >
                  {bonus.shortcode}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-1 text-slate-800">{bonus.name}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{bonus.description}</p>
                </div>
                <Button 
                  className="min-w-[40px] h-10 w-10 flex items-center justify-center rounded-full p-0 bg-[#001c58] hover:bg-[#0a2b6b] text-white"
                  aria-label={`View details about ${bonus.name}`}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 max-w-4xl mx-auto">
            18+. Tylko dla osób pełnoletnich. Oferujemy legalne zakłady bukmacherskie. 
            Gra u nielegalnych bukmacherów jest zabroniona i grozi konsekwencjami prawnymi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmakerFeatured;
