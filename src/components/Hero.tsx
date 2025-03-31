
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">Joaquin Jorquia</h1>
          <p className="hero-description">
            A passionate designer and developer creating beautiful, functional digital experiences 
            with attention to detail and user-centered approach.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary btn-with-icon">
              View My Work <ArrowRight size={18} className="btn-icon" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-decoration"></div>
          <div className="profile-image-container">
            <img 
              src="/lovable-uploads/e17fc7ec-6d59-4980-8b0f-04d64eb3ef6c.png" 
              alt="Joaquin Jorquia" 
              className="profile-image"
            />
          </div>
          <div className="availability-badge">
            Available for Work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
