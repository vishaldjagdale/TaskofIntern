import React, { useState } from "react";

export default function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    name: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.name || !formData.contact) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "linear-gradient(135deg, #f3f4f6, #ffffff)",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "500px",
        margin: "40px auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2rem",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Book Your Table
      </h2>

      <label style={{ fontWeight: "bold", color: "#555" }}>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginTop: "5px",
            fontSize: "16px",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </label>

      <label style={{ fontWeight: "bold", color: "#555" }}>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginTop: "5px",
            fontSize: "16px",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </label>

      <label style={{ fontWeight: "bold", color: "#555" }}>
        Guests:
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginTop: "5px",
            fontSize: "16px",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </label>

      <label style={{ fontWeight: "bold", color: "#555" }}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginTop: "5px",
            fontSize: "16px",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </label>

      <label style={{ fontWeight: "bold", color: "#555" }}>
        Contact:
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            marginTop: "5px",
            fontSize: "16px",
            boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        />
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "15px 20px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "1px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Book Now
      </button>
    </form>
  );
}
