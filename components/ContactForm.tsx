'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    volume: '50-100kg',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Wholesale Coffee Inquiry: ${formData.company || formData.name}`
    );
    
    const body = encodeURIComponent(
      `WHOLESALE INQUIRY DETAILS\n` +
      `-----------------------------------\n` +
      `Contact Name: ${formData.name}\n` +
      `Company/Hotel: ${formData.company || 'N/A'}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone Number: ${formData.phone || 'N/A'}\n` +
      `Estimated Monthly Volume: ${formData.volume}\n\n` +
      `MESSAGE / SPECIFIC REQUIREMENTS:\n` +
      `${formData.message}\n` +
      `-----------------------------------\n` +
      `Sent via Harar Origins B2B Web Portal`
    );

    window.location.href = `mailto:wholesale@hararorigins.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess();
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-coffee-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Details & Info */}
<div className="space-y-8 text-coffee-950">
  <div>
    <span className="text-gold-600 font-bold text-xs uppercase tracking-widest block mb-2">
      Partner With Us
    </span>
    
    {/* Main Heading - Dark Coffee Color for High Contrast */}
    <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-coffee-900 leading-tight">
      Request Commercial Samples & Wholesale Terms
    </h2>
    
    {/* Subtitle Paragraph - Dark Slate for Clear Visibility */}
    <p className="text-gray-700 text-sm mt-4 leading-relaxed font-normal">
      We supply top-tier hotels, diplomatic lounges, and specialty cafes in Addis Ababa with freshly roasted, high-barrier packaged green and roasted beans.
    </p>
  </div>

  <div className="space-y-6 text-sm border-t border-coffee-200 pt-8">
    {/* Wholesale Inquiries */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-coffee-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
        <i className="fa-solid fa-envelope text-base" />
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
          Wholesale Inquiries
        </div>
        <a 
          href="mailto:wholesale@hararorigins.com" 
          className="text-coffee-950 font-bold text-base hover:text-gold-600 transition block mt-0.5"
        >
          wholesale@hararorigins.com
        </a>
      </div>
    </div>

    {/* Direct Roastery Line */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-coffee-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
        <i className="fa-solid fa-phone text-base" />
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
          Direct Roastery Line
        </div>
        <a 
          href="tel:+251911000000" 
          className="text-coffee-950 font-bold text-base hover:text-gold-600 transition block mt-0.5"
        >
          +251 911 000 000
        </a>
      </div>
    </div>

    {/* Headquarters & Facility */}
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-coffee-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
        <i className="fa-solid fa-location-dot text-base" />
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
          Headquarters & Roasting Facility
        </div>
        <p className="text-coffee-900 font-semibold text-sm mt-0.5">
          Industrial Sub-City Zone, Addis Ababa, Ethiopia
        </p>
      </div>
    </div>
  </div>
</div>
          {/* Right Column: Form */}
          <div className="bg-coffee-900 border border-coffee-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Abebe Bikila"
                    className="w-full bg-coffee-950 border border-coffee-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Hotel / Business Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Grand Hotel Addis"
                    className="w-full bg-coffee-950 border border-coffee-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-coffee-950 border border-coffee-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 9..."
                    className="w-full bg-coffee-950 border border-coffee-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="volume" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Estimated Monthly Volume Requirement
                </label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  className="w-full bg-coffee-950 border border-coffee-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                >
                  <option value="Under 50kg" className="bg-coffee-950 text-white">Under 50 kg / month (Sample / Small Batch)</option>
                  <option value="50-100kg" className="bg-coffee-950 text-white">50 – 100 kg / month</option>
                  <option value="100-250kg" className="bg-coffee-950 text-white">100 – 250 kg / month</option>
                  <option value="250kg+" className="bg-coffee-950 text-white">250+ kg / month (Commercial Enterprise)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Inquiry / Sample Request Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your required roast profiles, packaging preference (1kg valves or green beans), or delivery schedule..."
                  className="w-full bg-coffee-950 border border-coffee-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 text-coffee-950 font-bold text-sm py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" /> Preparing Inquiry...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane" /> Send Wholesale Inquiry
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}