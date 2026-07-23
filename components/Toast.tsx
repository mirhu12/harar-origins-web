'use client';

import React from 'react';

interface ToastProps {
  visible: boolean;
}

export default function Toast({ visible }: ToastProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
      <div className="bg-coffee-900 text-white border border-gold-500/30 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-md">
        <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
          <i className="fa-solid fa-circle-check text-base" />
        </div>
        <div>
          <h4 className="font-bold text-xs text-gold-400 uppercase tracking-wider">
            Inquiry Prepared
          </h4>
          <p className="text-xs text-gray-200 mt-0.5">
            Your wholesale inquiry has been formatted and opened in your email app.
          </p>
        </div>
      </div>
    </div>
  );
}