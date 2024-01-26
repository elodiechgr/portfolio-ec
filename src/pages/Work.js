import React from "react";
import { useParams, Link } from "react-router-dom";
import jsonData from "../components/works.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Work.scss";

export default function Work() {
  const { id } = useParams();

  const selectedCard = jsonData.find((item) => item.id === String(id));

  if (!selectedCard) {
    return <div>404 not found</div>;
  }

  return (
    <div className="work-body">
      <Link to="/#portfolio">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="arrow-icon"
          style={{ color: "#ffffff", fontSize: "2rem" }}
        />
      </Link>
      <div className="work-content">
        <h1 className="work-title">{selectedCard.title}</h1>
        <div className="work-details">
          <ul className="competences-list">
            {selectedCard.competences &&
              selectedCard.competences.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
          </ul>
          <p>{selectedCard.description}</p>
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
  );
}
