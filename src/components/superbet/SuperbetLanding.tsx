
import React from 'react';
import SuperbetNavbar from './SuperbetNavbar';
import SuperbetHero from './SuperbetHero';
import SuperbetPromoCode from './SuperbetPromoCode';
import SuperbetHowTo from './SuperbetHowTo';
import SuperbetPromotions from './SuperbetPromotions';
import SuperbetFooter from './SuperbetFooter';
import SuperbetTableOfContents from './SuperbetTableOfContents';
import SuperbetAuthorCard from './SuperbetAuthorCard';

const SuperbetLanding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SuperbetNavbar />
      <SuperbetHero />
      <main className="flex-grow bg-superbet-background">
        <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
          {/* Three-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left sidebar - Table of Contents */}
            <div className="hidden lg:block lg:col-span-2">
              <SuperbetTableOfContents />
            </div>
            
            {/* Main content - centered and narrower */}
            <div className="col-span-1 md:col-span-12 lg:col-span-7">
              <div id="kod-promocyjny">
                <SuperbetPromoCode />
              </div>
              <div id="jak-skorzystac">
                <SuperbetHowTo />
              </div>
              <div id="aktualne-promocje">
                <SuperbetPromotions />
              </div>
            </div>
            
            {/* Right sidebar - Author info */}
            <div className="hidden lg:block lg:col-span-3">
              <SuperbetAuthorCard />
            </div>
          </div>
        </div>
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default SuperbetLanding;
