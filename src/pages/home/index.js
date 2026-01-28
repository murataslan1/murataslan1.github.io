import React from "react";
import "./style.css";
import {
  introdata,
  opensourceContributions,
  contactConfig,
  socialprofils,
  dataportfolio,
  resume,
} from "../../content_option";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import { motion } from "framer-motion";
import { FadeInUp } from "../../components/Motion";
import { Marquee, MarqueeItem } from "../../components/Marquee";
import { BentoGrid, BentoItem } from "../../components/BentoGrid";
import { GitHubActivity } from "../../components/GitHubActivity";

const marqueeStats = [
  { emoji: "💻", label: "VS Code", value: "165k⭐", color: "blue" },
  { emoji: "☁️", label: "Coolify", value: "40k⭐", color: "purple" },
  { emoji: "🔀", label: "Traefik", value: "54k⭐", color: "green" },
  { emoji: "🦕", label: "Deno", value: "3.5k⭐", color: "orange" },
  { emoji: "🐧", label: "Cortex Linux", value: "Bounty", color: "pink" },
  { emoji: "🧠", label: "MindsDB", value: "26k⭐", color: "cyan" },
  { emoji: "📊", label: "Milvus", value: "32k⭐", color: "blue" },
  { emoji: "🔥", label: "FAISS", value: "33k⭐", color: "orange" },
];

// Tech Stack organized by category
const techCategories = [
  {
    title: "Frontend",
    items: [
      { icon: "⚛️", name: "React", desc: "For building fast, interactive UIs" },
      { icon: "📱", name: "Next.js", desc: "React framework with routing & SSR" },
      { icon: "📘", name: "TypeScript", desc: "Typed JavaScript for safer code" },
    ]
  },
  {
    title: "Backend",
    items: [
      { icon: "🟢", name: "Node.js", desc: "JavaScript runtime for servers" },
      { icon: "🐹", name: "Go", desc: "Fast compiled language for APIs" },
      { icon: "🐍", name: "Python", desc: "Scripting & ML applications" },
    ]
  },
  {
    title: "Tools & DevOps",
    items: [
      { icon: "🐙", name: "Git & GitHub", desc: "Version control and collaboration" },
      { icon: "🐳", name: "Docker", desc: "Containers for isolated environments" },
      { icon: "☸️", name: "Kubernetes", desc: "Container orchestration at scale" },
    ]
  },
  {
    title: "Design & Workflow",
    items: [
      { icon: "🎨", name: "Figma", desc: "UI/UX design for developers" },
      { icon: "📝", name: "Notion", desc: "Planning and docs in one place" },
      { icon: "⚡", name: "VS Code", desc: "Code editor of choice" },
    ]
  }
];

const achievements = [
  { value: "75+", label: "PRs Merged", emoji: "🚀" },
  { value: "30+", label: "Projects", emoji: "⭐" },
  { value: "$100+", label: "Bounties Earned", emoji: "🏆" },
  { value: "10+", label: "Countries Reached", emoji: "🌍" },
];

const caseStudies = dataportfolio
  .filter((item) => item.caseStudy)
  .slice(0, 3);

export const Home = () => {
  return (
    <section id="home" className="home">
      <Seo description={introdata.description} />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero__content">
          <FadeInUp className="hero__avatar-wrapper">
            <motion.div
              className="hero__avatar"
              style={{ backgroundImage: `url(${introdata.your_img_url})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="hero__title">
              Hi, I'm <span className="gradient-text">Murat</span>
              <br />
              <span className="hero__subtitle">I contribute to open source</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3} className="hero__actions">
            <Link to="/portfolio" className="ac_btn ac_btn--primary">
              View My Work
            </Link>
            <Link to="/contact" className="ac_btn ac_btn--ghost">
              Get in Touch
            </Link>
          </FadeInUp>
        </div>
      </div>

      {/* Marquee Stats */}
      <div className="marquee-section">
        <Marquee speed={8}>
          {marqueeStats.map((stat) => (
            <MarqueeItem
              key={stat.label}
              emoji={stat.emoji}
              label={stat.label}
              value={stat.value}
              className={`marquee-item--stat marquee-item--${stat.color}`}
            />
          ))}
        </Marquee>
        <Marquee speed={6} direction="right">
          {opensourceContributions.slice(0, 6).map((item, idx) => {
            const colors = ["green", "purple", "blue", "orange", "pink", "cyan"];
            return (
              <MarqueeItem
                key={item.project}
                emoji="✅"
                label={item.project}
                value={`${item.prs} PRs`}
                className={`marquee-item--${colors[idx % colors.length]}`}
              />
            );
          })}
        </Marquee>
      </div>

      {/* Bento Grid Section */}
      <div className="bento-section">
        <FadeInUp>
          <span className="section-title">About Me</span>
          <h2>Building with passion</h2>
        </FadeInUp>

        <BentoGrid columns={4} className="home-bento">
          <BentoItem span={2} className="bento-intro bento-avatar-card">
            <div className="bento-avatar-content">
              <span className="bento-card__label">Hi, I'm Murat.</span>
              <p>I press buttons and<br/>open source happens</p>
            </div>
            <div className="bento-avatar-img" style={{ backgroundImage: `url(${introdata.your_img_url})` }} />
          </BentoItem>

          <BentoItem className="bento-location">
            <div className="location-pins">
              <span className="pin pin--faded">📍</span>
              <span className="pin pin--faded">📍</span>
              <span className="pin pin--active">📍</span>
              <span className="pin pin--faded">📍</span>
              <span className="pin pin--faded">📍</span>
            </div>
            <span className="bento-card__label">Based In</span>
            <span className="bento-card__value-text">Ankara, Turkey</span>
          </BentoItem>

          <BentoItem className="bento-coding-since" row={2}>
            <span className="bento-card__label">Coding Since</span>
            <span className="bento-card__value-lg">2018</span>
            <div className="code-window">
              <div className="code-window__dots">
                <span></span><span></span><span></span>
              </div>
              <pre className="code-block">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hi, I'm Murat</title>
</head>
<body>`}
              </pre>
            </div>
          </BentoItem>

          <BentoItem className="bento-whatido">
            <span className="bento-pill">What I Do</span>
            <h3>Focused on fast builds, clean code, and smart design</h3>
          </BentoItem>

          <BentoItem className="bento-learning">
            <span className="bento-pill">Always Learning</span>
            <div className="learning-avatar" style={{ backgroundImage: `url(${introdata.your_img_url})` }} />
          </BentoItem>
        </BentoGrid>
      </div>

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <div className="case-studies-section">
          <FadeInUp>
            <span className="section-title">Case Studies</span>
            <h2 className="section-heading">Selected Impact</h2>
            <p className="case-studies-intro">
              A few recent contributions with the problem, what I shipped, and the
              outcome.
            </p>
          </FadeInUp>

          <div className="case-studies-grid">
            {caseStudies.map((project, index) => (
              <FadeInUp
                key={project.link || project.title}
                delay={index * 0.1}
                className="case-study-card glass-card"
              >
                <div className="case-study-card__header">
                  <div>
                    <span className="case-study-card__eyebrow">
                      {project.title}
                    </span>
                    <p className="case-study-card__desc">
                      {project.desctiption}
                    </p>
                  </div>
                  <div className="case-study-card__badges">
                    {(project.tags || []).slice(0, 2).map((tag) => (
                      <span key={tag} className="case-study-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <dl className="case-study-card__list">
                  <div>
                    <dt>Problem</dt>
                    <dd>{project.caseStudy.problem}</dd>
                  </div>
                  <div>
                    <dt>Contribution</dt>
                    <dd>{project.caseStudy.contribution}</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>{project.caseStudy.impact}</dd>
                  </div>
                </dl>

                <a
                  className="case-study-card__link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Work →
                </a>
              </FadeInUp>
            ))}
          </div>
        </div>
      )}

      {/* What I Use Section */}
      <div className="tech-section">
        <FadeInUp>
          <h2 className="section-heading">What I Use</h2>
        </FadeInUp>

        <div className="tech-categories">
          {techCategories.map((category) => (
            <div key={category.title} className="tech-category">
              <h3 className="tech-category__title">{category.title}</h3>
              <div className="tech-category__items">
                {category.items.map((item) => (
                  <motion.div 
                    key={item.name} 
                    className="tech-item"
                    whileHover={{ x: 4 }}
                  >
                    <span className="tech-item__icon">{item.icon}</span>
                    <div className="tech-item__content">
                      <h4 className="tech-item__name">{item.name}</h4>
                      <p className="tech-item__desc">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Activity Section */}
      <GitHubActivity />

      {/* Little Big Wins Section */}
      <div className="achievements-section">
        <FadeInUp>
          <span className="section-label">ACHIEVEMENTS</span>
          <h2 className="section-heading">Little Big Wins</h2>
        </FadeInUp>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <motion.div 
              key={item.label} 
              className={`achievement-card achievement-card--${idx % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="achievement-card__avatar" style={{ backgroundImage: `url(${introdata.your_img_url})` }} />
              <div className="achievement-card__content">
                <span className="achievement-card__value">{item.value}</span>
                <span className="achievement-card__label">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="connect-section">
        <FadeInUp>
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-heading">Let's Connect</h2>
        </FadeInUp>

        <FadeInUp delay={0.1} className="connect-actions">
          <Link to="/contact" className="ac_btn ac_btn--primary ac_btn--lg">
            Start Project
          </Link>
          {resume.url && (
            <a
              href={resume.url}
              className="ac_btn ac_btn--ghost ac_btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {resume.label}
            </a>
          )}
        </FadeInUp>

        <div className="connect-cards">
          <div className="connect-card">
            <span className="connect-card__label">Let's Talk</span>
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="connect-card__value">
              {contactConfig.YOUR_EMAIL}
            </a>
          </div>
          <div className="connect-card">
            <span className="connect-card__label">Collaborations</span>
            <a href={socialprofils.github} target="_blank" rel="noreferrer" className="connect-card__value">
              github.com/murataslan1
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-about">
            <h4>Hi, I'm Murat.</h4>
            <p>I press buttons and<br/>interfaces happen</p>
            <div className="footer-avatar" style={{ backgroundImage: `url(${introdata.your_img_url})` }} />
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h5>Menu</h5>
              <Link to="/">Home</Link>
              <Link to="/portfolio">Works</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="footer-col">
              <h5>Follow</h5>
              <a href={socialprofils.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={socialprofils.twitter} target="_blank" rel="noreferrer">X (Twitter)</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024, Murat Aslan</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
            Back to Top
          </button>
        </div>
      </footer>
    </section>
  );
};
