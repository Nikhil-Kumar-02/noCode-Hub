import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "This platform revolutionized our workflow. We've seen a 50% increase in productivity since implementing it.",
    image: "https://i.ibb.co/KKc3sdj/nik2.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Designer, CreativeHub",
    content: "The AI-powered design suggestions are spot-on. It's like having a skilled design partner always at your side.",
    image: "https://i.ibb.co/C7hB741/carry.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Freelance Developer",
    content: "As a solo developer, this tool has been a game-changer. It's cut my development time in half!",
    image: "https://i.ibb.co/C7hB741/carry.jpg"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#e6fb04]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
    <div className="relative flex flex-col h-full p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm hover:bg-black/60 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#e6fb04] transition-colors">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <Quote className="w-8 h-8 text-[#e6fb04] opacity-50" />
      </div>
      <p className="text-gray-300 leading-relaxed italic">
        "{testimonial.content}"
      </p>
    </div>
  </motion.div>
);

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
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
              What Our{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#e6fb04] to-green-400 text-transparent bg-clip-text">
                  Clients
                </span>
                <div className="absolute inset-0 blur-2xl bg-[#e6fb04]/20" />
              </span>
              {' '}Say
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg"
          >
            Hear from the people who have transformed their workflow with our AI-powered platform
          </motion.p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard key={currentIndex} testimonial={testimonials[currentIndex]} />
          </AnimatePresence>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-black/40 border border-white/10 p-2 rounded-full text-white hover:bg-black/60 transition-colors"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-black/40 border border-white/10 p-2 rounded-full text-white hover:bg-black/60 transition-colors"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#e6fb04]' : 'bg-white/20'}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

