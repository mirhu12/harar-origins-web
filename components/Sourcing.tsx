import React from 'react';

export default function Sourcing() {
  return (
    <section id="sourcing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Ethical Direct Sourcing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-900 leading-tight">
              Traceable Green Coffee From Harar & Prime Ethiopian Origins
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We partner directly with primary cooperatives and washing stations across Harar, Yirgacheffe, Sidama, and Limu under ECTA regulation. Every batch is certified for export quality and cupped prior to roasting in Addis Ababa.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-gold-500 pl-4">
                <div className="font-serif text-2xl font-bold text-coffee-900">100%</div>
                <div className="text-xs text-gray-500 mt-0.5">ECTA Grade 1 & 2 Green Beans</div>
              </div>
              <div className="border-l-2 border-gold-500 pl-4">
                <div className="font-serif text-2xl font-bold text-coffee-900">Direct</div>
                <div className="text-xs text-gray-500 mt-0.5">Farmer Co-op Partnerships</div>
              </div>
            </div>
          </div>

          <div className="bg-coffee-900 rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl"></div>
            
            <h3 className="font-serif text-2xl font-bold text-gold-400">
              Why Harar Beans Stand Apart
            </h3>

            <ul className="space-y-4 text-xs text-gray-300">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-sun text-gold-400 mt-0.5"></i>
                <span><strong>Natural Sun-Drying:</strong> Harar coffee cherries are dried whole on raised African beds, concentrating natural sugars into rich wild blueberry and chocolate notes.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-mountain text-gold-400 mt-0.5"></i>
                <span><strong>High-Altitude Cultivation:</strong> Grown between 1,800 to 2,200 meters above sea level in eastern highlands for dense, flavor-rich beans.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-microchip text-gold-400 mt-0.5"></i>
                <span><strong>Roast Profile Precision:</strong> Light-medium to dark profiles engineered specifically to maximize crema and extraction consistency in commercial espresso machines.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}