
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const KodyNavigation = () => {
  return (
    <div className="bg-uefa-navy shadow-lg border-b border-uefa-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              kodybukmacherskie.pl
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-uefa-gray hover:text-white transition-colors">
              Strona główna
            </Link>
            <Link to="/promocje" className="font-medium text-uefa-gray hover:text-white transition-colors">
              Promocje
            </Link>
            <Link to="/kody" className="font-medium text-uefa-gray hover:text-white transition-colors">
              Kody bukmacherskie
            </Link>
            <Link to="/kody-promocyjne" className="font-medium text-white hover:text-uefa-electric transition-colors">
              Kody Promocyjne
            </Link>
            <Link to="/bukmacherzy" className="font-medium text-uefa-gray hover:text-white transition-colors">
              Bukmacherzy
            </Link>
            <Link to="/opinie" className="font-medium text-uefa-gray hover:text-white transition-colors">
              Opinie
            </Link>
          </div>
          
          <Button className="bg-uefa-purple hover:bg-uefa-electric text-white font-bold transition-colors">
            Najlepsze oferty
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KodyNavigation;
