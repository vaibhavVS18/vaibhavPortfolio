import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./index.css";
import JustScan from "./pages/JustScan";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden text-stone-300">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Header />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/justScan" element={<JustScan />} />

          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
