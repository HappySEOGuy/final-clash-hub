
import React from 'react';
import { Card } from '@/components/ui/card';
import { MousePointerClick, UserPlus, Code, Wallet, Gift, Check } from 'lucide-react';

const SuperbetHowTo = () => {
  const steps = [
    {
      icon: <MousePointerClick className="text-superbet-navy" size={24} />,
      title: "Kliknij Odbierz bonus",
      description: "Przejdź do formularza rejestracji"
    },
    {
      icon: <UserPlus className="text-superbet-navy" size={24} />,
      title: "Zarejestruj konto w Superbet",
      description: "Wypełnij formularz rejestracyjny"
    },
    {
      icon: <Code className="text-superbet-navy" size={24} />,
      title: "Wpisz kod promocyjny KODVIPA",
      description: "W odpowiednim polu formularza"
    },
    {
      icon: <Wallet className="text-superbet-navy" size={24} />,
      title: "Wpłać min. 50 zł",
      description: "Zasil swoje konto dowolną metodą"
    },
    {
      icon: <Gift className="text-superbet-navy" size={24} />,
      title: "Zgarnij bonus i zacznij grać",
      description: "Ciesz się pełnym pakietem powitalnym"
    }
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-superbet-navy mb-6 font-rubik">Jak skorzystać z kodu?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center shadow-card bg-white">
            <div className="bg-subtle-blue rounded-full p-4 mb-4">
              {step.icon}
            </div>
            <div className="bg-superbet-navy text-superbet-gold w-8 h-8 rounded-full flex items-center justify-center mb-4 font-bold">
              {index + 1}
            </div>
            <h3 className="font-bold text-superbet-navy mb-2 font-rubik">{step.title}</h3>
            <p className="text-sm text-gray-600 font-inter">{step.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuperbetHowTo;
