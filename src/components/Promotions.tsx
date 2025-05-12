
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

const Promotions = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-10">
          <Award className="text-ucl-gold mr-2 h-6 w-6" />
          <h2 className="text-3xl font-bold text-center text-ucl-blue">
            Promocje Bukmacherskie
          </h2>
          <Award className="text-ucl-gold ml-2 h-6 w-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Promotion 1 - Bet365 */}
          <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">Bet365</span>
                Money Back Special
              </CardTitle>
              <CardDescription>Limited time offer for the UCL Final</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Get your stake back as a Free Bet up to £/€50 if your first goalscorer bet 
                loses but your player scores later in the match.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Valid for the UCL final only</li>
                <li>Maximum refund: £/€50</li>
                <li>Must place bet before kickoff</li>
                <li>New and existing customers</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-500 hover:bg-green-600">
                Claim Offer
              </Button>
            </CardFooter>
          </Card>
          
          {/* Promotion 2 - William Hill */}
          <Card className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">William Hill</span>
                Enhanced Odds
              </CardTitle>
              <CardDescription>Special offer for new customers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Get enhanced odds of 40/1 on either Inter or PSG to win the Champions League final 
                when you open a new account.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>New customers only</li>
                <li>Maximum bet: £/€1</li>
                <li>Paid in free bets</li>
                <li>Expires at kickoff</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Claim Offer
              </Button>
            </CardFooter>
          </Card>
          
          {/* Promotion 3 - Paddy Power */}
          <Card className="border-t-4 border-t-red-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">Paddy Power</span>
                Early Payout
              </CardTitle>
              <CardDescription>Exclusive Champions League final offer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Place a bet on either team to win and get paid out as a winner if your team 
                goes 2 goals ahead at any point in the match.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Applies to pre-match bets</li>
                <li>90 minutes only (not ET)</li>
                <li>All customers eligible</li>
                <li>T&Cs apply</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Claim Offer
              </Button>
            </CardFooter>
          </Card>
          
          {/* Promotion 4 - Betfair */}
          <Card className="border-t-4 border-t-purple-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">Betfair</span>
                Free Bet Bundle
              </CardTitle>
              <CardDescription>Champions League special offer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Get £/€30 in free bets when you place a £/€10 bet on any Champions League final market.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>New customers only</li>
                <li>Minimum odds: 1/2 (1.5)</li>
                <li>Free bets valid for 30 days</li>
                <li>Deposit method restrictions apply</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-500 hover:bg-purple-600">
                Claim Offer
              </Button>
            </CardFooter>
          </Card>
          
          {/* Promotion 5 - 888sport */}
          <Card className="border-t-4 border-t-amber-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">888sport</span>
                Double Winnings
              </CardTitle>
              <CardDescription>Limited time Champions League offer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Double your winnings if your team scores in both halves of the Champions League final.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Pre-match match result bets only</li>
                <li>Extra winnings paid as free bets</li>
                <li>Maximum bonus: £/€100</li>
                <li>Existing customers welcome</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-amber-500 hover:bg-amber-600">
                Claim Offer
              </Button>
            </CardFooter>
          </Card>
          
          {/* Promotion 6 - Unibet */}
          <Card className="border-t-4 border-t-teal-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">Unibet</span>
                UCL Final Bundle
              </CardTitle>
              <CardDescription>Complete Champions League package</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Deposit £/€20, get £/€40 in bonuses plus a £/€10 casino bonus for the Champions League final.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>New customers only</li>
                <li>3x wagering on bonus amount</li>
                <li>Minimum odds: 2/5 (1.4)</li>
                <li>Expires 24 hours after the final</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-teal-500 hover:bg-teal-600">
                Claim Offer
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Promocje bukmacherskie na finał Ligi Mistrzów 2025</h3>
          <p className="mb-4">
            Promocje na finał Ligi Mistrzów to doskonała okazja, by zwiększyć emocje podczas obstawiania meczu PSG – Inter. Mecze półfinałowe, zwłaszcza rewanże, dostarczają niezapomnianych emocji, gdyż to właśnie one decydują o awansie do finału. Bukmacherzy prześcigają się w ofertach, które przyciągają zarówno nowych, jak i doświadczonych graczy.
          </p>
          
          <h4 className="text-lg font-semibold mt-6 mb-3">Najciekawsze promocje bukmacherskie na PSG – Inter:</h4>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <span className="font-medium">STS:</span> Największy polski bukmacher oferuje swoim nowym graczom zakład bez ryzyka o wartości 100 zł, który można wykorzystać do obstawienia francusko-włoskiego starcia.
            </li>
            <li>
              <span className="font-medium">Fortuna:</span> ten bukmacher także posiada w swojej ofercie zakład bez ryzyka o wartości 100 zł. Co jednak najważniejsze, zwróconymi środkami w razie ewentualnego niepowodzenia nie trzeba w jakikolwiek sposób obracać!
            </li>
            <li>
              <span className="font-medium">Superbet:</span> jeszcze większą kwotę cashbacku swoim nowym graczom ma do zaproponowania Superbet. Dołączając do szerokiego grona jego klientów, można otrzymać aż do 3500 zł cashbacku po pierwszym tygodniu korzystania z jego usług!
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            Wymienione wyżej promocje na Finał Ligi Mistrzów są dostępne już teraz, a zostały przez nas wspomniane ze względu na ich ogólną atrakcyjność z perspektywy graczy. Jesteśmy jednak pewni, że wraz z upływem kolejnych dni dzielących nas od starcia PSG – Inter, poszczególni legalni bukmacherzy będą mieli do zaoferowania jeszcze więcej w postaci promocji dotyczących wyłącznie tegorocznego finału Champions League.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Gdzie obstawić finał Ligi Mistrzów z bonusem?</h3>
          <p className="mb-4">
            Aby w pełni wykorzystać Promocje na Finał Ligi Mistrzów, warto wybrać renomowanych bukmacherów, 
            takich jak STS, Fortuna, Superbet. Proces jest prosty:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>Zarejestruj się na stronie bukmachera, podając kod promocyjny: KODVIPA.</li>
            <li>Wpłać wymagany depozyt, np. 50 zł.</li>
            <li>Postaw zakład na finał Ligi Mistrzów 2025, typując wynik lub inne wydarzenie – zależnie od promocji.</li>
            <li>Odbierz bonus po spełnieniu warunków promocji.</li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
            T&Cs apply to all promotions. You must be 18+ to bet. Please gamble responsibly.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
