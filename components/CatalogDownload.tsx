'use client';

import React from 'react';

export default function CatalogDownload() {
  return (
    <section id="catalog" className="py-20 bg-coffee-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-coffee-900 border border-coffee-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative min-h-[320px] p-4 sm:p-6">
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop"
              alt="Harar Origins Wholesale Catalog"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-4 sm:inset-6 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent rounded-3xl pointer-events-none" />
            <span className="absolute bottom-8 left-8 bg-gold-500/90 text-coffee-950 font-bold text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider backdrop-blur-md">
              2026 Wholesale Spec Sheet
            </span>
          </div>

          {/* Text & Action Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
            <span className="text-gold-500 font-bold text-xs uppercase tracking-widest">
              Commercial Coffee Catalog
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Download Our Wholesale & Export Product Guide
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Get complete cupping profiles, origin elevation maps, minimum order quantities (MOQ), valve packaging options, and FOB/CIP export terms across our Harar, Sidama, and Yirgacheffe Grade 1 offerings.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/harar-origins-catalog.pdf"
                download
                className="bg-gold-500 hover:bg-gold-600 text-coffee-950 font-bold text-sm px-8 py-4 rounded-xl transition duration-200 shadow-lg flex items-center justify-center gap-3 group"
              >
                <i className="fa-solid fa-file-pdf text-base group-hover:scale-110 transition-transform" />
                Download Catalog (PDF)
              </a>

              <a
                href="#contact"
                className="border border-coffee-700 hover:border-gold-500 text-gray-200 hover:text-white font-medium text-sm px-6 py-4 rounded-xl transition duration-200 flex items-center justify-center gap-2"
              >
                Request Print Copy
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-gray-400 border-t border-coffee-800/80">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-check text-gold-500" /> ECTA Certified Grades
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-check text-gold-500" /> B2B Sample Pricing Included
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}