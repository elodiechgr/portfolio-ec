import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>La page n'existe pas</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFound;
