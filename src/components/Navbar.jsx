import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <span className="logo">🐝</span>
        <h1>SkillHive</h1>
      </div>

      <div className="nav-center">

        <Link to="/">Explore</Link>

        <Link to="/skills">How It Works</Link>

        <Link to="/requests">Community</Link>

      </div>

      <div className="nav-right">

        <Link to="/login">Log In</Link>

        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;