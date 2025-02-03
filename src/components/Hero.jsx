import React from "react";
import "../styles/hero.css";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HexagonLoader } from "r3dy";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="canvas-container">
        <Canvas>
          <Stars radius={50} count={2000} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className="hero-header">
        <div className="hero-logo">
          <Canvas>
            <HexagonLoader />
          </Canvas>
        </div>

        <div className="hero-title">
          <span>THE</span>
          <span>SNIPER</span>
          <span>SEO CONSOLE</span>
          <p>Made for and used by MEDIA AGENCIES worldwide.</p>
        </div>
      </div>

      <div className="hero-features">
        <span className="hero-title-text">Released Time.</span>
        <span className="hero-title-text">Increased Revenue.</span>
        <span className="hero-title-text">Happier Clients.</span>
      </div>

      <div className="hero-ai">
        <p>Powered by WatsonX - Google - OpenAI.</p>
      </div>
    </div>
  );
};

export default Hero;
