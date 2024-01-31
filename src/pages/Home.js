import React from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import CardContainer from "../components/CardContainer/CardContainer";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <div id="portfolio">
        <CardContainer />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
