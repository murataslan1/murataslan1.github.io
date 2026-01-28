import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import CountUp from "react-countup";
import Reveal from "../Reveal";
import "./style.css";
import { opensourceContributions } from "../../content_option";

const githubTheme = {
  light: ["#f5f1ec", "#e8e0d4", "#d7c7b1", "#c4ad8a", "#b08a5c"],
  dark: ["#1a1a1a", "#3a3127", "#5a4935", "#7a5f3f", "#caa36a"],
};

const githubStats = [
  { label: "Pull Requests", value: 75, suffix: "+" },
  { label: "Projects", value: 30, suffix: "+" },
  { label: "Merged PRs", value: 45, suffix: "+" },
  { label: "Total Stars", value: 400, suffix: "k+" },
];

export const GitHubActivity = () => {
  return (
    <section className="github-activity">
      <Reveal className="github-header">
        <p className="section-label">Open Source</p>
        <h2 className="section-title">GitHub Activity</h2>
      </Reveal>

      <Reveal className="stats-grid" delay={120}>
        {githubStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-value">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
              />
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </Reveal>

      <Reveal className="contribution-graph" delay={180}>
        <h3 className="color_sec">Contribution Graph</h3>
        <GitHubCalendar
          username="murataslan1"
          colorScheme="light"
          theme={githubTheme}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          hideColorLegend={false}
          hideMonthLabels={false}
          hideTotalCount={false}
        />
      </Reveal>

      <Reveal className="project-contributions" delay={240}>
        <h3 className="color_sec">Major Contributions</h3>
        <div className="contributions-grid">
          {opensourceContributions.map((contrib) => (
            <div key={contrib.project} className="contribution-card">
              <div className="contrib-header">
                <span className="contrib-project">{contrib.project}</span>
                <span className="contrib-status">{contrib.status}</span>
              </div>
              <div className="contrib-stats">
                <span className="contrib-stars">⭐ {contrib.stars}</span>
                <span className="contrib-prs">
                  {contrib.prs} PR{contrib.prs > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
