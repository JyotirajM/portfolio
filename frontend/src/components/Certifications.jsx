import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { certifications } from '../mock/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud and DevOps technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = Icons[cert.icon] || Icons.Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl hover:border-purple-500/50 transition-all duration-300 group"
              >
                {/* Icon with color */}
                <div
                  className="inline-flex p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: cert.color }} />
                </div>

                {/* Certification name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-gray-400 font-medium mb-2">{cert.issuer}</p>

                {/* Date */}
                <p className="text-blue-400 text-sm mb-3">Issued: {cert.date}</p>

                {/* Credential ID */}
                <div className="pt-3 border-t border-white/10">
                  <p className="text-gray-500 text-xs">Credential ID</p>
                  <p className="text-gray-400 text-sm font-mono">{cert.credentialId}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;