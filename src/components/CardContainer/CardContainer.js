import React from "react";
import Card from "../Card/Card";
import "./CardContainer.scss";
import jsonData from "../works.json";

const CardContainer = () => {
  const sixCardsData = jsonData.slice(0, 6);

  return (
    <div className="portfolio">
      <div className="row-un">
        <div className="p-un">
          <Card
            key={sixCardsData[0].id}
            id={sixCardsData[0].id}
            title={sixCardsData[0].title}
            cover={sixCardsData[0].cover}
          />
        </div>
        <div className="p-deux">
          <Card
            key={sixCardsData[1].id}
            id={sixCardsData[1].id}
            title={sixCardsData[1].title}
            cover={sixCardsData[1].cover}
          />
        </div>
      </div>
      <div className="row-deux">
        <div className="p-un">
          <Card
            key={sixCardsData[2].id}
            id={sixCardsData[2].id}
            title={sixCardsData[2].title}
            cover={sixCardsData[2].cover}
          />
        </div>
        <div className="p-deux">
          <Card
            key={sixCardsData[3].id}
            id={sixCardsData[3].id}
            title={sixCardsData[3].title}
            cover={sixCardsData[3].cover}
          />
        </div>
      </div>
      <div className="row-un">
        <div className="p-un">
          <Card
            key={sixCardsData[4].id}
            id={sixCardsData[4].id}
            title={sixCardsData[4].title}
            cover={sixCardsData[4].cover}
          />
        </div>
        <div className="p-deux">
          <Card
            key={sixCardsData[5].id}
            id={sixCardsData[5].id}
            title={sixCardsData[5].title}
            cover={sixCardsData[5].cover}
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
