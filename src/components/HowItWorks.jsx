import { useState } from "react";
import "../styles/global.css";

const steps = [
  {
    number: "1",
    title: "Create Your Profile",
    text: "List the skills you can teach and what you want to learn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M4 22c1.5-4 5-6 8-6s6.5 2 8 6"
          stroke="white"
          strokeWidth="1.5"
        />
        <path d="M19 8v6M22 11h-6" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Find Your Match",
    text: "Browse learners and connect with those who complement your skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.5" />
        <path d="M20 20l-3-3" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Exchange Knowledge",
    text: "Schedule sessions and start learning from each other",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.5" />
        <path d="M15 4l5 3-5 3V4z" fill="white" />
        <path d="M9 20l-5-3 5-3v6z" fill="white" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Grow Together",
    text: "Build your skills, earn badges, and join a global community",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3 7 7 .5-5 4.5 2 7-7-4-7 4 2-7-5-4.5 7-.5 3-7z"
          stroke="white"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="how-wrapper">
      <h2 className="how-title">How It Works</h2>
      <p className="how-subtitle">
        Start exchanging skills in four simple steps
      </p>

      <div className="how-grid">
        {steps.map((step) => (
          <div className="how-card" key={step.number}>
            <div className="icon-wrap">
              <div className="icon-circle">{step.icon}</div>
              <div className="step-badge">{step.number}</div>
            </div>

            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}