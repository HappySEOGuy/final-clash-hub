
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BettingTipsCalendar = () => {
  const dates = [
    '12.05.2025',
    '13.05.2025',
    '14.05.2025', 
    '15.05.2025',
    '16.05.2025',
    '17.05.2025'
  ];
  
  const matches = [
    {
      teams: 'Atalanta vs. AS Roma',
      date: '(12.05.2025)',
      subtitle: 'Typy, Kursy i Analiza Meczu',
      dayInfo: 'poniedziałek, 12 maja 2025'
    },
    {
      teams: 'Wisła Płock vs. Arka Gdynia',
      date: '(12.05.2025)',
      subtitle: 'Typy, Kursy i Analiza Meczu',
      dayInfo: 'poniedziałek, 12 maja 2025'
    }
  ];

  return (
    <div className="bg-slate-50 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-slate-800">
          Typy i analizy bukmacherskie
        </h2>
        
        <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-4">
          <Button 
            className="rounded-full bg-[#20c063] hover:bg-[#18a14f] text-white min-w-[120px]"
          >
            {dates[0]}
          </Button>
          
          {dates.slice(1).map((date, index) => (
            <Button 
              key={index}
              variant="outline" 
              className="rounded-full text-slate-700 min-w-[120px]"
            >
              {date}
            </Button>
          ))}
          
          <Button className="rounded-full p-2" variant="outline">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
        
        <div className="space-y-6">
          {matches.map((match, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6">
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      {match.teams} {match.date} - {match.subtitle}
                    </h3>
                    <p className="text-slate-500 text-sm">{match.dayInfo}</p>
                  </div>
                  <Button 
                    className="mt-4 md:mt-0 bg-[#20c063] hover:bg-[#18a14f] text-white"
                  >
                    Zobacz więcej
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-[#20c063] hover:bg-[#18a14f] text-white">
            Wszystkie typy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BettingTipsCalendar;
