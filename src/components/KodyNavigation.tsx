
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const KodyNavigation = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#20c063]">
              kodybukmacherskie.pl
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-slate-700 hover:text-[#20c063]">
              Strona główna
            </Link>
            <Link to="/promocje" className="font-medium text-slate-700 hover:text-[#20c063]">
              Promocje
            </Link>
            <Link to="/kody" className="font-medium text-slate-700 hover:text-[#20c063]">
              Kody bukmacherskie
            </Link>
            <Link to="/bukmacherzy" className="font-medium text-slate-700 hover:text-[#20c063]">
              Bukmacherzy
            </Link>
            <Link to="/opinie" className="font-medium text-slate-700 hover:text-[#20c063]">
              Opinie
            </Link>
          </div>
          
          <Button className="bg-[#20c063] hover:bg-[#18a14f] text-white">
            Najlepsze oferty
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KodyNavigation;
