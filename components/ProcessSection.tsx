import React from 'react';
import { Brain, Coffee, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your vision and requirements through deep analysis",
      icon: Brain,
      theme: {
        primary: "from-blue-500 to-indigo-600",
        accent: "blue-500",
        hover: "blue-400"
      }
    },
    {
      number: "02",
      title: "Strategy",
      description: "Crafting the perfect technical architecture and roadmap",
      icon: Coffee,
      theme: {
        primary: "from-violet-500 to-purple-600",
        accent: "purple-500",
        hover: "purple-400"
      }
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with cutting-edge technologies",
      icon: Code2,
      theme: {
        primary: "from-yellow-400 to-yellow-600",
        accent: "yellow-500",
        hover: "yellow-400"
      }
    },
    {
      number: "04",
      title: "Launch",
      description: "Deploying and scaling your enterprise solution",
      icon: Rocket,
      theme: {
        primary: "from-emerald-500 to-teal-600",
        accent: "green-400",
        hover: "green-400"
      }
    }
  ];

  return (
    <motion.section 
      className="py-6 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
     
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-300 font-medium">
                Development Process
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Transforming Vision </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Into Reality
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg mb-16 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our proven enterprise development methodology ensures successful delivery
            of complex technical solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 transition-all duration-500 group-hover:border-white/10" />
                
                <div className="relative p-8">
                  <div className="mb-6">
                    <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.theme.primary} p-0.5`}>
                      <div className="absolute inset-0 blur-xl bg-gradient-to-br opacity-50" />
                      <div className="relative h-full w-full bg-black/60 rounded-[10px] flex items-center justify-center">
                        <step.icon className={`w-8 h-8 text-${step.theme.hover}`} />
                      </div>
                    </div>
                  </div>

                  <div className={`absolute top-6 right-8 text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-br ${step.theme.primary} bg-clip-text text-transparent opacity-10`}>
                    {step.number}
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 text-${step.theme.hover}`}>
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  <div className={`absolute bottom-4  left-0 w-full h-1 bg-gradient-to-r ${step.theme.primary} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-50`} />
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center"
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
