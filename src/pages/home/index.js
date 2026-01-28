import React from "react";
import "./style.css";
import { introdata, opensourceContributions } from "../../content_option";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import { GitHubActivity } from "../../components/GitHubActivity";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/Motion";
import { Marquee, MarqueeItem } from "../../components/Marquee";
import { BentoGrid, BentoItem } from "../../components/BentoGrid";

const stats = [
  { emoji: "🚀", value: "75+", label: "Pull Requests" },
  { emoji: "⭐", value: "30+", label: "Projects" },
  { emoji: "🏆", value: "$100+", label: "Bounties" },
  { emoji: "🌍", value: "10+", label: "Countries Reached" },
];

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

const techStack = [
  { emoji: "⚛️", name: "React", desc: "UI Development" },
  { emoji: "📘", name: "TypeScript", desc: "Type Safety" },
  { emoji: "🐹", name: "Go", desc: "Backend Services" },
  { emoji: "🐳", name: "Docker", desc: "Containerization" },
  { emoji: "☸️", name: "Kubernetes", desc: "Orchestration" },
  { emoji: "🐍", name: "Python", desc: "Scripting & ML" },
];

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

          <FadeInUp delay={0.2}>
            <p className="hero__description">{introdata.description}</p>
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
          <BentoItem span={2} className="bento-intro">
            <span className="bento-card__label">Introduction</span>
            <h3>Full-stack developer with a love for open source</h3>
            <p>Contributing to projects that millions of developers use daily. From VS Code to Kubernetes ecosystem.</p>
          </BentoItem>

          <BentoItem className="bento-stat">
            <span className="bento-card__emoji">📍</span>
            <span className="bento-card__label">Based In</span>
            <span className="bento-card__value-text">Ankara, Turkey</span>
          </BentoItem>

          <BentoItem className="bento-stat">
            <span className="bento-card__emoji">💼</span>
            <span className="bento-card__label">Focus</span>
            <span className="bento-card__value-text">Open Source</span>
          </BentoItem>

          <BentoItem className="bento-code" span={2}>
            <pre className="code-block">
              <code>{`// What I do
const contribute = async () => {
  await findBugs();
  await fixIssues();
  await submitPR();
  return "🚀 Merged!";
};`}</code>
            </pre>
          </BentoItem>

          <BentoItem className="bento-stat">
            <span className="bento-card__emoji">🎯</span>
            <span className="bento-card__value">75+</span>
            <span className="bento-card__stat-label">PRs Merged</span>
          </BentoItem>

          <BentoItem className="bento-stat">
            <span className="bento-card__emoji">⭐</span>
            <span className="bento-card__value">300k+</span>
            <span className="bento-card__stat-label">Stars Contributed</span>
          </BentoItem>
        </BentoGrid>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-section">
        <FadeInUp>
          <span className="section-title">Tech Stack</span>
          <h2>What I Use</h2>
        </FadeInUp>

        <StaggerContainer className="tech-grid">
          {techStack.map((tech, index) => (
            <StaggerItem key={tech.name}>
              <motion.div 
                className="tech-card glass-card"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
              >
                <span className="tech-card__emoji">{tech.emoji}</span>
                <h4 className="tech-card__name">{tech.name}</h4>
                <p className="tech-card__desc">{tech.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <FadeInUp>
          <span className="section-title">Achievements</span>
          <h2>Little Big Wins</h2>
        </FadeInUp>

        <StaggerContainer className="stats-grid">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div 
                className="stat-card-home glass-card"
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-card-home__emoji">{stat.emoji}</span>
                <span className="stat-card-home__value">{stat.value}</span>
                <span className="stat-card-home__label">{stat.label}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* GitHub Activity */}
      <div className="github-section">
        <FadeInUp>
          <span className="section-title">Activity</span>
          <h2>GitHub Contributions</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <GitHubActivity />
        </FadeInUp>
      </div>
    </section>
  );
};
