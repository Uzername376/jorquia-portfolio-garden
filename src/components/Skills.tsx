
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Design',
      skills: [
        { name: 'UI/UX Design', proficiency: 90 },
        { name: 'Web Design', proficiency: 85 },
        { name: 'Graphic Design', proficiency: 80 },
        { name: 'Wireframing', proficiency: 95 },
      ]
    },
    {
      category: 'Development',
      skills: [
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'React', proficiency: 85 },
        { name: 'Node.js', proficiency: 80 },
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Figma', proficiency: 90 },
        { name: 'Adobe XD', proficiency: 85 },
        { name: 'Git/GitHub', proficiency: 90 },
        { name: 'VS Code', proficiency: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Technical expertise and proficiency in various design and development technologies and tools.
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">
                <span>{category.category}</span>
              </h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
