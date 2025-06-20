
import React from 'react';
import SuperbetReviewsNavbar from './SuperbetReviewsNavbar';
import SuperbetReviewsHero from './SuperbetReviewsHero';
import SuperbetReviewsOverview from './SuperbetReviewsOverview';
import SuperbetReviewsDetails from './SuperbetReviewsDetails';
import SuperbetReviewsComparison from './SuperbetReviewsComparison';
import SuperbetReviewsUserOpinions from './SuperbetReviewsUserOpinions';
import SuperbetFooter from '../SuperbetFooter';
import SuperbetReviewsTableOfContents from './SuperbetReviewsTableOfContents';

const SuperbetReviewsLanding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SuperbetReviewsNavbar />
      <SuperbetReviewsHero />
      <main className="flex-grow bg-superbet-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <SuperbetReviewsTableOfContents />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div id="oferta-powitalna">
                <SuperbetReviewsOverview />
              </div>
              
              {/* Content section */}
              <div className="mb-10" id="o-operatorze">
                <div className="bg-white rounded-xl shadow-card p-6">
                  <h2 className="text-2xl font-bold text-superbet-navy mb-4 font-rubik">
                    O operatorze
                  </h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                      <strong>1. Jakie dyscypliny obstawiać w Superbet?</strong>
                    </p>
                    <p className="mb-6">
                      Superbet obok Fortuny i STS stanowi TOP 3{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        najlepszych legalnych bukmacherów w Polsce
                      </a>
                      . Jest to operator, który zaliczył nieprawdopodobny rozwój i na pewno jest najnowocześniejszym operatorem z największą liczbą innowacji.
                    </p>
                    
                    <p className="mb-4">
                      <strong>2. Oferta powitalna</strong>
                    </p>
                    
                    <p className="mb-4">
                      <strong>3. Transmisje live</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              <div id="szczegoly">
                <SuperbetReviewsDetails />
              </div>
              
              <div id="opinie-uzytkownikow">
                <SuperbetReviewsUserOpinions />
              </div>
              
              <div id="porownanie">
                <SuperbetReviewsComparison />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default SuperbetReviewsLanding;
