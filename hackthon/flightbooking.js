document.getElementById('flight-booking-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;

    const response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ departure, destination, departureDate }),
    });

    if (response.ok) {
        const result = await response.json();
        console.log('Flight booked successfully:', result);
    } else {
        console.error('Failed to book flight:', response.statusText);
    }
});