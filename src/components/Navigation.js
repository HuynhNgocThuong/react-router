import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Navigation.propTypes = {};

function Navigation(props) {
  const navLinkStyle = { color: "white" };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-link">
        <li>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" style={navLinkStyle}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" style={navLinkStyle}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
