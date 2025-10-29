import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { PROJECTS } from "../constants/";

const Project = () => {
  // const navigate = useNavigate();

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl font-semibold">
        Projects
      </h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-5 flex flex-wrap lg:justify-center items-center p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              {project.link !== "/justScan" ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 rounded shadow-lg sm:w-50 w-44 hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ):
              (
                <Link 
                  to={`${project.link}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 rounded shadow-lg sm:w-50 w-44 hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              )
              }

            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>

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
            <div className="mt-2">
              {
                project.link !== "/justScan" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    See Project
                  </a>
                ):
                (
                  <Link
                    to={`${project.link}`}
                    className="text-emerald-600 hover:underline"
                  >
                    See Project
                  </Link>
                )
              }

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
        className={`text-stone-400 overflow-hidden ${
          showMore ? "" : "line-clamp-5"
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
