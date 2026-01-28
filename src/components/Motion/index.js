import React from "react";
import { motion } from "framer-motion";

// Animation variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// Wrapper Components
export const FadeInUp = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
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
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: fadeIn.hidden,
      visible: {
        ...fadeIn.visible,
        transition: {
          ...fadeIn.visible.transition,
          delay
        }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: scaleIn.hidden,
      visible: {
        ...scaleIn.visible,
        transition: {
          ...scaleIn.visible.transition,
          delay
        }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ 
  children, 
  className = "",
  fast = false,
  ...props 
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fast ? staggerContainerFast : staggerContainer}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ 
  children, 
  className = "",
  ...props 
}) => (
  <motion.div
    variants={fadeInUp}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Hover animations for cards
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.3 }
};

export const hoverGlow = {
  boxShadow: "0 0 40px rgba(102, 126, 234, 0.3)",
  transition: { duration: 0.3 }
};

export default {
  FadeInUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer
};
