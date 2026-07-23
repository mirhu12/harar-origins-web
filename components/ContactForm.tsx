'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  onSuccess: () => void;
  formspreeEndpoint?: string;
}

export default function ContactForm({
  onSuccess,
  formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_FORM_ID',
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        onSuccess();
      } else {
        alert('Form submission issue. Please contact us directly.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-coffee-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-coffee-100 p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">Client Portal</span>
            <h2 className="font-serif text-3xl font-extrabold text-coffee-900">Request a Wholesale Proposal</h2>
            <p className="text-xs text-gray-500">Harar Origins B2B accounts team will respond within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Full Name *</label>
                <input type="text" name="full_name" required placeholder="e.g. Mr. Dawit Tadesse" className="w-full bg-coffee-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Business Name *</label>
                <input type="text" name="business_name" required placeholder="e.g. Grand Palace Hotel" className="w-full bg-coffee-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address *</label>
                <input type="email" name="email" required placeholder="fb@hotel.com" className="w-full bg-coffee-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Phone Number *</label>
                <input type="tel" name="phone" required placeholder="+251 911 XX XX XX" className="w-full bg-coffee-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Additional Notes</label>
              <textarea name="notes" rows={3} placeholder="Tell us about your estimated monthly coffee consumption..." className="w-full bg-coffee-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-coffee-900 hover:bg-coffee-800 text-white font-bold rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <span><i className="fa-solid fa-spinner fa-spin mr-2"></i>Sending...</span>
              ) : (
                <span>Submit Harar Origins B2B Request</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}