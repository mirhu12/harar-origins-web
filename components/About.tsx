import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-gold-600 font-bold text-sm tracking-widest uppercase">Redefining Local Processing</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-900 leading-tight">
              Why Harar Origins is Built for Hospitality Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Historically, over 80% of Ethiopia&apos;s coffee value was created overseas through commercial roasting. Harar Origins brings world-class micro-roasting technology directly to Addis Ababa to celebrate eastern Ethiopia&apos;s most iconic wild natural coffees.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-coffee-100 text-coffee-700 flex items-center justify-center shrink-0 font-bold">
                  <i className="fa-solid fa-temperature-arrow-up"></i>
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Custom Drum Profiling</h4>
                  <p className="text-sm text-gray-600">Digital thermal profiling guarantees exact flavor scores batch after batch without scorching delicate wild fruit notes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-coffee-100 text-coffee-700 flex items-center justify-center shrink-0 font-bold">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Nitrogen Flush Packaging</h4>
                  <p className="text-sm text-gray-600">Multi-layer foil bags equipped with one-way degassing valves purge oxygen, locking in fragile blueberry and cocoa aromatics.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-coffee-100 text-coffee-700 flex items-center justify-center shrink-0 font-bold">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Comprehensive Barista SOPs</h4>
                  <p className="text-sm text-gray-600">We train your hotel and café staff on extraction yield, grinder calibration, and milk texturing to ensure a flawless 5-star cup.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-coffee-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl"></div>
            <h3 className="font-serif text-2xl font-bold mb-6 text-gold-400">Our Quality Promise</h3>
            
            <div className="space-y-6 text-sm text-gray-300">
              <div className="p-4 bg-coffee-800/60 rounded-xl border border-white/10">
                <div className="text-xs text-gold-400 uppercase font-semibold mb-1">Traceability</div>
                <div className="text-white font-bold">Grade 1 & 2 Wild Natural Harar Lots</div>
                <p className="text-xs text-gray-400 mt-1">Directly sourced from primary cooperative unions in eastern Ethiopia, Guji, and Limu.</p>
              </div>

              <div className="p-4 bg-coffee-800/60 rounded-xl border border-white/10">
                <div className="text-xs text-gold-400 uppercase font-semibold mb-1">Regulatory Standard</div>
                <div className="text-white font-bold">ECTA & EFDA Certified Processing</div>
                <p className="text-xs text-gray-400 mt-1">Full compliance with Ethiopian Coffee & Tea Authority standards and health regulations.</p>
              </div>

              <div className="p-4 bg-coffee-800/60 rounded-xl border border-white/10">
                <div className="text-xs text-gold-400 uppercase font-semibold mb-1">Flexibility</div>
                <div className="text-white font-bold">48-Hour Roast-to-Order Delivery</div>
                <p className="text-xs text-gray-400 mt-1">Free bi-weekly delivery across star hotels, airports, and embassies in Addis Ababa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}