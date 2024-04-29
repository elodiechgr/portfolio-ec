import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio-button.scss";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // smooth scrolling
  });
}

function Button() {
  return (
    <div className="cta-work">
      <Link to="/portfolio" onClick={scrollToTop}>
        <button className="btn">Découvrir tout mon travail</button>
      </Link>
    </div>
  );
}

export default Button;
