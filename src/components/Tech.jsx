import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants"; // Ensure the path is correct

const TechCategory = ({ category, items }) => (
  <div className='tech-category-container'>
    <h3 className='tech-category-heading'>{category}</h3>
    <div className='flex flex-wrap gap-6'>
      {items.map((tech) => (
        <div key={tech.name} className='tech-logo-container'>
          <img
            src={tech.icon}
            alt={tech.name}
            className='tech-logo'
          />
        </div>
      ))}
    </div>
  </div>
);

const Tech = () => {
  return (
    <div className='tech-container'>
      <h2 className='tech-heading'>Technical Skills</h2>
      {Object.keys(technologies).map((category) => (
        <TechCategory
          key={category}
          category={category}
          items={technologies[category]}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
