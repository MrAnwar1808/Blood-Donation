
import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback: "Donating blood was such a fulfilling experience. Knowing I helped someone makes it worth it.",
    },
    {
      name: "Mark Lee",
      feedback: "I received a blood transfusion during surgery—thanks to donors, I'm alive today.",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>What Our Community Says</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
