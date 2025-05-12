
import React from 'react';
import KodyNavigation from "@/components/KodyNavigation";
import KodyHeader from "@/components/KodyHeader";
import BookmakerOffers from "@/components/BookmakerOffers";
import BookmakerBonus from "@/components/BookmakerBonus";
import BettingTipsCalendar from "@/components/BettingTipsCalendar";
import ContentBlock from "@/components/ContentBlock";
import TopBookmakers from "@/components/TopBookmakers";
import BlogSection from "@/components/BlogSection";
import KodyFooter from "@/components/KodyFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <KodyNavigation />
      <main className="flex-grow">
        {/* Header Section with Title and 3D Logo */}
        <KodyHeader />
        
        {/* Scrollable Bookmaker Offers Widget */}
        <BookmakerOffers />
        
        {/* Bookmaker Bonus Tiles Section */}
        <BookmakerBonus />
        
        {/* Betting Tips Calendar */}
        <BettingTipsCalendar />
        
        {/* Content Block */}
        <ContentBlock />
        
        {/* Top Bookmakers Widget */}
        <TopBookmakers />

        {/* Blog Section */}
        <BlogSection />
      </main>
      <KodyFooter />
    </div>
  );
};

export default Index;
