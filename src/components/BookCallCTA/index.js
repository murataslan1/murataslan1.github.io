import React from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { contactConfig, callCta } from "../../content_option";
import { FadeInUp } from "../Motion";
import "./style.css";

export const BookCallCTA = ({
  eyebrow = callCta.eyebrow,
  title = callCta.title,
  body = callCta.body,
  secondary,
}) => (
  <FadeInUp className="book-call glass-card">
    <span className="section-title">{eyebrow}</span>
    <h2 className="book-call__title">{title}</h2>
    <p className="book-call__body">{body}</p>
    <ul className="book-call__proof">
      {callCta.proof.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <div className="book-call__actions">
      <a
        href={contactConfig.CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ac_btn ac_btn--primary"
      >
        <FaRegCalendarAlt aria-hidden="true" /> {callCta.button}
      </a>
      {secondary && (
        <Link to={secondary.to} className="ac_btn ac_btn--ghost">
          {secondary.label}
        </Link>
      )}
    </div>
    <span className="book-call__note">{callCta.note}</span>
  </FadeInUp>
);

export default BookCallCTA;
