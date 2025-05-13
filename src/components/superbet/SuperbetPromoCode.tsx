
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Percent, Gift, Star, Ticket } from 'lucide-react';

const SuperbetPromoCode = () => {
  return (
    <div className="space-y-10">
      <Card className="overflow-hidden shadow-card rounded-xl bg-white mb-6" id="bonus-powitalny">
        <div className="p-6 border-b border-superbet-lightGray">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-superbet-navy font-rubik">Kod promocyjny Superbet</h2>
            <div className="bg-superbet-navy text-white font-bold py-2 px-4 rounded-md">SUPERBET</div>
          </div>
        </div>

        <div className="p-8 bg-white text-gray-700">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left side - Promo code */}
            <div className="w-full lg:w-1/2">
              <div className="bg-subtle-blue p-6 rounded-lg border border-blue-100 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="bg-superbet-blue text-white p-3 rounded-full">
                      <Gift size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-inter">Kod promocyjny</p>
                      <p className="text-2xl font-bold text-superbet-navy font-rubik">KODVIPA</p>
                    </div>
                  </div>
                  <Button 
                    className="bg-superbet-purple hover:bg-superbet-purple/90 text-white font-bold transition-colors"
                    onClick={() => navigator.clipboard.writeText('KODVIPA')}
                  >
                    Kopiuj kod
                  </Button>
                </div>
              </div>

              <div id="co-zyskasz" className="border-t border-superbet-lightGray pt-8">
                <h3 className="text-2xl font-semibold mb-6 text-superbet-navy font-rubik">Co zyskujesz z kodem KODVIPA?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full mt-1">
                      <Star className="text-superbet-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-rubik">Cashback do 3500 PLN</p>
                      <p className="text-gray-600 font-inter">Zwrot zakładów w pierwszym tygodniu po rejestracji</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full mt-1">
                      <Ticket className="text-superbet-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-rubik">Freebet 200 PLN</p>
                      <p className="text-gray-600 font-inter">Darmowy zakład od pierwszej wpłaty</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full mt-1">
                      <Gift className="text-superbet-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-rubik">Freebet 35 PLN</p>
                      <p className="text-gray-600 font-inter">Za pierwszy depozyt min. 50 PLN</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full mt-1">
                      <Gift className="text-superbet-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-rubik">Freebet 20 PLN</p>
                      <p className="text-gray-600 font-inter">Za pobranie aplikacji mobilnej</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right side - Image and CTA */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="rounded-lg overflow-hidden mb-8 w-full">
                <img 
                  src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg" 
                  alt="Superbet Bonus" 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="bg-subtle-blue p-6 rounded-lg border border-blue-100 w-full">
                <h3 className="text-xl font-bold text-superbet-navy mb-4 font-rubik text-center">Bonus powitalny Superbet</h3>
                <p className="text-gray-600 mb-6 text-center font-inter">
                  Zarejestruj się z kodem <span className="font-semibold">KODVIPA</span> i odbierz pełen pakiet bonusów
                </p>
                
                <Button className="w-full bg-superbet-red hover:bg-superbet-red/90 text-white py-3 px-8 font-bold text-lg rounded-lg">
                  ODBIERZ BONUS 3755 ZŁ
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3 font-inter">
                  18+. Graj odpowiedzialnie. Obowiązuje regulamin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="overflow-hidden shadow-card rounded-xl bg-white" id="faq">
        <div className="p-6 border-b border-superbet-lightGray">
          <h2 className="text-2xl font-bold text-superbet-navy font-rubik">Często zadawane pytania</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="border-b border-superbet-lightGray pb-5">
              <h3 className="text-lg font-medium text-superbet-navy mb-2 font-rubik">
                Czy kod promocyjny Superbet jest bezpłatny?
              </h3>
              <p className="text-gray-600 font-inter">
                Tak, kod promocyjny KODVIPA jest całkowicie bezpłatny. Wystarczy wpisać go podczas rejestracji, aby otrzymać dostęp do wszystkich bonusów powitalnych.
              </p>
            </div>
            <div className="border-b border-superbet-lightGray pb-5">
              <h3 className="text-lg font-medium text-superbet-navy mb-2 font-rubik">
                Jak długo ważny jest kod promocyjny?
              </h3>
              <p className="text-gray-600 font-inter">
                Kod promocyjny KODVIPA jest ważny do końca roku. Po tym czasie może zostać zastąpiony innym kodem lub przedłużony.
              </p>
            </div>
            <div className="border-b border-superbet-lightGray pb-5">
              <h3 className="text-lg font-medium text-superbet-navy mb-2 font-rubik">
                Czy mogę skorzystać z kodu, jeśli mam już konto w Superbet?
              </h3>
              <p className="text-gray-600 font-inter">
                Nie, kod promocyjny KODVIPA jest dostępny tylko dla nowych użytkowników podczas procesu rejestracji.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-superbet-navy mb-2 font-rubik">
                Jakie są warunki obrotu bonusem?
              </h3>
              <p className="text-gray-600 font-inter">
                Aby wypłacić środki z bonusu, należy obrócić je jednokrotnie na zakładach z minimalnym kursem 1.50. Szczegółowe warunki znajdziesz w regulaminie promocji na stronie bukmachera.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SuperbetPromoCode;
