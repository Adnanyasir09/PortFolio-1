import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Routes>
      {/* All sections in one page for smooth scroll */}
      <Route
        path="/"
        element={
          <>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="achievements">
              <Achievements />
            </section>
            <section id="work">
              <Work />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
