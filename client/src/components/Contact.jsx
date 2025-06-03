import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi'; // Send icon

const Contact = () => {
  // ... (formData, isSubmitted, error, handleChange, handleSubmit states and functions remain largely the same) ...
  // (Ensure handleSubmit has basic client-side validation and the simulated/actual fetch)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // console.log('Form data submitted:', formData); // For actual submission, use fetch
    setTimeout(() => { // Simulate submission
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };


  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
    id="contact"
    className="py-24 px-6 md:px-12 text-light-text relative overflow-hidden min-h-screen
               futuristic-gradient-bg" // Apply gradient
  >
     {/* Overlay to ensure readability over the dynamic gradient */}
    <div className="absolute inset-0 bg-deep-indigo/80 backdrop-blur-sm z-0"></div>

      {/* Futuristic background effect */}
      <div className="absolute inset-0 opacity-15 z-[-1] overflow-hidden">
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full rounded-full bg-gradient-to-tr from-violet-flask via-transparent to-transparent animate-pulse-slow-lg"></div>
        <div className="absolute -top-1/2 -right-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-bl from-accent-pink via-transparent to-transparent animate-pulse-slow-lg-reverse"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-10 text-center
                     bg-clip-text text-transparent bg-gradient-to-r from-violet-flask via-accent-pink to-accent-teal"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >

          Let's Innovate Together
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <p className="text-lg text-light-text/90 leading-relaxed">
              Have a project, an idea, or just want to connect? I'm always excited to discuss technology,
              innovation, and opportunities to create something impactful.
            </p>
            <div className="space-y-4">
              {[
                { href: "mailto:noure.abid@enstab.ucar.tn", icon: FaEnvelope, text: "noure.abid@enstab.ucar.tn" },
                { href: "YOUR_LINKEDIN_URL", icon: FaLinkedin, text: "LinkedIn Profile" },
                { href: "YOUR_GITHUB_URL", icon: FaGithub, text: "GitHub Portfolio" },
              ].map(link => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center text-lg text-light-text/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-flask hover:to-accent-pink transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="w-7 h-7 mr-4 text-violet-flask group-hover:scale-125 group-hover:text-accent-pink transition-all duration-300" />
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 sm:p-8 bg-subtle-grey/70 backdrop-blur-md rounded-2xl shadow-xl border border-violet-flask/30"
            variants={itemVariants}
          >
            {/* Form fields as before, but maybe with enhanced focus animations */}
            {['name', 'email'].map(field => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-violet-flask mb-1 capitalize">{field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2.5 bg-dark-bg/70 border border-violet-flask/40 rounded-lg shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-violet-flask focus:border-transparent 
                             sm:text-sm text-light-text placeholder-light-text/50 transition-all"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-violet-flask mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2.5 bg-dark-bg/70 border border-violet-flask/40 rounded-lg shadow-sm 
                           focus:outline-none focus:ring-2 focus:ring-violet-flask focus:border-transparent 
                           sm:text-sm text-light-text placeholder-light-text/50 transition-all"
                placeholder="Your insightful message..."
              ></textarea>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {isSubmitted && <p className="text-accent-teal text-sm font-semibold">Message Sent! Thank you.</p>}

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white 
                         bg-gradient-to-r from-violet-flask to-accent-pink 
                         hover:from-accent-pink hover:to-violet-flask 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-violet-flask
                         transition-all duration-300 transform hover:scale-105"
              whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -4px rgba(139, 92, 246, 0.3)"}}
              whileTap={{ scale: 0.97 }}
            >
              Send Message <FiSend className="ml-2" />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;