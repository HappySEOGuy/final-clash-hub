
import React from 'react';
import SuperbetNavbar from './SuperbetNavbar';
import SuperbetHero from './SuperbetHero';
import SuperbetPromoCode from './SuperbetPromoCode';
import SuperbetHowTo from './SuperbetHowTo';
import SuperbetPromotions from './SuperbetPromotions';
import SuperbetFooter from './SuperbetFooter';
import SuperbetTableOfContents from './SuperbetTableOfContents';
import SuperbetAuthorCard from './SuperbetAuthorCard';
import SuperbetContentBlock from './SuperbetContentBlock';
import SuperbetFAQ from './SuperbetFAQ';

const SuperbetLanding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SuperbetNavbar />
      <SuperbetHero />
      <main className="flex-grow bg-superbet-background">
        <div className="container mx-auto px-4 py-8 -mt-20 relative z-10">
          {/* Three-column layout with TOC and Author stacked on left */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left sidebar - Table of Contents + Author Card (stacked) */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
              <div className="sticky top-24 space-y-6">
                <SuperbetTableOfContents />
                <SuperbetAuthorCard />
              </div>
            </div>
            
            {/* Main content - wider */}
            <div className="col-span-1 md:col-span-12 lg:col-span-9">
              <div id="kod-promocyjny">
                <SuperbetPromoCode />
              </div>
              <div id="jak-skorzystac">
                <SuperbetHowTo />
              </div>
              <div id="aktualne-promocje">
                <SuperbetPromotions />
              </div>
              <div id="content-block">
                <SuperbetContentBlock />
              </div>
              <div id="faq-section">
                <SuperbetFAQ />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default SuperbetLanding;
