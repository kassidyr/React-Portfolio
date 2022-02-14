import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <body>
      <Nav></Nav>
      <section class="hero">
        <h3>Web Developer</h3>
      </section>

      <section class="content">
        <div id="about-me">
          <About></About>
        </div>

        <div id="work">
        <Work></Work>
        </div>

        <div id="contact-me">
        <ContactMe></ContactMe>
        </div>
      </section>
    </body>
  );
}

export default App;
