
import React from 'react';
import KodyNavigation from "@/components/KodyNavigation";
import KodyFooter from "@/components/KodyFooter";
import SuperbetPromoCode from "@/components/SuperbetPromoCode";

const KodyPromocyjne = () => {
  return (
    <div className="min-h-screen flex flex-col bg-promo-background">
      <KodyNavigation />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <SuperbetPromoCode />
        </div>
      </main>
      <KodyFooter />
    </div>
  );
};

export default KodyPromocyjne;
