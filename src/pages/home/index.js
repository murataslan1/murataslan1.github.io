import React, { useState, useRef, useEffect } from "react";
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
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiFigma,
  SiNotion,
  SiVisualstudiocode,
  SiDeno,
  SiTraefikproxy,
  SiMilvus,
} from "react-icons/si";
import { FadeInUp } from "../../components/Motion";
import { Marquee, MarqueeItem } from "../../components/Marquee";
import { BentoGrid, BentoItem } from "../../components/BentoGrid";
import { GitHubActivity } from "../../components/GitHubActivity";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const marqueeStats = [
  {
    Icon: SiVisualstudiocode,
    iconColor: "#007ACC",
    label: "VS Code",
    value: "195k⭐",
    color: "blue",
  },
  { emoji: "☁️", label: "Coolify", value: "66k⭐", color: "purple" },
  {
    Icon: SiTraefikproxy,
    iconColor: "#24A1C1",
    label: "Traefik",
    value: "65k⭐",
    color: "green",
  },
  {
    Icon: SiNodedotjs,
    iconColor: "#339933",
    label: "Node.js",
    value: "123k⭐",
    color: "green",
  },
  {
    Icon: SiDeno,
    iconColor: "#000000",
    iconColorDark: "#F5F5F5",
    label: "Deno",
    value: "3.6k⭐",
    color: "orange",
  },
  { emoji: "🤖", label: "Vercel AI", value: "28k⭐", color: "cyan" },
  {
    Icon: SiMilvus,
    iconColor: "#00A1EA",
    label: "Milvus",
    value: "47k⭐",
    color: "blue",
  },
  { emoji: "🔥", label: "FAISS", value: "41k⭐", color: "orange" },
];

// Tech Stack organized by category
const techCategories = [
  {
    title: "Frontend",
    items: [
      {
        Icon: SiReact,
        color: "#61DAFB",
        name: "React",
        desc: "For building fast, interactive UIs",
      },
      {
        Icon: SiNextdotjs,
        color: "#000000",
        colorDark: "#F5F5F5",
        name: "Next.js",
        desc: "React framework with routing & SSR",
      },
      {
        Icon: SiTypescript,
        color: "#3178C6",
        name: "TypeScript",
        desc: "Typed JavaScript for safer code",
      },
    ]
  },
  {
    title: "Backend",
    items: [
      {
        Icon: SiNodedotjs,
        color: "#339933",
        name: "Node.js",
        desc: "JavaScript runtime for servers",
      },
      {
        Icon: SiGo,
        color: "#00ADD8",
        name: "Go",
        desc: "Fast compiled language for APIs",
      },
      {
        Icon: SiPython,
        color: "#3776AB",
        name: "Python",
        desc: "Scripting & ML applications",
      },
    ]
  },
  {
    title: "Tools & DevOps",
    items: [
      {
        Icon: SiGit,
        color: "#F05032",
        name: "Git",
        desc: "Version control and collaboration",
      },
      {
        Icon: SiGithub,
        color: "#181717",
        colorDark: "#F5F5F5",
        name: "GitHub",
        desc: "Open source collaboration",
      },
      {
        Icon: SiDocker,
        color: "#2496ED",
        name: "Docker",
        desc: "Containers for isolated environments",
      },
      {
        Icon: SiKubernetes,
        color: "#326CE5",
        name: "Kubernetes",
        desc: "Container orchestration at scale",
      },
    ]
  },
  {
    title: "Design & Workflow",
    items: [
      {
        Icon: SiFigma,
        color: "#F24E1E",
        name: "Figma",
        desc: "UI/UX design for developers",
      },
      {
        Icon: SiNotion,
        color: "#000000",
        colorDark: "#F5F5F5",
        name: "Notion",
        desc: "Planning and docs in one place",
      },
      {
        Icon: SiVisualstudiocode,
        color: "#007ACC",
        name: "VS Code",
        desc: "Code editor of choice",
      },
    ]
  }
];

const achievements = [
  { value: "50+", label: "PRs Merged", emoji: "🚀" },
  { value: "258", label: "Public Repos", emoji: "⭐" },
  { value: "$100+", label: "Bounties Earned", emoji: "🏆" },
  { value: "115", label: "Followers", emoji: "🌍" },
];

const caseStudies = dataportfolio.filter((item) => item.caseStudy);

// Animated Number Component
const AnimatedNumber = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  
  // Parse the value to extract number and suffix (e.g., "75+" -> 75, "+")
  const parseValue = (val) => {
    const str = String(val);
    const match = str.match(/^(\$?)(\d+)(.*)$/);
    if (match) {
      return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
    }
    return { prefix: '', number: 0, suffix: str };
  };
  
  const { prefix, number, suffix } = parseValue(value);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = number;
          const stepTime = Math.abs(Math.floor((duration * 1000) / end));
          const timer = setInterval(() => {
            start += Math.ceil(end / 50);
            if (start >= end) {
              setDisplayValue(end);
              clearInterval(timer);
            } else {
              setDisplayValue(start);
            }
          }, stepTime);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [number, duration, hasAnimated]);
  
  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

// Parallax Slider Component for Case Studies
const CaseStudiesCarousel = ({ caseStudies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = React.useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = caseStudies.length - 1;
      if (next >= caseStudies.length) next = 0;
      return next;
    });
  }, [caseStudies.length]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, paginate]);

  const project = caseStudies[currentIndex];

  return (
    <div className="case-studies-section">
      <FadeInUp>
        <span className="section-title">Case Studies</span>
        <h2 className="section-heading">Selected Impact</h2>
        <p className="case-studies-intro">
          A few recent contributions with the problem, what I shipped, and the outcome.
        </p>
      </FadeInUp>

      <div className="carousel-container" ref={containerRef}>
        <motion.div
          className="carousel-track"
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className="case-study-card glass-card carousel-card">
            {/* Testimonial Quote */}
            {project.testimonial && (
              <div className="case-study-card__testimonial">
                <p className="testimonial-quote">"{project.testimonial.quote}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-author__name">{project.testimonial.author}</span>
                  <span className="testimonial-author__role">{project.testimonial.role}</span>
                </div>
              </div>
            )}

            <div className="case-study-card__header">
              <div>
                <span className="case-study-card__eyebrow">{project.title}</span>
                <p className="case-study-card__desc">{project.desctiption}</p>
              </div>
              <div className="case-study-card__badges">
                {(project.tags || []).slice(0, 2).map((tag) => (
                  <span key={tag} className="case-study-badge">{tag}</span>
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
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          className="carousel-nav carousel-nav--prev"
          onClick={() => paginate(-1)}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          className="carousel-nav carousel-nav--next"
          onClick={() => paginate(1)}
          aria-label="Next"
        >
          →
        </button>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {caseStudies.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'carousel-dot--active' : ''}`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Scroll Progress Bar Component
const ScrollProgress = () => {
  const progressRef = useRef(null);
  
  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  });

  return (
    <div 
      ref={progressRef}
      className="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        transformOrigin: "left",
        transform: "scaleX(0)",
        zIndex: 9999,
      }}
    />
  );
};

export const Home = () => {
  const containerRef = useRef(null);
  const bentoRef = useRef(null);
  const techRef = useRef(null);
  const achievementsRef = useRef(null);

  // GSAP Animations with useGSAP hook
  useGSAP(() => {
    // Multi-layer Hero parallax effect
    gsap.to(".hero__avatar", {
      yPercent: -30,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Hero title parallax (slower)
    gsap.to(".hero__title", {
      yPercent: -15,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Hero buttons parallax (even slower)
    gsap.to(".hero__actions", {
      yPercent: -8,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Batch animation for Bento cards (more performant)
    ScrollTrigger.batch(".bento-item", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
      start: "top 85%",
      once: true,
    });

    // Batch animation for Tech items
    ScrollTrigger.batch(".tech-item", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          x: -30,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        });
      },
      start: "top 85%",
      once: true,
    });

    // Tech categories slide in with stagger
    gsap.from(".tech-category", {
      opacity: 0,
      x: -40,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tech-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Achievement cards with batch
    ScrollTrigger.batch(".achievement-card", {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          scale: 0.8,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      },
      start: "top 85%",
      once: true,
    });

    // Section headings reveal with clip-path
    gsap.utils.toArray(".section-heading").forEach((heading) => {
      gsap.from(heading, {
        opacity: 0,
        y: 40,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Connect section cards
    gsap.from(".connect-card", {
      opacity: 0,
      y: 40,
      rotateX: 15,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".connect-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Marquee speed change on scroll
    gsap.to(".marquee-track", {
      "--marquee-speed": "15s",
      scrollTrigger: {
        trigger: ".marquee-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

  }, { scope: containerRef });

  // Magnetic button effect
  useEffect(() => {
    const buttons = document.querySelectorAll(".ac_btn");
    
    const handleMouseMove = (e, btn) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (btn) => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    };

    buttons.forEach((btn) => {
      const moveHandler = (e) => handleMouseMove(e, btn);
      const leaveHandler = () => handleMouseLeave(btn);
      
      btn.addEventListener("mousemove", moveHandler);
      btn.addEventListener("mouseleave", leaveHandler);
      
      btn._gsapMoveHandler = moveHandler;
      btn._gsapLeaveHandler = leaveHandler;
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mousemove", btn._gsapMoveHandler);
        btn.removeEventListener("mouseleave", btn._gsapLeaveHandler);
      });
    };
  }, []);

  return (
    <section id="home" className="home" ref={containerRef}>
      <ScrollProgress />
      <Seo description={introdata.description} />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero__content">
          <FadeInUp className="hero__avatar-wrapper">
            <motion.div
              className="hero__avatar"
              style={{ 
                backgroundImage: `url(${introdata.your_img_url})`,
                willChange: "transform"
              }}
              whileHover={{ 
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
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
              emoji={!stat.Icon ? stat.emoji : undefined}
              icon={
                stat.Icon ? (
                  <stat.Icon
                    aria-hidden="true"
                    style={{
                      "--icon-color": stat.iconColor,
                      "--icon-color-dark": stat.iconColorDark || stat.iconColor,
                    }}
                  />
                ) : null
              }
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
      <div className="bento-section" ref={bentoRef}>
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
        <CaseStudiesCarousel caseStudies={caseStudies} />
      )}

      {/* What I Use Section */}
      <div className="tech-section" ref={techRef}>
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
                    style={{ willChange: "transform" }}
                    whileHover={{ 
                      x: 8,
                      scale: 1.02,
                      backgroundColor: "rgba(102, 126, 234, 0.05)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    <motion.span
                      className="tech-item__icon"
                      style={{
                        "--icon-color": item.color,
                        "--icon-color-dark": item.colorDark || item.color,
                      }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.Icon aria-hidden="true" />
                    </motion.span>
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
      <div className="achievements-section" ref={achievementsRef}>
        <FadeInUp>
          <span className="section-label">ACHIEVEMENTS</span>
          <h2 className="section-heading">Little Big Wins</h2>
        </FadeInUp>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <motion.div 
              key={item.label} 
              className={`achievement-card achievement-card--${idx % 2 === 0 ? 'left' : 'right'}`}
              style={{ willChange: "transform" }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: idx * 0.1 
              }}
              whileHover={{ 
                y: -5,
                scale: 1.03,
                boxShadow: "0 15px 35px rgba(102, 126, 234, 0.2)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div 
                className="achievement-card__avatar" 
                style={{ backgroundImage: `url(${introdata.your_img_url})` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="achievement-card__content">
                <span className="achievement-card__value">
                  <AnimatedNumber value={item.value} duration={1.5} />
                </span>
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
              <a href={socialprofils.medium} target="_blank" rel="noreferrer">Medium</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026, Murat Aslan</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
            Back to Top
          </button>
        </div>
      </footer>
    </section>
  );
};
