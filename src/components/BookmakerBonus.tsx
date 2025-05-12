
import React from 'react';
import { Button } from '@/components/ui/button';

const BookmakerBonus = () => {
  const bonuses = [
    {
      logo: 'sts',
      color: '#1652b3',
      text: 'Zakład bez ryzyka do 100 zł ze zwrotem na konto główne + 600 zł od trzech depozytów + 60 zł zadania + 200 zł w specjalnej promocji',
    },
    {
      logo: 'superbet',
      color: '#d92121',
      text: '3500 zł tydzień bez ryzyka + 200 zł od depozytu + 35 zł freebet + 20 zł aplikacja mobilna + 400 zł w promocji',
    },
    {
      logo: 'fortuna',
      color: '#fccc00',
      text: '100 zł zakład bez ryzyka (zwrot na konto główne) + freebety 245 zł + 300 zł w promocji',
    },
    {
      logo: 'betclic',
      color: '#d92121',
      text: '50 zł bez ryzyka (zwrot na konto bonusowe) + GRA BEZ PODATKU!',
    },
    {
      logo: 'betfan',
      color: '#20c063',
      text: 'Bonus 200% do 600 zł od 1. depozytu = POTROJENIE wpłaty!',
    },
    {
      logo: 'forbet',
      color: '#0e1f52',
      text: 'Bonusy od depozytu 1200 PLN + 100 PLN we freebet'
    },
  ];

  return (
    <div className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#333333]">
          Bonusy bukmacherskie
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <div 
              key={index} 
              className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex"
              style={{ backgroundColor: bonus.color }}
            >
              <div className="w-20 flex items-center justify-center p-4">
                <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold text-slate-800">
                  {bonus.logo.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="flex-grow p-4 text-white flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm md:text-base mb-4 md:mb-0 md:mr-4 font-medium">
                  {bonus.text}
                </p>
                <Button className="whitespace-nowrap bg-white text-slate-800 hover:bg-slate-100">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Więcej
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookmakerBonus;
