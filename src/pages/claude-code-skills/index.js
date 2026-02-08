import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import skillsData from "./skillsData";
import Seo from "../../components/Seo";
import { motion } from "framer-motion";

const categories = [
  "All",
  ...Array.from(new Set(skillsData.map((s) => s.category))),
];

export const SkillsList = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return skillsData.filter((s) => {
      const matchesCategory =
        activeCategory === "All" || s.category === activeCategory;
      const matchesSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase()) ||
        s.author.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="skills-page">
      <Seo
        title="Claude Code Skills"
        description="Browse curated Claude Code skills for development, automation, data analysis, and more."
      />

      <div className="skills-container">
        <div className="skills-terminal-header">
          <div className="skills-terminal-dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <span className="skills-terminal-text">skills --list</span>
          <span className="skills-terminal-ready">ready</span>
        </div>

        <div className="skills-hero">
          <h1>
            <span className="skills-prompt">&gt;</span> Browse Agent Skills
          </h1>
          <p className="skills-count">
            <span className="skills-dollar">$</span> count:{" "}
            <strong>{skillsData.length}</strong> skills available
          </p>
        </div>

        {/* Search */}
        <div className="skills-search-bar">
          <div className="skills-search-dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <span className="skills-search-label">search --ai</span>
          <div className="skills-search-input-wrap">
            <span className="skills-dollar">$ find</span>
            <input
              type="text"
              placeholder="Search skills by name, description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="skills-search-input"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="skills-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills-cat-btn ${
                activeCategory === cat ? "skills-cat-btn--active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "All" ? "$ all" : `$ ${cat.toLowerCase()}`}
              {activeCategory === cat && (
                <span className="skills-cat-count">
                  {cat === "All"
                    ? skillsData.length
                    : skillsData.filter((s) => s.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.5), duration: 0.3 }}
            >
              <Link
                to={`/claude-code-skills/${skill.id}`}
                className="skill-card"
              >
                <div className="skill-card__header">
                  <div className="skill-card__dots">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>
                  <span className="skill-card__filename">
                    {skill.name}.md
                  </span>
                </div>
                <div className="skill-card__body">
                  <div className="skill-card__export">
                    <span className="kw">export</span>{" "}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-card__from">
                    <span className="kw-from">from</span>{" "}
                    <span className="skill-repo">"{skill.repo}"</span>
                  </div>
                  <p className="skill-card__desc">
                    {/* description */}
                    {"// "}{skill.description}
                  </p>
                </div>
                <div className="skill-card__footer">
                  <span className="skill-card__category">{skill.category}</span>
                  <span className="skill-card__arrow">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="skills-empty">
            <p>
              <span className="skills-dollar">$</span> No skills found matching
              "{search}"
            </p>
          </div>
        )}

        <div className="skills-footer">
          <p>
            Curated by{" "}
            <a
              href="https://github.com/murataslan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Murat Aslan
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/murataslan1/claude-code-skills"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/murataslan1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href="https://medium.com/@murataslan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
