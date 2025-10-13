import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle } from 'lucide-react';
import { timeline } from '../mock/portfolioData';

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of professional milestones and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 transform md:-translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-auto md:right-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transform -translate-x-1/2 md:translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:border-purple-500/50 transition-all duration-300`}
              >
                {/* Icon */}
                <div className="inline-block p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mb-4">
                  {item.type === 'certification' ? (
                    <Award className="w-6 h-6 text-white" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Year */}
                <div className="text-purple-400 font-bold text-sm mb-2">{item.year}</div>

                {/* Title and Company */}
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-400 font-semibold mb-3">{item.company}</p>

                {/* Description */}
                <p className="text-gray-400 mb-4">{item.description}</p>

                {/* Achievements */}
                {item.achievements && (
                  <div className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;