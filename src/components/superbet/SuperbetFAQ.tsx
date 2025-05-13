
import React from 'react';
import { Card } from '@/components/ui/card';

const SuperbetFAQ = () => {
  return (
    <Card className="overflow-hidden shadow-card rounded-xl bg-white mb-10" id="faq">
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
  );
};

export default SuperbetFAQ;
