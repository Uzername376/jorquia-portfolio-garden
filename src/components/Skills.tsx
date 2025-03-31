
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
    <section id="skills" className="py-20 bg-portfolio-lightgrey">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-portfolio-green mx-auto mb-6"></div>
          <p className="text-portfolio-grey max-w-2xl mx-auto">
            Technical expertise and proficiency in various design and development technologies and tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white rounded-lg shadow-md p-8 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center relative">
                <span className="relative z-10">{category.category}</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-portfolio-green"></span>
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-portfolio-grey">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-portfolio-green h-2.5 rounded-full" 
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
