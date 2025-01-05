import { useEffect, useState } from "react";
import { fetchAvailability } from "../services/api";

export default function Availability({ selectedDate }) {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedDate) return;

    const fetchSlots = async () => {
      setLoading(true);
      try {
        const response = await fetchAvailability(selectedDate);
        setSlots(response.slots || []);
      } catch (error) {
        console.error("Error fetching availability:", error);
        setSlots([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, [selectedDate]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 className="text-lg font-bold mb-2">Available Slots</h3>
        {loading ? (
          <p>Loading...</p>
        ) : slots.length === 0 ? (
          <p>No available slots.</p>
        ) : (
          <ul>
            {slots.map((slot, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-gray-200 border p-2 mb-2 rounded"
              >
                {slot}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',  // Remove minHeight and use height to fit content
    backgroundColor: '#f0f0f0',  // Background color for the whole page
    padding: '10px',  // Reduce padding on the container
  },
  card: {
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '15px',  // Reduced padding inside the card
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};
