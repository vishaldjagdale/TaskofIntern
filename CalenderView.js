import Calendar from "react-calendar";
import { useState } from "react";

export default function CalendarView({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return <Calendar onChange={handleDateChange} value={selectedDate} />;
}
