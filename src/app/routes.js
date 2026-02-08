import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Newsletter } from "../pages/newsletter";
import { Socialicons } from "../components/socialicons";

// Page wrapper component for smooth transitions
const PageWrapper = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
      }
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            }
      }
      exit={
        prefersReducedMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: -12,
              transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
            }
      }
    >
      {children}
    </motion.div>
  );
};

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
          <Route path="/newsletter">
            <PageWrapper>
              <Newsletter />
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
