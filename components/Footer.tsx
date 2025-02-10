"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, MapPin, Mail, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.footer 
      className="relative py-8 md:py-16 overflow-hidden bg-black/50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          {/* Company Info */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="GDFUTURE" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl tracking-tight">GDFUTURE</h3>
                <p className="text-gray-400 text-sm">Innovation Through Excellence</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Empowering businesses through innovative digital solutions. We combine technical expertise 
              with creative excellence to deliver transformative results.
            </p>

            <div className="flex items-center space-x-6">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="group relative"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-2 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm group-hover:border-yellow-500/30 transition-colors duration-300">
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links and Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "Digital Marketing",
                  "UI/UX Design"
                ].map((service) => (
                  <motion.li 
                    key={service}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <a href="#" className="group flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                      {service}
                      <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Our Team",
                  "Careers",
                  "Contact"
                ].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <a href="#" className="group flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                      {item}
                      <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-6">
                <motion.li 
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-gray-300">Global Development Future</span>
                  </div>
                </motion.li>

                <motion.li 
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="mailto:globaldevelopmentfuture@gmail.com" className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 break-all">
                      globaldevelopmentfuture@gmail.com
                    </span>
                  </a>
                </motion.li>

                <motion.li 
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="tel:+40751389111" className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <Phone className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                      +40 751 389 111
                    </span>
                  </a>
                </motion.li>

                <motion.li 
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative p-2 rounded-full bg-yellow-400/10">
                      <div className="absolute inset-0 rounded-full animate-ping bg-green-500/20" />
                      <div className="relative w-4 h-4 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-300">CIF 48140505</span>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="relative pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Global Development Future. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
