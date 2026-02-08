import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { contactConfig } from "../../content_option";
import Seo from "../../components/Seo";
import { motion } from "framer-motion";
import { FadeInUp } from "../../components/Motion";

const projects = [
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

export const Newsletter = () => {
  const [formData, setFormdata] = useState({
    email: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata((prev) => ({ ...prev, loading: true, show: false }));

    const templateParams = {
      from_name: formData.email,
      user_name: "Newsletter Subscriber",
      to_name: contactConfig.YOUR_EMAIL,
      message: `New newsletter subscriber: ${formData.email}`,
    };

    const promises = [];

    // EmailJS notification
    promises.push(
      emailjs.send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
    );

    // Google Sheets — save subscriber
    if (contactConfig.GOOGLE_SHEETS_URL) {
      promises.push(
        fetch(contactConfig.GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        })
      );
    }

    Promise.all(promises)
      .then(() => {
        setFormdata({
          email: "",
          loading: false,
          alertmessage: "🎉 You're in! Check your inbox.",
          variant: "success",
          show: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setFormdata((prev) => ({
          ...prev,
          loading: false,
          alertmessage: `Failed to subscribe. Please try again.`,
          variant: "danger",
          show: true,
        }));
      });
  };

  const handleChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="newsletter-page">
      <Seo
        title="Open Source Weekly Newsletter"
        description="Weekly open source contributions, tech insights, and developer stories from Murat Aslan."
      />

      <div className="newsletter-container">
        <FadeInUp className="newsletter-card">
          <div className="newsletter-left">
            <h1 className="newsletter-title">Open Source Weekly</h1>
            <p className="newsletter-desc">
              Get weekly insights on open source contributions, developer tools,
              and tech stories — and get instant access to curated{" "}
              <strong>developer resources & guides</strong>.
            </p>
            <h2 className="newsletter-cta-text">Subscribe to get it free</h2>

            {formData.show && (
              <motion.div
                className={`nl-alert nl-alert--${formData.variant}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p>{formData.alertmessage}</p>
                <button
                  type="button"
                  onClick={() =>
                    setFormdata((prev) => ({ ...prev, show: false }))
                  }
                  className="nl-alert__close"
                >
                  ×
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email || ""}
                required
                onChange={handleChange}
                className="newsletter-input"
              />
              <motion.button
                type="submit"
                className="newsletter-submit-btn"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={formData.loading}
              >
                {formData.loading ? (
                  <>
                    <span className="nl-spinner"></span>
                    SUBSCRIBING...
                  </>
                ) : (
                  "GET INSTANT ACCESS"
                )}
              </motion.button>
            </form>
            <p className="newsletter-privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          <FadeInUp delay={0.2} className="newsletter-right">
            <div className="newsletter-hero">
              <div className="newsletter-hero__header">
                <span className="newsletter-hero__icon">🚀</span>
                <h3 className="newsletter-hero__title">Open Source Weekly</h3>
              </div>
              <p className="newsletter-hero__subtitle">
                Contributions & Insights
              </p>
              <div className="newsletter-hero__grid">
                {projects.map((p) => (
                  <div className="newsletter-hero__badge" key={p.name}>
                    <img src={p.icon} alt={p.name} title={p.name} />
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </FadeInUp>
      </div>

      {formData.loading && <div className="loading-overlay"></div>}
    </section>
  );
};
