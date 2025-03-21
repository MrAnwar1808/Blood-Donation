
import React, { useState } from "react";
import "./Profile.css"; 

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Anwar", 
    bloodGroup: "B+",
    email: "Anwar@gmail.com",
    phone: "8985824786",
    location: "Hyderabad, India",
    lastDonation: "2025-02-10",
    donationsCount: 3,
  });


  return (
    <div className="profile-container">
      <h1>Welcome, {userData.name}!</h1>
      <p>Your personal hub for managing blood donation activities.</p>

      <div className="profile-card">
        <h2>Profile Details</h2>
        <p><strong>Blood Group:</strong> {userData.bloodGroup}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
        <p><strong>Location:</strong> {userData.location}</p>
      </div>

      <div className="donation-details">
        <h2>Donation History</h2>
        <p><strong>Last Donation Date:</strong> {userData.lastDonation}</p>
        <p><strong>Total Donations:</strong> {userData.donationsCount}</p>
        <p>
          Every drop counts! Keep saving lives and making an impact.
        </p>
      </div>

      <div className="profile-actions">
        <button className="action-button" onClick={() => alert("Update feature coming soon!")}>
          Update Profile
        </button>
        <button className="action-button" onClick={() => alert("Redirecting to Donate Page...")}>
          Donate Again
        </button>
      </div>
    </div>
  );
};

export default Profile;
