
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Gift, Star, Users } from 'lucide-react';

const SuperbetReviewsOverview = () => {
  const pros = [
    "Duża liczba promocji",
    "Transmisje live",
    "Szeroka oferta sportów",
    "Aplikacja mobilna",
    "Szybkie wypłaty"
  ];

  const cons = [
    "Wysoka marża na niektóre rynki",
    "Ograniczone statystyki live",
    "Brak cashout na wszystkie rynki"
  ];

  const bonuses = [
    { title: "Cashback", amount: "do 3500 zł", description: "Zwrot w pierwszym tygodniu" },
    { title: "Freebet", amount: "200 zł", description: "Za pierwszą wpłatę" },
    { title: "Extra bonus", amount: "35 zł", description: "Z kodem KODVIPA" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 -mt-20 relative z-10">
      {/* Plusy i Minusy */}
      <Card className="p-6 shadow-card bg-white">
        <h3 className="text-xl font-bold text-superbet-navy mb-4 font-rubik">Plusy i minusy</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-green-700 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Zalety
            </h4>
            <ul className="space-y-2">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-700 mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Wady
            </h4>
            <ul className="space-y-2">
              {cons.map((con, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Widget opinii */}
      <Card className="p-6 shadow-card bg-white">
        <h3 className="text-xl font-bold text-superbet-navy mb-4 font-rubik">Wasze opinie</h3>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-superbet-red mb-2">111</div>
          <div className="text-sm text-gray-600 mb-4">aktywnych recenzji</div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 font-bold">4.9/5</span>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>5 gwiazdek</span>
            <span className="text-gray-600">89%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>4 gwiazdki</span>
            <span className="text-gray-600">8%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>3 gwiazdki</span>
            <span className="text-gray-600">2%</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          Dodaj swoją recenzję
        </Button>
      </Card>

      {/* Bonusy */}
      <Card className="p-6 shadow-card bg-white">
        <h3 className="text-xl font-bold text-superbet-navy mb-4 font-rubik">Aktualne bonusy</h3>
        <div className="space-y-4">
          {bonuses.map((bonus, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-5 h-5 text-superbet-red" />
                <div>
                  <div className="font-bold text-superbet-navy">{bonus.title}</div>
                  <div className="text-sm text-gray-600">{bonus.description}</div>
                </div>
              </div>
              <div className="text-lg font-bold text-superbet-red">{bonus.amount}</div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4 bg-superbet-red hover:bg-superbet-red/90 text-white">
          Odbierz bonus
        </Button>
      </Card>
    </div>
  );
};

export default SuperbetReviewsOverview;
