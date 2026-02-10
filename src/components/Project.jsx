import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants/";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  // const navigate = useNavigate();

  return (
    <div className="pb-4 border-t scroll-mt-18" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-5 flex flex-wrap lg:justify-center items-center p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg relative"
          >
            {project.isGroup && (
              <div className="w-full flex items-center justify-center mb-6">
                <div className="h-[1px] bg-stone-600 w-16 md:w-56"></div>
                <span className="mx-3 text-stone-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                  Group Project
                </span>
                <div className="h-[1px] bg-stone-600 w-16 md:w-56"></div>
              </div>
            )}
            {/* Project Image */}
            <div className="flex justify-center items-center w-full lg:w-1/4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`mb-6 shadow-lg sm:w-45 w-30 hover:scale-105 transition-transform duration-300 ${project.isGroup ? "rounded-full" : "rounded"
                    }`}
                />
              </a>

            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>

              {project.link && (
                <div className="flex justify-center">
                  <div className="flex gap-1 items-center justify-center">
                    <FiExternalLink />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              )}


              <Description text={project.description} link={project.link} />

              {/* Technologies */}
              <div className="flex flex-wrap mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>


              {/* See Project Link */}
              <div className="flex justify-between sm: mt-2">


                {project.githubLink && (
                  <div className="flex gap-1 items-center justify-center">
                    <FaGithub />
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 hover:underline"
                    >
                      GitHub Repository
                    </a>
                  </div>
                )}

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Separate component for description with Show More functionality
const Description = ({ text, link }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p
        className={`text-stone-400 overflow-hidden ${showMore ? "" : "line-clamp-5"
          }`}
      >
        {text}
      </p>

      {/* Show More / Less Button */}
      {text.split(" ").length > 20 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-400 text-sm mt-1 sm:hidden"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}

    </div>
  );
};

export default Project;
