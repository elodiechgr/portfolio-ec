import React from "react";
import Header from "../../components/Header/Header";
import AboutHero from "../../components/AboutHero/AboutHero";
import Footer from "../../components/Footer/Footer";
import Text from "../../components/Text/Text";
import Ecom from "../../components/Ecom/Ecom";
import Devis from "../../components/Devis-button/Portfolio-button";

export default function Ecommerce() {
  return (
    <div>
      <AboutHero />
      <Header />
      <Ecom />
      <Devis />
      <Text />
      <Footer />
    </div>
  );
}
