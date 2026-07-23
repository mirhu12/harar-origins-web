import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-gray-400 py-12 border-t border-coffee-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-lg">
            <i className="fa-solid fa-mug-hot text-gold-500"></i> Harar Origins
          </div>
          <p className="leading-relaxed">
            Boutique micro-roastery processing specialty green coffee into high-barrier valve packages in Addis Ababa, Ethiopia.
          </p>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider">Certifications</h4>
          <ul className="space-y-2">
            <li><i className="fa-solid fa-check text-gold-500 mr-1.5"></i> ECTA Competence Cert.</li>
            <li><i className="fa-solid fa-check text-gold-500 mr-1.5"></i> EFDA Food Safety Compliant</li>
            <li><i className="fa-solid fa-check text-gold-500 mr-1.5"></i> Directive 975/2023 Forex License</li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider">Roastery Location</h4>
          <p className="leading-relaxed">
            Industrial Sub-City Zone<br />
            Addis Ababa, Ethiopia<br />
            Phone: +251 911 000 000<br />
            Email: wholesale@hararorigins.com
          </p>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider">Office Hours</h4>
          <p className="leading-relaxed">
            Monday – Saturday: 8:00 AM – 6:00 PM EAT<br />
            Roast-to-Order Dispatch: Tue & Fri
          </p>
        </div>
      </div>

      {/* Bottom Bar: Copyright on Left + Inline Social Links on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-coffee-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">
        <div>
          &copy; 2026 Harar Origins Specialty Coffee Roasters. All rights reserved.
        </div>

        {/* Inline Social Media Icons directly to the right */}
        <div className="inline-flex items-center gap-3">
          <a
            href="https://instagram.com/hararorigins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-full bg-coffee-800 hover:bg-gold-500 hover:text-coffee-900 text-gray-300 flex items-center justify-center transition-all duration-300"
          >
            <i className="fa-brands fa-instagram text-sm"></i>
          </a>
          <a
            href="https://linkedin.com/company/harar-origins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full bg-coffee-800 hover:bg-gold-500 hover:text-coffee-900 text-gray-300 flex items-center justify-center transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin-in text-sm"></i>
          </a>
          <a
            href="https://t.me/hararorigins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-8 h-8 rounded-full bg-coffee-800 hover:bg-gold-500 hover:text-coffee-900 text-gray-300 flex items-center justify-center transition-all duration-300"
          >
            <i className="fa-brands fa-telegram text-sm"></i>
          </a>
          <a
            href="https://facebook.com/hararorigins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-coffee-800 hover:bg-gold-500 hover:text-coffee-900 text-gray-300 flex items-center justify-center transition-all duration-300"
          >
            <i className="fa-brands fa-facebook-f text-sm"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}