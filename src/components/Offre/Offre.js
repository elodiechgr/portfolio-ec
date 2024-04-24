import React from "react";
import { motion } from "framer-motion";
import "./Offre.scss";

const AnimatedLetters = ({ text, onClick }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={onClick}
      className="animated-letters"
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index}>{letter}</motion.span>
      ))}
    </motion.div>
  );
};

const Services = () => {
  const handleClick = () => {
    // Action à effectuer lorsque l'utilisateur clique sur les lettres
    console.log("Animation cliquée !");
  };

  return (
    <div className="Services">
      <h2 className="titre-services">Services</h2>
      <h3 className="s-un">
        <a href="/Projet-sur-mesure">
          <AnimatedLetters text="PROJET WEB SUR-MESURE" onClick={handleClick} />
        </a>
      </h3>
      <h3 className="s-deux">
        <a href="/Site-vitrine">
          <AnimatedLetters
            text="SITE INTERNET CLÉS EN MAIN"
            onClick={handleClick}
          />
        </a>
      </h3>
      <h3 className="s-trois">
        <a href="/E-commerce">
          <AnimatedLetters
            text="SITE E-COMMERCE SHOPIFY"
            onClick={handleClick}
          />
        </a>
      </h3>
      <h3 className="s-quatre">
        <a href="/Optimisation">
          <AnimatedLetters text="OPTIMISATION" onClick={handleClick} />
        </a>
      </h3>
    </div>
  );
};

export default Services;
