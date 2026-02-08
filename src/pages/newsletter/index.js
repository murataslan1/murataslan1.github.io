import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { contactConfig } from "../../content_option";
import Seo from "../../components/Seo";
import { motion } from "framer-motion";
import { FadeInUp } from "../../components/Motion";

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

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            email: "",
            loading: false,
            alertmessage: "🎉 You're in! Check your inbox.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: `Failed to subscribe. Please try again.`,
            variant: "danger",
            show: true,
          }));
        }
      );
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
        title="Newsletter"
        description="Subscribe to get updates on open source contributions, tech insights, and developer stories."
      />

      <div className="newsletter-container">
        <FadeInUp className="newsletter-header">
          <span className="section-title">Newsletter</span>
          <h1>Stay in the Loop</h1>
          <p className="newsletter-intro">
            Subscribe to get updates on my open source contributions, tech
            insights, and developer stories. No spam, unsubscribe anytime.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1} className="newsletter-form-wrapper">
          {formData.show && (
            <motion.div
              className={`alert alert--${formData.variant}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>{formData.alertmessage}</p>
              <button
                type="button"
                onClick={() =>
                  setFormdata((prev) => ({ ...prev, show: false }))
                }
                className="alert__close"
              >
                ×
              </button>
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            className="newsletter-form glass-card"
          >
            <div className="newsletter-input-row">
              <div className="form-group newsletter-email-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email || ""}
                  required
                  onChange={handleChange}
                />
              </div>

              <motion.button
                type="submit"
                className="ac_btn ac_btn--primary newsletter-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formData.loading}
              >
                {formData.loading ? (
                  <>
                    <span className="spinner"></span>
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </motion.button>
            </div>
          </form>
        </FadeInUp>
      </div>

      {formData.loading && <div className="loading-overlay"></div>}
    </section>
  );
};
