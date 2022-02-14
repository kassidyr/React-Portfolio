import React from 'react';
import About from './components/About';

function App() {
  return (
    <body>
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
              <a
                href="./assets/documents/Kassidy Ralph Resume.pdf"
                alt="Resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section class="hero">
        <h3>Web Developer</h3>
      </section>

      <section class="content">
        <div id="about-me">
          <About></About>
        </div>

        <div id="work">
          <h2>Work</h2>
          <p>
            <a href="https://kassidyr.github.io/project1/" id="projects">
              BirthdayFunFacts
            </a>
            <br />
            An entertainment web application that utilizes server-side APIs to
            provide motivation and interesting facts about a user's birthday
          </p>
          <p>
            <a
              href="https://glacial-everglades-31515.herokuapp.com/"
              id="projects"
            >
              Goal Tracker
            </a>
            <br />
            An easy-to-use application for creating and tracking goals
          </p>
        </div>

        <div id="contact-me" class="contact-me">
          <h2>Contact Me</h2>
          <p>918.850.9870</p>
          <p>
            <a href="mailto:kassidy.ralph@gmail.com">kassidy.ralph@gmail.com</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/kassidy-ralph">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/kassidyr">GitHub</a>
          </p>
        </div>
      </section>
    </body>
  );
}

export default App;
