
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Gift, Star, Users, User, Award } from 'lucide-react';

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

  const categories = [
    { name: "Bonus powitalny", rating: 4.5 },
    { name: "Oferta wydarzeń", rating: 4.5 },
    { name: "Aplikacja mobilna", rating: 5 },
    { name: "Kursy bukmacherskie", rating: 4.5 },
    { name: "Zakłady live", rating: 4.5 }
  ];

  const bonuses = [
    { title: "Kod promocyjny:", code: "SBVIP", description: "" },
    { title: "Freebet od depozytu:", code: "0 35 PLN", description: "" },
    { title: "Bonus od 1. wpłaty:", code: "100% do 200 zł", description: "" },
    { title: "Za pobranie aplikacji:", code: "Freebet 20 zł", description: "" },
    { title: "Cashback:", code: "Zwrot do 3500 zł", description: "" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 -mt-20 relative z-10">
      {/* Main content area - takes up most space */}
      <div className="lg:col-span-8">
        {/* Top section with rating and categories */}
        <Card className="p-6 shadow-card bg-white mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left side - Rating */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-superbet-red text-white px-4 py-2 rounded font-bold text-lg">
                  SUPERBET
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-bold text-superbet-navy mb-1">
                  Nasza ocena: <span className="text-superbet-red">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">
                  Legalny bukmacher działający na licencji o numerze PS4.6831.4.2017.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2">
                Sprawdź kod →
              </Button>
            </div>

            {/* Right side - Category ratings */}
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{category.name}</span>
                  <span className="font-bold text-superbet-navy">{category.rating}/5</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Navigation tabs */}
        <div className="flex gap-6 mb-6 border-b border-gray-200">
          <button className="text-green-600 border-b-2 border-green-600 pb-2 font-medium">
            Oferta powitalna
          </button>
          <button className="text-gray-600 pb-2 hover:text-superbet-navy">
            Plusy
          </button>
          <button className="text-gray-600 pb-2 hover:text-superbet-navy">
            Minusy
          </button>
          <button className="text-gray-600 pb-2 hover:text-superbet-navy">
            Wasze opinie (111)
          </button>
          <button className="text-gray-600 pb-2 hover:text-superbet-navy">
            Informacje ogólne
          </button>
        </div>

        {/* Bonus offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm text-gray-700">{bonus.title}</div>
                <div className="font-bold text-superbet-navy">{bonus.code}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded">
            ODBIERZ FREEBET 35 ZŁ
          </Button>
        </div>
      </div>

      {/* Right sidebar - Author */}
      <div className="lg:col-span-4">
        <Card className="p-6 shadow-card bg-white">
          <h3 className="text-lg font-bold text-superbet-navy mb-4">Autor</h3>
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <h4 className="font-bold text-green-600 text-lg">Mikołaj Wiśniowski</h4>
              <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                <span className="font-medium">4.5/5</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Pisarz i redaktor treści na portalu legalnibukmacherzy.pl i ekspert, działający w branży od 4 lat. Dba o jakość wszystkich publikowanych treści na portalu od artykułów bonusowych przez promocyjne aż do codziennych typów. Zajmuje się też wdrażaniem nowych produktów i jest zaangażowany w prowadzenie konkursów pojawiających się na stronie. Jest fanem żużla, o którym pisał m.in. na łamach Przeglądu Sportowego i Tygodnika Żużlowego. Jest to też jego główna dyscyplina typerska. Drugą jest piłka nożna, w której jest fanem Liverpoolu oraz całej Premier League.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SuperbetReviewsOverview;
