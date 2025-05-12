import React from 'react';
import { Button } from '@/components/ui/button';

const TopBookmakers = () => {
  const bookmakers = [
    {
      name: 'FUKSIARZ',
      logo: 'fuksiarz',
      color: '#d92121',
      bonus: '1060 ZŁ',
      benefits: [
        'Zakład bez ryzyka do 1000 zł w gotówce bez obrotu',
        'Freebet 10 zł w aplikacji za weryfikację konta',
        'Kolejny Freebet 50 zł za postawienie kuponu w aplikacji'
      ],
      code: 'KOD AKTYWNY'
    },
    {
      name: 'SUPERBET',
      logo: 'superbet',
      color: '#d92121',
      bonus: '3755 ZŁ',
      benefits: [
        'Freebet od pierwszej wpłaty do 200 PLN',
        'Cashback do 3500 PLN',
        'Freebet 35 PLN za pierwszy depozyt min. 50 PLN',
        'Freebet 20 PLN za pobranie aplikacji'
      ],
      code: 'KODVIPA'
    },
    {
      name: 'LVBET',
      logo: 'lvbet',
      color: '#fccc00',
      bonus: '2115 ZŁ',
      benefits: [
        'Bonus przy pierwszym depozycie – 500 zł.',
        'Bonus przy drugim depozycie – 600 zł.',
        'Bonus przy trzecim depozycie – 900 zł.',
        'Dodatkowy bonus po rejestracji z naszym kodem – 25 zł.',
        'Cashback na aplikację mobilną bukmachera – 20 zł.',
        'Bonus na sporty wirtualne – 20 zł.',
        'Bonus za karnet Piasta Gliwice, Lechii Gdańsk bądź Śląska Wrocław – 50 zł.',
        'Gra bez podatku przez 45 dni.'
      ],
      code: 'KODVIPA'
    }
  ];

  return (
    <div className="bg-white py-14" id="ranking">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-slate-800">
          TOP 3 BUKMACHERÓW
        </h2>
        
        <div className="space-y-6">
          {bookmakers.map((bookmaker, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div 
                  className="p-6 text-center md:w-1/4 flex justify-center items-center"
                  style={{ backgroundColor: bookmaker.color }}
                >
                  <div className="text-white">
                    <div className="font-bold text-2xl mb-2">{bookmaker.name}</div>
                    <a href="#opinions" className="inline-flex items-center text-white font-medium hover:underline">
                      OPINIE
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="md:flex-grow p-4 bg-white flex flex-col md:flex-row">
                  <div className="md:w-1/4 border-b md:border-b-0 md:border-r border-slate-200 p-4 flex flex-col justify-center items-center md:items-start">
                    <div className="text-sm text-slate-600 font-medium">BONUS</div>
                    <div className="text-4xl font-bold text-[#001c58]">{bookmaker.bonus}</div>
                  </div>
                  
                  <div className="flex-grow p-4 md:pl-8">
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      {bookmaker.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm md:text-base">{benefit}</li>
                      ))}
                    </ul>
                    
                    <div className="text-xs text-slate-500 mt-2">
                      18+. Tylko dla osób pełnoletnich. Oferujemy legalne zakłady bukmacherskie. 
                      Gra u nielegalnych bukmacherów jest zabroniona i grozi konsekwencjami prawnymi.
                    </div>
                  </div>
                  
                  <div className="md:w-1/4 p-4 flex flex-col space-y-4 items-center justify-center">
                    <Button className="w-full bg-[#001c58] hover:bg-[#0a2b6b] text-white font-bold">
                      ODBIERZ BONUS
                    </Button>
                    <div className="w-full px-4 py-2 border-2 border-dashed border-slate-300 text-center rounded-md text-slate-600 font-medium">
                      {bookmaker.code}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBookmakers;
