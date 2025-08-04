"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Brain, Code, Database, TrendingUp, MessageCircle, User } from "lucide-react"

const About = () => {
  const [activeChat, setActiveChat] = useState(0)

  const chatMessages = [
    { role: "user", text: "Tell me about yourself" },
    {
      role: "ai",
      text: "I'm a Data Scientist and AI Engineer passionate about transforming complex data into actionable insights.",
    },
    { role: "user", text: "What drives you?" },
    {
      role: "ai",
      text: "The intersection of mathematics, technology, and human behavior. I love finding patterns where others see chaos.",
    },
    { role: "user", text: "Your approach?" },
    {
      role: "ai",
      text: "I combine rigorous statistical analysis with cutting-edge machine learning to solve real-world problems.",
    },
  ]

  const handleContinueChat = useCallback(() => {
    setActiveChat((prev) => (prev + 1) % chatMessages.length)
  }, [chatMessages.length])

  const skills = [
    { icon: Brain, name: "Machine Learning", level: 95, gradient: "from-purple-500 to-pink-500" },
    { icon: Code, name: "Python/R", level: 90, gradient: "from-blue-500 to-cyan-500" },
    { icon: Database, name: "Big Data", level: 85, gradient: "from-green-500 to-teal-500" },
    { icon: TrendingUp, name: "Analytics", level: 92, gradient: "from-orange-500 to-red-500" },
  ]

  return (
    <section className="relative py-20 bg-gray-900 text-white z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging the gap between data complexity and business clarity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* AI Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="interactive group"
            data-cursor-text="Interact"
          >
            <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-lavender-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center ml-4 mr-3">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-400">AI Chat Interface</span>
              </div>

              <div className="space-y-4 h-80 overflow-y-auto">
                {chatMessages.slice(0, activeChat + 1).map((message, index) => (
                  <motion.div
                    key={`chat-${index}-${message.role}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.5 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-xl ${
                        message.role === "user"
                          ? "bg-lavender-500 text-white"
                          : "bg-gray-700/50 text-gray-100 border border-gray-600"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.role === "user" ? (
                          <User className="w-3 h-3" />
                        ) : (
                          <Brain className="w-3 h-3 text-lavender-400" />
                        )}
                        <span className="text-xs opacity-75">{message.role === "user" ? "You" : "AI"}</span>
                      </div>
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handleContinueChat}
                className="interactive mt-6 w-full py-3 bg-lavender-500 hover:bg-lavender-600 rounded-lg transition-all duration-300 font-semibold hover:scale-[1.02]"
                data-cursor-text="Continue"
              >
                Continue Conversation
              </button>
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-lavender-500 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-8 text-white">Core Expertise</h3>

              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="interactive mb-8 group"
                  data-cursor-text="Explore"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.gradient} flex items-center justify-center mr-4`}
                    >
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg text-white group-hover:text-lavender-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-lavender-400 font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`bg-gradient-to-r ${skill.gradient} h-3 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-lavender-500 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-lavender-500 to-purple-500 flex items-center justify-center mr-4">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-xl text-white">Mission Statement</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To democratize AI and make complex data insights accessible to everyone. I believe in the power of
                data-driven decisions to create positive change in businesses and society.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Innovation", "Impact", "Integrity"].map((value) => (
                  <span key={value} className="px-3 py-1 bg-lavender-500/20 text-lavender-300 rounded-full text-sm">
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
