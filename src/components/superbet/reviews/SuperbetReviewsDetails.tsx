
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, User, Calendar, Award } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SuperbetReviewsDetails = () => {
  const expertRatings = [
    { category: "Kursy", rating: 4.5, description: "Konkurencyjne kursy na najpopularniejsze sporty" },
    { category: "Aplikacja", rating: 4.8, description: "Jedna z najlepszych aplikacji na rynku" },
    { category: "Obsługa klienta", rating: 4.7, description: "Szybka i profesjonalna pomoc" },
    { category: "Wypłaty", rating: 4.9, description: "Błyskawiczne przelewy na konto" },
    { category: "Promocje", rating: 4.6, description: "Regularne bonusy i akcje specjalne" }
  ];

  const features = [
    { feature: "Liczba sportów", value: "30+" },
    { feature: "Transmisje live", value: "Tak" },
    { feature: "Cashout", value: "Tak" },
    { feature: "Aplikacja mobilna", value: "iOS/Android" },
    { feature: "Min. wpłata", value: "20 zł" },
    { feature: "Min. wypłata", value: "10 zł" },
    { feature: "Czas wypłaty", value: "24h" },
    { feature: "Licencja", value: "Polska (MF)" }
  ];

  return (
    <div className="space-y-8 mb-10">
      {/* Recenzja eksperta */}
      <Card className="p-6 shadow-card bg-white">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-8 h-8 text-gray-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-superbet-navy font-rubik">Recenzja eksperta</h3>
            <p className="text-gray-600">Mikołaj Wiśniowski, redaktor z 4-letnim doświadczeniem</p>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Zaktualizowano: 10.06.2025</span>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            Superbet obok Fortuny i STS stanowi TOP 3 najlepszych legalnych bukmacherów w Polsce. 
            Jest to operator, który zaliczył nieprawdopodobny rozwój w ostatnich latach, oferując 
            konkurencyjne kursy, szeroką gamę promocji oraz nowoczesną aplikację mobilną.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertRatings.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-800">{item.category}</h4>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{item.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Szczegółowe informacje */}
      <Card className="p-6 shadow-card bg-white">
        <h3 className="text-xl font-bold text-superbet-navy mb-6 font-rubik">Szczegółowe informacje</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Funkcja</TableHead>
              <TableHead>Dostępność</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.feature}</TableCell>
                <TableCell>{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default SuperbetReviewsDetails;
