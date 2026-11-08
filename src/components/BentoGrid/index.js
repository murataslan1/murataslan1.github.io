import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../Motion";
import "./style.css";

export const BentoGrid = ({ 
  children, 
  className = "",
  columns = 4 
}) => (
  <motion.div
    className={`bento-grid bento-grid--cols-${columns} ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={staggerContainer}
  >
    {children}
  </motion.div>
);

export const BentoItem = ({
  children,
  className = "",
  span = 1,
  rowSpan = 1,
  hover = true
}) => (
  <motion.div
    className={`bento-item bento-item--span-${span} bento-item--row-${rowSpan} glass-card ${className}`}
    variants={fadeInUp}
    whileHover={hover ? { scale: 1.02 } : undefined}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Pre-styled Bento Cards
export const BentoCardInfo = ({ 
  label, 
  title, 
  description,
  icon,
  className = "" 
}) => (
  <BentoItem className={`bento-card-info ${className}`}>
    <span className="bento-card__label">{label}</span>
    <h3 className="bento-card__title">{title}</h3>
    {description && <p className="bento-card__desc">{description}</p>}
    {icon && <span className="bento-card__icon">{icon}</span>}
  </BentoItem>
);

export const BentoCardStat = ({ 
  value, 
  label,
  emoji,
  className = "" 
}) => (
  <BentoItem className={`bento-card-stat ${className}`}>
    {emoji && <span className="bento-card__emoji">{emoji}</span>}
    <span className="bento-card__value">{value}</span>
    <span className="bento-card__stat-label">{label}</span>
  </BentoItem>
);

export const BentoCardCode = ({ 
  code,
  className = "" 
}) => (
  <BentoItem className={`bento-card-code ${className}`} span={2}>
    <pre className="bento-card__code">
      <code>{code}</code>
    </pre>
  </BentoItem>
);

export default BentoGrid;
