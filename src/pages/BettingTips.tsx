
import React from 'react';
import SuperbetNavbar from '@/components/superbet/SuperbetNavbar';
import SuperbetFooter from '@/components/superbet/SuperbetFooter';
import BettingTipsHero from '@/components/betting-tips/BettingTipsHero';
import BettingTipsCalendar from '@/components/BettingTipsCalendar';
import BettingOdds from '@/components/BettingOdds';
import TodaysTips from '@/components/betting-tips/TodaysTips';
import PopularMatches from '@/components/betting-tips/PopularMatches';

const BettingTips = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SuperbetNavbar />
      <main className="flex-grow pt-16">
        <BettingTipsHero />
        <TodaysTips />
        <PopularMatches />
        <BettingTipsCalendar />
        <BettingOdds />
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default BettingTips;
