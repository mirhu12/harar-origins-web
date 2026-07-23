'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WholesaleCalculator from '@/components/WholesaleCalculator';
import Sourcing from '@/components/Sourcing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const triggerSuccessToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WholesaleCalculator />
      <Sourcing />
      <ContactForm onSuccess={triggerSuccessToast} />
      <Footer />
      <Toast visible={showToast} />
    </main>
  );
}