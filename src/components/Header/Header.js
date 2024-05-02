import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo-ec.png";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
            <div
              className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
            ></div>
          </div>
          <ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
            <li
              className={`dropdown ${showDropdown ? "active" : ""}`}
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <a href="#">Services</a>
              <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
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
