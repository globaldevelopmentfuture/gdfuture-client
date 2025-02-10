'use client';
import HeroAbout from '@/components/about/HeroAbout';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/ValuseSection';
import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-black/50 pt-32">
      <HeroAbout />
      <StorySection />
      <ValuesSection />
    </div>
  );
}

export default About