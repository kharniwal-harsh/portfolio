import React from 'react';

// Profile Sidebar Component
const ProfileSidebar = () => {
  return (
    <div className="bg-[#101011] p-8 border-r border-gray-800 h-full flex flex-col items-center">
      <div className="mb-8">
        <img 
          src="/img1.jpeg" 
          alt="Profile" 
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-0 border-gray-700"
        />
        <h1 className="text-4xl font-bold mb-2">Harsh Kharniwal</h1>
        <p className="text-gray-400 text-xl mb-4">Full Stack Web Developer</p>
        <div className="flex items-center  text-gray-400 mb-4">
          <span className="text-red-500 mr-2">📍</span>
          <span className="text-xl">Rajasthan, India 🇮🇳</span>
        </div>
        <p className="text-sm text-gray-500 italic leading-relaxed max-w-xs mx-auto">
          Building Real Products For Real Clients, Not Just More Projects
        </p>
      </div>

      <div className="space-y-4 mb-8 w-full max-w-xs">
        <a 
          href="https://drive.google.com/file/d/1QO4vZNzPtKGBq8UG-h-0GvgOIKL576R_/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-#101011 hover:bg-white text-white hover:text-black px-4 py-2 rounded-lg transition-colors duration-200 text-sm border border-white"
        >
          <img src="https://img.icons8.com/?size=100&id=O0rFPukE4XcO&format=png&color=000000" alt="Resume" className="inline-block w-5 h-5 mr-2 align-middle" /> Resume
        </a>
        <div className="flex justify-center space-x-4">
          <a href="mailto:harshkharniwal9351@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
            <img src="https://img.icons8.com/?size=100&id=tnnUFgHrPmR0&format=png&color=000000" alt="Mail" className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-kharniwal9351/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="Mail" className="w-8 h-7" />
          </a>
          <a href="https://github.com/kharniwal-harsh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
            <img src="https://img.icons8.com/?size=100&id=BbkEmvb97OHk&format=png&color=000000" alt="Mail" className="w-7 h-7" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 w-full max-w-xs">
        <h3 className="text-2xl font-semibold mb-4">Want to Work Together?</h3>
        <a 
          href="mailto:harshkharniwal9351@gmail.com"
          className="w-full block text-center bg-gray-700 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
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
          I'm a 20-year-old, Full Stack Developer with a knack for building products that make a difference. A Computer Science undergrad with a strong foundation in full-stack development, real-time systems, and applied ML. Proven record of building scalable applications with measurable impact across performance and engagement.
        </p>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skillCategories = {
    Languages: [
      { name: 'C++', color: 'bg-blue-600 bg-opacity-20 text-blue-300 border-blue-500' },
      { name: 'Python', color: 'bg-blue-600 bg-opacity-20 text-blue-300 border-blue-500' },
      { name: 'JavaScript', color: 'bg-blue-600 bg-opacity-20 text-blue-300 border-blue-500' },
      { name: 'SQL', color: 'bg-blue-600 bg-opacity-20 text-blue-300 border-blue-500' },
      { name: 'HTML', color: 'bg-blue-600 bg-opacity-20 text-blue-300 border-blue-500' },
      { name: 'CSS', color: 'bg-blue-600 bg-opacity-20 text-blue-300 border-blue-500' }
    ],
    Frameworks: [
      { name: 'React.js', color: 'bg-green-600 bg-opacity-20 text-green-300 border-green-500' },
      { name: 'Tailwind CSS', color: 'bg-green-600 bg-opacity-20 text-green-300 border-green-500' },
      { name: 'EJS', color: 'bg-green-600 bg-opacity-20 text-green-300 border-green-500' },
      { name: 'Bootstrap', color: 'bg-green-600 bg-opacity-20 text-green-300 border-green-500' },
      { name: 'HTML5', color: 'bg-green-600 bg-opacity-20 text-green-300 border-green-500' },
      { name: 'CSS3', color: 'bg-green-600 bg-opacity-20 text-green-300 border-green-500' }
    ],
    Backend: [
      { name: 'Node.js', color: 'bg-purple-600 bg-opacity-20 text-purple-300 border-purple-500' },
      { name: 'Express.js', color: 'bg-purple-600 bg-opacity-20 text-purple-300 border-purple-500' },
      { name: 'REST APIs', color: 'bg-purple-600 bg-opacity-20 text-purple-300 border-purple-500' }
    ],
    'Database & Storage': [
      { name: 'MongoDB', color: 'bg-red-600 bg-opacity-20 text-red-300 border-red-500' },
      { name: 'Firebase', color: 'bg-red-600 bg-opacity-20 text-red-300 border-red-500' },
      { name: 'MySQL', color: 'bg-red-600 bg-opacity-20 text-red-300 border-red-500' }
    ],
    'Machine Learning & Data': [
      { name: 'Pandas', color: 'bg-yellow-600 bg-opacity-20 text-yellow-300 border-yellow-500' },
      { name: 'NumPy', color: 'bg-yellow-600 bg-opacity-20 text-yellow-300 border-yellow-500' },
      { name: 'Matplotlib', color: 'bg-yellow-600 bg-opacity-20 text-yellow-300 border-yellow-500' },
      { name: 'Seaborn', color: 'bg-yellow-600 bg-opacity-20 text-yellow-300 border-yellow-500' },
      { name: 'Scikit-learn', color: 'bg-yellow-600 bg-opacity-20 text-yellow-300 border-yellow-500' },
      { name: 'dlib', color: 'bg-yellow-600 bg-opacity-20 text-yellow-300 border-yellow-500' },
      { name: 'OpenCV', color: 'bg-yellow-600 bg-opacity-20 text-yellow-300 border-yellow-500' }
    ],
    'Tools & Platforms': [
      { name: 'Git', color: 'bg-orange-600 bg-opacity-20 text-orange-300 border-orange-500' },
      { name: 'GitHub', color: 'bg-orange-600 bg-opacity-20 text-orange-300 border-orange-500' },
      { name: 'Netlify', color: 'bg-orange-600 bg-opacity-20 text-orange-300 border-orange-500' },
      { name: 'Streamlit', color: 'bg-orange-600 bg-opacity-20 text-orange-300 border-orange-500' },
      { name: 'VS Code', color: 'bg-orange-600 bg-opacity-20 text-orange-300 border-orange-500' },
      { name: 'Postman', color: 'bg-orange-600 bg-opacity-20 text-orange-300 border-orange-500' },
      { name: 'GitHub Pages', color: 'bg-orange-600 bg-opacity-20 text-orange-300 border-orange-500' }
    ],
    Others: [
      { name: 'OOP', color: 'bg-gray-600 bg-opacity-20 text-gray-300 border-gray-500' },
      { name: 'DBMS', color: 'bg-gray-600 bg-opacity-20 text-gray-300 border-gray-500' },
      { name: 'Operating Systems', color: 'bg-gray-600 bg-opacity-20 text-gray-300 border-gray-500' },
      { name: 'Problem Solving (DSA)', color: 'bg-gray-600 bg-opacity-20 text-gray-300 border-gray-500' },
      { name: 'RESTful APIs', color: 'bg-gray-600 bg-opacity-20 text-gray-300 border-gray-500' }
    ]
  };

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-300">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill.name}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border ${skill.color}`}
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
        'Developed responsive user interfaces using modern frontend technologies, ensuring seamless performance across devices.',
        'Integrated reusable UI components with React.js + Tailwind CSS, contributing to scalable and maintainable code-bases.',
        'Improved user engagement by 30% through optimization of layout structure, responsiveness, and accessibility.'
      ],
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React.js']
    },
    {
      company: 'CHEGG India',
      logo: <img src="https://img.icons8.com/?size=100&id=25423&format=png&color=000000" alt="CHEGG India" className="w-10 h-10" />,
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
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 p-5 bg-[#111114] rounded-lg border border-gray-800">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl">
                {exp.logo}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-1">{exp.position}</h3>
              <p className="text-gray-400 mb-1 text-lg">{exp.company}, {exp.location}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3 text-sm">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-green-600 bg-opacity-20 text-green-300 border border-green-500 text-xs rounded-full"
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
    <section id="education" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4 p-5 bg-[#101011] rounded-lg border border-gray-800">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl">
                {edu.logo}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-gray-400 mb-1 text-lg">{edu.institution}</p>
              <p className="text-sm text-gray-500 mb-1">{edu.location}</p>
              <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
              <p className="text-sm text-lg font-semibold">{edu.grade}</p>
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
      description: 'WhatsApp chat Analyzer is a WebApp where anyone either tech or non-tech person can analyze their WhatsApp chat data.',
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
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      
      <div className="mb-4">
        <div className="flex space-x-4">
          <button className="px-3 py-1.5 bg-gray-700 text-gray-200 rounded-lg text-sm">Personal Projects</button>
        </div>
      </div>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="p-5 bg-[#101011] rounded-lg border border-gray-800">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-20 h-20 bg-transparent rounded-full flex items-center justify-center text-2xl">{project.icon}</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-3 text-lg">{project.description}</p>
                
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4 text-sm">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <div className="flex gap-4 mb-3">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white-400 hover:text-blue-300 text-base"
                  >
                    <img src="https://img.icons8.com/?size=100&id=49411&format=png&color=000000" alt="Mail" className="w-6 h-6" /> Live Demo
                  </a>
                  <a 
                    href={project.viewCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white-400 hover:text-blue-300 text-base"
                  >
                    <img src="https://img.icons8.com/?size=100&id=BbkEmvb97OHk&format=png&color=000000" alt="Mail" className="w-6 h-6" /> View Code
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-green-600 bg-opacity-20 text-green-300 border border-green-500 text-xs rounded-full"
                    >
                      {tech}
                    </span>
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