
import React from 'react';
import { User, Award, Calendar } from 'lucide-react';

const SuperbetAuthorCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-bold text-superbet-navy mb-4 font-rubik">Autor</h2>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-gray-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-1">Wiktor P.</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Ekspert SEO & zakładów bukmacherskich
        </p>
        
        <div className="w-full space-y-3 mt-2">
          <div className="flex items-start gap-3 text-sm">
            <Calendar className="w-4 h-4 mt-0.5 text-superbet-blue" />
            <span className="text-gray-600">4+ lat doświadczenia</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Award className="w-4 h-4 mt-0.5 text-superbet-blue" />
            <span className="text-gray-600">Certyfikowany analityk bukmacherski</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <div className="bg-blue-100 text-superbet-blue px-2 py-1 rounded-full text-xs font-medium">
            Expert
          </div>
          <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            Top Autor
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperbetAuthorCard;
