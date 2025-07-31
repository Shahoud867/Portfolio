import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  return (
    <section className="py-20 bg-white text-charcoal-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your next AI project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-charcoal-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="interactive w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lavender-500 focus:outline-none transition-colors"
                  data-cursor-text="Type"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-charcoal-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="interactive w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lavender-500 focus:outline-none transition-colors"
                  data-cursor-text="Type"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-charcoal-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="interactive w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lavender-500 focus:outline-none transition-colors resize-none"
                  data-cursor-text="Type"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                className="interactive w-full py-4 bg-lavender-500 hover:bg-lavender-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                data-cursor-text={submitted ? 'Sent!' : 'Send'}
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
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-effect bg-gradient-to-br from-lavender-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-charcoal-800">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-lavender-500" />
                  <span className="text-gray-700">your.email@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-lavender-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-gray-700">Available for new opportunities</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold mb-4 text-charcoal-800">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`interactive w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                      data-cursor-text={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-charcoal-900 text-white rounded-2xl p-6"
            >
              <h4 className="font-bold text-lg mb-3 text-lavender-400">Fun Fact</h4>
              <p className="text-gray-300 leading-relaxed">
                I've processed over 50TB of data and built models that have impacted 
                millions of users. Coffee consumption: ~3 cups per breakthrough! ☕
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;