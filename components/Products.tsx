import React from 'react';

const PRODUCTS = [
  {
    name: 'Harar Mocha Espresso',
    type: 'Signature Espresso Blend',
    origin: 'Harar Shortberry & Limu Washed',
    roast: 'Medium-Dark',
    score: '86.0 PTS',
    notes: ['Dark Cocoa', 'Wild Blueberry', 'Cardamom'],
    badge: 'Bestseller',
    badgeColor: 'bg-gold-500 text-coffee-900',
    description: 'A robust, chocolatey espresso engineered with natural Harar beans for thick crema and sweet berry complexity.'
  },
  {
    name: 'Golden Harar Longberry',
    type: 'Single Origin Natural',
    origin: '100% Grade 1 Harar Longberry',
    roast: 'Medium',
    score: '88.5 PTS',
    notes: ['Ripe Blackberry', 'Wild Berry Wine', 'Spiced Honey'],
    badge: 'Micro-Lot',
    badgeColor: 'bg-amber-200 text-coffee-900',
    description: 'Sun-dried on raised African beds in eastern Ethiopia. Famous worldwide for its distinctive winey acidity and blueberry aroma.'
  },
  {
    name: 'Abyssinia Floral Filter',
    type: 'Single Origin Filter',
    origin: '100% Grade 2 Yirgacheffe Washed',
    roast: 'Light-Medium',
    score: '87.5 PTS',
    notes: ['Jasmine Blossom', 'Citrus Zest', 'Sweet Cane'],
    badge: 'Specialty',
    badgeColor: 'bg-gold-500 text-coffee-900',
    description: 'Delicate floral tea-like cup tailored for batch drip brewing, hotel executive lounges, and pour-over service.'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-gold-600 font-bold text-sm tracking-widest uppercase">
            Signature Blends & Single Origins
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-900">
            Crafted for Commercial & Specialty Needs
          </h2>
          <p className="text-gray-600">
            Available in 1kg commercial bulk bags and 250g retail packages with custom valve seals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-coffee-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col group"
            >
              <div className="bg-coffee-900 p-6 text-white relative">
                <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm ${p.badgeColor}`}>
                  {p.badge}
                </span>
                <div className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {p.type}
                </div>
                <h3 className="font-serif text-2xl font-bold group-hover:text-gold-400 transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-xs text-gray-300 mt-1">{p.origin}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-gray-500 border-b border-gray-100 pb-2">
                    <span>Roast Level:</span>
                    <span className="font-bold text-coffee-900">{p.roast}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 border-b border-gray-100 pb-2">
                    <span>Cupping Score:</span>
                    <span className="font-bold text-coffee-900">{p.score}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 block mb-2">Flavor Profile:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.notes.map((note, i) => (
                        <span key={i} className="bg-coffee-100 text-coffee-800 text-xs px-2.5 py-1 rounded-md font-medium">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
                </div>

                <a
                  href="#contact"
                  className="block text-center w-full py-3 bg-coffee-900 hover:bg-gold-500 hover:text-coffee-900 text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-md"
                >
                  Request Sample Pack
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}