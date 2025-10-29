import codchatLogo from "../assets/projects/codchatLogo.png";
import truesellerLogo from "../assets/projects/truesellerLogo.png";
import justscanLogo from "../assets/projects/JustScanLogo1.png"
import logo from "../assets/logo.png"



// Hero section about you
export const HERO_CONTENT = `I’m Vaibhav Sharma, a full stack developer driven by a passion for building impactful digital products. With strong experience in React, Next.js, and Tailwind CSS on the front end, and Node.js, Express, MongoDB, and MySQL on the back end, I focus on creating fast, scalable, and user-friendly applications. My approach blends clean design, efficient code, and modern development practices to deliver seamless solutions for real-world challenges.`;


// Your work experiences
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    description: `Developed full-stack web applications using React, Next.js, and Node.js. Implemented REST APIs, user authentication, and database management with MongoDB and MySQL. Worked on responsive UI and optimized web performance.`,
    technologies: ["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "MySQL"],
  },
  {
    year: "2021 - 2023",
    role: "Frontend Developer",
    company: "Freelance / Open Source Contributions",
    description: `Designed and built interactive user interfaces using React and Next.js. Collaborated with backend developers to integrate APIs. Improved accessibility, responsiveness, and website performance.`,
    technologies: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"],
  },
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