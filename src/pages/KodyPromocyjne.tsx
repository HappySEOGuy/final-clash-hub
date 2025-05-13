
import React from 'react';
import KodyNavigation from "@/components/KodyNavigation";
import KodyFooter from "@/components/KodyFooter";
import SuperbetPromoCode from "@/components/SuperbetPromoCode";

const KodyPromocyjne = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <KodyNavigation />
      <main className="flex-grow">
        <div className="bg-teal-gradient text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Kody Promocyjne Bukmacherskie</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Najlepsze kody promocyjne od legalnych bukmacherów. Skorzystaj z ekskluzywnych ofert i odbierz dodatkowe bonusy.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <SuperbetPromoCode />
        </div>
      </main>
      <KodyFooter />
    </div>
  );
};

export default KodyPromocyjne;
