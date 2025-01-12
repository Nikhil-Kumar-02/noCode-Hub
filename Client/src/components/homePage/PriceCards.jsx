
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, isPopular, features, price, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#e6fb04]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
    <div className="relative flex flex-col h-full p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm hover:bg-black/60 transition-colors">
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#e6fb04] text-black text-sm font-medium rounded-full">
          Most popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-5xl font-bold text-white">${price}</span>
        <span className="text-gray-400 ml-2">per month</span>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-6 mb-8 rounded-lg bg-[#e6fb04] text-black font-medium hover:bg-[#e6fb04]/90 transition-colors"
      >
        Subscribe
      </motion.button>

      <div className="space-y-4">
        <p className="text-sm text-white font-medium">This includes:</p>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 mr-3 text-[#e6fb04]" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function PriceCards() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      plan: "noCode Starter",
      description: "Perfect for individuals and small projects",
      price: "49",
      features: [
        "5 Projects",
        "Basic webpage generation",
        "Basic SEO tools",
        "1 Team member"
      ]
    },
    {
      plan: "noCode Business",
      description: "Ideal for growing businesses",
      price: "99",
      isPopular: true,
      features: [
        "10 Projects",
        "Advanced web apps",
        "Code download",
        "Custom domain",
        "5 Team members"
      ]
    },
    {
      plan: "noCode Unlimited",
      description: "For enterprises and large teams",
      price: "199",
      features: [
        "25 Projects",
        "All project types",
        "White labeling",
        "Dedicated support",
        "Unlimited team members"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pricing that fits your vision
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Unlock the power of AI-driven web design with plans tailored for everyone, from startups to enterprises.
          </motion.p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-white/5 rounded-full p-1 backdrop-blur-sm">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-[#e6fb04] text-black'
                  : 'text-white hover:text-[#e6fb04]'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-[#e6fb04] text-black'
                  : 'text-white hover:text-[#e6fb04]'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

