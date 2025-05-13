
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Award, Zap } from 'lucide-react';

const SuperbetPromotions = () => {
  const promotions = [
    {
      icon: <Zap size={24} />,
      title: "SuperPrzewaga",
      description: "Jeśli Twoja drużyna będzie miała dwie bramki przewagi - wygrywasz!",
      color: "bg-subtle-purple"
    },
    {
      icon: <Award size={24} />,
      title: "Wybory Prezydenckie",
      description: "400 zł za poprawne wytypowanie wyborów",
      color: "bg-subtle-blue"
    },
    {
      icon: <Gift size={24} />,
      title: "Extra Freebet",
      description: "O wartości 35 zł z kodem KODVIPA",
      color: "bg-subtle-purple"
    }
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-superbet-navy mb-6 font-rubik">Aktualne promocje Superbet</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
          <Card key={index} className="shadow-card bg-white overflow-hidden">
            <div className={`p-6 ${promo.color} border-b border-superbet-lightGray`}>
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  {promo.icon}
                </div>
                <h3 className="font-bold text-superbet-navy font-rubik">{promo.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-6 text-gray-600 font-inter">{promo.description}</p>
              <Button className="w-full bg-superbet-red hover:bg-superbet-red/90 text-white">
                Zgarnij ofertę
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuperbetPromotions;
