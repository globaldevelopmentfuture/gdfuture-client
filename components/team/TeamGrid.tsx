import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    bio: "With over 15 years of experience in technology leadership.",
    achievements: ["Forbes 30 Under 30", "Tech Innovator Award"],
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80",
    bio: "Award-winning designer with a passion for user-centered design.",
    achievements: ["Design of the Year", "UX Excellence Award"],
    gradient: "from-purple-400 to-pink-600"
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Expert in cloud architecture and scalable systems.",
    achievements: ["AWS Certified Solutions Architect", "Google Cloud Expert"],
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    name: "Emma Wilson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    bio: "Certified PMP with a track record of successful project delivery.",
    achievements: ["PMI Project Manager of the Year", "Agile Master"],
    gradient: "from-green-400 to-emerald-600"
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    bio: "Full-stack developer specializing in React and Node.js.",
    achievements: ["Open Source Contributor", "Tech Speaker"],
    gradient: "from-blue-400 to-cyan-600"
  },
  {
    name: "Lisa Chen",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    bio: "Passionate about creating intuitive user experiences.",
    achievements: ["UX Research Excellence", "Published Author"],
    gradient: "from-indigo-400 to-purple-600"
  }
];

const TeamGrid = () => {
  return (
    <motion.section 
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamGrid;