'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Send, Zap, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-[#e6fb04] transition-colors relative group"
    whileHover={{ x: 5 }}
  >
    <span>{children}</span>
    <motion.span
      className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#e6fb04]"
      initial={{ width: '0%' }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e6fb04] hover:border-[#e6fb04] transition-colors"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={20} />
  </motion.a>
);

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-[#e6fb04]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-[#e6fb04]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-6 h-6 text-[#e6fb04]" />
              <span className="text-xl font-semibold text-white">noCode-Web</span>
            </motion.div>
            <p className="text-gray-400">
              Transform your web development workflow with AI-powered solutions.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="#" icon={Github} />
              <SocialIcon href="#" icon={Twitter} />
              <SocialIcon href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3 space-x-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Features</FooterLink>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-2 text-gray-400"
                whileHover={{ x: 5, color: '#e6fb04' }}
              >
                <Mail size={16} />
                <span>hello@nocode.web</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-gray-400"
                whileHover={{ x: 5, color: '#e6fb04' }}
              >
                <MapPin size={16} />
                <span>Kolkata, India</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-gray-400"
                whileHover={{ x: 5, color: '#e6fb04' }}
              >
                <Phone size={16} />
                <span>+91-9978547890</span>
              </motion.div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e6fb04] transition-colors"
              />
              <motion.button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#e6fb04]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} noCode.Web All rights reserved.
          </p>
          <div className="flex gap-6">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </motion.div>

        {/* Floating action button */}
        <motion.button
          className="fixed bottom-8 right-8 bg-[#e6fb04] text-black p-4 rounded-full shadow-lg flex items-center gap-2 font-medium hover:bg-[#e6fb04]/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Get Started</span>
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </footer>
  );
}

