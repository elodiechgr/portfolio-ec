import React from "react";
import Header from "../components/Header/Header";
import CardContainerPortfolio from "../components/CardContainerPortfolio/CardContainerPortfolio";
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
      <CardContainerPortfolio />
      <Text />
      <Footer />
    </div>
  );
}
