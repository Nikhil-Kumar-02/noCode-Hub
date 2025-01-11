import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturesGrid() {
  const features = [
    {
      title: 'noCode Builder',
      description: 'Build websites without writing a single line of code.',
      icon: '🎨'
    },
    {
      title: 'AI-Powered',
      description: 'Let AI generate the perfect website based on your needs.',
      icon: '🤖'
    },
    {
      title: 'Customizable',
      description: 'Easily customize every aspect of your generated website.',
      icon: '✨'
    },
    {
      title: 'Responsive Design',
      description: 'Websites that look great on all devices.',
      icon: '📱'
    },
    {
      title: 'Quick Export',
      description: 'Export your website code in minutes.',
      icon: '⚡'
    },
    {
      title: 'SEO Optimized',
      description: 'Built with best practices for search engines.',
      icon: '🎯'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/60">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


