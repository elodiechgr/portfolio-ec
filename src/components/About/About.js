import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import profileImage from "../../assets/profile-image.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-body">
        <h2 className="about">À propos</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src={profileImage}
              alt="Elodie Chatelais"
              width="350"
              height="350"
            />
          </div>
          <div className="about-text">
            <p className="about-description">
              Je suis Elodie, développeuse web spécialisée en frontend. <br />
              <br />
              Avec un double cursus en développement web et marketing, j'apporte
              une perspective unique à mes projets en combinant compétences
              techniques et créativité. Passionnée par la création d'interfaces
              utilisateurs intuitives et esthétiques, je suis toujours prête à
              relever de nouveaux défis et à fournir des solutions de qualité.
              <br />
              <br />
              En tant que développeuse frontend, je maîtrise les langages HTML,
              CSS et JavaScript ainsi que les frameworks et bibliothèques
              modernes telles que React.js. Je suis également en mesure de
              rendre un site responsive, de l'optimiser et de régler les bugs.
            </p>
          </div>
        </div>
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
