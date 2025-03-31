
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          J<span>.</span>Jorquia
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu-desktop">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="nav-link"
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-toggle"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-menu active">
          <div className="container nav-menu-mobile">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="nav-link"
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={toggleMenu}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
