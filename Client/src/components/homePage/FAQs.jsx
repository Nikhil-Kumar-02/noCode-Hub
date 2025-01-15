
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <button
      onClick={onToggle}
      className="w-full p-6 flex items-center justify-between rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all"
    >
      <span className="text-left text-lg text-white group-hover:text-[#e6fb04] transition-colors">
        {question}
      </span>
      {isOpen ? (
        <Minus className="w-5 h-5 text-[#e6fb04]" />
      ) : (
        <Plus className="w-5 h-5 text-[#e6fb04]" />
      )}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-6 text-gray-400">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is noCode?",
      answer: "noCode is an AI-powered web design platform that allows you to create professional websites without any coding knowledge. It uses advanced artificial intelligence to transform your ideas into fully functional, responsive websites."
    },
    {
      question: "How does noCode work?",
      answer: "Simply describe your website vision in plain language, and our AI will generate a complete design. You can then customize every aspect using our intuitive interface, and our AI will implement the changes in real-time."
    },
    {
      question: "Do I need coding skills to use noCode?",
      answer: "No coding skills are required! noCode is designed for everyone, from beginners to professionals. Our AI handles all the technical aspects while you focus on your vision and content."
    },
    {
      question: "How fast can I create a website with noCode?",
      answer: "You can have a fully functional website ready in minutes. Our AI processes your requirements instantly and generates a complete website that you can refine and publish immediately."
    },
    {
      question: "Can I customize my landing page with noCode?",
      answer: "Every aspect of your website is customizable. From layouts to colors, fonts, and content, you have full control over the appearance and functionality of your site."
    },
    {
      question: "Is noCode suitable for businesses of all sizes?",
      answer: "Yes! Whether you're a solo entrepreneur, small business, or large enterprise, noCode scales to meet your needs. We offer different plans to accommodate various business sizes and requirements."
    },
    {
      question: "How does noCode ensure my website looks professional?",
      answer: "Our AI is trained on thousands of professional websites and follows the latest design trends and best practices. It ensures your website is not only beautiful but also functional and user-friendly."
    },
    {
      question: "Does noCode offer customer support?",
      answer: "Yes, we provide comprehensive customer support. Depending on your plan, you have access to email support, live chat, and dedicated support representatives to help you with any questions."
    },
    {
      question: "Is there a free trial available for noCode?",
      answer: "Yes! You can try noCode free for 14 days. This gives you full access to our platform's features so you can experience the power of AI-driven web design firsthand."
    },
    {
      question: "How can I get started with noCode?",
      answer: "Simply sign up for a free trial on our website. No credit card is required to start. Once registered, you can immediately begin creating your website using our AI-powered platform."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#e6fb04]/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#e6fb04]" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg"
          >
            Answers to some of the Most Important Questions
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

