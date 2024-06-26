import React from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import CardContainer from "../components/CardContainer/CardContainer";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Text from "../components/Text/Text";
import Offre from "../components/Offre/Offre";
import Title from "../components/Title/Title";
import Button from "../components/Portfolio-button/Portfolio-button";
import Line from "../components/Line/Line";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Offre />
      <Line />
      <About />
      <Line />
      <Title />
      <div id="portfolio">
        <CardContainer />
      </div>
      <Button />
      <Text />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
