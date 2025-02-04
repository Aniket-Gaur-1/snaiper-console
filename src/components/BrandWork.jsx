import React, { useEffect, useState } from "react";
import "../styles/brandWork.css";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const BrandWork = () => {
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
    <div className="brand-work-container" id="brand-work-section">
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

      <h2 className="brand-work-heading">How does SNAIPER work?</h2>
      <div className="description">
        <p className="brand-work-description">
          <span>register client</span>
          <span>chose plan</span>
          <span>set frequency for updating SEO parameters</span>
          <span>from weekly to monthly</span>
          <span>chose type of updates</span>
          <span>as keywords, metatags, and blog content</span>
          <span>chose frequency for traffic report</span>
          <span>click execute</span>
        </p>
        <p className="brand-work-description">
          <span>client will experience</span>
          <span>more traffic</span>
          <span>better ranking</span>
          <span>regular traffic reports as emails</span>
          <span>no cure – No pay</span>
          <span>no increased traffic – no costs</span>
        </p>
      </div>
    </div>
  );
};

export default BrandWork;
