
import React from 'react';
import SuperbetNavbar from '@/components/superbet/SuperbetNavbar';
import SuperbetFooter from '@/components/superbet/SuperbetFooter';
import MatchHeader from '@/components/match-analysis/MatchHeader';
import MatchPrediction from '@/components/match-analysis/MatchPrediction';
import BettingOddsWidget from '@/components/match-analysis/BettingOddsWidget';
import TeamComparison from '@/components/TeamComparison';
import MatchStatistics from '@/components/match-analysis/MatchStatistics';
import RecommendedBets from '@/components/match-analysis/RecommendedBets';

const MatchAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SuperbetNavbar />
      <main className="flex-grow pt-16">
        <MatchHeader />
        <MatchPrediction />
        <BettingOddsWidget />
        <RecommendedBets />
        <MatchStatistics />
        <TeamComparison />
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default MatchAnalysis;
