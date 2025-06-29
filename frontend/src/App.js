import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./components";

const { 
  ProfileSidebar, 
  AboutSection, 
  SkillsSection, 
  ExperienceSection, 
  EducationSection, 
  ProjectsSection 
} = Components;

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'about';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#101011] text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - 40% width */}
        <div className="lg:w-[37%] lg:fixed lg:h-screen lg:overflow-y-auto">
          <ProfileSidebar />
        </div>
        
        {/* Main Content - 60% width */}
        <div className="lg:w-[64%] lg:ml-[38%]">
          <main className="px-6 lg:px-8 py-6">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
          </main>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;