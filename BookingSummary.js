export default function BookingSummary({ details }) {
    if (!details) return null;
  
    return (
      <div style={styles.container}>
        <div className="bg-green-100 p-4 rounded" style={styles.bookingCard}>
          <h2 className="text-lg font-bold">Booking Confirmed!</h2>
          <p><strong>Date:</strong> {details.date}</p>
          <p><strong>Time:</strong> {details.time}</p>
          <p><strong>Guests:</strong> {details.guests}</p>
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Contact:</strong> {details.contact}</p>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',  // Light background for the full page
      padding: '20px',
    },
    bookingCard: {
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };
  