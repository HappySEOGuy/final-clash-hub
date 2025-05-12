
import React from 'react';
import { Card } from '@/components/ui/card';

const KodyHeader = () => {
  return (
    <div className="bg-[#001c58] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-white">KODY</span> <br className="md:hidden" />
              BUKMACHERSKIE
            </h1>
            <p className="text-lg md:text-xl max-w-xl text-white">
              Aktualne <span className="font-bold">kody promocyjne, bonusy powitalne</span> i najciekawsze 
              oferty od legalnych bukmacherów w Polsce. Codziennie 
              przeglądamy rynek, by dostarczać Ci najbardziej opłacalne okazje.
              Sprawdź, co możesz zyskać już na start.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#ranking" className="flex items-center text-white hover:underline font-semibold">
                <span>Ranking bukmacherów</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#kody" className="flex items-center text-white hover:underline font-semibold">
                <span>Kody bukmacherskie</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#opinie" className="flex items-center text-white hover:underline font-semibold">
                <span>Opinie o bukmacherach</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              {['totalbet', 'fuksiarz', 'betclic', 'sts', 'kio', 'fortuna', 'lvbet', 'superbet', 'forbet'].map((bookmaker, index) => (
                <Card key={index} className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-md transform hover:scale-105 transition-transform" 
                  style={{ 
                    backgroundColor: getBookmakerColor(bookmaker),
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}
                >
                  {bookmaker.toUpperCase()}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to assign colors to bookmakers
function getBookmakerColor(bookmaker: string): string {
  const colors: Record<string, string> = {
    'totalbet': '#000000',
    'fuksiarz': '#d92121',
    'betclic': '#d92121',
    'sts': '#1652b3',
    'kio': '#20c063',
    'fortuna': '#fccc00',
    'lvbet': '#fccc00',
    'superbet': '#d92121',
    'forbet': '#0e1f52',
  };
  
  return colors[bookmaker] || '#333333';
}

export default KodyHeader;
