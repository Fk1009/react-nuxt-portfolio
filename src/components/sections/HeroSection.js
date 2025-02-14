import React from "react";
import Image from "next/image";
import { useSelector } from 'react-redux';  // Import hooks from react-redux

const HeroSection = () => {
  const resume = useSelector((state) => state.resume?.data?.main);  // Access the resume data from Redux store

  return (
    <section id="hero" className="hero section dark-background">
      <Image src="/assets/img/hero-bg.jpg" alt="Hero Background" width={1920} height={1080} />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
      <h2>{resume?.name}</h2>
      <p>I'm <span className="typed" data-typed-items="Full Stack Developer">Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
    </div>
    
  </section>
  );
}

export default HeroSection;
