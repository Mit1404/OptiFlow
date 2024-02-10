// FeedbackForm.js
import React, { useState } from "react";
import "./Customer.css";

function Customer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productName: "",
    description: "",
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending the data to a server or storing it in a database
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      productName: "",
      description: "",
    });
  };

  return (
    <div className="feedback-form">
      <h2 style={{textAlign: 'center'}}>Customer Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: isHovered ? "#0056b3" : "#000",
            color: "#fff",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Customer;
