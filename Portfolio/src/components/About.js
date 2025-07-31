import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const [activeChat, setActiveChat] = useState(0);
  
  const chatMessages = [
    { role: 'user', text: 'Tell me about yourself' },
    { role: 'ai', text: 'I\'m a Data Scientist and AI Engineer passionate about transforming complex data into actionable insights.' },
    { role: 'user', text: 'What drives you?' },
    { role: 'ai', text: 'The intersection of mathematics, technology, and human behavior. I love finding patterns where others see chaos.' },
    { role: 'user', text: 'Your approach?' },
    { role: 'ai', text: 'I combine rigorous statistical analysis with cutting-edge machine learning to solve real-world problems.' }
  ];

  const skills = [
    { icon: Brain, name: 'Machine Learning', level: 95 },
    { icon: Code, name: 'Python/R', level: 90 },
    { icon: Database, name: 'Big Data', level: 85 },
    { icon: TrendingUp, name: 'Analytics', level: 92 }
  ];

  return (
    <section className="py-20 bg-white text-charcoal-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between data complexity and business clarity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* GPT-style chat */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 bg-charcoal-900 text-white"
          >
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-sm text-gray-400">AI Chat Interface</span>
            </div>
            
            <div className="space-y-4 h-80 overflow-y-auto">
              {chatMessages.slice(0, activeChat + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.5 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-lavender-500 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button
              onClick={() => setActiveChat((prev) => (prev + 1) % chatMessages.length)}
              className="interactive mt-4 w-full py-2 bg-lavender-500 hover:bg-lavender-600 rounded-lg transition-colors"
              data-cursor-text="Continue"
            >
              Continue Conversation
            </button>
          </motion.div>

          {/* Skills visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-8">Core Expertise</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="interactive"
                data-cursor-text="Explore"
              >
                <div className="flex items-center mb-3">
                  <skill.icon className="w-6 h-6 text-lavender-500 mr-3" />
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="ml-auto text-lavender-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-lavender-500 to-lavender-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 bg-gradient-to-r from-lavender-50 to-purple-50 rounded-xl"
            >
              <h4 className="font-bold text-xl mb-3 text-charcoal-800">Mission Statement</h4>
              <p className="text-gray-700 leading-relaxed">
                To democratize AI and make complex data insights accessible to everyone. 
                I believe in the power of data-driven decisions to create positive change 
                in businesses and society.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;