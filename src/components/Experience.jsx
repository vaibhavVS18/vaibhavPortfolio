import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EXPERIENCES } from "../constants/";
import {FiExternalLink} from "react-icons/fi";
import {motion} from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4 border-t scroll-mt-18" id="experiences">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl font-semibold"
        >
          Experiences
        </motion.h2>

      <div>
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="mb-5 flex flex-wrap lg:justify-center items-center p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg"
          >
            {/* Experience Image */}
            <div className="w-full lg:w-1/4 flex justify-center">
              {exp.link ? (
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="mb-6 rounded shadow-lg sm:w-45 w-30 hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ) : (
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="mb-6 rounded shadow-lg sm:w-50 w-44"
                />
              )}
            </div>

            {/* Experience Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-1 text-2xl font-semibold">{exp.title}</h3>
              <p className="text-stone-400 mb-2 italic">{exp.year}</p>
              <p className="font-medium mb-2">
                {exp.role} — <span className="text-gray-100">{exp.company}</span>
              </p>

              <Description text={exp.description} />

              {/* Technologies */}
              <div className="flex flex-wrap mt-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-3 flex flex-wrap gap-4">

                {exp.certificate && (
                  <div className="flex gap-1 items-center justify-center">
                  <FiExternalLink/>
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 hover:underline"
                    >
                      Completion Certificate
                    </a>
                  </div>
                )}

                {exp.link && (
                  <div className="flex gap-1 items-center justify-center">
                  <FiExternalLink/>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      View Website
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

// Reusable Description Component with Show More / Less
const Description = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p
        className={`text-stone-400 overflow-hidden ${
          showMore ? "" : "line-clamp-5"
        }`}
      >
        {text}
      </p>

      {text.split(" ").length > 25 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-400 text-sm mt-1"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Experience;
