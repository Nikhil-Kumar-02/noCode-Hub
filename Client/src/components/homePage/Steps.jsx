import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, RefreshCw, Download } from 'lucide-react';

const StepCard = ({ number, title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8,
      delay,
      ease: [0.04, 0.62, 0.23, 0.98] 
    }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#e6fb04]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
    <div className="relative flex flex-col h-full p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm hover:bg-black/60 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-full bg-[#e6fb04]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-[#e6fb04]" />
        </div>
        <span className="text-sm text-gray-500">Step {number}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#e6fb04] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export default function Steps() {
  const steps = [
    {
      number: 1,
      icon: Rocket,
      title: "Describe your vision",
      description: "Start by providing a basic prompt of the website you want to create. Our AI understands your ideas in any language."
    },
    {
      number: 2,
      icon: RefreshCw,
      title: "Refine and Regenerate",
      description: "Your website is ready. Select a section to request changes, and it will update instantly."
    },
    {
      number: 3,
      icon: Download,
      title: "Export your website",
      description: "Happy with your creation? Export your fully functional website and launch your online presence in minutes."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
              Create your website in{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#e6fb04] to-green-400 text-transparent bg-clip-text">
                  3 simple steps
                </span>
                <div className="absolute inset-0 blur-2xl bg-[#e6fb04]/20" />
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg"
          >
            From idea to live website within just a few minutes
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e6fb04]/20 via-[#e6fb04]/10 to-transparent hidden md:block" />
          
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

