import React ,{useEffect} from "react";
import { PROJECTS } from "../constants/index";
import { useLocation } from "react-router-dom";

const JustScan = () => {
    const project = PROJECTS.find((p) => p.title.includes("JustScan"));

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: "smooth", // optional: can use "auto" for instant jump
        });
    }, [pathname]);

  if (!project) {
    return <div className="min-h-screen p-8">Project not found</div>;
  }

  return (
    <div className="min-h-screen p-2 flex flex-col sm:flex-row gap-8 mt-20">
      {/* Title */}

      <div className="p-2 flex-1">
        <h1 className="flex justify-center text-2xl sm:text-3xl font-bold mb-3 ">{project.title}</h1>

        {/* Demo Video */}
        <div className="max-w-4xl">
            <h2 className="text-xl text-center font-semibold">Demo Video</h2>
            <video
            controls
            className="w-full rounded-xl shadow-lg mb-1"
            >
            <source src="/videos/justscan-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            {/* GitHub Link */}
            {project.link && (
                <div className="flex justify-center">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline text-lg font-medium hover:text-blue-300"
                    >
                    View GitHub Repository
                </a>
                </div>

            )}
        </div>
      </div>

      
        <div className="flex flex-col sm:p-12 sm:mt-15 max-w-xl">
            {/* Description */}
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl sm:text-center font-semibold mb-2">About Project</h2>
                <p className="text-lg max-w-3xl">{project.description}</p>
            </div>


            {/* Technologies Used */}
            <div>
                <h2 className="text-2xl sm:text-center font-semibold mb-2">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                    <span
                    key={index}
                    className="px-4 py-1 rounded-full border border-stone-400 text-sm"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
        </div>


    </div>
  );
};

export default JustScan;
