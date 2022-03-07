import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <body>
      <Nav></Nav>

      <section class="content">
        <div id="about-me">
          <About></About>
        </div>

        <div id="projects">
        <Projects></Projects>
        </div>

        <div id="contact-me">
        <ContactMe></ContactMe>
        </div>
      </section>
    </body>
  );
}

export default App;
