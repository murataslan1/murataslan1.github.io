import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { dataportfolio, meta } from "../../content_option";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <motion.h1
                className="display-4 mb-4"
                variants={headerVariants}
              >
                Portfolio
              </motion.h1>
              <motion.hr
                className="t_border my-4 ml-0 text-left"
                variants={headerVariants}
              />
            </Col>
          </Row>
        </motion.div>

        <motion.div
          className="mb-5 po_items_ho"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {dataportfolio.map((data, i) => (
            <motion.div
              key={i}
              className="po_item"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={data.img}
                alt={data.desctiption}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="content"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{data.desctiption}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  view project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </HelmetProvider>
  );
};
