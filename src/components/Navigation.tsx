
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ucl-blue text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-ucl-gold flex items-center justify-center">
              <span className="text-ucl-blue font-bold text-lg">CL</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Champions League Final</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-ucl-gold transition-colors">Home</Link>
          <Link to="/teams" className="hover:text-ucl-gold transition-colors">Teams</Link>
          <Link to="/odds" className="hover:text-ucl-gold transition-colors">Betting Odds</Link>
          <Link to="/promotions" className="hover:text-ucl-gold transition-colors">Promotions</Link>
          <Link to="/stats" className="hover:text-ucl-gold transition-colors">Statistics</Link>
          <Link to="/tables" className="hover:text-ucl-gold transition-colors">Tables</Link>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-ucl-gold"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ucl-blue border-t border-ucl-gold/30 py-2">
          <div className="container mx-auto flex flex-col space-y-2">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-ucl-gold/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/teams" 
              className="px-4 py-2 hover:bg-ucl-gold/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
            <Link 
              to="/odds" 
              className="px-4 py-2 hover:bg-ucl-gold/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Betting Odds
            </Link>
            <Link 
              to="/promotions" 
              className="px-4 py-2 hover:bg-ucl-gold/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Promotions
            </Link>
            <Link 
              to="/stats" 
              className="px-4 py-2 hover:bg-ucl-gold/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Statistics
            </Link>
            <Link 
              to="/tables" 
              className="px-4 py-2 hover:bg-ucl-gold/10 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tables
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
