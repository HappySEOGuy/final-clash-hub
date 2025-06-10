
import React from 'react';
import SuperbetReviewsNavbar from './SuperbetReviewsNavbar';
import SuperbetReviewsHero from './SuperbetReviewsHero';
import SuperbetReviewsOverview from './SuperbetReviewsOverview';
import SuperbetReviewsDetails from './SuperbetReviewsDetails';
import SuperbetReviewsComparison from './SuperbetReviewsComparison';
import SuperbetReviewsUserOpinions from './SuperbetReviewsUserOpinions';
import SuperbetFooter from '../SuperbetFooter';

const SuperbetReviewsLanding = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SuperbetReviewsNavbar />
      <SuperbetReviewsHero />
      <main className="flex-grow bg-superbet-background">
        <div className="container mx-auto px-4 py-8">
          <SuperbetReviewsOverview />
          <SuperbetReviewsDetails />
          <SuperbetReviewsUserOpinions />
          <SuperbetReviewsComparison />
        </div>
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default SuperbetReviewsLanding;
