import React from 'react'
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Import Leetcode icon

import logo from "../assets/logo.png"; 

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-">


<motion.div className="relative flex flex-shrink-0 items-center">
  <a
    href="/"
    aria-label="Home"
    className="relative overflow-hidden rounded-full p-2 bg-transparent shadow-lg"
  >
    {/* Logo */}
    <img
      src={logo}
      className="relative z-10 rounded-full"
      width={50}
      height={50}
      alt="Logo"
    />

    {/* Subtle Shine overlay */}
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

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vaibhav-sharma-90619a291/"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/vaibhavVS18"
          target="_blank"
          aria-label="Github"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://leetcode.com/u/VaibhavSharma_IIIT/"
          target="_blank"
          aria-label="Leetcode"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  )
}

export default Header
