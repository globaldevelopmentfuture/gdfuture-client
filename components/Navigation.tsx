"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    // { label: "Team", path: "/team" },
    // { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[95%] xl:w-[80%] z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/[0.2] backdrop-blur-md border border-white/[0.05] py-4 lg:py-5"
            : "bg-transparent py-5 lg:py-6"
        } rounded-full top-6`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image src={logo} alt="GDFUTURE" width={64} height={64} />
              <span className="text-white font-bold text-xl lg:text-2xl tracking-tight">
                GDFUTURE
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.label}
                  className="group relative px-2 py-1 xl:px-4 xl:py-2 text-sm lg:text-base text-gray-300 transition-colors rounded-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10 transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-white/[0.03] rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => router.push("/contact")}
                className="relative group px-4 py-1.5 xl:px-6 xl:py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl text-sm lg:text-base lg:font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/[0.03] rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-full bg-black z-50 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="p-6 flex justify-between flex-col gap-4 h-full">
                <div className="flex flex-col gap-4">
                <motion.div
                  className="flex items-center justify-between mb-8"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-3">
                    <Image src={logo} alt="GDFUTURE" width={48} height={48} />

                    <span className="text-white font-bold text-lg tracking-tight">
                      GDFUTURE
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white p-2 hover:bg-white/[0.03] rounded-lg transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </motion.div>

                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.label}
                      onClick={() => {
                        router.push(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/[0.03] rounded-lg transition-colors text-left"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
                </div>
                <motion.button
                  onClick={() => {
                    router.push("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-[#7a5544]/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
