import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
// import RedexLogo from "../navigationBar/RedexLogo1.png";
import Facebook from "./facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row">
          {/* column 1 */}
          <div className="col">
            {/* <img src={RedexLogo} alt="Redex Logo" className="logo-redex" /> */}
            <h4>Redex Agro Vet</h4>
            <ul className="f-list">
              <li>+8801*****7869 </li>
              <li>123 street, Azimpur, Uttara. </li>
              <li>Dhaka, Bangladesh </li>
            </ul>
            <img src={Facebook} alt="Facebook icon" className="logo-fb" />
          </div>
          {/* column 2 */}
          <div className="col">
            <h4> Quick Link </h4>
            <ul className="f-list">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/product">Products</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="footer-container-2">
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear} All right reserved.
            </p>
            <p className="col-sm">
              Developed by:{" "}
              <NavLink className="developer" to="/">
                Asad
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
