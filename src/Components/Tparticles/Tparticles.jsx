import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Tparticles = () => {
  const particlesInit = async (main) => {
    // This is required to load the full tsParticles engine
    await loadFull(main);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true }, // Particles will fill the entire screen
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
      />
    </div>
  );
};

export default Tparticles;
