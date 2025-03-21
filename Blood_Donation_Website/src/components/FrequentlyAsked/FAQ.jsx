
import React from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Generally, anyone aged 18-65 in good health can donate blood.",
    },
    {
      question: "How often can I donate blood?",
      answer: "You can donate blood every 12 weeks (for men) and every 16 weeks (for women).",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
