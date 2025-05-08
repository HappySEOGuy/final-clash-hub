
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the final date (example date - you can change it)
  const finalDate = new Date('2025-05-31T20:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +finalDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[500px] flex items-center bg-gradient-to-b from-ucl-blue via-ucl-blue/90 to-ucl-blue/80">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-20 pt-32 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          UEFA Champions League Final
        </h1>
        <div className="flex items-center justify-center my-6 space-x-6 md:space-x-10">
          <div className="flex flex-col items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/512px-FC_Internazionale_Milano_2021.svg.png" 
              alt="Inter Milan" 
              className="team-logo" 
            />
            <h2 className="text-white text-xl md:text-2xl font-bold mt-2">Inter</h2>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-ucl-gold text-3xl md:text-5xl font-bold">VS</div>
            <div className="mt-2 text-white text-sm">Wembley Stadium</div>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/512px-Paris_Saint-Germain_F.C..svg.png" 
              alt="Paris Saint-Germain" 
              className="team-logo" 
            />
            <h2 className="text-white text-xl md:text-2xl font-bold mt-2">PSG</h2>
          </div>
        </div>
        
        <div className="bg-black/30 px-6 py-4 rounded-xl backdrop-blur-sm my-6">
          <p className="text-white text-lg mb-2">Countdown to Kickoff</p>
          <div className="flex space-x-4 text-center">
            <div>
              <div className="text-ucl-gold text-2xl md:text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-white text-xs md:text-sm">Days</div>
            </div>
            <div>
              <div className="text-ucl-gold text-2xl md:text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-white text-xs md:text-sm">Hours</div>
            </div>
            <div>
              <div className="text-ucl-gold text-2xl md:text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-white text-xs md:text-sm">Minutes</div>
            </div>
            <div>
              <div className="text-ucl-gold text-2xl md:text-4xl font-bold animate-pulse-slow">{timeLeft.seconds}</div>
              <div className="text-white text-xs md:text-sm">Seconds</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild className="bg-ucl-gold hover:bg-ucl-gold/90 text-ucl-blue">
            <Link to="/teams">Team Profiles</Link>
          </Button>
          <Button asChild variant="outline" className="border-ucl-gold text-ucl-gold hover:bg-ucl-gold/10">
            <Link to="/odds">View Betting Odds</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
