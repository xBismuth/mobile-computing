import { useState } from "react";
import "./App.css";

function App() {
  // Navigation states: 'welcome', 'select-role', 'login', 'signup'
  const [screen, setScreen] = useState("welcome");
  const [role, setRole] = useState("");

  // --- SCREEN 1: WELCOME LOGO SCREEN ---
  if (screen === "welcome") {
    return (
      <div className="container center-content">
        <div className="logo-box">
          {/* Replace this div with an <img> tag once you have your logo file */}
          <div className="logo-placeholder">
            <span className="logo-icon">👷🌉💼</span>
          </div>
        </div>
        <h2 className="welcome-text">Welcome Back!</h2>
        <h1 className="brand-name">JobBridge</h1>
        <p className="brand-subtitle">Bridging Talent and Opportunity</p>

        <div className="button-stack">
          <button className="main-btn" onClick={() => setScreen("select-role")}>
            Login
          </button>
          <button className="main-btn" onClick={() => setScreen("signup")}>
            Signup
          </button>
        </div>
      </div>
    );
  }

  // --- SCREEN 2: ROLE SELECTION ---
  if (screen === "select-role") {
    return (
      <div className="container">
        <h1 className="title-welcome">Welcome to JobBridge</h1>
        <p className="subtitle">Choose how you'd like to continue</p>

        <div
          className="role-card"
          onClick={() => {
            setRole("Job Seeker");
            setScreen("login");
          }}
        >
          <div className="icon-box seeker-bg">👤</div>
          <div className="role-text">
            <h3>Job Seeker</h3>
            <p>Find your next opportunity</p>
          </div>
          <span className="arrow">→</span>
        </div>

        <div
          className="role-card"
          onClick={() => {
            setRole("Recruiter");
            setScreen("login");
          }}
        >
          <div className="icon-box recruiter-bg">💼</div>
          <div className="role-text">
            <h3>Recruiter</h3>
            <p>Post jobs and find talents</p>
          </div>
          <span className="arrow">→</span>
        </div>

        <p className="back-link" onClick={() => setScreen("welcome")}>
          ← Back
        </p>
      </div>
    );
  }

  // --- SCREEN 3: LOGIN ---
  if (screen === "login") {
    return (
      <div className="container">
        <h1 className="title">Welcome Back!</h1>
        <p className="subtitle">Sign in as a {role}</p>
        <div className="input-group">
          <input className="text-input" type="email" placeholder="Email" />
          <input
            className="text-input"
            type="password"
            placeholder="Password"
          />
          <p className="forgot-password">Forgot Password?</p>
        </div>
        <div className="button-row">
          <button className="login-btn">Login</button>
        </div>
        <div className="divider">
          <div className="line"></div>
          <span>OR</span>
          <div className="line"></div>
        </div>
        <button className="google-btn">Login with Google</button>
        <p className="back-link" onClick={() => setScreen("select-role")}>
          ← Change Role
        </p>
      </div>
    );
  }

  // --- SCREEN 4: SIGNUP ---
  return (
    <div className="container">
      <h1 className="title">Welcome to {role}</h1>
      <p className="subtitle">Let's get started!</p>
      <div className="input-group signup-grid">
        <input className="text-input" type="text" placeholder="First Name" />
        <input className="text-input" type="text" placeholder="Last Name" />
        <input className="text-input" type="email" placeholder="Email" />
        <input className="text-input" type="tel" placeholder="Phone number" />
        <input className="text-input" type="password" placeholder="Password" />
        <input
          className="text-input"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <button className="login-btn signup-btn">Signup</button>
      <p className="back-link" onClick={() => setScreen("login")}>
        Already have an account? Login
      </p>
    </div>
  );
}

export default App;
