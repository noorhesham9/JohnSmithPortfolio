import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo"></a>
        <div className="nav__menu">
          <ul className="nav__list grid"></ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
