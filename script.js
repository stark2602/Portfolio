// Initialize EmailJS
emailjs.init("gr4gPduHTRYkJDjuL"); // Replace with your EmailJS public key

function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form fields
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let message = document.getElementById('message').value;

    // Regex for validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobileRegex = /^[0-9]{10}$/;

    // Error fields
    let emailError = document.getElementById('emailError');
    let mobileError = document.getElementById('mobileError');

    // Reset errors
    emailError.textContent = '';
    mobileError.textContent = '';

    let isValid = true;

    // Validate email
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate mobile
    if (!mobileRegex.test(mobile)) {
        mobileError.textContent = 'Mobile number must be 10 digits.';
        isValid = false;
    }

    // Proceed if valid
    if (isValid) {
        
        emailjs.send("service_mqmau3b", "template_6mlxs0g", {
            name,
            email,
            mobile,
            message
        }).then(
            function () {
                alert("Message sent successfully!");
            },
            function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
    }
}
