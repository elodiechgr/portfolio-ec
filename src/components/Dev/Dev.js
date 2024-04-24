import React from "react";
import "./Dev.scss";
import imageSrc from "../../assets/round.jpg";
import imageSrc1 from "../../assets/mac.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faFigma,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const Dev = () => {
  return (
    <div className="body-dev">
      <div className="header-dev">
        <div className="div-titre-dev">
          <h1 className="titre-dev">Projet web sur-mesure</h1>
        </div>
        <div>
          <p className="intro">
            Vous avez une vision unique pour votre projet en ligne, et je suis
            là pour la concrétiser. En tant que développeuse web spécialisée
            dans la création de solutions sur-mesure, je comprends l'importance
            de transformer votre vision en une réalité. Mon service de création
            de projets web sur-mesure combine votre vision avec mon expertise
            approfondie en développement frontend et backend pour réaliser des
            solutions uniques et fonctionnelles, parfaitement adaptées à vos
            besoins spécifiques.
          </p>
        </div>
      </div>

      <div className="img-dev">
        <img src={imageSrc} alt="Développeuse web à Angers" />
      </div>

      <h3 className="h3-dev">
        Votre besoin est unique. Je suis là pour le réaliser. En tant que
        développeuse web spécialisée, je transforme votre vision en une réalité
        web sur mesure. Travaillons ensemble pour concrétiser vos idées.
      </h3>

      <div className="row1-dev">
        <div className="img1-text-dev">
          <img src={imageSrc1} alt="Développeuse web à Angers" />
        </div>
        <div className="txt1-text-dev">
          <h2 className="titre-services">Services proposés</h2>
          <ul className="list-dev">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Conception et développement de sites web avec des fonctionnalités
              spécifiques selon vos besoins.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Utilisation de technologies de pointe pour garantir des
              performances optimales.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Personnalisation complète du design et de l'expérience utilisateur
              pour correspondre à votre identité de marque.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Accompagnement personnalisé tout au long du projet.
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
              Expertise en développement frontend et backend pour répondre à des
              besoins complexes.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Approche personnalisée pour chaque projet afin de garantir une
              solution parfaitement adaptée.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Engagement envers la qualité, la sécurité et la satisfaction du
              client à chaque étape du processus.
            </li>
          </ul>
        </div>
        <div class="plusdev"></div>
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
            icon={faNpm}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;
