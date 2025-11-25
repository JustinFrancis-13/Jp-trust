import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Media from "./pages/Media";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import "./App.css";
import { FaHeart, FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import logo from "./assets/logo.jpg";

function Header() {
  const location = useLocation();
  const isDonatePage = location.pathname === "/donate";

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
        <nav className="nav-links">
          <Link to="/aboutus" className={location.pathname === "/aboutus" ? "active" : ""}>
            About Us
          </Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
            Services
          </Link>
          <Link to="/media" className={location.pathname === "/media" ? "active" : ""}>
            Media
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>
        <div><Link
            to="/donate"
            className={`donate-btn ${isDonatePage ? "active" : ""}`}
          >
            <FaHeart className="heart-icon" /> Donate
          </Link></div>
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

        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">
            <p>© 2025 Joseph Paul Trust | All Rights Reserved</p>
          </div>
          <div className="footer-right">
            <a href="https://www.instagram.com/jptrust_" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@jptrust" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.facebook.com/jptrust" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
