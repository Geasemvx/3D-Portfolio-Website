import React, { useState } from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden bg-hero-pattern bg-cover bg-center"
      onMouseMove={handleMouseMove}
    >
      {/* Ripple overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.2), transparent 10%)`,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 5 }}
      />

    
        <div className="absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-3 px-1 ">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${`text-white font-black lg:text-[60px] sm:text-[30px] xs:text-[20px] text-[10px] lg:leading-[98px] mt-0`}`}>
              Hi, I'm <span className="text-[#915eff]">Nicholas</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Hey there! Welcome to my portfolio. <br className="sm:block hidden"/>I'm a passionate software engineer and <br className="sm:block hidden"/>web developer with a love for creating <br className="sm:block hidden"/>interactive and visually appealing <br className="sm:block hidden"/>web experiences. Explore my work and<br className="sm:block hidden"/> let's connect!
            </p>
          </div>
        </div>
           
          <div className="absolute inset-0 z-0 ">
            <ComputersCanvas />
            
        </div>
        <div className="absolute bottom-1 w-full flex justify-center items-center ">
  <a href="#about">
    <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 35,0]
          }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
    </div>
  </a>
</div>

    </section>
    
  );
};

export default Hero;
