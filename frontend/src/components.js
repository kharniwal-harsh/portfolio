import React from 'react';

// Profile Sidebar Component
const ProfileSidebar = () => {
  return (
    <div className="bg-[#111114] p-8 lg:p-12 border-r border-gray-800">
      <div className="text-center mb-8">
        <img 
          src="https://images.unsplash.com/photo-1590086782957-93c06ef21604" 
          alt="Profile" 
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-gray-700"
        />
        <h1 className="text-3xl font-bold mb-2">Harsh Kharniwal</h1>
        <p className="text-gray-400 text-lg mb-4">Full Stack Web Developer</p>
        <div className="flex items-center justify-center text-gray-400 mb-2">
          <span className="text-red-500 mr-2">📍</span>
          <span>Rajasthan, India 🇮🇳</span>
        </div>
        <p className="text-sm text-gray-500 italic">
          Building Real Products For Real Clients, Not Just More Projects
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <a 
          href="https://drive.google.com/file/d/1QO4vZNzPtKGBq8UG-h-0GvgOIKL576R_/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          📄 Resume
        </a>
        <div className="flex justify-center space-x-4">
          <a href="mailto:harshkharniwal9351@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="text-2xl">✉️</span>
          </a>
          <a href="https://www.linkedin.com/in/harsh-kharniwal9351/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="text-2xl">💼</span>
          </a>
          <a href="https://github.com/kharniwal-harsh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="text-2xl">🐙</span>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8">
        <h3 className="text-xl font-semibold mb-4">Want to Work Together?</h3>
        <a 
          href="mailto:harshkharniwal9351@gmail.com"
          className="w-full block text-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>
          I'm a 22-year-old experienced Full Stack Developer with a knack for building products that make a difference. A Computer Science undergrad with a strong foundation in full-stack development, real-time systems, and applied ML. Proven record of building scalable applications with measurable impact across performance and engagement.
        </p>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skillCategories = {
    Languages: [
      { name: 'C++', color: 'bg-blue-600' },
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'JavaScript', color: 'bg-yellow-600' },
      { name: 'SQL', color: 'bg-orange-600' },
      { name: 'HTML', color: 'bg-orange-700' },
      { name: 'CSS', color: 'bg-blue-700' }
    ],
    Frontend: [
      { name: 'React.js', color: 'bg-cyan-500' },
      { name: 'Tailwind CSS', color: 'bg-cyan-400' },
      { name: 'EJS', color: 'bg-green-600' },
      { name: 'Bootstrap', color: 'bg-purple-600' },
      { name: 'HTML5', color: 'bg-orange-600' },
      { name: 'CSS3', color: 'bg-blue-600' }
    ],
    Backend: [
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'Express.js', color: 'bg-gray-700' },
      { name: 'REST APIs', color: 'bg-blue-700' }
    ],
    'Database & Storage': [
      { name: 'MongoDB', color: 'bg-green-600' },
      { name: 'Firebase', color: 'bg-orange-500' },
      { name: 'MySQL', color: 'bg-blue-800' }
    ],
    'Machine Learning & Data': [
      { name: 'Pandas', color: 'bg-blue-600' },
      { name: 'NumPy', color: 'bg-blue-700' },
      { name: 'Matplotlib', color: 'bg-orange-600' },
      { name: 'Seaborn', color: 'bg-cyan-600' },
      { name: 'Scikit-learn', color: 'bg-orange-700' },
      { name: 'dlib', color: 'bg-green-700' },
      { name: 'OpenCV', color: 'bg-blue-800' }
    ],
    'Tools & Platforms': [
      { name: 'Git', color: 'bg-orange-600' },
      { name: 'GitHub', color: 'bg-gray-800' },
      { name: 'Netlify', color: 'bg-teal-600' },
      { name: 'Streamlit', color: 'bg-red-600' },
      { name: 'VS Code', color: 'bg-blue-600' },
      { name: 'Postman', color: 'bg-orange-500' },
      { name: 'GitHub Pages', color: 'bg-gray-700' }
    ],
    Others: [
      { name: 'OOP', color: 'bg-purple-600' },
      { name: 'DBMS', color: 'bg-indigo-600' },
      { name: 'Operating Systems', color: 'bg-gray-600' },
      { name: 'Problem Solving (DSA)', color: 'bg-green-600' },
      { name: 'RESTful APIs', color: 'bg-blue-700' }
    ]
  };

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill.name}
                className={`px-3 py-1 rounded-full text-sm font-medium text-white ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Juvare',
      logo: '🏢',
      position: 'Front End Web Developer',
      location: 'Melbourne, Australia',
      duration: 'March 2025 - Present (3 months)',
      description: [
        'Configure and customize WebEOC framework solutions to meet client requirements for emergency/incident response',
        'Collaborate directly with clients to understand requirements, provide technical implementation support across Australia and New Zealand',
        'Provide 24/7 technical support and assist in Emergency Operations Centre (EOC) activations when required',
        'Develop and implement process reviews, online training content, and exercise assessments'
      ],
      skills: ['WebEOC', 'Emergency Management', 'Client Support', 'Technical Implementation']
    },
    {
      company: 'Gluco Health',
      logo: '🏥',
      position: 'Co-Founder & Technical Lead',
      location: 'Melbourne, Victoria',
      duration: 'February 2025 - Present (3 months)',
      description: [
        'Leading development of GlucoseScan, an innovative mobile application helping diabetic individuals manage their glucose responses to different food combinations',
        'Architecting and implementing a cross-platform mobile application using React Native and Expo',
        'Designing and implementing a comprehensive food database to analyze and predict glucose responses to different food combinations',
        'Collaborating closely with healthcare professionals and diabetic individuals to ensure the application meets real needs and provides accurate insights'
      ],
      skills: ['React Native', 'Expo', 'Healthcare', 'Mobile Development', 'Database Design', 'Cross-platform']
    },
    {
      company: 'Freelance',
      logo: '💼',
      position: 'Freelance Full-Stack Web Developer',
      location: 'Self-Employed, Melbourne, Victoria',
      duration: '2022 - Present (3 years 3 months)',
      description: [
        'Successfully delivered 20+ projects ranging from basic dashboards to SEO-optimized landing pages to fully-fledged applications',
        'Developed web-based solutions tailored to client needs, ensuring high performance and user experience',
        'Worked with modern web technologies including React, NextJS, and Supabase to build scalable applications',
        'Maintained long-term client relationships, including planning, development, and deployment'
      ],
      skills: ['React', 'NextJS', 'Supabase', 'Freelance', 'SEO', 'Full-Stack Development']
    },
    {
      company: 'Shifti',
      logo: '🔄',
      position: 'Founder & Lead Developer',
      location: 'Melbourne, Victoria',
      duration: 'January 2023 - January 2024 (1 year)',
      description: [
        'Led the development of an innovative AI-powered shift scheduling platform for the hospitality industry',
        'Architected and implemented a scalable microservices-based backend using NodeJS and Django',
        'Designed and built an admin dashboard and mobile application for comprehensive shift management',
        'Integrated advanced machine learning algorithms for intelligent shift allocation and demand forecasting',
        'Managed a team of developers, fostering a culture of innovation and continuous improvement'
      ],
      skills: ['Startup', 'NodeJS', 'Django', 'Microservices', 'Mobile Development', 'Team Management']
    },
    {
      company: 'Pheonic',
      logo: '📱',
      position: 'Software Development Intern',
      location: 'Melbourne, Victoria',
      duration: 'March 2019 - November 2019 (9 months)',
      description: [
        'Demonstrated proficiency in Angular 8, React, .NET, and microservices',
        'Developed effective solutions to complex issues and debugged code efficiently',
        'Adopted to new technologies and worked effectively environment and worked with both legacy and modern technologies',
        'Collaborated with cross-functional teams, enhancing communication and teamwork skills'
      ],
      skills: ['Angular', 'React', '.NET', 'Microservices']
    }
  ];

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6 p-6 bg-gray-900 rounded-lg border border-gray-800">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                {exp.logo}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
              <p className="text-gray-400 mb-1">{exp.company}, {exp.location}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-green-700 text-white text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Deakin University',
      location: 'Burwood, Victoria',
      duration: 'July 2022 - Present',
      logo: '🎓'
    },
    {
      degree: 'Diploma of Information Technology',
      institution: 'Deakin College',
      location: 'Burwood, Victoria',
      duration: 'March 2021 - March 2022',
      logo: '🎓'
    }
  ];

  return (
    <section id="education" className="mb-16">
      <h2 className="text-4xl font-bold mb-8">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-6 p-6 bg-gray-900 rounded-lg border border-gray-800">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                {edu.logo}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-gray-400 mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      name: 'HomeGame: Home Poker Analytics Manager',
      description: 'Developed a feature-rich mobile application for managing and analyzing home poker games using React Native and Supabase.',
      features: [
        'Advanced analytics engine providing insights into gameplay, win rates, and bankroll management support across multiple games',
        'Implemented offline mode with data synchronization and integrated with party APIs for quick calculation'
      ],
      tech: ['React Native', 'Supabase', 'JavaScript', 'Analytics', 'Mobile Development'],
      links: ['View Code', 'Live Demo'],
      icon: '🃏'
    },
    {
      name: 'BrewPoints: Cafe Loyalty App',
      description: 'Developed a full-stack loyalty app solution for independent cafes, featuring React Native mobile apps and a Node.js backend with GraphQL API.',
      features: [
        'Designed and deployed various Point of Sale (POS) systems using a flexible adapter pattern',
        'Implemented real-time order tracking and notifications using SocketIO',
        'Built a comprehensive loyalty program system with analytics dashboard for cafe owners'
      ],
      tech: ['React Native', 'Node.js', 'GraphQL', 'MongoDB', 'Analytics Dashboard', 'Real-time'],
      links: ['View Code', 'Live Demo'],
      icon: '☕'
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      
      <div className="mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Personal Projects</button>
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700">Client Projects</button>
        </div>
      </div>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded-lg border border-gray-800">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">{project.icon}</div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-green-700 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a 
                      key={link}
                      href="#" 
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export all components
const Components = {
  ProfileSidebar,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection
};

export default Components;