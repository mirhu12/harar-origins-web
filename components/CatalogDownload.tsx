'use client';

import React from 'react';

export default function CatalogDownload() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-16 bg-coffee-900 text-white border-t border-b border-coffee-800 print:bg-white print:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="space-y-2 text-center md:text-left">
          <div className="text-gold-400 font-bold text-xs uppercase tracking-widest print:text-black">
            Executive Procurement Sheet
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Need an Offline Spec Sheet for F&B Approval?
          </h3>
          <p className="text-xs text-gray-300 max-w-xl print:text-gray-600">
            Download or print our complete commercial product matrix—including cupping scores, roast levels, Directive 975 invoicing terms, and packaging specs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 print:hidden">
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-coffee-900 font-bold text-xs rounded-xl transition shadow-lg flex items-center gap-2"
          >
            <i className="fa-solid fa-print text-sm"></i>
            Print / Save as PDF
          </button>
        </div>

      </div>
    </section>
  );
}