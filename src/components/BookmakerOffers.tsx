
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookmakerOffers = () => {
  const offers = [
    {
      name: 'Superbet',
      oldValue: '3720 zł',
      newValue: '3755 zł',
      color: '#d92121',
      startBonus: '+35 PLN na start'
    },
    {
      name: 'Fortuna',
      oldValue: '365 zł',
      newValue: '375 zł',
      color: '#fccc00',
      startBonus: '+ 10 PLN na start'
    },
    {
      name: 'STS',
      oldValue: '660 zł',
      newValue: '760 zł',
      color: '#1652b3',
      startBonus: '+ 100 PLN na start'
    },
    {
      name: 'Fuksiarz',
      oldValue: '1000 zł',
      newValue: '1060 zł',
      color: '#d92121',
      startBonus: '+ 60 PLN na start'
    },
    {
      name: 'LV BET',
      oldValue: '2000 zł',
      newValue: '2115 zł',
      color: '#fccc00',
      startBonus: '+ 115 PLN freebety'
    },
    {
      name: 'Betclic',
      oldValue: '550 zł',
      newValue: '600 zł',
      color: '#d92121', 
      startBonus: '+ 50 PLN bez podatku'
    }
  ];

  return (
    <div className="py-14 bg-slate-50" id="kody">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#333333]">
          <span className="bg-gradient-to-r from-[#20c063] to-[#0e4e23] bg-clip-text text-transparent">
            Kody bukmacherskie
          </span>
        </h2>
        
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg">
          Wpisując kod w formularzu rejestracyjnym u wybranego bukmachera online 
          jesteś pewny, że otrzymasz najwyższy dostępny bonus powitalny.
        </p>
        
        <div className="mb-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {offers.map((offer, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-2">
                    <Card className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="p-4" style={{ backgroundColor: '#f9fafb' }}>
                        <div className="mb-3 flex justify-between items-center">
                          <div className="text-xl font-semibold text-slate-700">Kod {offer.name}</div>
                          <div 
                            className="rounded-full px-4 py-1 font-bold text-white"
                            style={{ backgroundColor: offer.color }}
                          >
                            {offer.name}
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex items-center">
                            <div className="text-slate-500 line-through text-xl font-medium">
                              {offer.oldValue}
                            </div>
                            <div className="ml-6 text-4xl font-bold text-slate-800">
                              {offer.newValue}
                            </div>
                          </div>
                          <Button 
                            className="w-full mt-5 flex items-center justify-between bg-[#20c063] hover:bg-[#18a14f] text-white"
                          >
                            <span>Sprawdzam kod</span>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Button>
                          <div className="mt-3 text-center text-slate-500">{offer.startBonus}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-5 md:-left-6" />
            <CarouselNext className="-right-5 md:-right-6" />
          </Carousel>
        </div>
        
        <div className="text-center mt-6">
          <Button variant="outline" className="bg-transparent text-[#20c063] border-[#20c063] hover:bg-[#20c063] hover:text-white">
            Dowiedz się więcej
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookmakerOffers;
