// Form validation and handling script

const form = document.getElementById('frm');
const successAlert = document.getElementById('successAlert');
const errorAlert = document.getElementById('errorAlert');

// Prevent form submission and validate on submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    validatefrm(); // Call validation function
});

// Convert name input to lowercase
const nameInput = document.getElementById('name');
nameInput.addEventListener('input', function () {
    this.value = this.value.toLowerCase();
});

// Allow only numbers in mobile input
const mobileInput = document.getElementById('mobile_no');
mobileInput.addEventListener('input', function () {
    let inputValue = this.value.replace(/[^0-9]/g, '');
    if (inputValue.length === 1 && !['6', '7', '8', '9'].includes(inputValue[0])) {
        inputValue = '';
    } else if (inputValue.length > 10) {
        inputValue = inputValue.substring(0, 10);
    }
    this.value = inputValue;
});

// Validate form fields
function validatefrm() {
    const name = nameInput.value.trim();
    const mobile_no = mobileInput.value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();

    // Clear previous errors
    document.getElementById('name-error').textContent = '';
    document.getElementById('mobile-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let isValid = true;
    let invalidCount = 0;

    // Name validation
    if (!name) {
        document.getElementById('name-error').textContent = 'Please enter your name!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('name-error').innerHTML = '&#10003;';
    }

    // Mobile validation
    if (!mobile_no) {
        document.getElementById('mobile-error').textContent = 'Please enter your mobile number!';
        isValid = false;
        invalidCount++;
    } else if (mobile_no.length !== 10) {
        document.getElementById('mobile-error').textContent = 'Mobile number must be 10 digits!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('mobile-error').innerHTML = '&#10003;';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Please enter your email!';
        isValid = false;
        invalidCount++;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('email-error').innerHTML = '&#10003;';
    }

    // Password validation
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pass) {
        document.getElementById('password-error').textContent = 'Please enter your password!';
        isValid = false;
        invalidCount++;
    } else if (!strongPasswordRegex.test(pass)) {
        document.getElementById('password-error').textContent =
            'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character!';
        isValid = false;
        invalidCount++;
    } else {
        document.getElementById('password-error').innerHTML = '&#10003;';
    }



    // Show appropriate alerts
    if (isValid) {
        // Save to localStorage
        const userData = { name, mobile_no, email ,password };
        localStorage.setItem('userData', JSON.stringify(userData));

        successAlert.style.display = 'block';
        errorAlert.style.display = 'none';

        setTimeout(() => {
            window.location.href = "e-commerce.html"; // Redirect
        }, 2000);
    } else {
        successAlert.style.display = 'none';
        errorAlert.style.display = 'block';
        errorAlert.textContent = `Error! ${invalidCount} field${invalidCount > 1 ? 's' : ''} are invalid.`;
    }
}

// Toggle show/hide password
const showPasswordCheckbox = document.getElementById('show-password');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function () {
    if (this.checked) {
        passwordInput.type = 'text'; 
    } else {
        passwordInput.type = 'password'; 
    }
});

// Check if the user is already logged in
document.addEventListener('DOMContentLoaded', function () {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        alert(`Welcome back, ${userData.name}!`);
        window.location.href = "e-commerce.html"; // Redirect to e-commerce
    }
});

