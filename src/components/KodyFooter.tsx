
import React from 'react';
import { Link } from 'react-router-dom';

const KodyFooter = () => {
  return (
    <footer className="bg-[#0e4e23] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">kodybukmacherskie.pl</h3>
            <p className="text-sm text-slate-300">
              Witryna poświęcona kodom promocyjnym, bonusom i ofertom specjalnym od legalnych bukmacherów w Polsce.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Bukmacherzy</h4>
            <ul className="space-y-2">
              <li><Link to="/bukmacher/sts" className="text-sm text-slate-300 hover:text-white">STS</Link></li>
              <li><Link to="/bukmacher/fortuna" className="text-sm text-slate-300 hover:text-white">Fortuna</Link></li>
              <li><Link to="/bukmacher/superbet" className="text-sm text-slate-300 hover:text-white">Superbet</Link></li>
              <li><Link to="/bukmacher/betclic" className="text-sm text-slate-300 hover:text-white">Betclic</Link></li>
              <li><Link to="/bukmacher/lvbet" className="text-sm text-slate-300 hover:text-white">LV BET</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Promocje</h4>
            <ul className="space-y-2">
              <li><Link to="/promocje/bez-ryzyka" className="text-sm text-slate-300 hover:text-white">Zakłady bez ryzyka</Link></li>
              <li><Link to="/promocje/freebety" className="text-sm text-slate-300 hover:text-white">Freebety</Link></li>
              <li><Link to="/promocje/cashback" className="text-sm text-slate-300 hover:text-white">Cashback</Link></li>
              <li><Link to="/promocje/bez-podatku" className="text-sm text-slate-300 hover:text-white">Gra bez podatku</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Informacje</h4>
            <ul className="space-y-2">
              <li><Link to="/o-nas" className="text-sm text-slate-300 hover:text-white">O nas</Link></li>
              <li><Link to="/regulamin" className="text-sm text-slate-300 hover:text-white">Regulamin</Link></li>
              <li><Link to="/polityka-prywatnosci" className="text-sm text-slate-300 hover:text-white">Polityka prywatności</Link></li>
              <li><Link to="/kontakt" className="text-sm text-slate-300 hover:text-white">Kontakt</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-600 mt-8 pt-8 text-sm text-slate-300">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              © 2025 kodybukmacherskie.pl - Wszystkie prawa zastrzeżone.
            </div>
            <div>
              Hazard wiąże się z ryzykiem. Graj odpowiedzialnie. 18+
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KodyFooter;
