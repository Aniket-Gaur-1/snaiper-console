import React, { useState } from "react";
import "../styles/process.css";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HexagonLoader } from "r3dy";

const Process = () => {
  const [rotation, setRotation] = useState([0, 0, 0]); // Initial rotation: [x, y, z]

  return (
    <div className="process-container" id="process-section">
      <div className="canvas-container">
        <Canvas>
          <Stars radius={50} count={5000} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className="process-item-container">
        <div className="process-item">
          <h2 className="process-step-title">
            <span>NO CURE</span> <span>NO PAY</span>
          </h2>
          <p className="process-step-description">
            <span>
              If SNAIPER doesn't deliver increased traffic on your clients web
              page, they don’t pay.
            </span>
            <span>This shows how much you can trust SNAIPER</span>
            <span>
              We can guarantee improved ratings, improved traffic and we will
              deliver documentation for it.
            </span>
            <span>
              Implement SNAIPER at your clients web sites. There is nothing to
              lose
            </span>
          </p>
        </div>
        <div className="process-image">
          <Canvas>
            <HexagonLoader scale={1} rotation={rotation} />
          </Canvas>
        </div>

        <div className="process-item">
          <h2 className="process-step-title">Lets make Money together</h2>
          <p className="process-step-description">
            SNAIPERs unique split profit model brings increased revenue, and
            cuts man hours related to SEO work. Trust the worlds most powerful
            AI technology to get more satisfied clients and gain profit.
          </p>
        </div>
        <div className="process-image">
          <Canvas>
            <HexagonLoader scale={1} rotation={rotation} />
          </Canvas>
        </div>

        <div className="process-item">
          <h2 className="process-step-title">Let SNAIPER do the dull work</h2>
          <p className="process-step-description">
            <span>SNAIPER uses WATSONX and OpenAI as main engines</span>
            <span>
              The extreme combo of OPENAI and WATSONX and SNAIPERS algorithms
              predicts future keywords and trends with a stunning precision.
            </span>
            <span>
              Let SNAIPER do the time consuming work, for your clients to be
              winners in the digital race.
            </span>
          </p>
        </div>
        <div className="process-image">
          <Canvas>
            <HexagonLoader scale={1} rotation={rotation} />
          </Canvas>
        </div>

        <div className="process-item">
          <h2 className="process-step-title">Why We Created SNAIPER</h2>
          <p className="process-step-description">
            <span>
              Creating, controlling and deploying SEO data takes hours.
            </span>
            <span>
              To automate this work, in combination with the capacity of the
              strongest AI computers resulted in SNAIPER.
            </span>
            <span>
              SNAIPER creates, predicts and deploy SEO data using automated
              sessions.
            </span>
            <span>
              SNAIPER is made of the power of IBM WATSONX, GOOGLE and OPEN AI.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
