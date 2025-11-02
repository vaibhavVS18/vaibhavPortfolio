import React from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../assets/logo.png"; 
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full max-h-20 z-50 border-b border-b-gray-800 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]/80 backdrop-blur-md shadow-sm flex items-center justify-between">
      {/* Logo */}
      <motion.div className="relative flex flex-shrink-0 items-center ml-2">
        <a
          href="/"
          aria-label="Home"
          className="relative overflow-hidden border border-gray-500 rounded-full p-2 bg-transparent shadow-lg"
        >
          <img
            src={logo}
            className="relative z-10 rounded-full"
            width={50}
            height={50}
            alt="Logo"
          />

          {/* Shine animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full"
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
        </a>
      </motion.div>

      <div className="hidden lg:flex gap-6">
            <button className="text-gray-300 hover:text-purple-400"
              onClick={()=>{
                document.getElementById("experiences").scrollIntoView({behavior: "smooth" })
              }}
            >
              Experiences
            </button>

            <button  className="text-gray-300 hover:text-purple-400"
              onClick={()=>{
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
              }}
            >
              Projects
            </button>

            <button  className="text-gray-300 hover:text-purple-400"
              onClick={()=>{
                document.getElementById("skills").scrollIntoView({behavior: "smooth" })
              }}
            >
              Skills & Tech
            </button >
            
            <button className="text-gray-300 hover:text-purple-400"
              onClick={()=>{
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact me
            </button>
      </div>

      {/* Social icons */}
      <div className="m-4 flex items-center justify-center gap-4 text-2xl text-gray-300">
        <a href="https://www.linkedin.com/in/vaibhav-sharma-90619a291/" title="Linkedin" target="_blank" aria-label="Linkedin">
          <FaLinkedin />
        </a>

        <a href="https://github.com/vaibhavVS18" title="Github" target="_blank" aria-label="Github">
          <FaGithub />
        </a>

        {/* <a href="#" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </a> */}

        <a href="https://leetcode.com/u/VaibhavSharma_IIIT/" title="Leetcode" target="_blank" aria-label="Leetcode">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  )
}

export default Header
