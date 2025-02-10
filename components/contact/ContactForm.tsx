"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Building, AtSign, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-8">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-yellow-500/20 mix-blend-overlay"
          animate={{
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
            <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you shortly.</p>
          </motion.div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-yellow-500/50" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 bg-black/40 border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-yellow-500/50" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 bg-black/40 border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20 transition-all duration-300"
                    placeholder="Company Name"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AtSign className="h-5 w-5 text-yellow-500/50" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-10 bg-black/40 border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-yellow-500/50" />
                </div>
                <textarea
                  rows={4}
                  className="block w-full pl-10 bg-black/40 border border-white/10 rounded-xl py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/20 transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </span>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}