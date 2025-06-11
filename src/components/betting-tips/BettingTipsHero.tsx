
import React from 'react';
import { TrendingUp, Calendar, Target } from 'lucide-react';

const BettingTipsHero = () => {
  return (
    <div className="bg-uefa-gradient py-20 px-4 relative">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-rubik">
            Typy Bukmacherskie
          </h1>
          <p className="text-xl text-white/90 mb-8 font-inter">
            Profesjonalne analizy, statystyki i typy na najważniejsze mecze
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-superbet-gold" />
              <h3 className="font-bold mb-2">Wysokie kursy</h3>
              <p className="text-sm text-white/80">Najlepsze wartości na rynku</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-superbet-gold" />
              <h3 className="font-bold mb-2">Codzienne typy</h3>
              <p className="text-sm text-white/80">Świeże analizy każdego dnia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Target className="w-8 h-8 mx-auto mb-3 text-superbet-gold" />
              <h3 className="font-bold mb-2">Eksperckie analizy</h3>
              <p className="text-sm text-white/80">Dogłębne statystyki i prognozy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingTipsHero;
