
import React from 'react';
import { FileText, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Learn more about my background, skills, and passion for creating digital experiences.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-info">
            <h3 className="about-title">
              I'm <span>Joaquin Jorquia</span>, a Designer & Developer
            </h3>
            <p className="about-text">
              I specialize in creating stunning digital experiences that are both beautiful and functional. 
              With a strong background in design principles and coding expertise, I bridge the gap between 
              visual appeal and technical implementation.
            </p>
            <p className="about-text">
              My approach is user-centered, focusing on creating intuitive interfaces and seamless interactions 
              that solve real problems. I'm passionate about continuous learning and staying up-to-date with 
              the latest industry trends and technologies.
            </p>
            
            <div className="about-contact-info">
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span>joaquin@jorquia.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>San Beda College Alabang</span>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-with-icon">
                <FileText size={18} className="btn-icon" />
                Download Resume
              </span>
            </a>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <h4 className="stat-value">5+</h4>
                <p className="stat-label">Years of Experience</p>
              </div>
              <div className="stat-card">
                <h4 className="stat-value">50+</h4>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-card">
                <h4 className="stat-value">30+</h4>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat-card">
                <h4 className="stat-value">10+</h4>
                <p className="stat-label">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
