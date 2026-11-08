import React from "react";
import { motion } from "framer-motion";
import "./style.css";

export const GlassCard = ({
  children,
  className = "",
  hover = true,
  glow = false,
  as = "div",
  onClick,
  ...props
}) => {
  const Component = motion[as] || motion.div;
  
  return (
    <Component
      className={`glass-card ${glow ? 'glass-card--glow' : ''} ${className}`}
      whileHover={hover ? { 
        scale: 1.02,
        borderColor: "rgba(255, 255, 255, 0.15)"
      } : undefined}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export const GlassCardLink = ({
  children,
  href,
  className = "",
  glow = true,
  ...props
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`glass-card glass-card--link ${glow ? 'glass-card--glow' : ''} ${className}`}
    whileHover={{ 
      scale: 1.02,
      borderColor: "rgba(255, 255, 255, 0.15)"
    }}
    transition={{ duration: 0.3 }}
    {...props}
  >
    {children}
    <span className="glass-card__arrow">→</span>
  </motion.a>
);

export default GlassCard;
