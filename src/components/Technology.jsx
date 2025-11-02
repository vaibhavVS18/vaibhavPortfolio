import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiVite,
  SiPostman,
  SiNpm,
  SiCplusplus,
  SiLeetcode,
  SiCodingninjas
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration, delay = 0) => ({
  animate: {
    y: [0, -20, 10, 0],
    rotate: [0, 10, -10, 0],
    scale: [1, 1.15, 1, 1.1],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay,
    },
  },
});

const Technology = () => {
  const techStack = [
    { name: "React", icon: <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400" /> },
    { name: "Next.js", icon: <TbBrandNextjs className="text-5xl md:text-7xl text-white" /> },
    { name: "TailwindCSS", icon: <RiTailwindCssFill className="text-5xl md:text-7xl text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl md:text-7xl text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-5xl md:text-7xl text-gray-300" /> },
    { name: "MongoDB", icon: <TbBrandMongodb className="text-5xl md:text-7xl text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-5xl md:text-7xl text-yellow-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl md:text-7xl text-yellow-300" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-5xl md:text-7xl text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-5xl md:text-7xl text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-5xl md:text-7xl text-purple-500" /> },
    { name: "NPM", icon: <SiNpm className="text-5xl md:text-7xl text-red-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-5xl md:text-7xl text-orange-600" /> },
    { name: "Postman", icon: <SiPostman className="text-5xl md:text-7xl text-orange-400" /> },
  ];

  return (
    <div id="skills" className="pb-24 border-t scroll-mt-18">
      
      {/* MAIN HEADING */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-15 mb-11 md:mb-15 text-center text-3xl md:text-4xl font-semibold"
      >
        Skills & Technologies
      </motion.h2>

      {/* DSA SECTION */}
      <div
        className="mb-18 flex flex-col items-center text-center text-gray-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <SiCplusplus className="text-3xl md:text-6xl text-blue-400" />
          <h3 className="text-base md:text-3xl font-semibold text-white">
            Data Structures & Algorithms (C++)
          </h3>
        </div>

        <p className="max-w-3xl text-sm sm:text-base text-gray-400 mb-4">
          • <span className="text-gray-200 font-medium">400+ Problems Solved</span> on LeetCode  
          <br />• <span className="text-gray-200 font-medium">Level 7 (200+ Problems Solved in 2024)</span> on Coding Ninjas Platform  
          <br />• Strong understanding of <span className="text-gray-200">Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and STL</span>
        </p>

        <div className="flex flex-col md:flex-row gap-5 md:gap-6 justify-center items-center mt-2">
          <div className="flex gap-1 items-center justify-center">
            <SiLeetcode className="text-2xl text-orange-400"/> 
            <a
              href="https://leetcode.com/u/VaibhavSharma_IIIT/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300 hover:underline"
            >
              View LeetCode Profile
            </a>
          </div>

          <div className="flex gap-1 items-center justify-center">
            <SiCodingninjas className="text-lg text-orange-300"/>
            <a
              href="https://www.naukri.com/code360/profile/d95b90e0-c06d-4850-a706-a8f87c85e988"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300 hover:underline"
            >
              View Coding Ninjas Profile
            </a>
          </div>
        </div>
      </div>

      {/* TECHNOLOGIES SECTION */}
      <h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.2 }}
        className="text-center text-3xl font-semibold mb-12"
      >
        Technologies
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            variants={iconVariants(2 + index * 0.1, index * 0.1)}
            animate="animate"
          >
            {tech.icon}
            <p className="text-sm text-gray-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
