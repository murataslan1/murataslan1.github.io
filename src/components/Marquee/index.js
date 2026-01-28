import React from "react";
import { motion } from "framer-motion";
import "./style.css";

export const Marquee = ({ 
  children, 
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = ""
}) => {
  const duration = 100 / speed;
  
  return (
    <div className={`marquee-wrapper ${className}`}>
      <motion.div 
        className="marquee-track"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear"
          }
        }}
        style={{
          ...(pauseOnHover && { "--pause-on-hover": "paused" })
        }}
      >
        <div className="marquee-content">
          {children}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const MarqueeItem = ({ 
  icon, 
  label, 
  value,
  emoji,
  className = "" 
}) => (
  <div className={`marquee-item glass-card ${className}`}>
    {emoji && <span className="marquee-item__emoji">{emoji}</span>}
    {icon && <span className="marquee-item__icon">{icon}</span>}
    <div className="marquee-item__content">
      {value && <span className="marquee-item__value">{value}</span>}
      {label && <span className="marquee-item__label">{label}</span>}
    </div>
  </div>
);

export default Marquee;
