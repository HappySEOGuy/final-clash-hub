
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-uefa-gradient py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Text Content - Now centered and full width */}
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight font-rubik">
              KODY BUKMACHERSKIE
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mb-8 font-inter">
              Aktualne <span className="font-bold">kody promocyjne, bonusy powitalne</span> i najciekawsze 
              oferty od legalnych bukmacherów w Polsce. Codziennie 
              przeglądamy rynek, by dostarczać Ci najbardziej opłacalne okazje.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
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
            
            {/* Call to Action Button */}
            <div className="mt-8">
              <Link 
                to="/kody-promocyjne" 
                className="bg-superbet-red hover:bg-superbet-red/90 text-white font-bold py-3 px-8 text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                SPRAWDŹ NAJLEPSZE BONUSY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
