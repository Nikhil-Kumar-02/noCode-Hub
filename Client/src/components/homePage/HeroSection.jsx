import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function HeroSection() {
  const [prompt, setPrompt] = useState('');
  const [selectedComponents, setSelectedComponents] = useState([]);

  // Let's create some prompt suggestions for user....
  const suggestedPrompts = [
    {
      icon: '📺',
      text: 'Website for Netflix using...',
      brand: 'netflix'
    },
    {
      icon: '💼',
      text: 'A website for travel...',
      brand: 'slack'
    },
    {
      icon: '📱',
      text: 'A modern website for education...',
      brand: 'vu'
    },
    // {
    //     .....more will be added ....
    // }
  ];

  const componentOptions = [
    'Navbar',
    'Header',
    'About',
    'Contact',
    'Calendar',
    'Cards',
    'Footer',
    'Testimonials',
    'Pricing',
    'FAQ',
    // more will be added...
  ];

  const toggleComponent = (component) => {
    setSelectedComponents(prev => 
      prev.includes(component)
        ? prev.filter(c => c !== component)
        : [...prev, component]
    );
  };

  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Stunning{' '} Websites with {' '}
          
          <span className="bg-gradient-to-r from-[#e6fb04] to-green-400 text-transparent bg-clip-text">   noCode.web</span>
        
        </motion.h1>

        <motion.div
          className="relative max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Describe your website or select components below"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-14 pl-6 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e6fb04]"
          />
          <button 
            className="absolute right-2 top-2 bg-[#e6fb04] text-black rounded-full p-2 hover:bg-[#d3e600] transition-colors"
            aria-label="Generate website"
          >
            <FaPaperPlane className="w-6 h-6" />
          </button>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4">Or select components:</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {componentOptions.map((component, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedComponents.includes(component)
                    ? 'bg-[#e6fb04] text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                onClick={() => toggleComponent(component)}
              >
                {component}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="w-full text-xl font-semibold mb-4">Popular templates:</h2>
          {suggestedPrompts.map((suggestion, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setPrompt(suggestion.text)}
            >
              <span>{suggestion.icon}</span>
              <span className="text-sm text-white/80">{suggestion.text}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


