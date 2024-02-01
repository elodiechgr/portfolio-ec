import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../components/works.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Work.scss";
import Header from "../components/Header/Header";
import AboutHero from "../components/AboutHero/AboutHero";
import Footer from "../components/Footer/Footer";

export default function Work() {
  const { id } = useParams();

  const selectedCard = jsonData.find((item) => item.id === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedCard) {
    return <div>404 not found</div>;
  }

  return (
    <div>
      <AboutHero />
      <div className="work-body">
        <Header />
        <div className="work-content">
          <div className="work-details">
            <h1 className="work-title">{selectedCard.title}</h1>
            <ul className="competences-list">
              {selectedCard.competences &&
                selectedCard.competences.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
          </div>
          <div className="work-details">
            <p className="work-subtitle">Mission :</p>
            <p>{selectedCard.description}</p>
            <p className="work-subtitle">Problématiques et solutions :</p>
            <p>{selectedCard.enjeux}</p>
            <a
              href={selectedCard.github}
              className="github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
          </div>
        </div>
        <div className="work-pictures">
          <div className="work-pictures">
            {selectedCard.pictures && (
              <img src={selectedCard.pictures} alt={selectedCard.title} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
