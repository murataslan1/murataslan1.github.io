import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Page wrapper component for smooth transitions
const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="s_c">
      <AnimatePresence mode="wait">
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Route>
          <Route path="/about">
            <PageWrapper>
              <About />
            </PageWrapper>
          </Route>
          <Route path="/portfolio">
            <PageWrapper>
              <Portfolio />
            </PageWrapper>
          </Route>
          <Route path="/contact">
            <PageWrapper>
              <ContactUs />
            </PageWrapper>
          </Route>
          <Route path="*">
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Route>
        </Switch>
      </AnimatePresence>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
