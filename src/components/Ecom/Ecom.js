import React from "react";
import "./Ecom.scss";
import imageSrc from "../../assets/shape.jpg";
import imageSrc1 from "../../assets/mac.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faWebflow,
  faFigma,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";

const Dev = () => {
  return (
    <div className="body-dev">
      <div className="header-dev">
        <div className="div-titre-dev">
          <h1 className="titre-dev">Site e-commerce Shopify</h1>
        </div>
        <div>
          <p className="intro">
            Vous cherchez à propulser votre entreprise dans le monde du
            e-commerce ? Je suis là pour vous accompagner dans cette démarche.
            Avec mon service de création de boutiques en ligne sur Shopify, je
            vous offre une plateforme robuste et flexible pour vendre vos
            produits et développer votre entreprise. Grâce à mon expertise, je
            vous propose une solution complète et personnalisée pour rester
            compétitif dans un environnement numérique en constante évolution.
          </p>
        </div>
      </div>

      <div className="img-dev">
        <img src={imageSrc} alt="Développeuse web à Angers" />
      </div>

      <h3 className="h3-dev">
        Votre boutique en ligne doit être unique. Je suis là pour atteindre cet
        objectif. En tant que développeuse web spécialisée, je m'engage à
        transformer votre vision en une boutique en ligne sur Shopify, adaptée à
        vos besoins et à votre budget.
      </h3>

      <div className="row1-ecom">
        <div className="img1-text-ecom">
          <img src={imageSrc1} alt="Développeuse web à Angers" />
        </div>
        <div className="txt1-text-dev">
          <h2 className="titre-services-ecom">Services proposés</h2>
          <p style={{ fontSize: "larger" }}>
            Décuplez votre présence en ligne avec une boutique e-commerce sur
            mesure.
          </p>
          <ul className="list-dev">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Création de boutiques en ligne sur la plateforme Shopify, leader
              dans le secteur.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Création complète du thème pour correspondre à votre marque et à
              vos besoins.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Responsive design pour une compatibilité avec tous les appareils.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Configuration de toutes les fonctionnalités de commerce
              électronique, y compris les paiements sécurisés et la gestion des
              commandes.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Optimisation de votre boutique en ligne pour les moteurs de
              recherche afin d'améliorer sa visibilité et de vous aider à
              attirer plus de trafic organique.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Formation et support pour vous aider à gérer et mettre à jour vos
              fiches produits facilement.
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
              Expertise avancée dans le développement sur la plateforme Shopify.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Création de nombreuses boutiques e-commerce à succès.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Approche centrée sur l'utilisateur pour garantir une expérience
              d'achat fluide et intuitive.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Suivi continu et support technique pour assurer le bon
              fonctionnement de votre boutique en ligne.
            </li>
          </ul>
        </div>
        <div class="plusecom"></div>
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
            icon={faWebflow}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faFigma}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faShopify}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;
