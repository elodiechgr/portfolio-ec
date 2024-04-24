import React from "react";
import "./Footer.scss";
import Top from "../Top/Top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="contact-info">
        <h2>CONTACT</h2>
        <h3>Vous avez un projet ? Discutons-en !</h3>
        <h4>
          <a href="mailto:hello@elodiechatelais.com" className="email-link">
            hello@elodiechatelais.com
          </a>
        </h4>
      </div>
      <div className="social-links">
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
          href="https://www.instagram.com/elodiecodinglab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            style={{ color: "#ffffff", marginLeft: "10px" }}
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
      <Top />
    </footer>
  );
};

export default Footer;
