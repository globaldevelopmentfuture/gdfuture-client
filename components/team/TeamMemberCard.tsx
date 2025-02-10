import React from 'react';
import { motion } from 'framer-motion';
import { Award, Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
    achievements: string[];
    gradient: string;
  };
}

const TeamMemberCard = ({ member }: TeamMemberProps) => {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -5 }}
    >
      <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-500 hover:border-white/20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
          <motion.img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className={`font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
            {member.role}
          </p>
          <p className="text-gray-400 mb-4">{member.bio}</p>
          
          <div className="space-y-3 mb-6">
            {member.achievements.map((achievement, aIndex) => (
              <div key={aIndex} className="flex items-center text-sm text-gray-300">
                <Award size={14} className={`mr-2 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`} />
                {achievement}
              </div>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href: "#" }
            ].map(({ Icon, href }, index) => (
              <motion.a 
                key={index}
                href={href} 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;