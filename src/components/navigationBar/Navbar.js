import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import { ReactComponent as RedexLogo } from "./RedexLogo2.svg";
import RedexLogo from "./RedexLogoHorizontal.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };

  const Hamburger = (
    <GiHamburgerMenu
      className="hamburgerMenu"
      size="30px"
      color="black"
      onClick={toggleMenu}
    />
  );

  const Close = (
    <IoMdClose
      className="hamburgerMenu"
      size="30px"
      color="black"
      onClick={toggleMenu}
    />
  );

  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src={RedexLogo} alt="Redex Logo" className="logo-svg" />
          </NavLink>
        </div>

        {/* Desktop nagigation */}
        <nav className="desktopNav">
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="nav-link">
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* -------------- Mobile Navigation ----------------*/}

        <nav className="mobileNav" style={{ display: click ? "flex" : "none" }}>
          <ul>
            <li>
              <NavLink to="/" className="nav-link" onClick={toggleMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" onClick={toggleMenu}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="nav-link" onClick={toggleMenu}>
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="burger-menu">{click ? Close : Hamburger}</div>
      </div>
    </header>
  );
}

export default Navbar;
