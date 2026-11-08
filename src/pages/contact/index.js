import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { contactConfig, socialprofils } from "../../content_option";
import Seo from "../../components/Seo";
import { motion } from "framer-motion";
import { FadeInUp } from "../../components/Motion";
import { FaRegCalendarAlt } from "react-icons/fa";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
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
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
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
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message",
            variant: "success",
            show: true,
          }));
        },
        (error) => {
          console.log(error.text);
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: `Failed to send! ${error.text}`,
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
    <section className="contact-page">
      <Seo title="Contact" description={contactConfig.description} />
      
      <div className="contact-container">
        <FadeInUp className="contact-header">
          <span className="section-title">Contact</span>
          <h1>Get in Touch</h1>
          <p className="contact-intro">{contactConfig.description}</p>
          {contactConfig.CALENDLY_URL && (
            <a
              href={contactConfig.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ac_btn ac_btn--primary contact-book"
            >
              <FaRegCalendarAlt aria-hidden="true" /> Book a free 30-min call
            </a>
          )}
        </FadeInUp>

        <div className="contact-content">
          <FadeInUp delay={0.1} className="contact-info">
            <div className="contact-info__card glass-card">
              {contactConfig.CALENDLY_URL && (
                <div className="contact-info__item">
                  <span className="contact-info__emoji">📅</span>
                  <div>
                    <span className="contact-info__label">Book a call</span>
                    <a href={contactConfig.CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="contact-info__value">
                      30-min call on Calendly
                    </a>
                  </div>
                </div>
              )}

              <div className="contact-info__item">
                <span className="contact-info__emoji">📧</span>
                <div>
                  <span className="contact-info__label">Email</span>
                  <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact-info__value">
                    {contactConfig.YOUR_EMAIL}
                  </a>
                </div>
              </div>

              {contactConfig.YOUR_FONE && (
                <div className="contact-info__item">
                  <span className="contact-info__emoji">📱</span>
                  <div>
                    <span className="contact-info__label">Phone</span>
                    <span className="contact-info__value">{contactConfig.YOUR_FONE}</span>
                  </div>
                </div>
              )}

              <div className="contact-info__item">
                <span className="contact-info__emoji">📍</span>
                <div>
                  <span className="contact-info__label">Location</span>
                  <span className="contact-info__value">Ankara, Turkey</span>
                </div>
              </div>

              <div className="contact-info__item">
                <span className="contact-info__emoji">🌐</span>
                <div>
                  <span className="contact-info__label">GitHub</span>
                  <a href={socialprofils.github} target="_blank" rel="noopener noreferrer" className="contact-info__value">
                    @murataslan1
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <span className="contact-info__emoji">💼</span>
                <div>
                  <span className="contact-info__label">LinkedIn</span>
                  <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info__value">
                    murataslan1
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <span className="contact-info__emoji">🐦</span>
                <div>
                  <span className="contact-info__label">X (Twitter)</span>
                  <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer" className="contact-info__value">
                    @iammurataslan
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <span className="contact-info__emoji">✍️</span>
                <div>
                  <span className="contact-info__label">Medium</span>
                  <a href={socialprofils.medium} target="_blank" rel="noopener noreferrer" className="contact-info__value">
                    @murataslan1
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="contact-form-wrapper">
            {formData.show && (
              <motion.div 
                className={`alert alert--${formData.variant}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p>{formData.alertmessage}</p>
                <button 
                  type="button" 
                  onClick={() => setFormdata((prev) => ({ ...prev, show: false }))}
                  className="alert__close"
                >
                  ×
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name || ""}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
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
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button 
                type="submit" 
                className="ac_btn ac_btn--primary contact-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formData.loading}
              >
                {formData.loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </FadeInUp>
        </div>
      </div>

      {formData.loading && <div className="loading-overlay"></div>}
    </section>
  );
};
