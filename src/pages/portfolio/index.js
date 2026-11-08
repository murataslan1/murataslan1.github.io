import React, { useMemo, useState } from "react";
import "./style.css";
import { dataportfolio } from "../../content_option";
import Seo from "../../components/Seo";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "../../components/Motion";

const buildFilterList = (items, key) => {
  const values = items
    .flatMap((item) => item[key] || [])
    .filter((value) => value && value.length > 0);
  return ["All", ...Array.from(new Set(values))];
};

export const Portfolio = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [activeStack, setActiveStack] = useState("All");

  const tagFilters = useMemo(
    () => buildFilterList(dataportfolio, "tags"),
    []
  );
  const stackFilters = useMemo(
    () => buildFilterList(dataportfolio, "stack"),
    []
  );
  const portfolioSummary = useMemo(() => {
    const names = dataportfolio
      .slice(0, 3)
      .map((item) => item.title || item.desctiption)
      .filter(Boolean);
    return names.length
      ? `Selected open source work including ${names.join(", ")}.`
      : "Selected open source work and featured projects.";
  }, []);

  const filteredPortfolio = useMemo(
    () =>
      dataportfolio.filter((item) => {
        const tagMatch =
          activeTag === "All" || item.tags?.includes(activeTag);
        const stackMatch =
          activeStack === "All" || item.stack?.includes(activeStack);
        return tagMatch && stackMatch;
      }),
    [activeTag, activeStack]
  );

  const caseStudies = useMemo(
    () => dataportfolio.filter((item) => item.caseStudy),
    []
  );

  return (
    <section className="portfolio-page">
      <Seo title="Portfolio" description={portfolioSummary} />

      <div className="portfolio-container">
        <FadeInUp className="portfolio-header">
          <span className="section-title">Projects</span>
          <h1>My Work</h1>
          <p className="portfolio-intro">
            Open source contributions to projects used by millions of developers worldwide.
          </p>
        </FadeInUp>

        {caseStudies.length > 0 && (
          <FadeInUp delay={0.05} className="portfolio-case-studies">
            <span className="section-title">Case Studies</span>
            <h2>Impact Stories</h2>
            <p className="portfolio-intro">
              A closer look at problems, contributions, and outcomes.
            </p>

            <div className="case-studies-grid">
              {caseStudies.map((project) => (
                <article
                  key={project.link || project.title}
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
                </article>
              ))}
            </div>
          </FadeInUp>
        )}

        <FadeInUp delay={0.1} className="portfolio-filters">
          <div className="filter-group">
            <span className="filter-label">Focus</span>
            <div className="filter-pills">
              {tagFilters.map((tag) => (
                <motion.button
                  key={tag}
                  type="button"
                  className={`filter-pill ${activeTag === tag ? "is-active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={activeTag === tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Stack</span>
            <div className="filter-pills">
              {stackFilters.map((stack) => (
                <motion.button
                  key={stack}
                  type="button"
                  className={`filter-pill ${activeStack === stack ? "is-active" : ""}`}
                  onClick={() => setActiveStack(stack)}
                  aria-pressed={activeStack === stack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stack}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeInUp>

        <motion.div 
          className="portfolio-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((data, i) => {
              const cardTags = [...(data.tags || []), ...(data.stack || [])];
              return (
                <motion.article
                  key={data.link || i}
                  className="portfolio-card glass-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: "rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <div className="portfolio-card__media">
                    <img
                      src={data.img}
                      alt={data.desctiption}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="portfolio-card__overlay">
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-card__link"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-card__body">
                    <h3>{data.title || data.desctiption}</h3>
                    <p>{data.desctiption}</p>
                    <div className="portfolio-card__tags">
                      {cardTags.slice(0, 4).map((tag) => (
                        <span key={tag} className="portfolio-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredPortfolio.length === 0 && (
          <FadeInUp className="portfolio-empty">
            <p>No projects match this filter yet.</p>
          </FadeInUp>
        )}
      </div>
    </section>
  );
};
