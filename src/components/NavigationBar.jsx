import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import wrjaLogo from "../assets/images/Logo/wrja-logo.png";
import instructors from "../data/instructors";
import { useAuth } from "../context/AuthContext";

// Total time the "Welcome, {name}" message spends center-stage before
// settling in beside the logout button — must match the CSS animation
// durations below (navWelcomeJourney runs for this long).
const LOGIN_TRANSITION_DURATION = 3800;

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, displayName, isAdmin, signOut, loginTransitionId } = useAuth();
  const [showLoginWelcome, setShowLoginWelcome] = useState(false);

  useEffect(() => {
    if (!loginTransitionId) return undefined;
    setShowLoginWelcome(true);
    const timer = window.setTimeout(() => setShowLoginWelcome(false), LOGIN_TRANSITION_DURATION);
    return () => window.clearTimeout(timer);
  }, [loginTransitionId]);

  return (
    <header className="navigation-bar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-badge">
            <img src={wrjaLogo} alt="West Rand Judo Association" className="nav-logo-image" />
          </span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""} ${showLoginWelcome ? "nav-links-login-transition" : ""}`}>
          {!isAdmin && <Link to="/">Home</Link>}

          {!isAdmin && <div className="nav-dropdown">
            <span className="nav-dropdown-trigger">Pages</span>
            <div className="nav-dropdown-menu">
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/faq">FAQ</Link>

              <div className="nav-dropdown-item nav-has-flyout">
                <span>Instructors</span>
                <div className="nav-flyout-menu">
                  {instructors.map((instructor) => (
                    <Link key={instructor.slug} to={`/instructors/${instructor.slug}`}>
                      {instructor.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>}

          {/* Events is now gated behind login, same as Book. */}
          {user && !isAdmin && <Link to="/events">Events</Link>}
          {!isAdmin && <Link to="/programs">Programs</Link>}
          {!isAdmin && <Link to="/news">News</Link>}
          {user && !isAdmin && <Link to="/booking">Book</Link>}
          {!isAdmin && <Link to="/contact">Contact</Link>}
          {isAdmin && <Link to="/admin">Admin panel</Link>}
        </nav>

        {showLoginWelcome && (
          <div className="nav-login-welcome" aria-live="polite">
            Welcome, {displayName}
          </div>
        )}

        <div className={`nav-auth ${menuOpen ? "nav-auth-open" : ""} ${showLoginWelcome ? "nav-auth-login-transition" : ""}`}>
          {user ? (
            <>
              <span className="nav-welcome">Welcome, {displayName}</span>
              <button type="button" className="btn btn-ghost" onClick={signOut}>Log out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">Login</Link>
              <Link to="/signup" className="btn btn-accent">Sign up</Link>
            </>
          )}
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