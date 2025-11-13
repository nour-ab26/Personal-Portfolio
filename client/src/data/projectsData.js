import optiflowImg from '../assets/projects/optiflow.png';
import financeAppImg from '../assets/projects/dinero.png';
import notesAppImg from '../assets/projects/note.png';
import optiflowVideo from '../assets/video/optiflow-demo.mp4'; 
import dineroVideo from '../assets/video/dinero.webm'; 
import noteVideo from '../assets/video/note.mp4'; 
import nlpSafetyImg from '../assets/projects/nlp-safety-report.png';


export const projects = [
  {
    id: 'optiflow',
    title: 'OptiFlow - Production Scheduling',
    shortDescription: 'Web app to simplify and optimize manufacturing order scheduling (JSSP).',
    image: optiflowImg,
    // Add a video URL (can be a local video in public folder or a YouTube/Vimeo link)
    videoUrl: optiflowVideo,
    tags: ['Python', 'Flask', 'PyQt5', 'SQLite', 'Figma', 'Process Optimization'],
    category: ['Web Dev', 'UX/UI', 'Process Optimization'],
    details: {
      challenge: 'Small manufacturing businesses often struggle with complex and inefficient production scheduling. The goal was to create an accessible tool to manage and optimize job shop scheduling problems (JSSP).',
      solution: 'I designed and developed a desktop application featuring a user-friendly interface (designed in Figma) and a Python/Flask backend. The system allows users to input jobs, resources, and constraints, then utilizes a scheduling algorithm to propose optimized production plans. It simplifies data entry and visualizes the schedule.',
      myRole: [
        'Full-stack development of the desktop application.',
        'UX/UI design and prototyping in Figma.',
        'Backend API development with Flask for data management and scheduling logic.',
        'Database design and implementation with SQLite.',
        'Analysis of the JSSP and process flow for manufacturing.',
      ],
      learnings: 'Gained deep insights into industrial process optimization, backend development with Flask, and creating intuitive desktop UIs with PyQt5. Reinforced skills in translating complex requirements into a functional software solution.',
    },
    githubLink: 'https://github.com/nour-ab26/Optiflow_web_app',
    liveDemoLink: null,
  },
  {
    id: 'finance-app',
    title: 'Personal Finance Web App',
    shortDescription: 'Full-stack web application for tracking personal income, expenses, and budgets.',
    image: financeAppImg,
    videoUrl: dineroVideo, // No video for this one, so it will fall back to the image
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Figma', 'JavaScript'],
    category: ['Web Dev', 'UX/UI'],
    details: {
      challenge: 'To provide users with a clear and efficient way to manage their personal finances and gain insights into their spending habits.',
      solution: 'Developed a MERN stack application with interactive dashboards for data visualization, secure user authentication, and features for tracking income/expenses, setting budgets, and managing bills. The UI was designed in Figma for optimal user experience.',
      myRole: [
        'Full-stack development (MERN: MongoDB, Express.js, React, Node.js).',
        'Frontend development with React for interactive components and data visualization.',
        'Backend API development with Node.js/Express.js.',
        'UX/UI design and prototyping in Figma.',
        'Database schema design for MongoDB.',
      ],
      learnings: 'Mastered full-stack web development with the MERN stack, improved skills in React component design, API integration, and creating data-driven user interfaces.',
    },
    githubLink: 'https://github.com/yourusername/finance-app',
    liveDemoLink: null,
  },
    {
    id: 'notes-app',
    title: 'Desktop Notes Application',
    shortDescription: 'A desktop app for creating, managing, and organizing notes with user authentication.',
    image: notesAppImg,
    videoUrl: noteVideo,
    tags: ['Python', 'Flask', 'PyQt5', 'SQLite', 'Figma', 'Flask-Login'],
    category: ['Web Dev', 'UX/UI'],
    details: {
      challenge: 'To create a simple yet effective desktop note-taking application with secure user accounts and offline capabilities.',
      solution: 'Built an application with a Flask backend for API and authentication (Flask-Login), SQLite for data storage, and a PyQt5 wrapper for the native desktop experience. Initial UI mockups were done in Figma.',
      myRole: [
        'Backend API development using Flask.',
        'Desktop UI development with PyQt5.',
        'Database management with SQLite.',
        'Implementation of user authentication with Flask-Login.',
        'Initial UI mockups in Figma.',
      ],
      learnings: 'Strengthened backend skills with Flask, gained experience in building desktop applications with PyQt5, and managing user authentication flows.',
    },
    githubLink: 'https://github.com/nour-ab26/Notes-Desktop-App',
    liveDemoLink: null,
  },

  {
    id: 'nlp-safety-report',
    title: 'Industrial Safety Report Analysis (NLP)',
    shortDescription: 'An NLP pipeline to analyze industrial safety reports, classify severity, and extract key entities for proactive risk analysis.',
    image: nlpSafetyImg,
    videoUrl: null, // Add a video URL if you have one
    tags: ['Python', 'PyTorch', 'Hugging Face', 'Scikit-learn', 'Pandas', 'NLP'],
    category: ['AI/ML', 'NLP'],
    details: {
      challenge: 'Industrial safety reports are often unstructured text, making it difficult to identify trends and critical risks proactively. The goal was to automate this analysis.',
      solution: 'I developed an NLP pipeline using Python and modern deep learning libraries. The system ingests safety reports, uses models (potentially from Hugging Face/PyTorch) to classify the severity of incidents, and performs Named Entity Recognition (NER) to extract key failure-related entities (e.g., equipment type, failure mode).',
      myRole: [
        'End-to-end development of the NLP pipeline.',
        'Data preprocessing and cleaning of text reports.',
        'Fine-tuning or implementing models from Hugging Face/PyTorch for classification and NER.',
        'Using Scikit-learn and Pandas for initial analysis and metrics.',
      ],
      learnings: 'Gained hands-on experience with advanced NLP techniques, including text classification and entity extraction using PyTorch and the Hugging Face ecosystem. Deepened my understanding of applying AI to real-world industrial problems.',
    },
    githubLink: 'https://github.com/yourusername/nlp-safety-analysis', // Replace
  },
  // Add more projects as needed
];