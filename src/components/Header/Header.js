import React from "react";
import "./Header.scss";

const Header = () => {
  const handleClick = (e, id) => {
    e.preventDefault();

    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = e.target.href;
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/" onClick={(e) => handleClick(e, "#portfolio")}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => handleClick(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a href="/" onClick={(e) => handleClick(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
