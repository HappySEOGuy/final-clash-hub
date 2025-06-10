
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const BlogSection = ({ isFullPage = false }: { isFullPage?: boolean }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = isFullPage ? 9 : 3;

  // Extended blog posts data
  const allBlogPosts = [
    {
      id: 1,
      title: 'Jak wykorzystać kody promocyjne bukmacherów?',
      excerpt: 'Dowiedz się, jak maksymalnie wykorzystać kody promocyjne i bonusy powitalne od polskich bukmacherów.',
      date: '10.05.2025',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop',
      author: 'Michał Kowalski',
      category: 'Poradniki'
    },
    {
      id: 2,
      title: 'Najlepsze bonusy powitalne maj 2025',
      excerpt: 'Przegląd najlepszych ofert powitalnych dostępnych dla nowych graczy w maju 2025 roku.',
      date: '05.05.2025',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      author: 'Anna Nowak',
      category: 'Rankingi'
    },
    {
      id: 3,
      title: 'Systemy bukmacherskie - czy warto?',
      excerpt: 'Analiza popularnych systemów obstawiania i ich faktycznej skuteczności w długim okresie.',
      date: '29.04.2025',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
      author: 'Piotr Wiśniewski',
      category: 'Strategie'
    },
    {
      id: 4,
      title: 'Analiza statystyczna w obstawianiu',
      excerpt: 'Poznaj najważniejsze wskaźniki statystyczne, które pomogą Ci w podejmowaniu lepszych decyzji bukmacherskich.',
      date: '25.04.2025',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      author: 'Katarzyna Zielińska',
      category: 'Strategie'
    },
    {
      id: 5,
      title: 'Zarządzanie bankrollem - podstawy',
      excerpt: 'Fundamentalne zasady zarządzania budżetem w bukmacherce, które każdy typujący powinien znać.',
      date: '20.04.2025',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
      author: 'Tomasz Kowalczyk',
      category: 'Poradniki'
    },
    {
      id: 6,
      title: 'Live betting - strategie na żywo',
      excerpt: 'Jak skutecznie obstawiać mecze na żywo i jakie są najlepsze strategie dla live bettingu.',
      date: '15.04.2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      author: 'Marcin Nowak',
      category: 'Strategie'
    },
    {
      id: 7,
      title: 'Porównanie polskich bukmacherów 2025',
      excerpt: 'Szczegółowe porównanie wszystkich legalnych bukmacherów działających w Polsce.',
      date: '10.04.2025',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
      author: 'Agnieszka Lewandowska',
      category: 'Rankingi'
    },
    {
      id: 8,
      title: 'Podatek od wygranych - co musisz wiedzieć',
      excerpt: 'Kompletny przewodnik po opodatkowaniu wygranych w Polsce i jak prawidłowo rozliczyć się z fiskusem.',
      date: '05.04.2025',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop',
      author: 'Robert Kowalski',
      category: 'Poradniki'
    },
    {
      id: 9,
      title: 'Najlepsze aplikacje mobilne bukmacherów',
      excerpt: 'Przegląd i ocena aplikacji mobilnych polskich bukmacherów - funkcjonalność, wygoda użytkowania.',
      date: '01.04.2025',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      author: 'Paweł Wiśniewski',
      category: 'Rankingi'
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allBlogPosts.slice(startIndex, startIndex + postsPerPage);

  // Function to get a background color for the category pill
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Poradniki': '#1652b3',
      'Rankingi': '#d92121',
      'Strategie': '#0e1f52',
      'Promocje': '#fccc00',
    };
    
    return colors[category] || '#001c58';
  };

  return (
    <div className={`${isFullPage ? 'bg-gray-50' : 'bg-white'} ${isFullPage ? 'py-8' : 'py-14'}`}>
      <div className="container mx-auto px-4">
        {!isFullPage && (
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#001c58]">
              Blog Bukmacherski
            </h2>
            <Link to="/blog" className="text-[#001c58] hover:underline font-semibold flex items-center">
              Wszystkie artykuły
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}
        
        <div className={`grid grid-cols-1 ${isFullPage ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'} gap-6`}>
          {currentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span 
                    className="text-xs font-semibold text-white px-2 py-1 rounded-full"
                    style={{ backgroundColor: getCategoryColor(post.category) }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-[#001c58] line-clamp-2 hover:text-[#1652b3] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">
                    {post.author}
                  </span>
                  
                  <Button variant="ghost" className="text-[#001c58] hover:bg-slate-50 p-0">
                    Czytaj więcej
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {isFullPage && totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
        
        {!isFullPage && (
          <div className="flex justify-center mt-8">
            <Link to="/blog">
              <Button className="bg-[#001c58] hover:bg-[#0a2b6b] text-white px-8">
                Więcej artykułów
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
