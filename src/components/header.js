import React from "react";
import { Link } from "react-router-dom";
import Resume from "../Assets/Kassidy Ralph Resume.pdf"

const Header = ({ name, contactEmail }) => {
  return (
      <div className="header_container">
        <Link to="/">
          <h1>{name}</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <a className="nav-link" href="/skills">Projects</a>
            </li>
            <li>
              <Link  className="nav-link" to="/about">About</Link>
            </li>
            <li>
              <Link  className="nav-link" to="/contact">Contact Me</Link>
            </li>
            <li>
              <a  className="nav-link" href={Resume} alt="Resume">
              Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Header;
