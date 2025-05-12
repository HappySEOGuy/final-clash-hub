
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Jak wykorzystać kody promocyjne bukmacherów?',
      excerpt: 'Dowiedz się, jak maksymalnie wykorzystać kody promocyjne i bonusy powitalne od polskich bukmacherów.',
      date: '10.05.2025',
      image: 'bonus',
      author: 'Michał Kowalski',
      category: 'Poradniki'
    },
    {
      id: 2,
      title: 'Najlepsze bonusy powitalne maj 2025',
      excerpt: 'Przegląd najlepszych ofert powitalnych dostępnych dla nowych graczy w maju 2025 roku.',
      date: '05.05.2025',
      image: 'bookmaker',
      author: 'Anna Nowak',
      category: 'Rankingi'
    },
    {
      id: 3,
      title: 'Systemy bukmacherskie - czy warto?',
      excerpt: 'Analiza popularnych systemów obstawiania i ich faktycznej skuteczności w długim okresie.',
      date: '29.04.2025',
      image: 'betting',
      author: 'Piotr Wiśniewski',
      category: 'Strategie'
    }
  ];

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

  // Function to get a placeholder background for blog post image
  const getImageBackground = (type: string): string => {
    const colors: Record<string, string> = {
      'bonus': '#1652b3',
      'bookmaker': '#d92121',
      'betting': '#0e1f52',
    };
    
    return colors[type] || '#001c58';
  };

  return (
    <div className="bg-white py-14">
      <div className="container mx-auto px-4">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div 
                className="h-48 flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: getImageBackground(post.image) }}
              >
                {/* Placeholder for actual blog image */}
                <span>Blog Image</span>
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
                
                <h3 className="text-xl font-bold mb-2 text-[#001c58] line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">
                    Autor: {post.author}
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
        
        <div className="flex justify-center mt-8">
          <Button className="bg-[#001c58] hover:bg-[#0a2b6b] text-white px-8">
            Więcej artykułów
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
