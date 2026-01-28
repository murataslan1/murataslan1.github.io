import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (value) => ({
    width: `${value}%`,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3,
    },
  }),
};

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
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
                variants={itemVariants}
              >
                About me
              </motion.h1>
              <motion.hr
                className="t_border my-4 ml-0 text-left"
                variants={itemVariants}
              />
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5">
              <motion.h3
                className="color_sec py-4"
                variants={itemVariants}
              >
                {dataabout.title}
              </motion.h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <motion.div variants={itemVariants}>
                <p>{dataabout.aboutme}</p>
              </motion.div>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5">
              <motion.h3
                className="color_sec py-4"
                variants={itemVariants}
              >
                Work Timeline
              </motion.h3>
            </Col>
            <Col lg="7">
              <motion.table
                className="table caption-top"
                variants={containerVariants}
              >
                <tbody>
                  {worktimeline.map((data, i) => (
                    <motion.tr key={i} variants={itemVariants}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5">
              <motion.h3
                className="color_sec py-4"
                variants={itemVariants}
              >
                Skills
              </motion.h3>
            </Col>
            <Col lg="7">
              <motion.div variants={containerVariants}>
                {skills.map((data, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <h3 className="progress-title">{data.name}</h3>
                    <div className="progress">
                      <motion.div
                        className="progress-bar"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={data.value}
                        variants={progressVariants}
                      >
                        <div className="progress-value">{data.value}%</div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lang="5">
              <motion.h3
                className="color_sec py-4"
                variants={itemVariants}
              >
                Services
              </motion.h3>
            </Col>
            <Col lg="7">
              <motion.div variants={containerVariants}>
                {services.map((data, i) => (
                  <motion.div
                    className="service_ py-4"
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </HelmetProvider>
  );
};
