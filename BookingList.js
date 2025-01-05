import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/bookings`);
      setBookings(response.data.bookings || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/bookings/${id}`);
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Available Bookings</h1>
      {bookings.length > 0 ? (
        <div style={{ display: "grid", gap: "20px" }}>
          {bookings.map((booking) => (
            <div
              key={booking.id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "8px",
                background: "#f9f9f9",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#007bff" }}>Booking Confirmed!</h3>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Guests:</strong> {booking.guests}</p>
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Contact:</strong> {booking.contact}</p>
              <button
                onClick={() => deleteBooking(booking.id)}
                style={{
                  marginTop: "10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>No available slots.</p>
      )}
    </div>
  );
}
