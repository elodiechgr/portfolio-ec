import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Tilt className="parallax-effect" tiltMaxAngleX={15} tiltMaxAngleY={15}>
      <div className="card">
        <Link to={`/work/${id}`}>
          <img src={cover} alt={title} className="card-image" />
          <h3>{title}</h3>
        </Link>
      </div>
    </Tilt>
  );
};

export default Card;
