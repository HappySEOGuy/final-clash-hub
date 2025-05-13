
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SuperbetNavbar = () => {
  return (
    <div className="bg-white shadow-subtle border-b border-superbet-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-superbet-navy font-rubik">
              kodybukmacherskie.pl
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-gray-600 hover:text-superbet-blue transition-colors font-inter">
              Strona główna
            </Link>
            <Link to="/promocje" className="font-medium text-gray-600 hover:text-superbet-blue transition-colors font-inter">
              Promocje
            </Link>
            <Link to="/kody" className="font-medium text-gray-600 hover:text-superbet-blue transition-colors font-inter">
              Kody bukmacherskie
            </Link>
            <Link to="/kody-promocyjne" className="font-medium text-superbet-blue transition-colors font-inter">
              Kody Promocyjne
            </Link>
            <Link to="/bukmacherzy" className="font-medium text-gray-600 hover:text-superbet-blue transition-colors font-inter">
              Bukmacherzy
            </Link>
            <Link to="/opinie" className="font-medium text-gray-600 hover:text-superbet-blue transition-colors font-inter">
              Opinie
            </Link>
          </div>
          
          <Button className="bg-superbet-red hover:bg-superbet-red/90 text-white font-medium transition-colors rounded-lg">
            Najlepsze oferty
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuperbetNavbar;
