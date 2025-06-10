
import React from 'react';
import { Star, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuperbetReviewsHero = () => {
  return (
    <div className="bg-uefa-gradient py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-superbet-red">SUPERBET</div>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold">4.9/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Legalny bukmacher, licencja PS4.6831.4.2017</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-rubik">
              Recenzja Superbet
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Jeden z TOP 3 najlepszych legalnych bukmacherów w Polsce. 
              Sprawdź szczegółową recenzję i aktualne bonusy.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="bg-superbet-red hover:bg-superbet-red/90 text-white font-bold px-8 py-3">
              Zarejestruj się teraz
            </Button>
            <div className="text-center text-white/80 text-sm">
              Bonus powitalny do 3755 zł
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperbetReviewsHero;
