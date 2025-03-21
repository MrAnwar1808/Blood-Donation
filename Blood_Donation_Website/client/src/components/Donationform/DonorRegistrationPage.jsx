
import React, { useEffect, useState } from "react";
import DonorForm from "./DonorForm";


const DonorRegistrationPage = () => {
  const [donors, setDonors] = useState([]);

  
  useEffect(() => {
    const storedDonors = JSON.parse(localStorage.getItem("donations")) || [];
    setDonors(storedDonors);
  }, []);

  return (
    <div>
      <h1>Donor Registration</h1>

      <DonorForm />
      {donors.length > 0 ? (
        <div>
          <h2>Registered Donors</h2>
          <ul>
            {donors.map((donor, index) => (
              <li key={index}>
                <p>
                  <strong>Name:</strong> {donor.name}
                </p>
                <p>
                  <strong>Email:</strong> {donor.email}
                </p>
                <p>
                  <strong>Blood Type:</strong> {donor.bloodType}
                </p>
                <p>
                  <strong>Donation Date:</strong> {donor.donationDate}
                </p>
                <p>
                  <strong>Location:</strong> {donor.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No donors have registered yet.</p>
      )}
    </div>
  );
};

export default DonorRegistrationPage;
