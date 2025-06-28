import React from 'react';

// Profile Sidebar Component
const ProfileSidebar = () => {
  return (
    <div className="bg-[#111114] p-6 lg:p-8 border-r border-gray-800 h-full">
      <div className="text-center mb-6">
        <img 
          src="https://images.unsplash.com/photo-1590086782957-93c06ef21604" 
          alt="Profile" 
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700"
        />
        <h1 className="text-2xl font-bold mb-1">Harsh Kharniwal</h1>
        <p className="text-gray-400 text-base mb-3">Full Stack Web Developer</p>
        <div className="flex items-center justify-center text-gray-400 mb-2">
          <span className="text-red-500 mr-2">📍</span>
          <span className="text-sm">Rajasthan, India 🇮🇳</span>
        </div>
        <p className="text-xs text-gray-500 italic leading-relaxed">
          Building Real Products For Real Clients, Not Just More Projects
        </p>
      </div>

      <div className="space-y-3 mb-6">
        <a 
          href="https://drive.google.com/file/d/1QO4vZNzPtKGBq8UG-h-0GvgOIKL576R_/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium"
        >
          📄 Resume
        </a>
        <div className="flex justify-center space-x-3">
          <a href="mailto:harshkharniwal9351@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="text-xl">✉️</span>
          </a>
          <a href="https://www.linkedin.com/in/harsh-kharniwal9351/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="text-xl">💼</span>
          </a>
          <a href="https://github.com/kharniwal-harsh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <span className="text-xl">🐙</span>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6">
        <h3 className="text-lg font-semibold mb-3">Want to Work Together?</h3>
        <a 
          href="mailto:harshkharniwal9351@gmail.com"
          className="w-full block text-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm"
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
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="text-gray-300 space-y-4 leading-relaxed text-base">
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
      <h2 className="text-5xl font-bold mb-8">Skills</h2>
      
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-300">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill.name}
                className={`px-4 py-2 rounded-full text-base font-medium text-white ${skill.color}`}
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
      company: 'CodeAlpha',
      logo: '💻',
      position: 'Frontend Developer Intern',
      location: 'Remote',
      duration: '05/2024 – 07/2024',
      description: [
        'Tech Stack: HTML, CSS, Tailwind CSS, Bootstrap, React.js',
        'Developed responsive user interfaces using modern frontend technologies, ensuring seamless performance across devices.',
        'Integrated reusable UI components with React.js + Tailwind CSS, contributing to scalable and maintainable code-bases.',
        'Improved user engagement by 30% through optimization of layout structure, responsiveness, and accessibility.'
      ],
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React.js']
    },
    {
      company: 'CHEGG India',
      logo: '📚',
      position: 'Subject Matter Expert',
      location: 'Remote',
      duration: '01/2022 – 02/2023',
      description: [
        'Resolved student queries in Data Structures & Algorithms, OOP, C++/ Python, achieving an 88%+ satisfaction rating.',
        'Authored and reviewed 120+ high-quality textbook solutions and practice problems'
      ],
      skills: ['Data Structures', 'Algorithms', 'OOP', 'C++', 'Python', 'Problem Solving']
    }
  ];

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-5xl font-bold mb-8">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6 p-6 bg-[#111114] rounded-lg border border-gray-800">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                {exp.logo}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-1">{exp.position}</h3>
              <p className="text-gray-400 mb-1 text-lg">{exp.company}, {exp.location}</p>
              <p className="text-base text-gray-500 mb-4">{exp.duration}</p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 text-base">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-green-700 text-white text-sm rounded-full"
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
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Rajasthan Technical University',
      location: 'Kota, RAJASTHAN',
      duration: '2021 – 2025',
      grade: 'CGPA: 8.14',
      logo: '🎓'
    },
    {
      degree: 'CBSE-Higher Secondary Education (XII)',
      institution: 'Lal Bahadur Shastri Sr. Sec. School',
      location: 'Kota, India',
      duration: '2020 - 2021',
      grade: 'PERCENTAGE: 78%',
      logo: '📚'
    },
    {
      degree: 'CBSE-Secondary Education (X)',
      institution: 'Lal Bahadur Shastri Sr. Sec. School',
      location: 'Kota, India',
      duration: '2018 - 2019',
      grade: 'PERCENTAGE: 79.2%',
      logo: '📖'
    }
  ];

  return (
    <section id="education" className="mb-16">
      <h2 className="text-5xl font-bold mb-8">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-6 p-6 bg-[#111114] rounded-lg border border-gray-800">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
                {edu.logo}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-gray-400 mb-1 text-lg">{edu.institution}</p>
              <p className="text-base text-gray-500 mb-1">{edu.location}</p>
              <p className="text-base text-gray-500 mb-1">{edu.duration}</p>
              <p className="text-base text-green-400 font-semibold">{edu.grade}</p>
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
      name: 'Attendance System Using Face Recognition',
      tech: 'Flask, Python, Face Recognition, MongoDB',
      description: 'Engineered a facial recognition-based attendance system using Flask + MongoDB, leveraging deep learning with Dlib and Face Recognition for accurate identity verification.',
      features: [
        'Engineered a facial recognition-based attendance system using Flask + MongoDB, leveraging deep learning with Dlib and Face Recognition for accurate identity verification.',
        'Integrated JWT-based authentication (Passport.js), achieving a 100% reduction in unauthorized access and enhancing overall security.',
        'Automated attendance notifications and performance reports, increasing student attendance compliance by 30%'
      ],
      techStack: ['Flask', 'Python', 'Face Recognition', 'MongoDB', 'Dlib', 'JWT'],
      liveDemo: 'https://kharniwal-harsh.github.io/attendance-system-demo/',
      viewCode: 'https://github.com/kharniwal-harsh/attendance-system-demo',
      icon: '👤'
    },
    {
      name: 'Interactive 3D Portfolio Website',
      tech: 'React.js, Three.js, Tailwind CSS, Git/GitHub Pages',
      description: 'Built a visually engaging 3D personal portfolio using React.js + Three.js, integrating custom shaders and camera controls to deliver an immersive user experience.',
      features: [
        'Built a visually engaging 3D personal portfolio using React.js + Three.js, integrating custom shaders and camera controls to deliver an immersive user experience.',
        'Utilized GLTF models and optimized asset loading with lazy loading, improving initial page load time by 35%.',
        'Designed a responsive layout with Tailwind CSS, ensuring seamless cross-browser compatibility and WCAG-compliant accessibility.',
        'Boosted user engagement by 40% through interactive animations, smooth transitions, and intuitive navigation'
      ],
      techStack: ['React.js', 'Three.js', 'Tailwind CSS', 'Git', 'GitHub Pages', 'GLTF'],
      liveDemo: 'https://kharniwal-harsh.github.io/threejs-portfolio-main/',
      viewCode: 'https://github.com/kharniwal-harsh/threejs-portfolio-main',
      icon: '🌐'
    },
    {
      name: 'WhatsApp-Chat-Analyzer',
      tech: 'Python, Matplotlib, Pandas, Plotly, Streamlit',
      description: 'WhatsApp chat Analyzer is a WebApp where anyone either tech or non-tech person can analyze their WhatsApp chat data. With this, you can get information such as Which person is active in the chat?',
      features: [
        'WhatsApp chat Analyzer is a WebApp where anyone either tech or non-tech person can analyze their WhatsApp chat data. With this, you can get information such as Which person is active in the chat?',
        'And many other insights you can get from this Analyzer. Anyone obviously, who has WhatsApp account can use this WebApp.',
        'He/She can export their chat either group or individual in text format (without media) and upload it in the WebApp.',
        'It can handle both English and Portuguese format of WhatsApp chat. Built with Python, matplotlib, pandas, plotly, and Streamlit.'
      ],
      techStack: ['Python', 'Matplotlib', 'Pandas', 'Plotly', 'Streamlit'],
      liveDemo: 'https://whatsappchatanalyzerbyhk.streamlit.app/',
      viewCode: 'https://github.com/kharniwal-harsh/wp_analyzer/blob/main/whatsapp-chat-analyser-master/README.md',
      icon: '💬'
    },
    {
      name: 'Smart Agriculture System using IoT',
      tech: 'Arduino | Soil Moisture Sensor | DHT11 | Water Pump Relay Module | LCD Display | C/C++',
      description: 'Developed an IoT-based smart agriculture system to automate irrigation by monitoring real-time soil moisture, temperature, and humidity levels.',
      features: [
        'Developed an IoT-based smart agriculture system to automate irrigation by monitoring real-time soil moisture, temperature, and humidity levels.',
        'Programmed Arduino to collect sensor data and trigger a water pump automatically when soil moisture drops below a defined threshold, optimizing water usage.',
        'Integrated an LCD display to show live sensor readings, enabling on-site monitoring by farmers.',
        'Reduced manual intervention by 70% and ensured timely irrigation, potentially increasing crop yield and resource efficiency.',
        'Designed a modular system allowing easy extension to additional sensors or IoT cloud platforms for remote monitoring.'
      ],
      techStack: ['Arduino', 'Soil Moisture Sensor', 'DHT11', 'Water Pump Relay', 'LCD Display', 'C/C++'],
      liveDemo: 'https://github.com/kharniwal-harsh',
      viewCode: 'https://github.com/kharniwal-harsh',
      icon: '🌱'
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-5xl font-bold mb-8">Projects</h2>
      
      <div className="mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-base">Personal Projects</button>
        </div>
      </div>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-[#111114] rounded-lg border border-gray-800">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">{project.icon}</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-base text-green-400 font-medium mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-4 text-base">{project.description}</p>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 text-base">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-green-700 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline text-base"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.viewCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline text-base"
                  >
                    View Code
                  </a>
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