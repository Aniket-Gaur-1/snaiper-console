import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import BrandWork from "./components/BrandWork";
import Process from "./components/Process";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <BrandWork />
        <Process />
        <Services />
        <Founder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
