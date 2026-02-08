import React from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css";
import skillsData from "./skillsData";
import Seo from "../../components/Seo";
import { motion } from "framer-motion";

export const SkillDetail = () => {
  const { id } = useParams();
  const skill = skillsData.find((s) => s.id === id);

  if (!skill) {
    return (
      <section className="skills-page">
        <div className="skills-container">
          <div className="skills-empty">
            <p>
              <span className="skills-dollar">$</span> Skill not found.{" "}
              <Link to="/claude-code-skills">← Back to skills</Link>
            </p>
          </div>
        </div>
      </section>
    );
  }

  const related = skillsData
    .filter((s) => s.category === skill.category && s.id !== skill.id)
    .slice(0, 3);

  return (
    <section className="skills-page">
      <Seo
        title={`${skill.name} — Claude Code Skill`}
        description={skill.description}
      />

      <div className="skills-container">
        {/* Breadcrumb */}
        <div className="skill-detail__breadcrumb">
          <span className="skills-dollar">$ pwd:</span>{" "}
          <Link to="/claude-code-skills">~/skills</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{skill.name}</span>
        </div>

        <div className="skill-detail__layout">
          {/* Main content */}
          <div className="skill-detail__main">
            <motion.h1
              className="skill-detail__title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {skill.name}
            </motion.h1>
            <p className="skill-detail__desc">{"// "}{skill.description}</p>

            {/* SKILL.md preview */}
            <div className="skill-detail__file">
              <div className="skill-detail__file-header">
                <div className="skill-card__dots">
                  <span className="dot dot--red" />
                  <span className="dot dot--yellow" />
                  <span className="dot dot--green" />
                </div>
                <span className="skill-card__filename">SKILL.md</span>
                <span className="skill-detail__readonly">readonly</span>
              </div>
              <div className="skill-detail__file-body">
                <table className="skill-detail__table">
                  <tbody>
                    <tr>
                      <td className="skill-detail__key">name</td>
                      <td>{skill.name}</td>
                    </tr>
                    <tr>
                      <td className="skill-detail__key">description</td>
                      <td>{skill.description}</td>
                    </tr>
                    <tr>
                      <td className="skill-detail__key">category</td>
                      <td>{skill.category}</td>
                    </tr>
                    <tr>
                      <td className="skill-detail__key">author</td>
                      <td>@{skill.author}</td>
                    </tr>
                    <tr>
                      <td className="skill-detail__key">repository</td>
                      <td>{skill.repo}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="skill-detail__sidebar">
            {/* Package info */}
            <div className="skill-detail__panel">
              <div className="skill-detail__panel-header">
                package.json
              </div>
              <div className="skill-detail__panel-body">
                <div className="skill-detail__meta">
                  <span className="skill-detail__meta-key">"author":</span>{" "}
                  <span className="skill-detail__meta-val">
                    "{skill.author}"
                  </span>
                </div>
                <div className="skill-detail__meta">
                  <span className="skill-detail__meta-key">"repository":</span>{" "}
                  <span className="skill-detail__meta-val">
                    "{skill.repo}"
                  </span>
                </div>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-detail__gh-btn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  gh browse
                </a>
              </div>
            </div>

            {/* Install */}
            <div className="skill-detail__panel">
              <div className="skill-detail__panel-header">
                $ install --global
              </div>
              <div className="skill-detail__panel-body">
                <div className="skill-detail__install-cmd">
                  <code>npx skills add {skill.repo}</code>
                  <button
                    className="skill-detail__copy-btn"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `npx skills add ${skill.repo}`
                      )
                    }
                    title="Copy"
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related skills */}
        {related.length > 0 && (
          <div className="skill-detail__related">
            <h3>{"// Related Skills"}</h3>
            <div className="skills-grid skills-grid--small">
              {related.map((s) => (
                <Link
                  to={`/claude-code-skills/${s.id}`}
                  className="skill-card"
                  key={s.id}
                >
                  <div className="skill-card__header">
                    <div className="skill-card__dots">
                      <span className="dot dot--red" />
                      <span className="dot dot--yellow" />
                      <span className="dot dot--green" />
                    </div>
                    <span className="skill-card__filename">{s.name}.md</span>
                  </div>
                  <div className="skill-card__body">
                    <div className="skill-card__export">
                      <span className="kw">export</span>{" "}
                      <span className="skill-name">{s.name}</span>
                    </div>
                    <p className="skill-card__desc">{"// "}{s.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="skill-detail__back">
          <Link to="/claude-code-skills">← Back to all skills</Link>
        </div>
      </div>
    </section>
  );
};
