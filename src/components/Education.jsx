// src/components/Education.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc'; // Adjust the path if necessary
import { education } from '../constants'; // Adjust the path if necessary
import { fadeIn } from '../utils/motion'; // Adjust if you have a specific motion utility

const EducationCard = ({ index, education }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='bg-tertiary rounded-[20px] p-8 min-h-[350px] flex flex-col justify-between items-center border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-1'
    style={{ maxWidth: '350px', marginRight: '20px' }}
  >
    <div className='text-center'>
      <h3 className='text-white text-[22px] font-bold mb-2' style={{ fontFamily: 'Times New Roman' }}>
        {education.college_name}
      </h3>
      <p className='text-secondary text-[18px] font-semibold mb-4' style={{ fontFamily: 'Times New Roman' }}>
        {education.degree}
      </p>
      <p className='text-white-100 text-[16px] mb-1' style={{ fontFamily: 'Times New Roman' }}>
        {education.date}
      </p>
      <p className='text-white-100 text-[16px] mb-4' style={{ fontFamily: 'Times New Roman' }}>
        GPA: {education.gpa}
      </p>
      <p className='text-white-100 text-[14px]' style={{ fontFamily: 'Times New Roman' }}>
        {education.description}
      </p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className='mt-20'>
      <motion.div>
        <p className='text-center text-secondary text-[18px]' style={{ fontFamily: 'Times New Roman' }}>What I have studied so far</p>
        <h2 className='text-center text-white text-[30px] font-bold' style={{ fontFamily: 'Times New Roman' }}>Education</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
        {education.map((edu, index) => (
          <EducationCard key={edu.college_name} index={index} education={edu} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
