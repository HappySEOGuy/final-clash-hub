
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatProps = {
  label: string;
  interValue: number;
  psgValue: number;
  maxValue: number;
};

const StatComparison = ({ label, interValue, psgValue, maxValue }: StatProps) => {
  const interPercent = (interValue / maxValue) * 100;
  const psgPercent = (psgValue / maxValue) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs font-semibold w-12 text-right">{interValue}</span>
        <Progress value={interPercent} className="h-2 bg-gray-300 flex-grow" />
        <Progress value={psgPercent} className="h-2 bg-gray-300 flex-grow" />
        <span className="text-xs font-semibold w-12">{psgValue}</span>
      </div>
    </div>
  );
};

const TeamComparison = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-ucl-blue mb-12">
          Team Comparison
          <div className="h-1 w-20 bg-ucl-gold mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inter Milan Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-blue-600">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/512px-FC_Internazionale_Milano_2021.svg.png"
                  alt="Inter Milan"
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <CardTitle>Inter Milan</CardTitle>
                  <p className="text-sm text-muted-foreground">Serie A • Italy</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">UCL Titles</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Finals</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium mb-1">Top Scorer</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                      LM
                    </div>
                    <span>Lautaro Martínez - 8 goals</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Head to Head Comparison */}
          <Card className="shadow-lg border-t-4 border-t-ucl-gold">
            <CardHeader className="text-center pb-2">
              <CardTitle>Head to Head Stats</CardTitle>
              <p className="text-sm text-muted-foreground">2024/25 UCL Campaign</p>
            </CardHeader>
            <CardContent>
              <StatComparison label="Goals Scored" interValue={24} psgValue={28} maxValue={30} />
              <StatComparison label="Goals Conceded" interValue={8} psgValue={10} maxValue={20} />
              <StatComparison label="Clean Sheets" interValue={7} psgValue={5} maxValue={10} />
              <StatComparison label="Possession %" interValue={52} psgValue={59} maxValue={100} />
              <StatComparison label="Pass Accuracy %" interValue={87} psgValue={89} maxValue={100} />
              <StatComparison label="Shots per Game" interValue={14} psgValue={17} maxValue={20} />
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium text-center mb-3">Previous Meetings</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>UCL 2022/23 Group Stage</span>
                    <span className="font-medium">Inter 2-0 PSG</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>UCL 2022/23 Group Stage</span>
                    <span className="font-medium">PSG 1-1 Inter</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>UCL 2018/19 Round of 16</span>
                    <span className="font-medium">PSG 2-1 Inter</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PSG Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-red-600">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/512px-Paris_Saint-Germain_F.C..svg.png"
                  alt="Paris Saint-Germain"
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <CardTitle>Paris Saint-Germain</CardTitle>
                  <p className="text-sm text-muted-foreground">Ligue 1 • France</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">UCL Titles</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Finals</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium mb-1">Top Scorer</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs">
                      KM
                    </div>
                    <span>Kylian Mbappé - 12 goals</span>
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

export default TeamComparison;
