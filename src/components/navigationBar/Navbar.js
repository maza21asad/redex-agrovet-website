import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import { ReactComponent as RedexLogo } from "./RedexLogo2.svg";
import RedexLogo from "./RedexLogoHorizontal.png";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            {/* <RedexLogo className="logo-svg" /> */}
            <img src={RedexLogo} alt="Redex Logo" className="logo-svg" />
          </NavLink>
        </div>
        <nav>
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

          {/* Mobile Nav */}
          {/* <ul classname="">
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
          </ul> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
