const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Dummy flight data (replace with a database in a real application)
const flights = [];

// Flight booking endpoint
app.post('/api/bookFlight', (req, res) => {
    const { name, origin, destination, date } = req.body;

    // Validate request data
    if (!name || !origin || !destination || !date) {
        return res.status(400).json({ error: 'Invalid request data' });
    }

    // Create a new booking
    const booking = {
        name,
        origin,
        destination,
        date,
        confirmationCode: generateConfirmationCode(),
    };

    // Save the booking (in-memory storage, replace with a database)
    flights.push(booking);

    // Respond with the booking details
    res.status(201).json({ booking });
});

// Get all booked flights
app.get('/api/flights', (req, res) => {
    res.json({ flights });
});

// Helper function to generate a random confirmation code
function generateConfirmationCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});