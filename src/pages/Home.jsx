import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

function Home() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Exchange Skills, Grow Together</h1>

          <p>
            Connect with learners worldwide. Share what you know,
            learn what you need. No money required—just your
            passion for learning.
          </p>

          <div className="hero-search">
            <input type="text" placeholder="Search for skills..." />

            <button>Get Started →</button>
          </div>

          {/* 👇 BUTTON FOR HOW IT WORKS */}
          <div style={{ marginTop: "15px" }}>
            <button
              onClick={() => setShowHowItWorks(true)}
              className="howitworks-btn"
            >
              How it Works
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>10K+</h2>
              <span>Active Learners</span>
            </div>

            <div>
              <h2>500+</h2>
              <span>Skills Available</span>
            </div>

            <div>
              <h2>50K+</h2>
              <span>Exchanges Made</span>
            </div>
          </div>
        </div>
      </section>

      {/*  HOW IT WORKS POPUP MODAL */}
      {showHowItWorks && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setShowHowItWorks(false)}
            >
              ✕
            </button>

            <HowItWorks />
          </div>
        </div>
      )}

      <section className="categories-section">
        <h2>Browse by Category</h2>
        <p>Explore skills across various disciplines</p>
      </section>

      <Footer />
    </>
  );
}

export default Home;