import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import BrandWork from "./components/BrandWork";
import Process from "./components/Process";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [showContact, setShowContact] = useState(false);

  const toggleContactForm = () => {
    setShowContact(!showContact); // Toggle contact form visibility
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <BrandWork />
        <Process />
        <Founder />
      </main>
      {showContact && <Contact />}
      <Footer toggleContactForm={toggleContactForm} />
    </div>
  );
}

export default App;
