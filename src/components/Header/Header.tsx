import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                <Link to="/">All characters</Link>
              </li>
              <li className="header__menu-item">
                <Link to="/search">Search Locations</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};