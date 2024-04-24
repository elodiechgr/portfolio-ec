import React from "react";
import "./Vitrine.scss";
import imageSrc from "../../assets/circles.jpg";
import imageSrc1 from "../../assets/mac.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faFigma,
  faWebflow,
} from "@fortawesome/free-brands-svg-icons";

const Dev = () => {
  return (
    <div className="body-dev">
      <div className="header-dev">
        <div className="div-titre-dev">
          <h1 className="titre-dev">Site internet clé en mains</h1>
        </div>
        <div>
          <p className="intro">
            Vous êtes un entrepreneur cherchant à établir une présence en ligne
            efficace mais vous vous sentez dépassé par les défis du
            développement web ? En tant que développeuse web, j'ai créé un
            service de sites internet clés en main spécialement conçu pour vous
            offrir une solution simple, abordable et professionnelle pour
            établir une présence en ligne efficace et impactante.
          </p>
        </div>
      </div>

      <div className="img-dev">
        <img src={imageSrc} alt="Développeuse web à Angers" />
      </div>

      <h3 className="h3-dev">
        Votre besoin est unique. Je suis là pour le réaliser. En tant que
        développeuse web spécialisée, je transforme votre vision en un site
        vitrine efficace, adapté à votre budget. Vous pouvez compter sur moi
        pour concrétiser votre projet avec professionnalisme et confiance.
      </h3>

      <div className="row1-dev">
        <div className="img1-text-dev">
          <img src={imageSrc1} alt="Développeuse web à Angers" />
        </div>
        <div className="txt1-text-dev">
          <h2 className="titre-services">Services proposés</h2>
          <p style={{ fontSize: "larger" }}>
            Pour une présence en ligne qui vous ressemble.
          </p>
          <ul className="list-dev">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Création d'un site vitrine personnalisé et professionnel.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Responsive design pour une compatibilité avec tous les appareils.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Optimisation pour les moteurs de recherche (SEO) afin d'améliorer
              la visibilité en ligne.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Formation et support pour vous aider à gérer et mettre à jour
              votre site facilement.
            </li>
          </ul>
        </div>
      </div>

      <div className="row2-dev">
        <div>
          <h2 className="titre-services">Pourquoi travailler avec moi ?</h2>
          <ul className="list-dev">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Tarification transparente à partir de 1500€, sans frais cachés.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Livraison rapide pour que vous puissiez démarrer rapidement.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Suivi client pour répondre à toutes vos questions et
              préoccupations.
            </li>
          </ul>
        </div>
        <div class="plus"></div>
      </div>

      <div>
        <h2 className="titre-services1">
          J'utilise les dernières technologies pour créer des designs innovants
        </h2>
        <div style={{ display: "flex", width: "100%" }}>
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faFigma}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faWebflow}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;
