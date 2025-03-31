
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team functionality.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Firebase', 'Vuex'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Explore my portfolio of web applications and design projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="project-link-icon" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="project-link-icon" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-button">
          <a href="#" className="btn-outline">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
