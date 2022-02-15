import React from "react";
import Resume from "../../assets/documents/Kassidy Ralph Resume.pdf";

function Nav() {
  return (
    <header>
      <h1>Kassidy Ralph</h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me" alt="About Me">
              About Me
            </a>
          </li>
          <li>
            <a href="#work" alt="Work">
              Work
            </a>
          </li>
          <li>
            <a href="#contact-me" alt="Contact Me">
              Contact Me
            </a>
          </li>
          <li>
            <a href={Resume} alt="Resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
