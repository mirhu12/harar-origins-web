import React from 'react';

interface ToastProps {
  visible: boolean;
}

export default function Toast({ visible }: ToastProps) {
  return (
    <div
      className={`fixed bottom-6 right-6 bg-coffee-900 text-white border border-gold-500 px-6 py-4 rounded-2xl shadow-2xl transition-all duration-500 transform z-50 flex items-center gap-3 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 pointer-events-none'
      }`}
    >
      <i className="fa-solid fa-circle-check text-gold-400 text-xl"></i>
      <div>
        <div className="font-bold text-xs text-gold-400">Request Received!</div>
        <div className="text-[11px] text-gray-300">Harar Origins team will reach out within 24 hours.</div>
      </div>
    </div>
  );
}