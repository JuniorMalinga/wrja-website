import { Link } from "react-router-dom";
import { useState } from "react";

// Static presentation only for now — no auth wired up yet.
// Login / Sign up buttons are placeholders until the auth flow is built.
export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navigation-bar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-mark">WRJA</div>
          <div className="nav-logo-text">
            <span className="nav-logo-title">West Rand</span>
            <span className="nav-logo-subtitle">Judo Association</span>
          </div>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/news">News</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-auth">
          <Link to="/login" className="btn btn-ghost">Login</Link>
          <Link to="/signup" className="btn btn-accent">Sign up</Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
