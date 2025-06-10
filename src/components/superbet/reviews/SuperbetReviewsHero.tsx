
import React from 'react';
import { Star, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuperbetReviewsHero = () => {
  return (
    <div className="bg-uefa-gradient py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-rubik">
            SUPERBET OPINIE
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/90 text-sm mb-6">
            <span>• Zaktualizowano 11 lutego 2025, 13:28</span>
            <span>• 22 minut czytania</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperbetReviewsHero;
