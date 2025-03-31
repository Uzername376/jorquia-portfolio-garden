
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <p className="text-portfolio-green font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-black mb-6">
              Joaquin Jorquia
            </h1>
            <p className="text-portfolio-grey text-lg md:text-xl mb-8 max-w-lg">
              A passionate designer and developer creating beautiful, functional digital experiences 
              with attention to detail and user-centered approach.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center">
                View My Work <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-portfolio-green rounded-full"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Joaquin Jorquia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-red text-white px-4 py-2 rounded-full shadow-lg">
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
