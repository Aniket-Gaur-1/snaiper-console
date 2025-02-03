import React from "react";
import "../styles/founder.css";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Founder = () => {
  return (
    <div className="founder-section ">
      <div className="canvas-container">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <h2 className="founder-heading ">
        Illuminating True Human Purpose Through Technology
      </h2>
      <div className="founder-content">
        <div className="about-founder ">
          <img
            src="./images/founder.jpg"
            alt="Founder"
            className="founder-image"
          />
          <h1 className="founder-name">Sindre Godager</h1>
          <p className="founder">Founder, SNAIPER</p>
        </div>
        <blockquote className="founder-quote ">
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
