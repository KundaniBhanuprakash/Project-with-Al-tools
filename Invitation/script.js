// Select the RSVP form and confirmation message elements
const rsvpForm = document.getElementById('rsvpForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add an event listener for form submission
rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    // Check if the user is attending and display a corresponding message
    if (attendance === 'yes') {
        confirmationMessage.textContent = `🎉 We're thrilled to see you there, ${email}! Get ready to party to make beautifull memories`;
    } else if (attendance === 'no') {
        confirmationMessage.textContent = `😢 We'll miss you, ${email}.try to come!`;
    } else {
        confirmationMessage.textContent = ''; // Clear message if no valid selection is made
    }

    // Make the confirmation message visible
    confirmationMessage.style.display = 'block';
});
