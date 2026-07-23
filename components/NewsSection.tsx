'use client';

import React from 'react';

interface Article {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  icon: string;
  image?: string;
}

const articles: Article[] = [
  {
    id: 'harar-harvest-2026',
    category: 'Origin & Harvest Report',
    title: 'The 2026 Eastern Highland Harvest: Notes from Harar',
    date: 'July 2026',
    readTime: '4 min read',
    excerpt: 'Sun-drying on elevated African beds has yielded exceptional natural sweetness this season, with distinct blueberry and dark cocoa cupping scores.',
    icon: 'fa-sun',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'roasting-for-espresso',
    category: 'Roastery Insights',
    title: 'Engineering Roast Profiles for High-Crema Commercial Espresso',
    date: 'June 2026',
    readTime: '6 min read',
    excerpt: 'How our roast masters balance caramelization and bean density to maximize body and flavor consistency across commercial hotel machinery.',
    icon: 'fa-fire-burner',
  },
  {
    id: 'direct-trade-impact',
    category: 'Sourcing & Ethics',
    title: 'Traceable Direct-Trade: Partnering with Primary Cooperatives',
    date: 'May 2026',
    readTime: '5 min read',
    excerpt: 'Why direct partnerships in Harar and Yirgacheffe yield Grade 1 ECTA exports while guaranteeing fair premiums for smallholder farmers.',
    icon: 'fa-handshake-angle',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-gray-50 text-coffee-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Harvest & Roastery Insights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-900 mt-2">
              Latest News & Field Updates
            </h2>
          </div>
          <p className="text-gray-600 text-sm max-w-md">
            Direct reports from our harvest partners across Harar and roastery updates from our facility in Addis Ababa.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Article Image if present */}
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                )}

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="inline-flex items-center gap-2 bg-coffee-50 text-coffee-900 font-semibold px-3 py-1 rounded-full border border-coffee-100">
                    <i className={`fa-solid ${article.icon} text-gold-600`} />
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-coffee-900 group-hover:text-gold-600 transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-coffee-900">
                <span className="text-gray-400">{article.date}</span>
                <span className="flex items-center gap-1 text-gold-600 group-hover:translate-x-1 transition-transform">
                  Read Update <i className="fa-solid fa-arrow-right text-[10px]" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}