import React, { useState, useEffect } from "react";
import "../styles/founder.css";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Founder = () => {
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
    <div className="founder-section">
      {webGLSupported ? (
        <div className="canvas-container">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
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

      <h2 className="founder-heading">
        Illuminating True Human Purpose Through Technology
      </h2>
      <div className="founder-content">
        <div className="about-founder">
          <img
            src="./images/founder.jpg"
            alt="Founder"
            className="founder-image"
          />
          <h1 className="founder-name">Sindre Godager</h1>
          <p className="founder">Founder, SNAIPER</p>
        </div>
        <blockquote className="founder-quote">
          "The multiplayer digital economy empowers smaller players to unite—
          inviting would-be consumers to become participants and bigger players
          to become powerful platforms. It's the digital equivalent of the
          common property rights that form corporations, but without the
          government contracts or physical property rights enforcement that make
          corporations possible."
        </blockquote>
      </div>
    </div>
  );
};

export default Founder;
