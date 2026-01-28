import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import {
  CharacterReveal,
  FloatingElement,
  MagneticButton,
  SlideUp,
} from "../../components/Animations";
import { GitHubActivity } from "../../components/GitHubActivity";
import "../../components/GitHubActivity/style.css";

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const Home = () => {
  return (
    <HelmetProvider>
      <motion.section
        id="home"
        className="home"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="intro_sec d-block d-lg-flex align-items-center">
          {/* Floating Avatar */}
          <FloatingElement
            className="h_bg-image order-1 order-lg-2 h-100"
            intensity={8}
          >
            <motion.div
              className="avatar-container"
              style={{ backgroundImage: `url(${introdata.your_img_url})` }}
              variants={imageVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </FloatingElement>

          <motion.div
            className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center"
            variants={itemVariants}
          >
            <div className="align-self-center">
              <div className="intro mx-auto">
                {/* Animated Title */}
                <motion.h2 className="mb-1x" variants={itemVariants}>
                  <CharacterReveal text={introdata.title} delay={0.5} />
                </motion.h2>

                {/* Typewriter with animation wrapper */}
                <motion.h1
                  className="fluidz-48 mb-1x"
                  variants={itemVariants}
                >
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </motion.h1>

                {/* Description with fade in */}
                <SlideUp delay={1}>
                  <p className="mb-1x">{introdata.description}</p>
                </SlideUp>

                {/* Animated Buttons */}
                <motion.div
                  className="intro_btn-action pb-5"
                  variants={itemVariants}
                >
                  <MagneticButton strength={0.2}>
                    <Link to="/portfolio" className="text_2">
                      <motion.div
                        id="button_p"
                        className="ac_btn btn"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        My Portfolio
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </motion.div>
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <Link to="/contact">
                      <motion.div
                        id="button_h"
                        className="ac_btn btn"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </motion.div>
                    </Link>
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Activity Section */}
        <GitHubActivity />
      </motion.section>
    </HelmetProvider>
  );
};
