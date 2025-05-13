
import React from 'react';
import { Button } from '@/components/ui/button';

const SuperbetFooter = () => {
  return (
    <>
      <div className="sticky bottom-0 bg-superbet-navy py-4 px-4 shadow-lg z-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-white font-medium mb-3 md:mb-0 font-rubik">
            Chcesz zagrać z bonusem?
          </p>
          <Button className="bg-superbet-red hover:bg-superbet-red/90 text-white font-bold">
            Odbierz bonus teraz
          </Button>
        </div>
      </div>
      
      <footer className="bg-superbet-navy py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="mb-6 md:mb-0">
              <p className="text-white/80 font-inter text-sm">
                © 2025 kodybukmacherskie.pl - Wszystkie prawa zastrzeżone.
              </p>
            </div>
            <div>
              <p className="text-white/80 font-inter text-sm">
                Hazard wiąże się z ryzykiem. Graj odpowiedzialnie. 18+
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SuperbetFooter;
