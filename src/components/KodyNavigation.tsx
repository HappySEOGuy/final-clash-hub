
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const KodyNavigation = () => {
  return (
    <div className="bg-white shadow-subtle border-b border-promo-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-promo-navy">
              kodybukmacherskie.pl
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-gray-600 hover:text-promo-blue transition-colors">
              Strona główna
            </Link>
            <Link to="/promocje" className="font-medium text-gray-600 hover:text-promo-blue transition-colors">
              Promocje
            </Link>
            <Link to="/kody" className="font-medium text-gray-600 hover:text-promo-blue transition-colors">
              Kody bukmacherskie
            </Link>
            <Link to="/kody-promocyjne" className="font-medium text-promo-blue transition-colors">
              Kody Promocyjne
            </Link>
            <Link to="/bukmacherzy" className="font-medium text-gray-600 hover:text-promo-blue transition-colors">
              Bukmacherzy
            </Link>
            <Link to="/opinie" className="font-medium text-gray-600 hover:text-promo-blue transition-colors">
              Opinie
            </Link>
          </div>
          
          <Button className="bg-promo-purple hover:bg-promo-sapphire text-white font-medium transition-colors rounded-lg">
            Najlepsze oferty
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KodyNavigation;
