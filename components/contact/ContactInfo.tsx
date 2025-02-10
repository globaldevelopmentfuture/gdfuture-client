"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: "+40 751 389 111",
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: "globaldevelopmentfuture@gmail.com",
    gradient: "from-violet-400 to-purple-600"
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    details: "Global Development Future",
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    icon: <Clock size={24} />,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM",
    gradient: "from-emerald-400 to-teal-600"
  }
];

export default function ContactInfo() {
  return (
    <motion.div
      className="space-y-8 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-6">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={false}
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.gradient} bg-opacity-10`}>
                    <div className="p-2 bg-black/30 rounded-lg">
                      {info.icon}
                    </div>
                  </div>
                </motion.div>
                
                <h3 className={`text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${info.gradient}`}>
                  {info.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {info.details}
                </p>
              </div>

              <motion.div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${info.gradient}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 h-[400px]">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-yellow-500/20 mix-blend-overlay z-10"
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043435129!5m2!1sen!2s"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}