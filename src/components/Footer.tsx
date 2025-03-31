
import React from 'react';
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <h2 className="footer-logo">
            J<span>.</span>Jorquia
          </h2>
          <p className="footer-tagline">
            Designing and building digital experiences
          </p>
        </div>
        
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
        
        <div>
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="copyright">
          <p>&copy; {currentYear} Joaquin Jorquia. All rights reserved.</p>
        </div>
      </div>
      
      <button 
        className={`scroll-top ${window.scrollY > 300 ? 'visible' : ''}`}
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
