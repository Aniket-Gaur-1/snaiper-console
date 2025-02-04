import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HexagonLoader } from "r3dy";

const Hero = () => {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported in the browser
    const checkWebGLSupport = () => {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return !!gl;
    };

    // Update WebGL support status
    setWebGLSupported(checkWebGLSupport());
  }, []);

  return (
    <div className="hero-container">
      {webGLSupported ? (
        <div className="canvas-container">
          <Canvas>
            <Stars radius={50} count={2000} factor={4} fade speed={2} />
          </Canvas>
        </div>
      ) : (
        <div className="no-webgl-message">
          <p>
            Your browser does not support WebGL. Some visual elements might not
            work as intended.
          </p>
        </div>
      )}

      <div className="hero-header">
        <div className="hero-logo">
          {webGLSupported ? (
            <Canvas>
              <HexagonLoader />
            </Canvas>
          ) : (
            <p>Logo (fallback) - WebGL not supported</p>
          )}
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
