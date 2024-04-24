import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo-ec.png";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href="/">
            <img src={logo} alt="Logo" className="logo elodie chatelais" />
          </a>
          <ul>
            <li
              className="dropdown"
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <a href="#">Services</a>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/Projet-sur-mesure">Projet web sur-mesure</a>
                  </li>
                  <li>
                    <a href="/Site-vitrine">Site internet clé en mains</a>
                  </li>
                  <li>
                    <a href="/E-commerce">Site e-commerce Shopify</a>
                  </li>
                  <li>
                    <a href="/Optimisation">Optimisation</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/#about">À propos</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
