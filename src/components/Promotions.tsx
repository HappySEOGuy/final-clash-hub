
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
            Bookmaker Promotions
          </h2>
          <Award className="text-ucl-gold ml-2 h-6 w-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Promotion 1 */}
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
          
          {/* Promotion 2 */}
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
          
          {/* Promotion 3 */}
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
          
          {/* Promotion 4 */}
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
          
          {/* Promotion 5 */}
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
          
          {/* Promotion 6 */}
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

        <div className="mt-10 bg-gray-100 p-4 rounded-lg text-sm text-center text-gray-600">
          T&Cs apply to all promotions. You must be 18+ to bet. Please gamble responsibly.
        </div>
      </div>
    </section>
  );
};

export default Promotions;
