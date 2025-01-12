import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection'
import Steps from './Steps';
import Testimonial from './Testimonial';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection/>
      <Steps/>
      <Testimonial/>
    </div>
  );
}

