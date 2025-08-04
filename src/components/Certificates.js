import React from 'react';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera (Andrew Ng)',
    date: '2024',
    link: 'https://coursera.org/verify/deep-learning-specialization',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968703.png', // Example image
  },
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    image: 'https://cdn-icons-png.flaticon.com/512/873/873120.png',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2023',
    link: 'https://www.tensorflow.org/certificate',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
  },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <section className="relative py-20 bg-gray-900 text-white z-10" id="certificates">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 gradient-text flex items-center justify-center gap-3">
            <Award className="w-10 h-10 text-lavender-400" />
            Certificates
          </h2>
          <p className="text-xl text-gray-400">Recognitions & Achievements</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-xl p-6 border border-gray-700 hover:border-lavender-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src={cert.image}
                  alt={`Certificate: ${cert.title} by ${cert.issuer}`}
                  className="w-20 h-20 object-contain mb-2 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-lavender-400 mb-1">{cert.title}</h3>
                <div className="text-gray-300 text-lg">{cert.issuer}</div>
                <span className="text-gray-400 text-sm">{cert.date}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive px-4 py-2 bg-lavender-500 hover:bg-lavender-600 rounded-lg text-white font-semibold transition-colors text-sm mt-2"
                  data-cursor-text="View"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
