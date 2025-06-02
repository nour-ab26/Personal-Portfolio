
export const projects = [
  {
    id: 'optiflow',
    title: 'OptiFlow - Production Scheduling',
    shortDescription: 'Desktop app to simplify and optimize manufacturing order scheduling (JSSP).',
    // image: optiflowImg, // Uncomment and use actual image path
    imagePlaceholder: 'OptiFlow App Screenshot/Mockup', // Placeholder
    tags: ['Python', 'Flask', 'PyQt5', 'SQLite', 'Figma', 'Process Optimization'],
    category: ['Web Dev', 'UX/UI', 'Process Optimization'], // For filtering
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
    githubLink: 'https://github.com/yourusername/optiflow', // Replace with actual link
    liveDemoLink: null, // or actual link if available
    figmaLink: 'https://figma.com/your-optiflow-prototype', // Replace
  },
  {
    id: 'finance-app',
    title: 'Personal Finance Web App',
    shortDescription: 'Full-stack web application for tracking personal income, expenses, and budgets.',
    // image: financeAppImg,
    imagePlaceholder: 'Finance App Dashboard',
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
    figmaLink: 'https://figma.com/your-finance-prototype',
  },
  {
    id: 'notes-app',
    title: 'Desktop Notes Application',
    shortDescription: 'A desktop app for creating, managing, and organizing notes with user authentication.',
    // image: notesAppImg,
    imagePlaceholder: 'Notes App Interface',
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
    githubLink: 'https://github.com/yourusername/notes-app',
    liveDemoLink: null,
    figmaLink: null,
  },
  // Add more projects as needed
];