import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Experience from './components/Experience'; // Uncomment if using
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark-bg text-light-text min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero /> {/* Hero already has id="hero" */}
        <section id="about" className="min-h-screen py-20 px-6 md:px-10">
          <h2 className="text-4xl font-heading text-center mb-12 text-violet-flask">About Me</h2>
          {/* About component will go here */}
        </section>
        <section id="skills" className="min-h-screen py-20 px-6 md:px-10 bg-subtle-grey"> {/* Example of different bg */}
          <h2 className="text-4xl font-heading text-center mb-12 text-violet-flask">My Skills</h2>
          {/* Skills component will go here */}
        </section>
        <section id="projects" className="min-h-screen py-20 px-6 md:px-10">
          <h2 className="text-4xl font-heading text-center mb-12 text-violet-flask">My Projects</h2>
          {/* Projects component will go here */}
        </section>
        <section id="contact" className="min-h-screen py-20 px-6 md:px-10 bg-subtle-grey">
          <h2 className="text-4xl font-heading text-center mb-12 text-violet-flask">Contact Me</h2>
          {/* Contact component will go here */}
        </section>
      </main>
      {/* <Footer /> */} {/* We'll add Footer later */}
    </div>
  );
}


export default App;