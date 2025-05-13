
import React from 'react';
import SuperbetNavbar from './SuperbetNavbar';
import SuperbetHero from './SuperbetHero';
import SuperbetPromoCode from './SuperbetPromoCode';
import SuperbetHowTo from './SuperbetHowTo';
import SuperbetPromotions from './SuperbetPromotions';
import SuperbetFooter from './SuperbetFooter';

const SuperbetLanding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SuperbetNavbar />
      <SuperbetHero />
      <main className="flex-grow bg-superbet-background">
        <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
          <SuperbetPromoCode />
          <SuperbetHowTo />
          <SuperbetPromotions />
        </div>
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default SuperbetLanding;
