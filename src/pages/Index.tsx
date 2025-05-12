
import React from 'react';
import KodyNavigation from "@/components/KodyNavigation";
import KodyHeader from "@/components/KodyHeader";
import BookmakerOffers from "@/components/BookmakerOffers";
import BookmakerFeatured from "@/components/BookmakerFeatured";
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
        
        {/* Bookmaker Featured Section with Best Bonuses */}
        <BookmakerFeatured />
        
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
