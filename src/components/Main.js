import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ResumeSection from './sections/ResumeSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import "aos/dist/aos.css";
import AOS from 'aos';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection  />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
};

export default Main;
