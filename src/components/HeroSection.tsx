
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-[#0B1D51] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              KODY BUKMACHERSKIE
            </h1>
            <p className="text-lg md:text-xl max-w-xl text-white/90 mb-8">
              Aktualne <span className="font-bold">kody promocyjne, bonusy powitalne</span> i najciekawsze 
              oferty od legalnych bukmacherów w Polsce. Codziennie 
              przeglądamy rynek, by dostarczać Ci najbardziej opłacalne okazje.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="#ranking" className="flex items-center text-white hover:underline font-semibold transition-colors group">
                <span>Ranking bukmacherów</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="#kody" className="flex items-center text-white hover:underline font-semibold transition-colors group">
                <span>Kody bukmacherskie</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="#opinie" className="flex items-center text-white hover:underline font-semibold transition-colors group">
                <span>Opinie o bukmacherach</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Light radial gradient spotlight effect */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-xl"></div>
              
              {/* Lewandowski Image */}
              <img 
                src="/lovable-uploads/f6be044f-8802-4397-887a-21ce8dfdb3eb.png" 
                alt="Robert Lewandowski" 
                className="relative z-10 h-[400px] max-w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
