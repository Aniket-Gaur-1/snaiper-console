import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import BrandWork from "./components/BrandWork";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Use from "./components/Use";
import Cure from "./components/Cure";
import Money from "./components/Money";
import Dull from "./components/Dull";
import Created from "./components/Created";
import Snaiper from "./components/Snaiper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BrandWork />
        <Clients />
        <Use />
        <Cure />
        <Money />
        <Dull />
        <Created />
        <Snaiper />
        <Services />
        <Founder />
      </main>
      <Footer />
    </div>
  );
}

export default App;
