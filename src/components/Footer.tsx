
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ucl-blue text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-ucl-gold flex items-center justify-center">
                <span className="text-ucl-blue font-bold text-lg">CL</span>
              </div>
              <span className="font-bold text-lg">Champions League Final</span>
            </Link>
            <p className="mt-3 text-sm text-gray-300">
              Your ultimate destination for all things related to the UEFA Champions League Final between Inter Milan and Paris Saint-Germain.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-ucl-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-ucl-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/teams" className="hover:text-ucl-gold transition-colors">Teams</Link>
              </li>
              <li>
                <Link to="/odds" className="hover:text-ucl-gold transition-colors">Betting Odds</Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-ucl-gold transition-colors">Promotions</Link>
              </li>
              <li>
                <Link to="/stats" className="hover:text-ucl-gold transition-colors">Statistics</Link>
              </li>
              <li>
                <Link to="/tables" className="hover:text-ucl-gold transition-colors">Tables</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-ucl-gold">Teams</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.inter.it/en" target="_blank" rel="noopener noreferrer" className="hover:text-ucl-gold transition-colors">
                  Inter Milan Official Website
                </a>
              </li>
              <li>
                <a href="https://www.psg.fr/en" target="_blank" rel="noopener noreferrer" className="hover:text-ucl-gold transition-colors">
                  PSG Official Website
                </a>
              </li>
              <li>
                <a href="https://www.uefa.com/uefachampionsleague/" target="_blank" rel="noopener noreferrer" className="hover:text-ucl-gold transition-colors">
                  UEFA Champions League
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-ucl-gold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-ucl-gold transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-ucl-gold transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-ucl-gold transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-ucl-gold transition-colors">Gambling Awareness</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
          <p>
            This website is for informational purposes only. 
            Please gamble responsibly and be aware of your local gambling laws and age restrictions.
          </p>
          <p className="mt-2">
            © 2025 Champions League Final Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
