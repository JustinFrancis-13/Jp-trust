import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Media from "./pages/Media";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import "./App.css";
import {
  FaHeart,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "./assets/logo.jpg";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDonatePage = location.pathname === "/donate";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Joseph Paul Trust" className="site-logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link
            to="/aboutus"
            className={location.pathname === "/aboutus" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/media"
            className={location.pathname === "/media" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Media
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className={`donate-btn ${isDonatePage ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <FaHeart className="heart-icon" /> Donate
          </Link>
        </nav>

      
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <img src={logo} alt="Joseph Paul Trust" className="footer-logo" />
              <p>© 2025 Joseph Paul Trust | All Rights Reserved</p>
            </div>

            <div className="footer-right">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a id="insta"
                  href="https://www.instagram.com/jptrust_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a id="face"
                  href="https://www.youtube.com/@jptrust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a id="yt"
                  href="https://www.facebook.com/jptrust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a id="wtsp"
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
