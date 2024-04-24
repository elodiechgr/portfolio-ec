import React from "react";
import Header from "../../components/Header/Header";
import AboutHero from "../../components/AboutHero/AboutHero";
import Footer from "../../components/Footer/Footer";
import Text from "../../components/Text/Text";
import Vitrine from "../../components/Vitrine/Vitrine";
import Devis from "../../components/Devis-button/Portfolio-button";

export default function SiteVitrine() {
  return (
    <div>
      <AboutHero />
      <Header />
      <Vitrine />
      <Devis />
      <Text />
      <Footer />
    </div>
  );
}
