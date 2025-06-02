import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Social icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // --- Optional: Backend Submission ---
    // This is where you would send the data to your Node.js backend
    // For now, we'll just simulate a submission
    console.log('Form data submitted:', formData);
    // try {
    //   const response = await fetch('/api/contact', { // Your backend endpoint
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setIsSubmitted(true);
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     const errorData = await response.json();
    //     setError(errorData.message || 'Something went wrong. Please try again.');
    //   }
    // } catch (err) {
    //   setError('Failed to send message. Please check your connection.');
    // }
    // --- End Optional Backend Submission ---

    // Simulate submission for now:
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5s
    }, 1000);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-deep-indigo text-light-text" // Differentiated background
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-heading font-bold text-violet-flask mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Let's Collaborate
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side: Contact Info & Socials */}
          <div className="space-y-6">
            <p className="text-lg">
              Have a project in mind, a question, or just want to connect?
              Feel free to reach out! I'm always open to discussing new ideas and opportunities.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:noure.abid@enstab.ucar.tn"
                className="flex items-center text-lg hover:text-violet-flask transition-colors group"
              >
                <FaEnvelope className="w-6 h-6 mr-3 text-violet-flask group-hover:scale-110 transition-transform" />
                noure.abid@enstab.ucar.tn
              </a>
              <a
                href="YOUR_LINKEDIN_URL" // Replace with your actual LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-violet-flask transition-colors group"
              >
                <FaLinkedin className="w-6 h-6 mr-3 text-violet-flask group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
              <a
                href="YOUR_GITHUB_URL" // Replace with your actual GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg hover:text-violet-flask transition-colors group"
              >
                <FaGithub className="w-6 h-6 mr-3 text-violet-flask group-hover:scale-110 transition-transform" />
                GitHub Portfolio
              </a>
            </div>
            <p className="text-sm text-light-text/70">
                I typically respond within 24-48 hours.
            </p>
          </div>

          {/* Right Side: Contact Form (Optional) */}
          <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-subtle-grey rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-violet-flask mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-dark-bg border border-violet-flask/30 rounded-md shadow-sm focus:outline-none focus:ring-violet-flask focus:border-violet-flask sm:text-sm text-light-text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-violet-flask mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-dark-bg border border-violet-flask/30 rounded-md shadow-sm focus:outline-none focus:ring-violet-flask focus:border-violet-flask sm:text-sm text-light-text"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-violet-flask mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-dark-bg border border-violet-flask/30 rounded-md shadow-sm focus:outline-none focus:ring-violet-flask focus:border-violet-flask sm:text-sm text-light-text"
                placeholder="Your message..."
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {isSubmitted && <p className="text-accent-teal text-sm">Thank you! Your message has been sent.</p>}
            <div>
              <motion.button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-violet-flask hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-flask transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;