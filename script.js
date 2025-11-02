document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the contact page
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // 1. Prevent the default form submission
            event.preventDefault(); 
            
            // 2. Clear previous error messages
            document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
            document.getElementById('formStatus').textContent = '';

            let isValid = true;

            // Get field values
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');

            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const message = messageField.value.trim();

            // --- Validation Logic ---

            // Name validation
            if (name === "") {
                document.getElementById('nameError').textContent = "Name is required.";
                isValid = false;
            }

            // Email validation (basic check for empty and format)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "") {
                document.getElementById('emailError').textContent = "Email is required.";
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // Message validation
            if (message === "") {
                document.getElementById('messageError').textContent = "Message cannot be empty.";
                isValid = false;
            } else if (message.length < 10) {
                 document.getElementById('messageError').textContent = "Message must be at least 10 characters long.";
                isValid = false;
            }
            
            // --- Final Action ---
            if (isValid) {
                // If validation passes, simulate submission
                document.getElementById('formStatus').textContent = "Thank you for your message! We will be in touch shortly.";
                contactForm.reset(); // Clear the form fields
            }
        });
    }
});