import React from "react";

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
            <a href="./assets/documents/Kassidy Ralph Resume.pdf" alt="Resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
