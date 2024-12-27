const form = document.getElementById('frm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission if invalid
    validatefrm();
});

// Convert name input to lowercase
const nameInput = document.getElementById('name');
nameInput.addEventListener('input', function () {
    this.value = this.value.toLowerCase();
});

// Allow only numbers in mobile input
const mobileInput = document.getElementById('mobile_no');

// Mobile input validation on input and blur (for paste handling)
mobileInput.addEventListener('input', function () {
    let inputValue = this.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (inputValue.length === 1 && !['6', '7', '8', '9'].includes(inputValue[0])) {
        inputValue = ''; // Reset if first digit is invalid
    } else if (inputValue.length > 10) {
        inputValue = inputValue.substring(0, 10); // Trim to 10 digits
    }
    this.value = inputValue;
});

// Validate form fields
function validatefrm() {
    const name = nameInput.value.trim();
    const mobile_no = mobileInput.value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert'); // Assuming you have an error alert

    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('mobile-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let isValid = true;
    let invalidCount = 0;

    // Name validation
    if (name === '') {
        document.getElementById('name-error').textContent = 'Please enter your name!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('name-error').innerHTML = '&#10003;';
    }

    // Mobile number validation
    if (mobile_no === '') {
        document.getElementById('mobile-error').textContent = 'Please enter your mobile number!';
        isValid = false;
        invalidCount++;
    } else if (mobile_no.length !== 10) {
        document.getElementById('mobile-error').textContent = 'Mobile number must be 10 digits!';
        isValid = false;
    } else if (!['6', '7', '8', '9'].includes(mobile_no[0])) {
        document.getElementById('mobile-error').textContent = 'Mobile number must start with 6, 7, 8, or 9!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('mobile-error').innerHTML = '&#10003;';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Please enter your email!';
        isValid = false;
        invalidCount++;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('email-error').innerHTML = '&#10003;';
    }

    // Password validation
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pass === '') {
        document.getElementById('password-error').textContent = 'Please enter your password!';
        isValid = false;
        invalidCount++;
    } else if (!strongPasswordRegex.test(pass)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long, include an uppercase, lowercase, number, and special character!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('password-error').innerHTML = '&#10003;';
    }

    // Show success alert only if all validations pass
    if (isValid) {
        successAlert.style.display = 'block'; // Show the alert
        setTimeout(function () {
            form.submit(); // Submit the form after 2 seconds
        }, 2000); // 2 seconds delay
    } else {
        successAlert.style.display = 'none'; 
        errorAlert.style.display = 'block'; 
        errorAlert.textContent = `Error! ${invalidCount} field${invalidCount > 1 ? 's' : ''} are invalid. Please try again.`; 
    }
}

// Toggle show/hide password
const showPasswordCheckbox = document.getElementById('show-password');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function () {
    if (this.checked) {
        passwordInput.type = 'text'; // Show password
    } else {
        passwordInput.type = 'password'; // Hide password
    }
});
