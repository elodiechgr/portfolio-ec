import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Links.scss";

const Links = () => {
  return (
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
  );
};

export default Links;
