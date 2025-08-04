"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Linkedin, Github, Download, MapPin, Clock } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(e.target.action, {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }

    setIsSubmitting(false)
  }, [])

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shahoud-shahid-502510281/",
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com/Shahoud867",
      label: "GitHub",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      icon: Mail,
      href: "mailto:shahoudshahid652@gmail.com",
      label: "Email",
      gradient: "from-red-500 to-red-600",
    },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "shahoudshahid652@gmail.com" },
    { icon: MapPin, label: "Location", value: "Available Worldwide" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  ]

  return (
    <section className="relative py-20 bg-gray-900 text-white z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your next AI project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="interactive group"
            data-cursor-text="Fill Form"
          >
            <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-lavender-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-lavender-500 to-purple-500 flex items-center justify-center mr-4">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send Message</h3>
              </div>

              <form
                action="https://formspree.io/f/xeozzpoa"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Your name"
                    className="interactive w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-lavender-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    data-cursor-text="Type"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Your email address"
                    className="interactive w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-lavender-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    data-cursor-text="Type"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    aria-label="Your message"
                    className="interactive w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-lavender-500 focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                    data-cursor-text="Type"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="interactive w-full py-4 bg-lavender-500 hover:bg-lavender-600 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
                  data-cursor-text={submitted ? "Sent!" : "Send"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        ✓
                      </motion.div>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-lavender-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              </div>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700"
                  >
                    <info.icon className="w-5 h-5 text-lavender-400" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for new opportunities</span>
              </div>

              <motion.a
                href="/resume.pdf"
                download="Shahoud_Shahid_Resume.pdf"
                className="interactive flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-lavender-500 to-purple-500 hover:from-lavender-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 font-semibold hover:scale-[1.02] w-full justify-center"
                data-cursor-text="Download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-lavender-500 transition-all duration-300">
              <h4 className="font-bold text-xl mb-6 text-white">Connect With Me</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`interactive group flex flex-col items-center p-4 glass-effect rounded-xl border border-gray-700 hover:border-lavender-500 transition-all duration-300 hover:scale-105`}
                    data-cursor-text={social.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-lavender-500 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                  <span className="text-white text-lg">☕</span>
                </div>
                <h4 className="font-bold text-lg text-lavender-400">Fun Fact</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I've processed over 50TB of data and built models that have impacted millions of users. Coffee
                consumption: ~3 cups per breakthrough!
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["50TB+ Data", "1M+ Users", "3 Cups Coffee"].map((stat) => (
                  <span key={stat} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    {stat}
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

export default Contact
