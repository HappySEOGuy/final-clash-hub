
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flag } from "lucide-react";

const Teams = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="bg-ucl-blue text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <Flag className="text-ucl-gold mr-2 h-5 w-5" />
              <h1 className="text-3xl font-bold">Team Profiles</h1>
              <Flag className="text-ucl-gold ml-2 h-5 w-5" />
            </div>
            <p className="text-center max-w-2xl mx-auto">
              Detailed information about Inter Milan and Paris Saint-Germain, the two finalists of this year's UEFA Champions League.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="inter" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="inter">Inter Milan</TabsTrigger>
                <TabsTrigger value="psg">Paris Saint-Germain</TabsTrigger>
              </TabsList>
              
              {/* Inter Milan Tab */}
              <TabsContent value="inter">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Card>
                      <CardHeader className="text-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/512px-FC_Internazionale_Milano_2021.svg.png"
                          alt="Inter Milan"
                          className="h-32 w-32 mx-auto"
                        />
                        <CardTitle className="mt-4">Inter Milan</CardTitle>
                        <CardDescription>FC Internazionale Milano</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Founded</h3>
                            <p>March 9, 1908</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Stadium</h3>
                            <p>San Siro / Giuseppe Meazza</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Capacity</h3>
                            <p>75,923</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Manager</h3>
                            <p>Simone Inzaghi</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">President</h3>
                            <p>Steven Zhang</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Leagues</h3>
                            <p>Serie A (Italy)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Club History</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p className="mb-4">
                          Founded in 1908, Football Club Internazionale Milano, commonly referred to as Inter Milan, is one of Italy's most successful clubs. The club was formed by a group of Milan Cricket and Football Club (now AC Milan) members who wanted to allow foreign players to join, hence the name "Internazionale."
                        </p>
                        <p className="mb-4">
                          Inter has never been relegated from the top flight of Italian football since its founding and is the only Italian club to have achieved this feat. The club has won 19 Serie A titles, 8 Coppa Italia trophies, 6 Supercoppa Italiana titles, 3 European Cups/Champions Leagues, 3 UEFA Cups, 2 Intercontinental Cups, and 1 FIFA Club World Cup.
                        </p>
                        <p>
                          Under the management of Simone Inzaghi, Inter has built a team combining experienced veterans and talented younger players. They have developed a reputation for tactical flexibility with their 3-5-2 system, strong defensive organization, and quick transition attacks.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Key Players</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                              LM
                            </div>
                            <div>
                              <h4 className="font-medium">Lautaro Martínez</h4>
                              <p className="text-sm text-gray-500">Forward • Argentina</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                              HC
                            </div>
                            <div>
                              <h4 className="font-medium">Hakan Çalhanoğlu</h4>
                              <p className="text-sm text-gray-500">Midfielder • Turkey</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                              AB
                            </div>
                            <div>
                              <h4 className="font-medium">Alessandro Bastoni</h4>
                              <p className="text-sm text-gray-500">Defender • Italy</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                              NS
                            </div>
                            <div>
                              <h4 className="font-medium">Nicolò Barella</h4>
                              <p className="text-sm text-gray-500">Midfielder • Italy</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                              MT
                            </div>
                            <div>
                              <h4 className="font-medium">Marcus Thuram</h4>
                              <p className="text-sm text-gray-500">Forward • France</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                              YS
                            </div>
                            <div>
                              <h4 className="font-medium">Yann Sommer</h4>
                              <p className="text-sm text-gray-500">Goalkeeper • Switzerland</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Champions League History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium">UEFA Champions League / European Cup Titles</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>1963/64 - Beat Real Madrid 3-1</li>
                              <li>1964/65 - Beat Benfica 1-0</li>
                              <li>2009/10 - Beat Bayern Munich 2-0</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium">Runner-up Finishes</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>1966/67 - Lost to Celtic 1-2</li>
                              <li>1971/72 - Lost to Ajax 0-2</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium">Recent Champions League Performances</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>2022/23 - Runner-up (Lost to Manchester City 0-1)</li>
                              <li>2021/22 - Round of 16</li>
                              <li>2020/21 - Group Stage</li>
                              <li>2019/20 - Runner-up (Lost to Sevilla 2-3 in Europa League Final)</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* PSG Tab */}
              <TabsContent value="psg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Card>
                      <CardHeader className="text-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/512px-Paris_Saint-Germain_F.C..svg.png"
                          alt="Paris Saint-Germain"
                          className="h-32 w-32 mx-auto"
                        />
                        <CardTitle className="mt-4">Paris Saint-Germain</CardTitle>
                        <CardDescription>Paris Saint-Germain Football Club</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Founded</h3>
                            <p>August 12, 1970</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Stadium</h3>
                            <p>Parc des Princes</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Capacity</h3>
                            <p>47,929</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Manager</h3>
                            <p>Luis Enrique</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">President</h3>
                            <p>Nasser Al-Khelaifi</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Leagues</h3>
                            <p>Ligue 1 (France)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="md:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Club History</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p className="mb-4">
                          Paris Saint-Germain, commonly known as PSG, was founded in 1970 through the merger of Paris FC and Stade Saint-Germain. The club has established itself as the most successful club in French football, with a record 11 Ligue 1 titles, 14 French Cups, and 10 French League Cups.
                        </p>
                        <p className="mb-4">
                          PSG's history changed dramatically in 2011 when Qatar Sports Investments acquired the club, making it one of the wealthiest clubs in the world. Since then, PSG has dominated French football and attracted some of the world's best players.
                        </p>
                        <p>
                          Under the management of Luis Enrique, PSG has developed a possession-based style with an emphasis on technical quality, high pressing, and explosive attacking play. Despite their domestic success, the club's main ambition remains winning the UEFA Champions League, a trophy that has so far eluded them despite reaching the final in 2020.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Key Players</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                              KM
                            </div>
                            <div>
                              <h4 className="font-medium">Kylian Mbappé</h4>
                              <p className="text-sm text-gray-500">Forward • France</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                              AH
                            </div>
                            <div>
                              <h4 className="font-medium">Achraf Hakimi</h4>
                              <p className="text-sm text-gray-500">Defender • Morocco</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                              GD
                            </div>
                            <div>
                              <h4 className="font-medium">Gianluigi Donnarumma</h4>
                              <p className="text-sm text-gray-500">Goalkeeper • Italy</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                              WZ
                            </div>
                            <div>
                              <h4 className="font-medium">Warren Zaïre-Emery</h4>
                              <p className="text-sm text-gray-500">Midfielder • France</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                              OD
                            </div>
                            <div>
                              <h4 className="font-medium">Ousmane Dembélé</h4>
                              <p className="text-sm text-gray-500">Forward • France</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                              MU
                            </div>
                            <div>
                              <h4 className="font-medium">Marquinhos</h4>
                              <p className="text-sm text-gray-500">Defender • Brazil</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Champions League History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium">UEFA Champions League / European Cup Titles</h4>
                            <p className="text-sm mt-2 italic">
                              PSG has not yet won the UEFA Champions League.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium">Runner-up Finishes</h4>
                            <ul className="list-disc list-inside text-sm mt-2">
                              <li>2019/20 - Lost to Bayern Munich 0-1</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium">Recent Champions League Performances</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>2022/23 - Round of 16</li>
                              <li>2021/22 - Round of 16</li>
                              <li>2020/21 - Semi-Finals</li>
                              <li>2019/20 - Runners-up</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium">Road to the First Champions League Final</h4>
                            <p className="text-sm mt-2">
                              Despite becoming one of the wealthiest clubs in world football after the 2011 takeover by Qatar Sports Investments, PSG had to wait until 2020 to reach their first Champions League final. After years of heavy investment and domestic dominance, PSG finally achieved this milestone under Thomas Tuchel, but fell short against Bayern Munich with a 0-1 loss in the final.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Teams;
