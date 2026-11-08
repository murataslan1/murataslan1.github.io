import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaHeart, FaComment, FaRetweet } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./style.css";
import {
  communityStats,
  communityTalks,
  communityPosts,
  communities,
  socialprofils,
} from "../../content_option";
import Seo from "../../components/Seo";
import { FadeInUp, StaggerContainer, StaggerItem } from "../../components/Motion";

const stats = [
  { value: String(communityTalks.length), label: "Community talks given" },
  { value: String(communities.length), label: "Communities I show up for" },
  ...communityStats,
];

const ExternalLink = ({ href, children, className, label }) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    {children}
  </a>
);

export const Community = () => {
  return (
    <section className="community-page">
      <Seo
        title="Community"
        description="Talks, meetups and community events in Ankara and İstanbul: ClawCon, HSD Türkiye, KamuKOD, DevFest Ankara, Devin Meetup Ankara and more."
      />

      <div className="community-container">
        <div className="community-hero">
          <FadeInUp className="community-hero__content">
            <span className="section-title">Community</span>
            <h1>Ankara's builders, in the same room.</h1>
            <p className="community-hero__desc">
              I speak about AI agents, context engineering and open source, and I
              keep showing up for the communities that make this city a place to
              build. Here is where I've been lately and what I took away.
            </p>
            <div className="community-hero__actions">
              <ExternalLink
                href={socialprofils.linkedin}
                className="ac_btn ac_btn--primary"
              >
                <FaLinkedin aria-hidden="true" /> Follow on LinkedIn
              </ExternalLink>
              <Link to="/contact" className="ac_btn ac_btn--ghost">
                Invite me to speak
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15} className="community-hero__mosaic">
            <img
              src="/img/community/devfest-0.jpg"
              alt="Murat Aslan at DevFest Ankara"
              loading="eager"
            />
            <img
              src="/img/community/devin-meetup-0.jpg"
              alt="Murat Aslan with fellow builders at Devin Meetup Ankara"
              loading="eager"
            />
          </FadeInUp>
        </div>

        <StaggerContainer className="community-stats">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="community-stat glass-card">
                <span className="community-stat__value">{stat.value}</span>
                <span className="community-stat__label">{stat.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="community-section">
          <FadeInUp>
            <span className="section-title">On stage</span>
            <h2>Talks I've given</h2>
            <p className="community-section__lead">
              Every deck is free and open. Take what helps your team.
            </p>
          </FadeInUp>

          <StaggerContainer className="talk-grid">
            {communityTalks.map((talk) => (
              <StaggerItem key={talk.link}>
                <motion.a
                  href={talk.link}
                  className="talk-card glass-card"
                  whileHover={{ y: -4 }}
                >
                  <span className="talk-card__event">{talk.event}</span>
                  <h3 className="talk-card__title">{talk.title}</h3>
                  <span className="talk-card__meta">
                    {[talk.date, talk.place].filter(Boolean).join(" · ")}
                  </span>
                  <ul className="talk-card__topics">
                    {talk.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <span className="talk-card__cta">View slides →</span>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="community-section">
          <FadeInUp>
            <span className="section-title">Lately</span>
            <h2>From the community</h2>
            <p className="community-section__lead">
              Notes from recent events, straight from my LinkedIn and X.
            </p>
          </FadeInUp>

          <div className="post-list">
            {communityPosts.map((post, i) => (
              <FadeInUp key={post.linkedin} delay={i * 0.05}>
                <article className="post-card glass-card">
                  <div className="post-card__media">
                    <img src={post.img} alt={post.imgAlt} loading="lazy" />
                    <span className="post-card__role">{post.role}</span>
                  </div>
                  <div className="post-card__body">
                    <span className="post-card__meta">
                      {post.date} · {post.host}
                    </span>
                    <h3 className="post-card__event">{post.event}</h3>
                    <blockquote className="post-card__quote">
                      “{post.quote}”
                    </blockquote>
                    <p className="post-card__takeaway">{post.takeaway}</p>
                    <div className="post-card__footer">
                      <span
                        className="post-card__engagement"
                        aria-label={`${post.engagement.likes} reactions, ${post.engagement.comments} comments, ${post.engagement.reposts} reposts on LinkedIn`}
                      >
                        <span><FaHeart aria-hidden="true" /> {post.engagement.likes}</span>
                        <span><FaComment aria-hidden="true" /> {post.engagement.comments}</span>
                        <span><FaRetweet aria-hidden="true" /> {post.engagement.reposts}</span>
                      </span>
                      <span className="post-card__links">
                        <ExternalLink
                          href={post.linkedin}
                          label={`Read the ${post.event} post on LinkedIn`}
                        >
                          <FaLinkedin aria-hidden="true" /> Read post
                        </ExternalLink>
                        {post.x && (
                          <ExternalLink
                            href={post.x}
                            label={`View the ${post.event} post on X`}
                          >
                            <FaXTwitter aria-hidden="true" />
                          </ExternalLink>
                        )}
                      </span>
                    </div>
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>

        <div className="community-section">
          <FadeInUp>
            <span className="section-title">Where you'll find me</span>
            <h2>Communities I'm part of</h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <ul className="community-chips">
              {communities.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </FadeInUp>
        </div>

        <FadeInUp className="community-cta glass-card">
          <h2>See you at the next one.</h2>
          <p>
            Ankara community events fill up fast. Follow along so you don't
            miss the next one, or bring me to your community.
          </p>
          <div className="community-hero__actions">
            <ExternalLink
              href={socialprofils.linkedin}
              className="ac_btn ac_btn--primary"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </ExternalLink>
            <ExternalLink
              href={socialprofils.twitter}
              className="ac_btn ac_btn--ghost"
            >
              <FaXTwitter aria-hidden="true" /> @iammurataslan
            </ExternalLink>
            <Link to="/contact" className="ac_btn ac_btn--ghost">
              Invite me to speak
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
