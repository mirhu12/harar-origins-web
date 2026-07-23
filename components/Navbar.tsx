'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-coffee-900/90 backdrop-blur-md border-b border-coffee-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-coffee-900 font-bold text-xl shadow-lg">
              <i className="fa-solid fa-mug-hot"></i>
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-wide text-white block">Harar Origins</span>
              <span className="text-[10px] uppercase tracking-widest text-gold-400 block -mt-1">Specialty Coffee Roasters</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-gold-400 transition">About Us</a>
            <a href="#products" className="hover:text-gold-400 transition">Our Roasts</a>
            <a href="#calculator" className="hover:text-gold-400 transition">Wholesale Estimator</a>
            <a href="#sourcing" className="hover:text-gold-400 transition">Origin & Impact</a>
            <a href="#contact" className="hover:text-gold-400 transition">B2B Portal</a>
          </div>

          {/* Call to Action */}
          <div className="hidden md:block">
            <a href="#calculator" className="bg-gold-500 hover:bg-gold-600 text-coffee-900 font-semibold px-5 py-2.5 rounded-full text-sm transition shadow-md hover:shadow-gold-500/20">
              Request B2B Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white text-2xl focus:outline-none"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-coffee-900 border-b border-coffee-800 px-4 pt-2 pb-6 space-y-3">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-gold-400 py-2">About Us</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-gold-400 py-2">Our Roasts</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-gold-400 py-2">Wholesale Estimator</a>
          <a href="#sourcing" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-gold-400 py-2">Origin & Impact</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-gold-400 py-2">B2B Portal</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-gold-500 text-coffee-900 font-semibold py-2.5 rounded-full text-sm">Request B2B Quote</a>
        </div>
      )}
    </nav>
  );
}