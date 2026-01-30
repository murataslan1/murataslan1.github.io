import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { VscHome, VscBriefcase, VscPerson, VscMail } from "react-icons/vsc";
import "./style.css";

const navItems = [
  { path: "/", icon: VscHome, label: "Home" },
  { path: "/portfolio", icon: VscBriefcase, label: "Works" },
  { path: "/about", icon: VscPerson, label: "About" },
  { path: "/contact", icon: VscMail, label: "Contact" },
];

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="floating-nav"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="floating-nav__container">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`floating-nav__item ${isActive ? "floating-nav__item--active" : ""}`}
                  onMouseEnter={() => setActiveTooltip(item.path)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <Icon className="floating-nav__icon" />
                  
                  <AnimatePresence>
                    {activeTooltip === item.path && (
                      <motion.span
                        className="floating-nav__tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
