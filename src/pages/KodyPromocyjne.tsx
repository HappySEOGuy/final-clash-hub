
import React from 'react';
import KodyNavigation from "@/components/KodyNavigation";
import KodyFooter from "@/components/KodyFooter";
import SuperbetPromoCode from "@/components/SuperbetPromoCode";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

const KodyPromocyjne = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <KodyNavigation />
      <main className="flex-grow">
        <div className="bg-purple-gradient text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Kody Promocyjne Bukmacherskie</h1>
            <p className="text-center max-w-2xl mx-auto mt-4">
              Najlepsze kody promocyjne od legalnych bukmacherów. Skorzystaj z ekskluzywnych ofert i odbierz dodatkowe bonusy.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <NavigationMenu className="justify-center mb-10 max-w-full">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/kody-promocyjne">
                  <div className={navigationMenuTriggerStyle()}>
                    Wszystkie kody
                  </div>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Popularne kody</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2">
                    <li>
                      <Link to="/kody-promocyjne">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Superbet</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Kod promocyjny KODVIPA - bonus do 3755 zł
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/kody-promocyjne">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Fortuna</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Kod promocyjny GWIAZDVIP - bonus do 375 zł
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/kody-promocyjne">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">STS</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Kod promocyjny STSMAX - bonus do 760 zł
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/kody-promocyjne">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Fuksiarz</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Kod promocyjny FUKSMAX - bonus do 1060 zł
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Kategorie</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cashback</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Promocje z możliwością zwrotu środków
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Freebety</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Darmowe zakłady bez depozytu
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Bonusy od wpłaty</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Bonusy zwiększające wpłacone środki
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Promocje stałe</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Długoterminowe oferty dla graczy
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <SuperbetPromoCode />
        </div>
      </main>
      <KodyFooter />
    </div>
  );
};

export default KodyPromocyjne;
