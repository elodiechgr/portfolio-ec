import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="about">
      <div className="about-body">
        <h2 className="about">À propos</h2>
        <p className="about-description">
          Je suis Elodie, je suis développeuse web freelance, spécialisée en
          frontend. <br />
          Après avoir travaillé plusieurs années en marketing, j'apporte une
          perspective unique à mes projets en combinant créativité et
          compétences techniques. Passionnée par la création d'interfaces
          utilisateur intuitives et esthétiques, je suis toujours prête à
          relever de nouveaux défis et à fournir des solutions de qualité à mes
          clients.
        </p>
        <div className="about-links">
          <a
            href="https://www.linkedin.com/in/elodie-chatelais/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="https://github.com/elodiechgr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "#ffffff", marginLeft: "10px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
