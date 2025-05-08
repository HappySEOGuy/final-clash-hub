
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table } from "lucide-react";

const Tables = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Table className="text-ucl-gold mr-2 h-6 w-6" />
          <h2 className="text-3xl font-bold text-center text-ucl-blue">
            Tournament Tables
          </h2>
          <Table className="text-ucl-gold ml-2 h-6 w-6" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Group Stage Tables */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2 w-3 h-3 bg-ucl-gold rounded-full"></span>
                Inter's Group Stage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-ucl-blue text-white text-xs md:text-sm">
                      <th className="p-2 text-left">Pos</th>
                      <th className="p-2 text-left">Team</th>
                      <th className="p-2 text-center">P</th>
                      <th className="p-2 text-center">W</th>
                      <th className="p-2 text-center">D</th>
                      <th className="p-2 text-center">L</th>
                      <th className="p-2 text-center">GF</th>
                      <th className="p-2 text-center">GA</th>
                      <th className="p-2 text-center">GD</th>
                      <th className="p-2 text-center">Pts</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-200 bg-ucl-gold/10">
                      <td className="p-2 font-medium">1</td>
                      <td className="p-2 font-medium">Inter Milan</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">5</td>
                      <td className="p-2 text-center">1</td>
                      <td className="p-2 text-center">0</td>
                      <td className="p-2 text-center">12</td>
                      <td className="p-2 text-center">2</td>
                      <td className="p-2 text-center">+10</td>
                      <td className="p-2 text-center font-bold">16</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-ucl-gold/5">
                      <td className="p-2 font-medium">2</td>
                      <td className="p-2">RB Leipzig</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">4</td>
                      <td className="p-2 text-center">0</td>
                      <td className="p-2 text-center">2</td>
                      <td className="p-2 text-center">10</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">+4</td>
                      <td className="p-2 text-center font-medium">12</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-medium">3</td>
                      <td className="p-2">Manchester City</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">3</td>
                      <td className="p-2 text-center">1</td>
                      <td className="p-2 text-center">2</td>
                      <td className="p-2 text-center">11</td>
                      <td className="p-2 text-center">8</td>
                      <td className="p-2 text-center">+3</td>
                      <td className="p-2 text-center">10</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-medium">4</td>
                      <td className="p-2">Benfica</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">0</td>
                      <td className="p-2 text-center">0</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">3</td>
                      <td className="p-2 text-center">20</td>
                      <td className="p-2 text-center">-17</td>
                      <td className="p-2 text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2 w-3 h-3 bg-ucl-gold rounded-full"></span>
                PSG's Group Stage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-ucl-blue text-white text-xs md:text-sm">
                      <th className="p-2 text-left">Pos</th>
                      <th className="p-2 text-left">Team</th>
                      <th className="p-2 text-center">P</th>
                      <th className="p-2 text-center">W</th>
                      <th className="p-2 text-center">D</th>
                      <th className="p-2 text-center">L</th>
                      <th className="p-2 text-center">GF</th>
                      <th className="p-2 text-center">GA</th>
                      <th className="p-2 text-center">GD</th>
                      <th className="p-2 text-center">Pts</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-200 bg-ucl-gold/10">
                      <td className="p-2 font-medium">1</td>
                      <td className="p-2 font-medium">Bayern Munich</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">5</td>
                      <td className="p-2 text-center">0</td>
                      <td className="p-2 text-center">1</td>
                      <td className="p-2 text-center">14</td>
                      <td className="p-2 text-center">5</td>
                      <td className="p-2 text-center">+9</td>
                      <td className="p-2 text-center font-bold">15</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-ucl-gold/5">
                      <td className="p-2 font-medium">2</td>
                      <td className="p-2">PSG</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">4</td>
                      <td className="p-2 text-center">2</td>
                      <td className="p-2 text-center">0</td>
                      <td className="p-2 text-center">13</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">+7</td>
                      <td className="p-2 text-center font-medium">14</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-medium">3</td>
                      <td className="p-2">AC Milan</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">1</td>
                      <td className="p-2 text-center">2</td>
                      <td className="p-2 text-center">3</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">9</td>
                      <td className="p-2 text-center">-3</td>
                      <td className="p-2 text-center">5</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-medium">4</td>
                      <td className="p-2">Newcastle United</td>
                      <td className="p-2 text-center">6</td>
                      <td className="p-2 text-center">1</td>
                      <td className="p-2 text-center">2</td>
                      <td className="p-2 text-center">3</td>
                      <td className="p-2 text-center">4</td>
                      <td className="p-2 text-center">9</td>
                      <td className="p-2 text-center">-5</td>
                      <td className="p-2 text-center">5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Knockout Stage */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2 w-3 h-3 bg-ucl-gold rounded-full"></span>
                Knockout Stage Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {/* Round of 16 */}
                <div>
                  <h3 className="font-medium mb-3 text-center py-2 bg-ucl-blue text-white">Round of 16</h3>
                  <div className="space-y-3">
                    <div className="border rounded p-3">
                      <div className="font-medium mb-2">Inter Milan vs RB Leipzig</div>
                      <div className="grid grid-cols-3">
                        <div>1st Leg</div>
                        <div className="font-medium text-center">3-1</div>
                        <div className="text-right">Home</div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div>2nd Leg</div>
                        <div className="font-medium text-center">2-1</div>
                        <div className="text-right">Away</div>
                      </div>
                      <div className="mt-2 text-center bg-gray-100 py-1 rounded font-medium">
                        Inter win 5-2
                      </div>
                    </div>
                    
                    <div className="border rounded p-3">
                      <div className="font-medium mb-2">PSG vs Real Sociedad</div>
                      <div className="grid grid-cols-3">
                        <div>1st Leg</div>
                        <div className="font-medium text-center">2-0</div>
                        <div className="text-right">Home</div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div>2nd Leg</div>
                        <div className="font-medium text-center">2-1</div>
                        <div className="text-right">Away</div>
                      </div>
                      <div className="mt-2 text-center bg-gray-100 py-1 rounded font-medium">
                        PSG win 4-1
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quarter Finals */}
                <div>
                  <h3 className="font-medium mb-3 text-center py-2 bg-ucl-blue text-white">Quarter Finals</h3>
                  <div className="space-y-3">
                    <div className="border rounded p-3">
                      <div className="font-medium mb-2">Inter Milan vs Arsenal</div>
                      <div className="grid grid-cols-3">
                        <div>1st Leg</div>
                        <div className="font-medium text-center">1-0</div>
                        <div className="text-right">Home</div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div>2nd Leg</div>
                        <div className="font-medium text-center">2-2</div>
                        <div className="text-right">Away</div>
                      </div>
                      <div className="mt-2 text-center bg-gray-100 py-1 rounded font-medium">
                        Inter win 3-2
                      </div>
                    </div>
                    
                    <div className="border rounded p-3">
                      <div className="font-medium mb-2">PSG vs Barcelona</div>
                      <div className="grid grid-cols-3">
                        <div>1st Leg</div>
                        <div className="font-medium text-center">2-3</div>
                        <div className="text-right">Home</div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div>2nd Leg</div>
                        <div className="font-medium text-center">4-1</div>
                        <div className="text-right">Away</div>
                      </div>
                      <div className="mt-2 text-center bg-gray-100 py-1 rounded font-medium">
                        PSG win 6-4
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Semi Finals */}
                <div>
                  <h3 className="font-medium mb-3 text-center py-2 bg-ucl-blue text-white">Semi Finals</h3>
                  <div className="space-y-3">
                    <div className="border rounded p-3">
                      <div className="font-medium mb-2">Inter Milan vs Dortmund</div>
                      <div className="grid grid-cols-3">
                        <div>1st Leg</div>
                        <div className="font-medium text-center">2-0</div>
                        <div className="text-right">Home</div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div>2nd Leg</div>
                        <div className="font-medium text-center">1-1</div>
                        <div className="text-right">Away</div>
                      </div>
                      <div className="mt-2 text-center bg-gray-100 py-1 rounded font-medium">
                        Inter win 3-1
                      </div>
                    </div>
                    
                    <div className="border rounded p-3">
                      <div className="font-medium mb-2">PSG vs Bayern Munich</div>
                      <div className="grid grid-cols-3">
                        <div>1st Leg</div>
                        <div className="font-medium text-center">1-0</div>
                        <div className="text-right">Home</div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div>2nd Leg</div>
                        <div className="font-medium text-center">2-2</div>
                        <div className="text-right">Away</div>
                      </div>
                      <div className="mt-2 text-center bg-gray-100 py-1 rounded font-medium">
                        PSG win 3-2
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Final */}
                <div>
                  <h3 className="font-medium mb-3 text-center py-2 bg-ucl-gold text-ucl-blue">Final</h3>
                  <div className="border rounded p-3 bg-ucl-blue/5">
                    <div className="text-center mb-3">
                      <span className="bg-ucl-gold text-xs text-ucl-blue px-2 py-1 rounded-full">
                        May 31, 2025 • Wembley Stadium
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center justify-center w-full">
                        <div className="text-right pr-3 flex-1">
                          <span className="font-medium">Inter Milan</span>
                        </div>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/512px-FC_Internazionale_Milano_2021.svg.png"
                          alt="Inter Milan"
                          className="h-8 w-8 object-contain"
                        />
                        <div className="px-3 font-bold">VS</div>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/512px-Paris_Saint-Germain_F.C..svg.png"
                          alt="Paris Saint-Germain"
                          className="h-8 w-8 object-contain"
                        />
                        <div className="text-left pl-3 flex-1">
                          <span className="font-medium">PSG</span>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="text-sm text-gray-500">Kickoff: 20:00 CET</div>
                        <div className="mt-3 font-medium text-ucl-blue">
                          Match in progress
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <div className="text-sm bg-gray-100 p-2 rounded">
                      <span className="font-medium">TV Coverage:</span> BT Sport, CBS, DAZN
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

export default Tables;
