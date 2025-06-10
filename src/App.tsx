
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Teams from "./pages/Teams";
import Odds from "./pages/Odds";
import Promotions from "./pages/Promotions";
import KodyPromocyjne from "./pages/KodyPromocyjne";
import SuperbetReviews from "./pages/SuperbetReviews";
import StatsPage from "./pages/Stats";
import TablesPage from "./pages/TablesPage";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/odds" element={<Odds />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/promocje" element={<Promotions />} />
          <Route path="/kody-promocyjne" element={<KodyPromocyjne />} />
          <Route path="/recenzje/superbet" element={<SuperbetReviews />} />
          <Route path="/recenzje-superbet" element={<SuperbetReviews />} />
          <Route path="/recenzje" element={<SuperbetReviews />} />
          <Route path="/kody" element={<Index />} />
          <Route path="/bukmacherzy" element={<Index />} />
          <Route path="/opinie" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/tables" element={<TablesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
