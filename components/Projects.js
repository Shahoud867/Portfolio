"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, BarChart3, Brain, Database } from "lucide-react"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const projects = [
    {
      id: 1,
      title: "AI-Powered Fraud Detection",
      description: "Real-time fraud detection system using ensemble learning",
      longDescription:
        "Built a comprehensive fraud detection system that processes over 1M transactions daily with 99.2% accuracy. Implemented gradient boosting, neural networks, and anomaly detection algorithms.",
      tech: ["Python", "TensorFlow", "Apache Kafka", "PostgreSQL"],
      impact: "↓ 85% false positives, $2M+ saved annually",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/yourusername/fraud-detection",
      demoUrl: "https://fraud-detection-demo.vercel.app",
    },
    {
      id: 2,
      title: "Customer Behavior Analytics",
      description: "Deep learning model for customer lifetime value prediction",
      longDescription:
        "Developed a sophisticated CLV prediction model using RNNs and attention mechanisms. Integrated with real-time data pipeline for dynamic customer segmentation.",
      tech: ["PyTorch", "AWS SageMaker", "Airflow", "Redis"],
      impact: "↑ 34% marketing ROI, 2.3x retention rate",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/yourusername/customer-analytics",
      demoUrl: "https://customer-analytics-demo.vercel.app",
    },
    {
      id: 3,
      title: "Distributed ML Pipeline",
      description: "Scalable machine learning infrastructure on cloud",
      longDescription:
        "Architected end-to-end ML pipeline handling petabyte-scale data. Implemented automated model training, validation, and deployment with A/B testing framework.",
      tech: ["Kubernetes", "MLflow", "Apache Spark", "Docker"],
      impact: "↓ 70% deployment time, 99.9% uptime",
      icon: Database,
      gradient: "from-green-500 to-teal-500",
      githubUrl: "https://github.com/yourusername/ml-pipeline",
      demoUrl: "https://ml-pipeline-demo.vercel.app",
    },
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
          <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming complex problems into intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="interactive group cursor-pointer"
              data-cursor-text="Explore"
              onClick={() => handleProjectClick(project)}
            >
              <div className="glass-effect rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-lavender-500">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-lavender-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-lavender-500/20 text-lavender-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="text-green-400 font-semibold text-sm">{project.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedProject.gradient} flex items-center justify-center`}
                  >
                    <selectedProject.icon className="w-8 h-8 text-white" />
                  </div>
                  <button onClick={handleCloseModal} className="text-gray-400 hover:text-white text-2xl">
                    ×
                  </button>
                </div>

                <h3 className="text-3xl font-bold mb-4 gradient-text">{selectedProject.title}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-lavender-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-lavender-500/20 text-lavender-300 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Impact</h4>
                  <p className="text-green-300 font-semibold">{selectedProject.impact}</p>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-center gap-2 px-6 py-3 bg-lavender-500 hover:bg-lavender-600 rounded-lg transition-colors text-white no-underline"
                    data-cursor-text="View"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-center gap-2 px-6 py-3 border border-lavender-500 text-lavender-400 hover:bg-lavender-500 hover:text-white rounded-lg transition-colors no-underline"
                    data-cursor-text="Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
