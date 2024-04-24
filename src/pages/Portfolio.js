import React from "react";
import Header from "../components/Header/Header";
import CardContainer from "../components/CardContainer/CardContainer";
import Footer from "../components/Footer/Footer";
import Text from "../components/Text/Text";
import Title from "../components/Title/Title";
import AboutHero from "../components/AboutHero/AboutHero";

export default function Portfolio() {
  return (
    <div>
      <AboutHero />
      <Header />
      <Title />
      <div id="portfolio">
        <CardContainer />
      </div>
      <Text />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
