
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, User, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuperbetReviewsUserOpinions = () => {
  const userReviews = [
    {
      name: "Paweł K.",
      rating: 5,
      date: "5 dni temu",
      title: "Świetna aplikacja",
      content: "Korzystam z Superbet od roku. Aplikacja działa bez zarzutu, szybkie wypłaty. Polecam!",
      helpful: 12,
      unhelpful: 1
    },
    {
      name: "Anna M.",
      rating: 4,
      date: "1 tydzień temu", 
      title: "Dobre kursy na piłkę",
      content: "Kursy na mecze ligowe bardzo konkurencyjne. Jedyny minus to czasami wysokie marże na egzotyczne rynki.",
      helpful: 8,
      unhelpful: 2
    },
    {
      name: "Marcin T.",
      rating: 5,
      date: "2 tygodnie temu",
      title: "Najlepsze promocje",
      content: "Regularnie korzystam z promocji Superbet. Cashback i freebety naprawdę opłacalne.",
      helpful: 15,
      unhelpful: 0
    }
  ];

  return (
    <Card className="p-6 shadow-card bg-white mb-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-superbet-navy font-rubik">Opinie użytkowników</h3>
        <Button variant="outline">
          Pokaż wszystkie (111)
        </Button>
      </div>
      
      <div className="space-y-6">
        {userReviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-medium text-gray-800">{review.name}</h4>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                <p className="text-gray-700 mb-3">{review.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-green-600">
                    <ThumbsUp className="w-4 h-4" />
                    Pomocne ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                    <ThumbsDown className="w-4 h-4" />
                    Niepomocne ({review.unhelpful})
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SuperbetReviewsUserOpinions;
