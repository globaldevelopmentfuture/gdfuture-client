'use client';
import BenefitsSection from '@/components/careers/BenefitsSection';
import HeroCareers from '@/components/careers/HeroCareers';
import JobListings from '@/components/careers/JobListings';
import CTASection from '@/components/CTASection';
import ValuesSection from '@/components/ValuseSection';
import React from 'react'

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32">
    <HeroCareers />
    <ValuesSection />
    <BenefitsSection />
    <JobListings />
    <CTASection />
  </div>
  )
}

export default Careers