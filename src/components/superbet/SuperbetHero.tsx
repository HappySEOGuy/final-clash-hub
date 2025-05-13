
import React from 'react';
import { Button } from '@/components/ui/button';

const SuperbetHero = () => {
  return (
    <div className="bg-uefa-gradient py-20 px-4 relative">
      <div className="container mx-auto text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-rubik">
            Kod promocyjny Superbet
          </h1>
          <p className="text-xl text-white/90 mb-8 font-inter">
            Zgarnij najlepszy bonus powitalny i graj z przewagą
          </p>
          
          <Button 
            className="bg-superbet-red hover:bg-superbet-red/90 text-white font-bold py-3 px-8 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            ODBIERZ DO 3500 ZŁ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuperbetHero;
