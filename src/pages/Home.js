import React from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import CardContainer from "../components/CardContainer/CardContainer";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Text from "../components/Text/Text";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
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
