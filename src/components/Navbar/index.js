import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, logout } from '../../store/authenticationSlice';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const closeMenuOnMobile = () => {
    if (window.innerWidth >= 1150) {
      setShowMenu(true);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <nav className={`nav container`}>
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
              {isAuthenticated ? (
                <button
                  className="nav__link"
                  id="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="nav__link"
                  activeClassName="active"
                  id="login-btn"
                  onClick={closeMenuOnMobile}
                >
                  Login / Register
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
