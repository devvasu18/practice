document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Display confirmation message
        document.getElementById('responseMessage').innerHTML = `
            Thank you, ${name}! Your support request has been submitted. Our team will get back to you at ${email} shortly.
        `;
        document.getElementById('supportForm').reset();  // Reset form after submission
    } else {
        // Error message if fields are empty
        document.getElementById('responseMessage').innerHTML = "Please fill in all fields.";
        document.getElementById('responseMessage').style.color = "red";
    }
});
