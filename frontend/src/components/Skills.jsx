import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { skills } from '../mock/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => {
            return (
              <motion.div
                key={skillCategory.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {skillCategory.category}
                </h3>

                <div className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => {
                    const IconComponent = Icons[skill.icon] || Icons.Code;
                    return (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <IconComponent className="w-5 h-5 mr-2 text-purple-400" />
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-blue-400 font-semibold">{skill.level}%</span>
                        </div>

                        {/* Skill bar */}
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;