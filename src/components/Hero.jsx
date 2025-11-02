import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpeg";
import { FaLinkedin } from "react-icons/fa";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      {/* hero div */}
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              className="relative bg-gradient-to-br from-black/20 to-[#291459]/30 backdrop-blur-md border border-white/50 rounded-3xl p-12 w-96 h-[500px] overflow-hidden flex flex-col items-center justify-center text-center"
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent rounded-3xl"></div>

              {/* Glass shine animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  delay: 1.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />

              <img
                src={profileImage}
                alt="Profile"
                className="w-36 h-36 rounded-full border-3 border-white/40 mb-6 object-cover object-top shadow-2xl"
              />

              <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                Vaibhav Sharma
              </h3>

              <p className="text-white/80 text-base mb-4 font-medium">
                Undergrad @ IIIT Una • Full Stack Developer • C++ / DSA Enthusiast
              </p>

              <p className="text-white/60 text-sm mb-6 leading-relaxed max-w-xs">
                Passionate about building scalable web applications and solving
                complex problems through efficient code.
              </p>

                <a
                  href="https://www.linkedin.com/in/vaibhav-sharma-90619a291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10"
                >
                  <button className="relative z-10 flex items-center gap-2 px-8 py-2.5 bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
                    <FaLinkedin className="text-xl" />
                    View Profile
                  </button>
                </a>
            </motion.div>
          </div>
        </div>


        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Vaibhav sharma
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text 
                        text-center text-lg sm:text-xl md:text-2xl lg:text-3xl 
                        tracking-tight text-transparent"
            >
              C++ / DSA Enthusiast • Full Stack Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/Vaibhav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
