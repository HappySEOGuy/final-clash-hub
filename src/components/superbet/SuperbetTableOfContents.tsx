
import React, { useState, useEffect } from 'react';

type Section = {
  id: string;
  title: string;
};

const sections: Section[] = [
  { id: 'bonus-powitalny', title: 'Bonus powitalny' },
  { id: 'kod-promocyjny', title: 'Kod promocyjny' },
  { id: 'jak-skorzystac', title: 'Jak skorzystać z kodu' },
  { id: 'co-zyskasz', title: 'Co zyskujesz z kodem' },
  { id: 'aktualne-promocje', title: 'Aktualne promocje' },
  { id: 'faq', title: 'FAQ' },
];

const SuperbetTableOfContents = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the section that is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
      <h2 className="text-lg font-bold text-superbet-navy mb-4 font-rubik">Spis treści</h2>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left py-2 px-3 rounded-md text-sm transition-all font-inter ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-superbet-blue font-medium border-l-2 border-superbet-blue'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SuperbetTableOfContents;
