import codchatLogo from "../assets/projects/codchatLogo.png";
import truesellerLogo from "../assets/projects/truesellerLogo.png";
import justscanLogo from "../assets/projects/JustScanLogo1.png"
import logo from "../assets/logo.png"
import yesCityLogo from "../assets/projects/yesCityLogo.png"
import yesLogo from "../assets/projects/yesLogo.png"
import satviLogo from "../assets/projects/satvi.png"
import fixMyLocalityLogo from "../assets/projects/fix_my_locality.png"

// Hero section about you
export const HERO_CONTENT = `I’m Vaibhav Sharma, a Full Stack Developer and proficient in solving DSA problems in C++. I am currently <span class="text-blue-200 tracking-tight font-medium">working as a stipend-based Full Stack Intern at Satvi Solutions and serving as the Tech Team Lead at YesCity</span>, where I manage production builds and review code contributions from other interns. Specializing in the MERN stack, Next.js, and Python (FastAPI), I combine a strong algorithmic foundation in <span class="text-blue-200 tracking-tight font-medium">DSA (1000+ problems solved)</span> with a product-first mindset to build high-performance applications—from real-time collaboration platforms to smart entry systems—seamlessly blending efficiency with user experience.`;

//    //  work experiences 
// export const EXPERIENCES = [
//   {
//     title: "YesCity – Travel Assistance Platform",
//     year: "2025 - Present",
//     image: yesLogo,
//     role: "Full-Stack Intern → Now Leading Tech Team",
//     company: "YesCity",
//     description: `Started as a two-month Full-Stack Intern and now leading the development of YesCity — a platform that helps users discover city-specific activities, foods, and accommodations to enhance travel comfort. 
//     Worked on both frontend and backend (primarily backend) using Next.js 13+ App Router with custom API routes and MongoDB. 
//     Implemented secure user authentication using Firebase (OTP-based login), JWT tokens, and cookies for session handling. 
//     Integrated a RAG-based chatbot for personalized travel responses and real-time features such as group chat (Connect) and one-to-one chat (BuddyConnect) using Pusher. 
//     Additionally, built YesCity’s internal Analytics Dashboard using Next.js and MongoDB to monitor user interactions (clicks, category views, and engagement timelines) — helping the marketing team make data-driven decisions. 
//     Currently managing the tech team, assigning tasks, reviewing pull requests, and ensuring scalable, clean architecture.`,
//     technologies: [
//       "Next.js 13+ (App Router)",
//       "MongoDB",
//       "Firebase Authentication",
//       "JWT",
//       "Cookies",
//       "Pusher",
//       "React",
//       "Tailwind CSS"
//     ],
//     link: "https://yescity.in",
//     certificate: ""
//   }
// ];


// Your work experiences
export const EXPERIENCES = [

  {
    title: "YesCity – Travel Assistance Platform",
    year: "Jul - Dec 2025 (5 months)",
    image: yesLogo,
    role: "FullStack Intern → Now Leading Tech Team",
    company: "YesCity",
    description: `• Initially started as an Intern, and now working as Tech Team Lead, reviewing PRs, merging other interns' code, and handling generation of production build of YesCity.
• Built the platform using Next.js 13+ App Router and MongoDB to help users discover city-specific activities and accommodations.
• Implemented secure authentication with Firebase (OTP-based login), JWT, and session cookies.
• Integrated a RAG-based AI chatbot and real-time messaging features (Connect & BuddyConnect) using Pusher.
• Developed an internal Analytics Dashboard to track user engagement interactions and support data-driven marketing decisions.`,
    technologies: [
      "Next.js",
      "MongoDB",
      "Firebase",
      "Cloudinary",
      "JWT",
      "Cookies",
      "Pusher",
      "React",
      "Tailwind CSS"
    ],
    link: "https://yescity.in", // update with actual URL if hosted
    certificate: "https://drive.google.com/file/d/1bYx8FIvP1ls3U2XDInoBc8UHlIb3Zbi-/view?usp=sharing"
  },
  {
    title: "Satvi Solutions - Product Ratings & Comparison Platform",
    year: "Dec 2025 - Present",
    image: satviLogo,
    role: "Full Stack Development Intern",
    company: "Satvi Solutions",
    description: `• Joining as a stipend-based Full Stack Developer intern at SatviSoultions based in the USA, focusing on product ratings and comparisons using a Clapscore-based model.
• Implementing Amazon PA or Creators API and Google Shopping reviews integration to aggregate and display product ratings.
• Developing data scraping solutions for fetching product reviews from allowed platforms.
• Building the frontend using React, Tailwind CSS, and Nodemailer, and developing the backend using FastAPI (Python).`,
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Nodemailer",
      "Amazon PA / Creators API",
      "Google Shopping API"
    ],
    link: "https://satvisolutions.com",
    certificate: "",
    offerLetter: "https://drive.google.com/file/d/1Y0i2qmKDYhvP0qWPAr12MikBqfbK0kZC/view?usp=sharing"
  }

];

// Your projects
export const PROJECTS = [
  {
    title: "JustScan – Smart Entry Management System",
    image: justscanLogo,
    description:
      "An online ID based entry management system that replaces handwritten entry system. It uses validation of ID card and OCR for instant scanning using Tesseract.js and integrates intelligent organization setup from ID card photos. Automated entry/exit logging, real-time dashboards, attendance reminders via email, and comprehensive student management.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Tesseract.js", "Passport.js", "Nodemailer"],
    link: "https://justscanpro.vercel.app",
    githubLink: "https://github.com/vaibhavVS18/JustScan"
  },
  {
    title: "CodChat – Real-time Project Collaboration Platform",
    image: codchatLogo,
    description:
      "CodChat is a real-time collaborative platform for developers to work together on projects. Users can create project rooms, add collaborators, and chat instantly while coding. CodChat integrates AI assistance directly into the chat, helping developers solve problems, generate code, and debug without leaving the discussion.It improves team programming and collaboration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "OpenAI API"],
    link: "https://cod-chat-nine.vercel.app/",
    githubLink: "https://github.com/vaibhavVS18/CodChat"
  },

  {
    title: "TrueSeller – Connecting Local Sellers to Online Buyers",
    image: truesellerLogo,
    description:
      "A MERN-based platform to help local shopkeepers sell their products online easily without any technical skills. Shop owners can register, add their shop details, upload products with images and prices, and sell across India. Buyers can explore local products from different states, order with home delivery, and choose Cash on Delivery or online payment options.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Cloudinary"],
    link: "https://trueseller.vercel.app/",
    githubLink: "https://github.com/vaibhavVS18/TrueSeller"

  },
  {
    title: "Fix My Locality – Civic Issue Management Platform",
    image: fixMyLocalityLogo,
    description:
      "A comprehensive civic issue reporting and management platform connecting citizens, workers, and administrators. It features secure phone-based OTP authentication, GPS-enabled complaint reporting with photo evidence, real-time status tracking, and role-based dashboards for workers and admins. The platform streamlines civic problem resolution with an efficient assignment and tracking system.",
    technologies: [
      "React 19",
      "Tailwind CSS 4",
      "Node.js",
      "Express.js 5",
      "MongoDB",
      "Twilio OTP",
      "Google GenAI"
    ],
    link: "https://fix-my-locality.vercel.app",
    githubLink: "https://github.com/Yaswantsoni1128/fix-my-locality",
    isGroup: true
  }
];

// Contact section - empty for privacy
export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "",
};