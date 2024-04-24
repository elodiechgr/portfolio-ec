import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio-button.scss";

function Button() {
  return (
    <div className="cta-work">
      <Link to="/portfolio">
        <button className="btn">Découvrir tout mon travail</button>
      </Link>
    </div>
  );
}

export default Button;
