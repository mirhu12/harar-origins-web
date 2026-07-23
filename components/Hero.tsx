import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center text-white bg-coffee-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop')` }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold tracking-wider uppercase gold-glow">
          <i className="fa-solid fa-award text-gold-400"></i> Small-Batch Micro-Roastery | Addis Ababa
        </div>
        
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Harar&apos;s Heritage. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500 gold-text-glow">Precision Roasted.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-300 font-light leading-relaxed">
          Empowering luxury hotels, specialty cafés, and corporate spaces in Addis Ababa with freshly micro-roasted Harar Longberry, Guji, and Sidama coffee—packaged in high-barrier nitrogen-purged valve bags.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#calculator" className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-coffee-900 font-bold rounded-full transition duration-300 shadow-xl shadow-gold-500/20 text-center">
            Estimate Wholesale Plan
          </a>
          <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-full transition duration-300 backdrop-blur-sm text-center">
            Explore Our Roasts
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10 max-w-4xl mx-auto text-left">
          <div className="bg-coffee-800/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400">5–10 kg</div>
            <div className="text-xs text-gray-400 mt-1">Small Batch Precision</div>
          </div>
          <div className="bg-coffee-800/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400">12 Months</div>
            <div className="text-xs text-gray-400 mt-1">Valve Sealed Freshness</div>
          </div>
          <div className="bg-coffee-800/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400">Dir. 975/2023</div>
            <div className="text-xs text-gray-400 mt-1">Local & FX Invoicing</div>
          </div>
          <div className="bg-coffee-800/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400">100% Free</div>
            <div className="text-xs text-gray-400 mt-1">Monthly Barista Training</div>
          </div>
        </div>
      </div>
    </section>
  );
}