import React, { useState } from 'react'; // <<< IMPORT useState
import { motion } from 'framer-motion';
import { FaBriefcase, FaEye, FaProjectDiagram, FaPlayCircle } from 'react-icons/fa'; 
import ExperienceModal from './ExperienceModal'; 
import dashboard from '../assets/video/dashboard.mp4';

const experienceData = [
    {
        role: 'Intern, Predictive Maintenance',
        company: 'TSE Consultant INT',
        duration: 'July 2025 – August 2025',
        location: 'El Mourouj 5, Tunisia',
        icon: FaProjectDiagram,
        videoUrl: dashboard, 
        description: [
            'Developed and trained classification models (RandomForest, XGBoost, LightGBM) to predict industrial equipment failures from time-series sensor data.',
            'Executed a full ML pipeline, including feature engineering and handling severe class imbalance with SMOTE.',
            'Optimized model selection based on the recall metric to minimize missed failure events.',
            'Deployed the trained model into a Flask REST API to serve real-time risk scores to a web dashboard built with React.',
        ],
        tags: ['Predictive Maintenance', 'Time-Series Analysis', 'Classification', 'SMOTE', 'Flask', 'API Deployment', 'React'],
    },
    {
        role: 'Intern, Data Analysis',
        company: 'AURES Group',
        duration: 'July 2024',
        location: 'Douz, Tunisia',
        icon: FaBriefcase,
        videoUrl: null, // No video for this one
        description: [
            'Conducted data preprocessing, exploratory analysis, and visualization on various datasets to identify key trends.',
            'Developed foundational predictive models for real-world problems like real estate price prediction and survival rate analysis.',
        ],
        tags: ['Data Preprocessing', 'EDA', 'Scikit-learn', 'Pandas', 'Predictive Modeling'],
    },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-12 section-bg-alt relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16 text-center 
                             bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                >
          Professional Experience
        </motion.h2>

        <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {experienceData.map((exp, index) => (
                <motion.div key={index} className="flex flex-col md:flex-row items-start gap-8" variants={cardVariants}>
                    {/* Left Column: Meta Info */}
                    <div className="w-full md:w-1/3 text-left md:text-right md:pr-8">
                        <span className="text-violet-flask mb-2 inline-block">{React.createElement(exp.icon, { size: 28 })}</span>
                        <h3 className="text-2xl font-heading font-semibold text-light-text mb-1">{exp.role}</h3>
                        <p className="text-md font-semibold text-violet-flask/90">{exp.company}</p>
                        <p className="text-xs text-light-text/70 mt-1">{exp.duration} &bull; {exp.location}</p>
                    </div>
                    {/* Right Column: Details */}
                    <div className="w-full md:w-2/3 border-l-2 border-violet-flask/30 pl-8">
                        <ul className="text-base text-light-text/90 list-none space-y-3 mb-6">
                            {exp.description.map((point, i) => (
                                <li key={i} className="relative pl-4">
                                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-violet-flask rounded-full"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap gap-2">
                            {exp.tags.map(tag => (
                                <span key={tag} className="bg-dark-bg text-violet-flask/90 px-3 py-1 rounded-full text-xs font-semibold border border-violet-flask/40">{tag}</span>
                            ))}
                        </div>
                        {exp.videoUrl && (
                            <motion.button
                                onClick={() => setSelectedExperience(exp)}
                                className="mt-6 inline-flex items-center gap-2 text-violet-flask font-semibold py-2 px-4 rounded-lg border-2 border-violet-flask/50 hover:bg-violet-flask hover:text-white transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPlayCircle />
                                View Demo
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
};

export default Experience;