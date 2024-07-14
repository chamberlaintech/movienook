import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
      <div className="nav-center-smallscreen">
        <GiHamburgerMenu
          color="#202020"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="overlay-open"
        />
        {toggleMenu && (
          <div className="nav-center-smallscreen-overlay slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="nav-smallscreen-links">
              <li>
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setToggleMenu(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/favorites" onClick={() => setToggleMenu(false)}>
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
