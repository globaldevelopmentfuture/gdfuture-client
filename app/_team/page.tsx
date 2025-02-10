'use client';
import CTASection from '@/components/CTASection'
import HeroTeam from '@/components/team/HeroTeam'
import StatsSection from '@/components/team/StatsSection'
import TeamGrid from '@/components/team/TeamGrid'
import React from 'react'

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32">
    <HeroTeam />
    <StatsSection />
    <TeamGrid />
    <CTASection />
  </div>
  )
}

export default Team