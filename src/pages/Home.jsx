import React ,{useEffect} from "react";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Technology from "../components/Technology";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

export default function Home() {
    useEffect(() => {
      fetch("https://trueseller-q39b.onrender.com");
      fetch("https://codchat-jvsc.onrender.com");
    }, []);
  return (
    <div className="mt-20">
      <Hero />
      <Experience/>
      <Project />
      <Technology />
      <Contact />
    </div>
  );
}
