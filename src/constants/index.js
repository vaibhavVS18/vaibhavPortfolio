import codchatLogo from "../assets/projects/codchatLogo.png";
import truesellerLogo from "../assets/projects/truesellerLogo.png";
import justscanLogo from "../assets/projects/JustScanLogo1.png"
import logo from "../assets/logo.png"
import yesCityLogo from "../assets/projects/yesCityLogo.png"
import yesLogo from "../assets/projects/yesLogo.png"

// Hero section about you
export const HERO_CONTENT = `I’m Vaibhav Sharma, a full stack developer driven by a passion for building impactful digital products. With strong experience in React, Next.js, and Tailwind CSS on the front end, and Node.js, Express, MongoDB, and MySQL on the back end, I focus on creating fast, scalable, and user-friendly applications. My approach blends clean design, efficient code, and modern development practices to deliver seamless solutions for real-world challenges.`;


// Your work experiences
export const EXPERIENCES = [
  {
    title: "YesCity 3.0 – Travel Assistance Platform",
    year: "2025 - Present",
    image: yesLogo,
    role: "Full Stack Developer / Tech Lead",
    company: "YesCity",
    description: `Leading the development of YesCity 3.0 — a platform that helps users discover city-specific activities, famous foods, and accommodations to enhance travel comfort. 
    Worked on both the frontend and backend (mainly focused on backend) using Next.js 13+ App Router with API routes and MongoDB. 
    Implemented secure user authentication using Firebase (OTP-based login), JWT tokens, and cookies for session handling. 
    Merged a RAG-based chatbot for personalized responses and built real-time features like group chat (Connect) and one-to-one chat (BuddyConnect) using Pusher. 
    Designed the Contribution section and currently manage the tech team, assigning tasks and overseeing feature implementation.`,
    technologies: [
      "Next.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT",
      "Cookies",
      "Pusher",
      "React",
      "Tailwind CSS"
    ],
    link: "https://yescity.in", // update with actual URL if hosted
    certificate: ""
  },

  {
    title: "YesCity Analytics Dashboard",
    year: "2025",
    image: yesCityLogo,
    role: "Full Stack Developer",
    company: "YesCity",
    description: `Built YesCity’s internal analytics dashboard using Next.js 13+ App Router and MongoDB. 
    Developed custom API routes to track user interactions such as clicks on cities, categories, and individual cards, along with precise timestamps for performance monitoring. 
    Designed a responsive and visually clear dashboard to display engagement data, helping the marketing team make informed, data-driven decisions for ad campaigns and feature improvements.`,
    technologies: [
      "Next.js 13+ (App Router)",
      "MongoDB",
      "React",
      // "Chart.js",
      "Tailwind CSS"
    ],
    link: "", // add if hosted
    certificate: ""
  }

];

// Your projects
export const PROJECTS = [
  {
    title: "TrueSeller – Connecting Local Sellers to Online Buyers",
    image: truesellerLogo,
    description:
      "A MERN-based platform to help local shopkeepers sell their products online easily without any technical skills. Shop owners can register, add their shop details, upload products with images and prices, and sell across India. Buyers can explore local products from different states, order with home delivery, and choose Cash on Delivery or online payment options.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Cloudinary"],
    link: "https://trueseller.vercel.app/"
  },
  {
    title: "CodChat – Real-time Project Collaboration Platform",
    image: codchatLogo,
    description:
      "CodChat is a real-time collaborative platform for developers to work together on projects. Users can create project rooms, add collaborators, and chat instantly while coding. CodChat integrates AI assistance directly into the chat, helping developers solve problems, generate code, and debug without leaving the discussion.It improves team programming and collaboration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "OpenAI API"],
    link: "https://cod-chat-nine.vercel.app/"
  },
  {
    title: "JustScan – Smart Entry Management System",
    image: justscanLogo,
    description:
      "Entry Management System that automatically scans ID cards at the gate. Verify identities quickly and accurately. It automatically handles entries by filling information like mobile no., name, hostel name, arrival and departure time etc. ID-Based Entry Management System uses Tesseract OCR to scan and extract details from ID cards.",
    technologies: ["Node.js", "Express.js", "MongoDB Atlas", "Tesseract.js", "Passport.js (Google OAuth)", "EJS", "Bootstrap"],
    link: "/justScan",
    githubLink: "https://github.com/vaibhavVS18/IdScan"
  },

  {
    title: "My Portfolio",
    image: logo,
    description:
      "It is Personal portfolio website showcasing my projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "JavaScript"],
  },

];

// Contact section - empty for privacy
export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "",
};