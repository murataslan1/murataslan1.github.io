import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../Motion";
import "./style.css";

export const StatCard = ({
  value,
  label,
  emoji,
  icon,
  className = "",
  delay = 0
}) => (
  <motion.div
    className={`stat-card glass-card ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: fadeInUp.hidden,
      visible: {
        ...fadeInUp.visible,
        transition: {
          ...fadeInUp.visible.transition,
          delay
        }
      }
    }}
    whileHover={{ scale: 1.05 }}
  >
    {emoji && <span className="stat-card__emoji">{emoji}</span>}
    {icon && <span className="stat-card__icon">{icon}</span>}
    <span className="stat-card__value">{value}</span>
    <span className="stat-card__label">{label}</span>
  </motion.div>
);

export const StatCardRow = ({ stats, className = "" }) => (
  <div className={`stat-card-row ${className}`}>
    {stats.map((stat, index) => (
      <StatCard
        key={stat.label}
        {...stat}
        delay={index * 0.1}
      />
    ))}
  </div>
);

export default StatCard;
