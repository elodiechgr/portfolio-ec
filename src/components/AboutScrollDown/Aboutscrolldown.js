import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import "./Aboutscrolldown.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="text-faq">
        <hr />
        <div className="question">
          <span className="question-text" onClick={() => toggleAnswer(1)}>
            Mon histoire
            <FiChevronDown
              className={`icon ${activeIndex === 1 ? "active" : ""}`}
            />
          </span>
          <div className={`answer ${activeIndex === 1 ? "active" : ""}`}>
            <p>
              Mon parcours fusionne harmonieusement le développement web et le
              marketing, offrant ainsi une perspective singulière à chaque
              projet que j'aborde. Animée par une passion profonde pour le
              design, je m'efforce de créer des expériences digitales qui
              allient l'esthétique à la fonctionnalité. En qualité de
              développeuse frontend, je maîtrise les langages HTML, CSS et
              JavaScript, ainsi que les frameworks tels que React. Je m'engage
              également à élever chaque projet à un niveau supérieur en le
              rendant non seulement responsive et optimisé, mais aussi en
              veillant à ce qu'il offre une expérience utilisateur impeccable.
              Mais ce qui me distingue véritablement, c'est ma passion pour le
              creative coding. Je ne me contente pas de simplement écrire du
              code ; je le considère comme un pinceau numérique avec lequel je
              crée des expériences visuelles uniques. Le creative coding ouvre
              des portes infinies vers l'art numérique, et c'est ce qui rend
              chaque projet excitant pour moi. Pas de limites, pas de règles
              strictes, juste une exploration sans fin des possibilités offertes
              par la technologie et la créativité. .En résumé, je suis là pour
              transformer des idées en réalité, en y ajoutant une touche de
              style et d'expertise !
            </p>
          </div>
        </div>
        <hr />
        <div className="question">
          <span className="question-text" onClick={() => toggleAnswer(2)}>
            Ma mission
            <FiChevronDown
              className={`icon ${activeIndex === 2 ? "active" : ""}`}
            />
          </span>
          <div className={`answer ${activeIndex === 2 ? "active" : ""}`}>
            <p>
              Ma mission est simple : révolutionner le web, une ligne de code à
              la fois.
              <br />
              Je m'engage à créer des expériences digitales qui captivent,
              inspirent et transforment. Mon objectif ultime est de repousser
              les limites de ce qui est possible en combinant habilement la
              technologie et le design. En tant que développeuse frontend
              passionnée par le design, je m'efforce de rendre chaque
              interaction utilisateur aussi fluide et agréable que possible. Mon
              approche est centrée sur l'utilisateur, cherchant à comprendre ses
              besoins et ses désirs pour créer des solutions sur mesure. Je
              crois fermement que le web devrait être accessible à tous, c'est
              pourquoi je m'engage à créer des sites web et des applications qui
              sont à la fois esthétiques et fonctionnels, mais aussi accessibles
              et inclusifs pour tous les utilisateurs, quel que soit leur
              dispositif ou leur capacité. Enfin, je suis convaincue que la
              collaboration est la clé du succès. Je travaille en étroite
              collaboration avec mes clients pour comprendre leur vision et
              leurs objectifs, et je m'engage à leur offrir des solutions qui
              dépassent leurs attentes, à chaque fois. En résumé, ma mission est
              de créer des expériences digitales extraordinaires qui repoussent
              les limites de l'innovation, tout en restant accessibles et
              centrées sur l'utilisateur. Parce que je crois que le web a le
              pouvoir de changer le monde, une ligne de code à la fois.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FAQ;
