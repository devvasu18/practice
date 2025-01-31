document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Simple response simulation
        document.getElementById('responseMessage').innerHTML = `
            Thank you, ${name}! We have received your message. Our customer service team will get back to you at ${email} shortly.
        `;
        document.getElementById('contactForm').reset();  // Reset form after submission
    } else {
        // Error message if fields are empty
        document.getElementById('responseMessage').innerHTML = "Please fill in all fields.";
        document.getElementById('responseMessage').style.color = "red";
    }
});
