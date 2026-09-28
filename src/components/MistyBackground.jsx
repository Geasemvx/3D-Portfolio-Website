import { motion } from "framer-motion";
import { useState } from "react";

const MistyBackground = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <motion.div
      className="absolute inset-0 misty-bg"
      onMouseMove={handleMouseMove}
      animate={{
        backgroundPosition: `${coords.x / 10}px ${coords.y / 10}px`,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    />
  );
};

export default MistyBackground;
