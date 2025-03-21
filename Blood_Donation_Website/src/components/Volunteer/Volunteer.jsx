
import React from "react";
import "./Volunteer.css";

function Volunteer() {
  return (
    <div className="volunteer-container">
      <h2>Volunteer With Us</h2>
      <p>Join our team and help us save lives in your community.</p>
      <ul>
        <li>Assist in organizing blood donation drives.</li>
        <li>Spread awareness about the importance of donating blood.</li>
        <li>Help with donor registration and management.</li>
      </ul>
      <a href="/volunteer" className="volunteer-link">
        Sign Up as a Volunteer
      </a>
    </div>
  );
}

export default Volunteer;
