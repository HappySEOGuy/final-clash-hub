
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookmakerOffers = () => {
  const offers = [
    {
      name: 'Superbet',
      oldValue: '3720 zł',
      newValue: '3755 zł',
      color: '#d92121',
      logo: 'SUPERBET',
      logoBackground: '#d92121',
      textColor: '#fff',
      startBonus: '+35 PLN na start'
    },
    {
      name: 'Fortuna',
      oldValue: '365 zł',
      newValue: '375 zł',
      color: '#fccc00',
      logo: 'FORTUNA',
      logoBackground: '#fccc00',
      textColor: '#000',
      startBonus: '+ 10 PLN na start'
    },
    {
      name: 'STS',
      oldValue: '660 zł',
      newValue: '760 zł',
      color: '#1652b3',
      logo: 'STS',
      logoBackground: '#1652b3',
      textColor: '#fff',
      startBonus: '+ 100 PLN na start'
    },
    {
      name: 'Fuksiarz',
      oldValue: '1000 zł',
      newValue: '1060 zł',
      color: '#d92121',
      logo: 'FUKSIARZ',
      logoBackground: '#d92121',
      textColor: '#fff',
      startBonus: '+ 60 PLN na start'
    },
    {
      name: 'LV BET',
      oldValue: '2000 zł',
      newValue: '2115 zł',
      color: '#fccc00',
      logo: 'LV BET',
      logoBackground: '#fccc00', 
      textColor: '#000',
      startBonus: '+ 115 PLN freebety'
    },
    {
      name: 'Betclic',
      oldValue: '550 zł',
      newValue: '600 zł',
      color: '#d92121',
      logo: 'BETCLIC',
      logoBackground: '#d92121',
      textColor: '#fff',
      startBonus: '+ 50 PLN bez podatku'
    }
  ];

  return (
    <div className="py-14 bg-slate-50" id="kody">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#333333]">
          <span className="bg-gradient-to-r from-[#001c58] to-[#0a2b6b] bg-clip-text text-transparent">
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
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-3xl bg-white shadow-md">
                      <div className="p-6">
                        {/* Header with brand name and logo */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-lg font-medium text-slate-700">Kod {offer.name}</div>
                          <div 
                            className="rounded-full px-4 py-1.5 font-bold"
                            style={{ 
                              backgroundColor: offer.logoBackground,
                              color: offer.textColor 
                            }}
                          >
                            {offer.logo}
                          </div>
                        </div>
                        
                        {/* Price section */}
                        <div className="mt-6 mb-4">
                          <div className="flex items-center">
                            <div className="text-slate-500 line-through text-xl">
                              {offer.oldValue}
                            </div>
                            <div className="ml-auto text-5xl font-bold text-slate-800">
                              {offer.newValue}
                            </div>
                          </div>
                        </div>
                        
                        {/* Button and bonus text */}
                        <Button 
                          className="w-full mt-4 flex items-center justify-between bg-[#001c58] hover:bg-[#0a2b6b] text-white rounded-full py-5"
                        >
                          <span>Sprawdzam kod</span>
                          <svg className="w-5 h-5 bg-white text-[#001c58] p-1 rounded-full" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Button>
                        <div className="mt-3 text-center text-slate-500">{offer.startBonus}</div>
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
        
        <div className="flex justify-center items-center mt-8">
          <div className="h-2 w-12 bg-[#001c58] rounded-full mr-2"></div>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent text-[#001c58] border-[#001c58] hover:bg-[#001c58] hover:text-white">
            <span>Dowiedz się więcej</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 12H6.5M17.5 12L11 18.5M17.5 12L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <div className="h-2 w-12 bg-[#001c58] rounded-full ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default BookmakerOffers;
