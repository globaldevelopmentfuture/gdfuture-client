'use client';
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Portfolio from "@/components/Portofolio";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServiceSection";
import CTASection from "@/components/CTASection";

const App = () => {
  return (
      <main className="min-h-screen bg-black/50">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <Portfolio />
        <CTASection />
      </main>
  );
}

export default App;

