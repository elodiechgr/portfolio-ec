import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./About.scss";
import myPhoto from "../../assets/profile-image.png";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showHoverPhotos, setShowHoverPhotos] = useState(false);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="about">
      <h2 className="about">Qui suis-je ?</h2>
      <div className="about-body">
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Je suis une développeuse frontend animée par la fusion du code et
              du design.
              <br />
              Spécialisée dans la création d'expériences digitales captivantes
              et sophistiquées, mon objectif est de concrétiser vos projets avec
              élégance et savoir-faire, en apportant une touche distinctive à
              chaque réalisation.
            </p>

            <div className="faq">
              <div className="text-faq">
                <hr />
                <div className="question">
                  <span
                    className="question-text"
                    onClick={() => toggleAnswer(1)}
                  >
                    Mon histoire
                    <FiChevronDown
                      className={`icon ${activeIndex === 1 ? "active" : ""}`}
                    />
                  </span>
                  <div
                    className={`answer ${activeIndex === 1 ? "active" : ""}`}
                  >
                    <p>
                      Mon parcours mêle le développement web et le marketing,
                      offrant ainsi une perspective singulière à chaque projet
                      que j'aborde. Passionnée par le design, je m'efforce de
                      créer des expériences digitales qui allient l'esthétique à
                      la fonctionnalité. En qualité de développeuse frontend, je
                      maîtrise les langages HTML, CSS et JavaScript, ainsi que
                      les frameworks tels que React. Je m'engage également à
                      élever chaque projet à un niveau supérieur en le rendant
                      non seulement responsive et optimisé, mais aussi en
                      veillant à ce qu'il offre une expérience utilisateur
                      impeccable. Mais ce qui me distingue véritablement, c'est
                      ma passion pour le creative coding. Le creative coding
                      ouvre des portes infinies vers l'art numérique, et c'est
                      ce qui rend chaque projet excitant pour moi. Pas de
                      limites, pas de règles strictes, juste une exploration
                      sans fin des possibilités offertes par la technologie et
                      la créativité. En résumé, je suis là pour transformer des
                      idées en réalité, en y ajoutant une touche de style et
                      d'expertise !
                    </p>
                  </div>
                </div>
                <hr />
                <div className="question">
                  <span
                    className="question-text"
                    onClick={() => toggleAnswer(2)}
                  >
                    Ma mission
                    <FiChevronDown
                      className={`icon ${activeIndex === 2 ? "active" : ""}`}
                    />
                  </span>
                  <div
                    className={`answer ${activeIndex === 2 ? "active" : ""}`}
                  >
                    <p>
                      J'aime créer des expériences digitales qui captivent,
                      inspirent et transforment. Mon objectif est de repousser
                      les limites de ce qui est possible en combinant habilement
                      la technologie et le design. En tant que développeuse
                      frontend, je m'efforce de rendre chaque interaction
                      utilisateur aussi fluide et agréable que possible. Mon
                      approche est centrée sur l'utilisateur, cherchant à
                      comprendre ses besoins et ses désirs pour créer des
                      solutions sur mesure. Enfin, je suis convaincue que la
                      collaboration est la clé du succès. Je travaille en
                      étroite collaboration avec mes clients pour comprendre
                      leur vision et leurs objectifs, et je souhaite leur offrir
                      des solutions qui dépassent leurs attentes. En résumé, ma
                      mission est de créer des expériences digitales qui
                      repoussent les limites de l'innovation, tout en restant
                      accessibles et centrées sur l'utilisateur.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div
            className="about-photo"
            onMouseEnter={() => setShowHoverPhotos(true)}
            onMouseLeave={() => setShowHoverPhotos(false)}
          >
            {showHoverPhotos && (
              <div className="hover-photos">
                <div
                  className="hover-photo"
                  style={{
                    backgroundImage: `url('lien_vers_autre_photo1.jpg')`,
                  }}
                ></div>
                <div
                  className="hover-photo"
                  style={{
                    backgroundImage: `url('lien_vers_autre_photo2.jpg')`,
                  }}
                ></div>
                <div
                  className="hover-photo"
                  style={{
                    backgroundImage: `url('lien_vers_autre_photo3.jpg')`,
                  }}
                ></div>
                {/* Ajoutez autant de photos que vous le souhaitez */}
              </div>
            )}
            <img src={myPhoto} alt="Angers" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
