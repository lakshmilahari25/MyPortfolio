import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Lahari</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          "I am a passionate Software Engineer , <br className='sm:block hidden' />
          actively seeking internships in software development, full stack development, and web development to further enhance my skills and contribute to innovative projects.
          </p>
          {/* Add icons and button here */}
          <div className="flex flex-col items-center mt-8 space-y-6">
            <div className="flex space-x-12">
              <a 
                href="https://github.com/lakshmilahari25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-12 h-12 hover:fill-[#d4d4d4] transition-colors duration-300">
                  <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.305 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58v-2.039c-3.338.727-4.043-1.606-4.043-1.606-.546-1.387-1.334-1.756-1.334-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.837 1.238 1.837 1.238 1.068 1.831 2.803 1.303 3.49.998.108-.774.418-1.303.762-1.603-2.664-.302-5.467-1.332-5.467-5.933 0-1.309.469-2.379 1.237-3.219-.124-.303-.537-1.522.116-3.168 0 0 1.009-.322 3.303 1.237.957-.265 1.985-.398 3.003-.403 1.019.005 2.046.138 3.003.403 2.293-1.559 3.302-1.237 3.302-1.237.655 1.646.242 2.865.118 3.168.768.84 1.235 1.91 1.235 3.219 0 4.621-2.81 5.63-5.484 5.922.43.37.825 1.099.825 2.221v3.293c0 .318.217.693.825.58C20.563 22.097 24 17.602 24 12.297 24 5.67 18.627.297 12 .297z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/lahariappala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-12 h-12 hover:fill-[#d4d4d4] transition-colors duration-300">
                  <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.23 19.075H5.477V9.25h2.753v9.825zm-1.377-11.21c-.882 0-1.598-.713-1.598-1.595 0-.882.716-1.596 1.598-1.596s1.598.713 1.598 1.596c0 .882-.716 1.595-1.598 1.595zm13.149 11.21h-2.753v-5.369c0-1.278-.046-2.927-1.78-2.927-1.782 0-2.057 1.394-2.057 2.832v5.464h-2.751V9.25h2.65v1.343h.036c.369-.7 1.273-1.432 2.621-1.432 2.8 0 3.319 1.844 3.319 4.24v5.674h-.036z" />
                </svg>
              </a>
              <a 
                href="mailto:333lahari@gmail.com" 
                className="flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-14 h-14 hover:fill-[#d4d4d4] transition-colors duration-300">
                  <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-9 6-9-6V6l9 6 9-6v2zM3 18v-8.7l9 6 9-6V18H3z" />
                </svg>
              </a>
            </div>
            <a
              href="/resume.pdf" // Update this path to the location of your resume.pdf
              download="resume.pdf"
              className="bg-[#915EFF] text-white px-6 py-2 rounded-lg hover:bg-[#6e5494] transition-colors duration-300 mt-8"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
