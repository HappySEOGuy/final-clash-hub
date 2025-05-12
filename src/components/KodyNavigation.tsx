
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const KodyNavigation = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#001c58]">
              kodybukmacherskie.pl
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-slate-700 hover:text-[#001c58]">
              Strona główna
            </Link>
            <Link to="/promocje" className="font-medium text-slate-700 hover:text-[#001c58]">
              Promocje
            </Link>
            <Link to="/kody" className="font-medium text-slate-700 hover:text-[#001c58]">
              Kody bukmacherskie
            </Link>
            <Link to="/bukmacherzy" className="font-medium text-slate-700 hover:text-[#001c58]">
              Bukmacherzy
            </Link>
            <Link to="/opinie" className="font-medium text-slate-700 hover:text-[#001c58]">
              Opinie
            </Link>
          </div>
          
          <Button className="bg-[#001c58] hover:bg-[#0a2b6b] text-white">
            Najlepsze oferty
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KodyNavigation;
