import React from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import CardContainer from "../components/CardContainer/CardContainer";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div id="portfolio">
        <CardContainer />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
