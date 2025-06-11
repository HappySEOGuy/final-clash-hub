
import React from 'react';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MatchHeader = () => {
  return (
    <div className="bg-uefa-gradient py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-superbet-gold mr-2" />
            <span className="text-white font-semibold text-lg">Liga Mistrzów - Finał</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-rubik">
            Inter Mediolan vs PSG
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>31 maja 2025, 21:00</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Allianz Arena, Monachium</span>
            </div>
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/512px-FC_Internazionale_Milano_2021.svg.png"
                alt="Inter Milan"
                className="h-24 w-24 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold text-white">Inter Mediolan</h3>
              <p className="text-white/80">Serie A</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-superbet-gold mb-2">VS</div>
              <p className="text-white font-medium">Finał Ligi Mistrzów</p>
            </div>
            
            <div className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/512px-Paris_Saint-Germain_F.C..svg.png"
                alt="PSG"
                className="h-24 w-24 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold text-white">Paris Saint-Germain</h3>
              <p className="text-white/80">Ligue 1</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MatchHeader;
