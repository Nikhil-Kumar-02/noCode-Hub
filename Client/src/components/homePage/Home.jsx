import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection/>
    </div>
  );
}

