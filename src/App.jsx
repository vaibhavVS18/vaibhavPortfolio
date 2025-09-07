import React from "react";
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Technology from "./components/Technology";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";


function App() {
  return (

<div className="overflow-x-hidden text-stone-300">
  {/* fixed → Positions element relative to the viewport, stays fixed when scrolling.*/}
      <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>      </div>
      <div className="container mx-auto px-8">
        <Header />
        <Hero />
        <Technology/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;