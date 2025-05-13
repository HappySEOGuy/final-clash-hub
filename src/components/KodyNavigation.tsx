
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, Star, Code, Users, MessageSquare, ArrowRight } from 'lucide-react';

const KodyNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="sticky top-0 z-50 bg-[#0B1D51] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-superbet-gold flex items-center justify-center">
                <span className="text-[#0B1D51] font-bold text-lg">KB</span>
              </div>
              <span className="ml-2 text-2xl font-bold text-white font-rubik hidden sm:block">
                kodybukmacherskie.pl
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-white hover:text-superbet-gold transition-colors font-inter flex items-center gap-1.5">
              <Home size={18} />
              <span>Strona główna</span>
            </Link>
            <Link to="/promocje" className="font-medium text-white hover:text-superbet-gold transition-colors font-inter flex items-center gap-1.5">
              <Star size={18} />
              <span>Promocje</span>
            </Link>
            <Link to="/kody" className="font-medium text-white hover:text-superbet-gold transition-colors font-inter flex items-center gap-1.5">
              <Code size={18} />
              <span>Kody bukmacherskie</span>
            </Link>
            <Link to="/kody-promocyjne" className="font-medium text-white hover:text-superbet-gold transition-colors font-inter flex items-center gap-1.5">
              <Code size={18} />
              <span>Kody Promocyjne</span>
            </Link>
            <Link to="/bukmacherzy" className="font-medium text-white hover:text-superbet-gold transition-colors font-inter flex items-center gap-1.5">
              <Users size={18} />
              <span>Bukmacherzy</span>
            </Link>
            <Link to="/opinie" className="font-medium text-white hover:text-superbet-gold transition-colors font-inter flex items-center gap-1.5">
              <MessageSquare size={18} />
              <span>Opinie</span>
            </Link>
          </div>
          
          {/* CTA Button */}
          <Button className="bg-superbet-red hover:bg-superbet-red/90 text-white font-medium transition-colors rounded-lg hidden md:flex items-center">
            Najlepsze oferty
            <ArrowRight size={18} className="ml-1" />
          </Button>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-superbet-gold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 font-medium text-white hover:text-superbet-gold px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={18} />
                <span>Strona główna</span>
              </Link>
              <Link 
                to="/promocje" 
                className="flex items-center gap-2 font-medium text-white hover:text-superbet-gold px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star size={18} />
                <span>Promocje</span>
              </Link>
              <Link 
                to="/kody" 
                className="flex items-center gap-2 font-medium text-white hover:text-superbet-gold px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code size={18} />
                <span>Kody bukmacherskie</span>
              </Link>
              <Link 
                to="/kody-promocyjne" 
                className="flex items-center gap-2 font-medium text-white hover:text-superbet-gold px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code size={18} />
                <span>Kody Promocyjne</span>
              </Link>
              <Link 
                to="/bukmacherzy" 
                className="flex items-center gap-2 font-medium text-white hover:text-superbet-gold px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users size={18} />
                <span>Bukmacherzy</span>
              </Link>
              <Link 
                to="/opinie" 
                className="flex items-center gap-2 font-medium text-white hover:text-superbet-gold px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare size={18} />
                <span>Opinie</span>
              </Link>
              
              {/* Mobile CTA Button */}
              <Button 
                className="bg-superbet-red hover:bg-superbet-red/90 text-white font-medium transition-colors rounded-lg w-full mt-2 flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Najlepsze oferty
                <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KodyNavigation;
