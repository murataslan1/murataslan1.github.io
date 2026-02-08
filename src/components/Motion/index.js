import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Spring configurations for natural motion
export const springConfig = {
  gentle: { type: "spring", stiffness: 120, damping: 14 },
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  bouncy: { type: "spring", stiffness: 300, damping: 10, mass: 0.8 },
  smooth: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
};

// Animation variants with spring physics
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      ...springConfig.gentle,
      opacity: { duration: 0.4 },
      filter: { duration: 0.4 }
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
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
    transition: springConfig.snappy
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
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
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: {
          hidden: fadeInUp.hidden,
          visible: {
            ...fadeInUp.visible,
            transition: {
              ...fadeInUp.visible.transition,
              delay,
            },
          },
        },
      };

  return (
    <Component className={className} {...motionProps} {...props}>
      {children}
    </Component>
  );
};

export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: {
          hidden: fadeIn.hidden,
          visible: {
            ...fadeIn.visible,
            transition: {
              ...fadeIn.visible.transition,
              delay,
            },
          },
        },
      };

  return (
    <Component className={className} {...motionProps} {...props}>
      {children}
    </Component>
  );
};

export const ScaleIn = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: {
          hidden: scaleIn.hidden,
          visible: {
            ...scaleIn.visible,
            transition: {
              ...scaleIn.visible.transition,
              delay,
            },
          },
        },
      };

  return (
    <Component className={className} {...motionProps} {...props}>
      {children}
    </Component>
  );
};

export const StaggerContainer = ({ 
  children, 
  className = "",
  fast = false,
  ...props 
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: fast ? staggerContainerFast : staggerContainer,
      };

  return (
    <Component className={className} {...motionProps} {...props}>
      {children}
    </Component>
  );
};

export const StaggerItem = ({ 
  children, 
  className = "",
  ...props 
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion ? {} : { variants: fadeInUp };

  return (
    <Component className={className} {...motionProps} {...props}>
      {children}
    </Component>
  );
};

// Hover animations for cards with spring physics
export const hoverScale = {
  scale: 1.03,
  transition: springConfig.snappy
};

export const hoverGlow = {
  boxShadow: "0 0 40px rgba(102, 126, 234, 0.3)",
  transition: { duration: 0.2 }
};

// Tap animation
export const tapScale = {
  scale: 0.97,
  transition: springConfig.snappy
};

// Gesture-based hover with lift effect
export const hoverLift = {
  y: -4,
  scale: 1.02,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
  transition: springConfig.gentle
};

// Magnetic pull effect
export const magneticPull = {
  scale: 1.05,
  transition: springConfig.bouncy
};

const MotionExports = {
  FadeInUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  springConfig,
  hoverScale,
  hoverGlow,
  hoverLift,
  tapScale,
  magneticPull
};

export default MotionExports;
