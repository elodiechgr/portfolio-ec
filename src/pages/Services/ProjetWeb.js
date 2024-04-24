import React from "react";
import Header from "../../components/Header/Header";
import AboutHero from "../../components/AboutHero/AboutHero";
import Footer from "../../components/Footer/Footer";
import Text from "../../components/Text/Text";
import Dev from "../../components/Dev/Dev";
import Devis from "../../components/Devis-button/Portfolio-button";

export default function ProjetWeb() {
  return (
    <div>
      <AboutHero />
      <Header />
      <Dev />
      <Devis />
      <Text />
      <Footer />
    </div>
  );
}
