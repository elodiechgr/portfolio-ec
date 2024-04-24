import React from "react";
import Header from "../../components/Header/Header";
import AboutHero from "../../components/AboutHero/AboutHero";
import Footer from "../../components/Footer/Footer";
import Text from "../../components/Text/Text";
import Opti from "../../components/Opti/Opti";
import Devis from "../../components/Devis-button/Portfolio-button";

export default function Optimisation() {
  return (
    <div>
      <AboutHero />
      <Header />
      <Opti />
      <Devis />
      <Text />
      <Footer />
    </div>
  );
}
