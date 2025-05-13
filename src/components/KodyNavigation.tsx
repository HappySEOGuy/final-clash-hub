
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const KodyNavigation = () => {
  return (
    <div className="bg-navy-dark shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              kodybukmacherskie.pl
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-white hover:text-white/80">
              Strona główna
            </Link>
            <Link to="/promocje" className="font-medium text-white hover:text-white/80">
              Promocje
            </Link>
            <Link to="/kody" className="font-medium text-white hover:text-white/80">
              Kody bukmacherskie
            </Link>
            <Link to="/kody-promocyjne" className="font-medium text-white hover:text-white/80">
              Kody Promocyjne
            </Link>
            <Link to="/bukmacherzy" className="font-medium text-white hover:text-white/80">
              Bukmacherzy
            </Link>
            <Link to="/opinie" className="font-medium text-white hover:text-white/80">
              Opinie
            </Link>
          </div>
          
          <Button className="bg-navy-bright hover:bg-navy-bright/90 text-white font-bold">
            Najlepsze oferty
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KodyNavigation;
