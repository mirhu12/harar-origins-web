import React from 'react';

export default function Sourcing() {
  return (
    <section id="sourcing" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-gold-600 font-bold text-sm tracking-widest uppercase">Direct Trade Sourcing</div>
            <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-900 mt-2 mb-6">Ethical Sourcing Across Famous Coffee Zones</h2>
            <p class="text-gray-600 leading-relaxed mb-8">
              We partner directly with farmer cooperative unions and washing station owners in Sidama, Guji, Yirgacheffe, and Limu, paying a 15–20% premium over base market prices to ensure community sustainability.
            </p>

            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-coffee-50 rounded-xl border border-coffee-100">
                <div class="text-coffee-700 font-bold text-lg">Yirgacheffe & Guji</div>
                <p class="text-xs text-gray-500 mt-1">High altitude micro-climates producing delicate jasmine & berry profiles.</p>
              </div>
              <div class="p-4 bg-coffee-50 rounded-xl border border-coffee-100">
                <div class="text-coffee-700 font-bold text-lg">Sidama & Limu</div>
                <p class="text-xs text-gray-500 mt-1">Balanced citric acidity and sweet chocolate undertones for espresso.</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-3xl p-8 text-white shadow-xl space-y-6">
            <h3 class="font-serif text-2xl font-bold text-gold-400">Social Impact Metrics</h3>
            
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>Female Representation in Workforce</span>
                  <span class="text-gold-400">50% Target</span>
                </div>
                <div class="w-full bg-coffee-700 h-2 rounded-full overflow-hidden">
                  <div class="bg-gold-500 h-full w-[50%]"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>In-Country Value Retention</span>
                  <span class="text-gold-400">+80% Localized</span>
                </div>
                <div class="w-full bg-coffee-700 h-2 rounded-full overflow-hidden">
                  <div class="bg-gold-500 h-full w-[80%]"></div>
                </div>
              </div>
            </div>

            <div class="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-300 leading-relaxed">
              <i class="fa-solid fa-quote-left text-gold-400 text-lg block mb-2"></i>
              By processing green coffee into finished consumer packages inside Ethiopia, we keep higher economic value in local hands while creating skilled technical jobs in roasting and sensory analysis.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}