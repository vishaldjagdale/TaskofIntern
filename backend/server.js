require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Environment variables
const port = process.env.PORT || 5000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

// Middleware
app.use(cors({
    origin: corsOrigin
}));
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.json({ message: "Server is working!" });
});

// Store bookings in memory
let bookings = [];

// Create booking
app.post('/api/bookings', (req, res) => {
    try {
        const { date, time, guests, name, contact } = req.body;

        if (!date || !time || !guests || !name || !contact) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const isBooked = bookings.some(
            booking => booking.date === date && booking.time === time
        );

        if (isBooked) {
            return res.status(400).json({ error: 'This time slot is already booked' });
        }

        const newBooking = {
            id: Date.now().toString(),
            date,
            time,
            guests: Number(guests),
            name,
            contact,
            createdAt: new Date().toISOString()
        };

        bookings.push(newBooking);
        res.status(201).json(newBooking);
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all bookings
app.get('/api/bookings', (req, res) => {
    res.json({ bookings: bookings }); // Modified this line
});

// Get bookings by date
app.get('/api/bookings/:date', (req, res) => {
    try {
        const dateBookings = bookings.filter(
            booking => booking.date === req.params.date
        );
        res.json({ bookings: dateBookings }); // Modified this line
    } catch (error) {
        console.error('Error fetching bookings by date:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete booking
app.delete('/api/bookings/:id', (req, res) => {
    try {
        const bookingIndex = bookings.findIndex(
            booking => booking.id === req.params.id
        );

        if (bookingIndex === -1) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        bookings.splice(bookingIndex, 1);
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Test the server at http://localhost:${port}/test`);
    console.log(`View bookings at http://localhost:${port}/api/bookings`);
});