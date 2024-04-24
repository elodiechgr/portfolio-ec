import React from "react";
import "./Opti.scss";
import imageSrc from "../../assets/ruban.jpg";
import imageSrc1 from "../../assets/mac.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNpm,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Dev = () => {
  return (
    <div className="body-dev">
      <div className="header-dev">
        <div className="div-titre-opti">
          <h1 className="titre-dev">Optimisation</h1>
        </div>
        <div>
          <p className="intro">
            Vous vous demandez si votre site web atteint son plein potentiel ?
            Je suis là pour vous aider à le découvrir. Mon service
            d'optimisation web est spécialement conçu pour maximiser les
            performances de votre site, améliorer l'expérience utilisateur et
            augmenter votre retour sur investissement. Avec mon expertise, je
            vous propose une solution personnalisée pour optimiser chaque aspect
            de votre site et vous aider à atteindre vos objectifs en ligne.
          </p>
        </div>
      </div>

      <div className="img-dev">
        <img src={imageSrc} alt="Développeuse web à Angers" />
      </div>

      <h3 className="h3-dev">
        Vous souhaitez tirer le maximum de votre site internet ? Boostez le avec
        mon service d'optimisation. Je m'engage à améliorer ses performances, à
        enrichir ses fonctionnalités et à intégrer des solutions basées sur l'IA
        pour propulser votre entreprise vers le succès. Faites passer votre site
        au niveau supérieur.
      </h3>

      <div className="row1-ecom">
        <div className="img1-text-ecom">
          <img src={imageSrc1} alt="Développeuse web à Angers" />
        </div>
        <div className="txt1-text-dev">
          <h2 className="titre-services-ecom">Services proposés</h2>
          <p style={{ fontSize: "larger" }}>
            Améliorez vos performances pour atteindre vos objectifs commerciaux.
          </p>
          <ul className="list-dev">
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Optimisation des performances pour des temps de chargement rapides
              et une navigation fluide.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Développement de fonctionnalités sur mesure pour répondre à des
              besoins spécifiques (ex. : chatbot IA, calendrier de rendez-vous).
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Automatisation des processus grâce à l'intégration de
              l'intelligence artificielle pour une efficacité accrue.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Passage de votre site en responsive design pour une compatibilité
              avec tous les appareils.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Analyse détaillée sur l'utilisation, le trafic et le comportement
              des utilisateurs de votre site pour optimiser efficacement votre
              présence en ligne.
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
              Approche globale de l'optimisation, combinant développement
              technique et stratégie marketing.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Personnalisation de votre stratégie en fonction de vos besoins
              spécifiques et des évolutions de votre marché.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Utilisation des dernières technologies et meilleures pratiques
              pour des résultats optimaux.
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="filled-icon" />
              Engagement à long terme pour assurer la croissance continue de
              votre présence en ligne.
            </li>
          </ul>
        </div>
        <div class="plusecom"></div>
      </div>

      <div>
        <h2 className="titre-services1">
          J'utilise les dernières technologies pour créer des solutions
          innovantes
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
            icon={faNpm}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
          <FontAwesomeIcon
            icon={faPython}
            style={{ color: "#000000", flex: "1", fontSize: "80px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;
