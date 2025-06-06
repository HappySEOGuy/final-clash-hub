import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar } from "lucide-react";

const Statistics = () => {
  const chartData = [
    {
      name: "Goals Scored",
      Inter: 24,
      PSG: 28,
    },
    {
      name: "Clean Sheets",
      Inter: 7,
      PSG: 5,
    },
    {
      name: "Big Chances",
      Inter: 35,
      PSG: 42,
    },
    {
      name: "Shot Accuracy %",
      Inter: 48,
      PSG: 52,
    },
    {
      name: "Possession %",
      Inter: 52,
      PSG: 59,
    },
    {
      name: "Tackles Won",
      Inter: 98,
      PSG: 87,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <ChartBar className="text-ucl-gold mr-2 h-6 w-6" />
          <h2 className="text-3xl font-bold text-center text-ucl-blue">
            Statystyki Drużyn
          </h2>
          <ChartBar className="text-ucl-gold ml-2 h-6 w-6" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Statystyki przed finalem Ligi Mistrzów: PSG vs Inter</h3>
          <p className="mb-4">
            Przed majowym Finałem Ligi Mistrzów UEFA 2025 warto przyjrzeć się statystykom obu drużyn:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <span className="font-medium">PSG:</span> Paryżanie dotarli do finału po raz drugi (poprzednio w 2020 roku, porażka 0:1 z Bayernem). W dotychczasowych 16 meczach rozgrywek tego sezonu zdobyli 33 bramki, co daje średnią strzelonych goli na poziomie ponad 2.
            </li>
            <li>
              <span className="font-medium">Inter:</span> Mediolańczycy mają na koncie trzy Puchary Europy (PSG żadnego). W bieżącej edycji LM ekipa z San Siro imponuje przede wszystkim skutecznością w obronie, o czym najlepiej świadczy fakt, iż aż ośmiokrotnie (najwięcej ze wszystkich drużyn) była w stanie zachować czyste konto.
            </li>
            <li>
              <span className="font-medium">Bezpośrednie starcia:</span> Do tej pory drużyny PSG i Interu rywalizowały ze sobą pięciokrotnie, biorąc pod uwagę zarówno mecze o stawkę, jak i towarzyskie. Co ciekawe, obie odniosły po dwa zwycięstwa, a jedno spotkanie pozostało nierozstrzygnięte.
            </li>
          </ul>
          <p className="mb-4">
            Jak zatem widać, PSG góruje w ofensywie, ale Inter lepiej radzi sobie w obronie. W prawidłowym wytypowaniu zwycięzcy finału nie pomaga dodatkowo taka sama liczba zwycięstw paryżan i mediolańczyków w ich bezpośrednich starciach.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Historia zwycięzców Ligi Mistrzów</h3>
          <p className="mb-4">
            Liga Mistrzów, określana wcześniej innymi terminami, ma bogatą historię, sięgającą 1955 roku. Od tego czasu wiele drużyn walczyło o tytuł mistrza Europy. Real Madryt jest rekordzistą pod względem liczby zwycięstw, z 15 tytułami. AC Milan i Bayern Monachium również mają na swoim koncie wiele zwycięstw, odpowiednio 7 i 6.
          </p>
          <p className="mb-4">
            Inne drużyny, takie jak FC Barcelona, Liverpool i Manchester United, również odniosły sukces w Lidze Mistrzów. Podobnie zresztą jak: FC Porto, Juventus, Olympique Marsylia, Hamburger SV czy Borussia Dortmund. W historii Ligi Mistrzów można znaleźć wiele emocjonujących meczów, w tym te, które rozstrzygały się w rzutach karnych. Finał Ligi Mistrzów jest zawsze wielkim wydarzeniem, które przyciąga uwagę kibiców z całego świata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Statistics Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Porównanie w Lidze Mistrzów</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              {/* Custom chart visualization */}
              <div className="h-full flex flex-col justify-center">
                {chartData.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name}</span>
                      <div className="flex space-x-4">
                        <span className="text-[#0073C2] font-medium">{item.Inter}</span>
                        <span className="text-[#E63946] font-medium">{item.PSG}</span>
                      </div>
                    </div>
                    <div className="flex h-6 w-full bg-gray-100 rounded-lg overflow-hidden">
                      <div 
                        className="bg-[#0073C2] h-full" 
                        style={{ width: `${(item.Inter / Math.max(item.Inter, item.PSG)) * 50}%` }}
                      ></div>
                      <div className="flex-grow"></div>
                      <div 
                        className="bg-[#E63946] h-full" 
                        style={{ width: `${(item.PSG / Math.max(item.Inter, item.PSG)) * 50}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#0073C2] rounded-sm mr-2"></div>
                    <span className="text-sm">Inter Milan</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#E63946] rounded-sm mr-2"></div>
                    <span className="text-sm">PSG</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Players Statistics */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Key Player Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <div className="w-4 h-4 bg-[#0073C2] rounded-sm mr-2"></div>
                    Inter Milan
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Lautaro Martínez",
                        stat: "8 goals, 3 assists",
                        minutes: 944,
                        rating: 8.4,
                      },
                      {
                        name: "Hakan Çalhanoğlu",
                        stat: "3 goals, 5 assists",
                        minutes: 1028,
                        rating: 8.2,
                      },
                      {
                        name: "Alessandro Bastoni",
                        stat: "0 goals, 2 assists",
                        minutes: 1080,
                        rating: 7.8,
                      },
                    ].map((player, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="text-sm text-gray-600">{player.stat}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-[#0073C2]">{player.rating}</div>
                          <div className="text-sm text-gray-600">{player.minutes} mins</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <div className="w-4 h-4 bg-[#E63946] rounded-sm mr-2"></div>
                    Paris Saint-Germain
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Kylian Mbappé",
                        stat: "12 goals, 4 assists",
                        minutes: 1035,
                        rating: 8.9,
                      },
                      {
                        name: "Achraf Hakimi",
                        stat: "2 goals, 6 assists",
                        minutes: 1080,
                        rating: 8.0,
                      },
                      {
                        name: "Gianluigi Donnarumma",
                        stat: "5 clean sheets",
                        minutes: 1170,
                        rating: 7.7,
                      },
                    ].map((player, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="text-sm text-gray-600">{player.stat}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-[#E63946]">{player.rating}</div>
                          <div className="text-sm text-gray-600">{player.minutes} mins</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Stadium Information */}
          <Card className="shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle>Road to Wembley</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg mb-3">Inter Milan's Journey</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Group Stage</div>
                      <div>1st Place</div>
                      <div className="text-right">16 points</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Round of 16</div>
                      <div>vs. Leipzig</div>
                      <div className="text-right">3-1, 2-1</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Quarter-final</div>
                      <div>vs. Arsenal</div>
                      <div className="text-right">1-0, 2-2</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Semi-final</div>
                      <div>vs. Dortmund</div>
                      <div className="text-right">2-0, 1-1</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-3">PSG's Journey</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Group Stage</div>
                      <div>2nd Place</div>
                      <div className="text-right">14 points</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Round of 16</div>
                      <div>vs. Real Sociedad</div>
                      <div className="text-right">2-0, 2-1</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Quarter-final</div>
                      <div>vs. Barcelona</div>
                      <div className="text-right">2-3, 4-1</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-2 bg-gray-50 rounded text-sm">
                      <div className="font-medium">Semi-final</div>
                      <div>vs. Bayern Munich</div>
                      <div className="text-right">1-0, 2-2</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
