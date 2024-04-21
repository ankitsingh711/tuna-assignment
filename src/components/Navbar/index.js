import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenuOnMobile = () => {
    if (window.innerWidth >= 1150) {
      setShowMenu(true);
    }
  };

  return (
    <header className="header">
      <nav className={`nav container ${scrollY > 600 ? "scrolled" : ""}`}>
        <NavLink to="/" className="nav__logo">
          Tastebites
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                exact
                to="/"
                className="nav__link"
                activeClassName="active"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about-us"
                className="nav__link"
                activeClassName="active"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                activeClassName="active"
                onClick={closeMenuOnMobile}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/login"
                className="nav__link"
                activeClassName="active"
                id="login-btn"
                onClick={closeMenuOnMobile}
              >
                Login / Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
