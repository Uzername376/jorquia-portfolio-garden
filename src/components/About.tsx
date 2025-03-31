
import React from 'react';
import { FileText, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-lightgrey">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-portfolio-green mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">
              I'm <span className="text-portfolio-green">Joaquin Jorquia</span>, a Designer & Developer
            </h3>
            <p className="text-portfolio-grey mb-6">
              I specialize in creating stunning digital experiences that are both beautiful and functional. 
              With a strong background in design principles and coding expertise, I bridge the gap between 
              visual appeal and technical implementation.
            </p>
            <p className="text-portfolio-grey mb-8">
              My approach is user-centered, focusing on creating intuitive interfaces and seamless interactions 
              that solve real problems. I'm passionate about continuous learning and staying up-to-date with 
              the latest industry trends and technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Mail size={20} className="text-portfolio-green mr-3" />
                <span>joaquin@jorquia.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-portfolio-green mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="btn-outline flex items-center w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">5+</h4>
                <p className="text-portfolio-grey">Years of Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">50+</h4>
                <p className="text-portfolio-grey">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">30+</h4>
                <p className="text-portfolio-grey">Happy Clients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">10+</h4>
                <p className="text-portfolio-grey">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
