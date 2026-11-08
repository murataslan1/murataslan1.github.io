import React, { useState } from "react";
import { Link } from "react-router-dom";
import { subscribe, subscribeMessages } from "../../lib/subscribe";
import { FadeInUp } from "../Motion";
import "./style.css";

export const NewsletterSignup = ({ source }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const result = await subscribe(email.trim(), source);
      setStatus(result);
      if (result !== "mailto") setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <FadeInUp className="nl-signup glass-card">
      <div className="nl-signup__text">
        <span className="section-title">Open Source Weekly</span>
        <h2 className="nl-signup__title">One email a week from the field</h2>
        <p className="nl-signup__body">
          What I merged, what broke, and what I learned in the room at Ankara's
          AI and developer events. Free, no spam, unsubscribe anytime.{" "}
          <Link to="/newsletter">More about it</Link>
        </p>
      </div>
      <form className="nl-signup__form" onSubmit={handleSubmit}>
        <label htmlFor={`nl-email-${source}`} className="nl-signup__label">
          Email address
        </label>
        <input
          id={`nl-email-${source}`}
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="nl-signup__input"
        />
        <button
          type="submit"
          className="ac_btn ac_btn--primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe free"}
        </button>
        {subscribeMessages[status] && (
          <p className={`nl-signup__status nl-signup__status--${status}`} role="status">
            {subscribeMessages[status]}
          </p>
        )}
      </form>
    </FadeInUp>
  );
};

export default NewsletterSignup;
