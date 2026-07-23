'use client';

import React, { useState } from 'react';

const BLENDS = [
  { id: 'crown', name: 'Crown Espresso Blend (Commercial Base)', baseEtb: 900, baseUsd: 7.80 },
  { id: 'abyssinia', name: 'Abyssinia Floral / Guji Gold Reserve', baseEtb: 1050, baseUsd: 9.00 },
];

export default function WholesaleCalculator() {
  const [selectedBlend, setSelectedBlend] = useState(BLENDS[0]);
  const [volume, setVolume] = useState(50);
  const [currency, setCurrency] = useState<'ETB' | 'USD'>('ETB');

  // Compute Volume Discount Tiers
  let discountRate = 1.0;
  let tierLabel = 'Standard Volume';
  let tierBadgeClass = 'bg-gray-500/20 text-gray-300';

  if (volume >= 100) {
    discountRate = 0.90;
    tierLabel = 'Tier 1 Discount (10% OFF)';
    tierBadgeClass = 'bg-emerald-500/20 text-emerald-400';
  } else if (volume >= 50) {
    discountRate = 0.95;
    tierLabel = 'Tier 2 Discount (5% OFF)';
    tierBadgeClass = 'bg-gold-500/20 text-gold-400';
  }

  const finalRate = currency === 'ETB'
    ? Math.round(selectedBlend.baseEtb * discountRate)
    : (selectedBlend.baseUsd * discountRate).toFixed(2);

  const totalPrice = currency === 'ETB'
    ? ((finalRate as number) * volume).toLocaleString()
    : (parseFloat(finalRate as string) * volume).toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <section id="calculator" className="py-24 bg-coffee-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-gold-400 font-bold text-xs tracking-widest uppercase">
            Interactive B2B Cost Estimator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold">
            Calculate Your Monthly Wholesale Contract
          </h2>
          <p className="text-gray-400 text-sm">
            Select your estimated monthly volume to calculate volume tiers and estimated savings under Directive 975/2023.
          </p>
        </div>

        <div className="bg-coffee-800/80 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Controls */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                1. Select Blend / Roast Type
              </label>
              <select
                value={selectedBlend.id}
                onChange={(e) => setSelectedBlend(BLENDS.find(b => b.id === e.target.value) || BLENDS[0])}
                className="w-full bg-coffee-900 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500"
              >
                {BLENDS.map((blend) => (
                  <option key={blend.id} value={blend.id}>{blend.name}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  2. Monthly Volume (Kilograms)
                </label>
                <span className="text-gold-400 font-extrabold text-lg">{volume} kg / mo</span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="10"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full accent-gold-500 bg-coffee-900 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>10 kg (Minimum)</span>
                <span>100 kg (Tier 1 Discount)</span>
                <span>300 kg (Enterprise)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                3. Preferred Invoicing Currency
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCurrency('ETB')}
                  className={`py-2.5 rounded-xl border font-bold text-xs ${
                    currency === 'ETB'
                      ? 'border-gold-500 bg-gold-500/20 text-gold-400'
                      : 'border-white/10 bg-coffee-900 text-gray-400 hover:border-white/30'
                  }`}
                >
                  ETB (Ethiopian Birr)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`py-2.5 rounded-xl border font-bold text-xs ${
                    currency === 'USD'
                      ? 'border-gold-500 bg-gold-500/20 text-gold-400'
                      : 'border-white/10 bg-coffee-900 text-gray-400 hover:border-white/30'
                  }`}
                >
                  USD (Dir. 975 Foreign Forex)
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="md:col-span-5 bg-coffee-900/90 rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs text-gold-400 uppercase font-bold tracking-wider border-b border-white/10 pb-2">
                Contract Estimate
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Rate per Kilogram:</span>
                <span className="font-bold text-white">
                  {currency === 'ETB' ? `${finalRate} ETB` : `$${finalRate} USD`} / kg
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Volume Tier:</span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tierBadgeClass}`}>
                  {tierLabel}
                </span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="text-xs text-gray-400">Estimated Monthly Total:</div>
                <div className="text-3xl font-serif font-extrabold text-gold-400 mt-1">
                  {currency === 'ETB' ? `${totalPrice} ETB` : `$${totalPrice} USD`}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="#contact"
                className="block text-center w-full py-3 bg-gold-500 hover:bg-gold-600 text-coffee-900 font-bold text-xs rounded-xl transition shadow-lg"
              >
                Lock In This Quote
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}