
import React from 'react';
import { Button } from '@/components/ui/button';

const SuperbetReviewsNavbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-superbet-navy font-rubik">
              kodybukmacherskie.pl
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
              <span>Recenzje</span>
              <span>/</span>
              <span className="text-superbet-red font-medium">Superbet</span>
            </div>
          </div>
          <Button className="bg-superbet-red hover:bg-superbet-red/90 text-white">
            Sprawdź kod promocyjny
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default SuperbetReviewsNavbar;
