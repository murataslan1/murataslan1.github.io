import React from "react";
import "./style.css";
import {
  dataabout,
  worktimeline,
  skills,
  services,
  currentFocus,
} from "../../content_option";
import Seo from "../../components/Seo";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/Motion";

const hardSkills = [
  { emoji: "💻", name: "Web Development" },
  { emoji: "⚛️", name: "React/Next.js" },
  { emoji: "📘", name: "TypeScript" },
  { emoji: "🐹", name: "Go" },
  { emoji: "🐳", name: "Docker" },
  { emoji: "☸️", name: "Kubernetes" },
  { emoji: "🔧", name: "CI/CD" },
  { emoji: "📊", name: "Databases" },
];

const softSkills = [
  { emoji: "💬", name: "Communication" },
  { emoji: "🧩", name: "Problem-Solving" },
  { emoji: "🤝", name: "Collaboration" },
  { emoji: "⏰", name: "Time Management" },
  { emoji: "🎨", name: "Creativity" },
  { emoji: "📚", name: "Continuous Learning" },
];

const values = [
  { emoji: "✨", title: "Simplicity", desc: "Clarity over complexity" },
  { emoji: "⚡", title: "Efficiency", desc: "Fast, but never rushed" },
  { emoji: "♿", title: "Accessibility", desc: "Built for real people" },
  { emoji: "🎯", title: "Quality", desc: "Code that lasts" },
];

export const About = () => {
  return (
    <section className="about-page">
      <Seo title="About" description={dataabout.aboutme} />

      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <FadeInUp className="about-hero__content">
            <span className="section-title">About Me</span>
            <h1>I build fast, functional, and elegant experiences</h1>
            <p className="about-hero__desc">{dataabout.aboutme}</p>
          </FadeInUp>

          <FadeInUp delay={0.2} className="about-stats">
            <div className="about-stat glass-card">
              <span className="about-stat__value">75+</span>
              <span className="about-stat__label">PRs Merged</span>
            </div>
            <div className="about-stat glass-card">
              <span className="about-stat__value">30+</span>
              <span className="about-stat__label">Projects</span>
            </div>
            <div className="about-stat glass-card">
              <span className="about-stat__value">5+</span>
              <span className="about-stat__label">Years Coding</span>
            </div>
          </FadeInUp>
        </div>

        {/* Current Focus */}
        <div className="focus-section">
          <FadeInUp>
            <span className="section-title">Now</span>
            <h2>Current Focus</h2>
          </FadeInUp>

          <StaggerContainer className="focus-grid">
            {currentFocus.map((focus) => (
              <StaggerItem key={focus.title}>
                <motion.div className="focus-card glass-card" whileHover={{ scale: 1.02 }}>
                  <h3 className="focus-card__title">{focus.title}</h3>
                  <p className="focus-card__desc">{focus.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <FadeInUp>
            <span className="section-title">Skills</span>
            <h2>Hard Skills</h2>
          </FadeInUp>
          
          <StaggerContainer className="skills-grid">
            {hardSkills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div 
                  className="skill-card glass-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="skill-card__emoji">{skill.emoji}</span>
                  <span className="skill-card__name">{skill.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp className="mt-section">
            <h2>Soft Skills</h2>
          </FadeInUp>

          <StaggerContainer className="skills-grid">
            {softSkills.map((skill) => (
              <StaggerItem key={skill.name}>
                <motion.div 
                  className="skill-card glass-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="skill-card__emoji">{skill.emoji}</span>
                  <span className="skill-card__name">{skill.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Progress Skills */}
        <div className="progress-section">
          <FadeInUp>
            <span className="section-title">Proficiency</span>
            <h2>Tech Stack</h2>
          </FadeInUp>

          <div className="progress-list">
            {skills.map((skill, i) => (
              <FadeInUp key={skill.name} delay={i * 0.1} className="progress-item">
                <div className="progress-header">
                  <span className="progress-name">{skill.name}</span>
                  <span className="progress-value">{skill.value}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <FadeInUp>
            <span className="section-title">Experience</span>
            <h2>Work History</h2>
          </FadeInUp>

          <div className="timeline">
            {worktimeline.map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1} className="timeline-item glass-card">
                <div className="timeline-item__header">
                  <h3 className="timeline-item__title">{item.jobtitle}</h3>
                  <span className="timeline-item__date">{item.date}</span>
                </div>
                <span className="timeline-item__company">{item.where}</span>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <FadeInUp>
            <span className="section-title">Values</span>
            <h2>My Principles</h2>
          </FadeInUp>

          <StaggerContainer className="values-grid">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div 
                  className="value-card glass-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="value-card__emoji">{value.emoji}</span>
                  <h3 className="value-card__title">{value.title}</h3>
                  <p className="value-card__desc">{value.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <FadeInUp>
            <span className="section-title">Services</span>
            <h2>What I Offer</h2>
          </FadeInUp>

          <StaggerContainer className="services-grid">
            {services.map((service, i) => (
              <StaggerItem key={i}>
                <motion.div 
                  className="service-card glass-card"
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
