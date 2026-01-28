import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <HelmetProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={8}
            outerSize={28}
            color="37, 99, 235"
            outerAlpha={0.2}
            innerScale={0.9}
            outerScale={1.8}
          />
        </div>
        <ScrollToTop>
          <Headermain />
          <AppRoutes />
        </ScrollToTop>
      </Router>
    </HelmetProvider>
  );
}
