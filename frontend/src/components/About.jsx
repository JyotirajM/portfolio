import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../mock/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Briefcase className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{personalInfo.availability}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">MCA</h3>
              <p className="text-gray-400">Master's Degree</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">2+</h3>
              <p className="text-gray-400">Major Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">AWS</h3>
              <p className="text-gray-400">Cloud Expert</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/20 text-center"
            >
              <h3 className="text-5xl font-bold text-white mb-2">30%</h3>
              <p className="text-gray-400">Efficiency Gain</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;