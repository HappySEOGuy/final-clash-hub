
import React from 'react';
import SuperbetNavbar from '@/components/superbet/SuperbetNavbar';
import SuperbetFooter from '@/components/superbet/SuperbetFooter';
import BlogSection from '@/components/BlogSection';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SuperbetNavbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#001c58] to-[#0B1D51] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-rubik">
              Blog Bukmacherski
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Odkryj najlepsze strategie obstawiania, analizy meczów i aktualne informacje ze świata bukmacherki
            </p>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="py-12">
          <BlogSection isFullPage={true} />
        </div>
      </main>
      <SuperbetFooter />
    </div>
  );
};

export default Blog;
