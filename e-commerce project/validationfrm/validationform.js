const form = document.getElementById('frm');
const nameRow = document.getElementById('name-row');
const emailRow = document.getElementById('email-row');
const formTitle = document.getElementById('form-title');
const toggleFormBtn = document.getElementById('toggle-form-btn');
const successAlert = document.getElementById('successAlert');
const errorAlert = document.getElementById('errorAlert');
let isSignUp = true; // Toggle state

// Toggle between Sign Up and Login
toggleFormBtn.addEventListener('click', function () {
    isSignUp = !isSignUp;
    if (isSignUp) {
        formTitle.textContent = 'Sign Up';
        toggleFormBtn.textContent = 'Switch to Login';
        nameRow.style.display = 'flex';
        emailRow.style.display = 'flex';
    } else {
        formTitle.textContent = 'Login';
        toggleFormBtn.textContent = 'Switch to Sign Up';
        nameRow.style.display = 'none';
        emailRow.style.display = 'none';
    }
});

// Form submission handling
form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Skip validation for login
    if (isSignUp) {
        // Validate form fields only for sign-up
        if (validatefrm()) {
            await handleSignUp(); // Sign-up logic if it's a sign-up form
        } else {
            errorAlert.style.display = 'block';
            errorAlert.textContent = 'Error! Some input fields are invalid.';
        }
    } else {
        // Proceed with login logic
        await handleLogin(); // Login logic if it's a login form
    }
});

// Validate form fields
function validatefrm() {
    const name = document.getElementById('name').value.trim();
    const mobile_no = document.getElementById('mobile_no').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();

    let isValid = true;

    // Clear previous errors
    document.getElementById('name-error').textContent = '';
    document.getElementById('mobile-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    // Name validation
    if (!name) {
        document.getElementById('name-error').textContent = 'Please enter your name!';
        isValid = false;
    }

    // Mobile validation
    if (!mobile_no) {
        document.getElementById('mobile-error').textContent = 'Please enter your mobile number!';
        isValid = false;
    } else if (mobile_no.length !== 10) {
        document.getElementById('mobile-error').textContent = 'Mobile number must be 10 digits!';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Please enter your email!';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format!';
        isValid = false;
    }

    // Password validation
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pass) {
        document.getElementById('password-error').textContent = 'Please enter your password!';
        isValid = false;
    } else if (!strongPasswordRegex.test(pass)) {
        document.getElementById('password-error').textContent =
            'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character!';
        isValid = false;
    }

    return isValid;
}

// Sign Up Logic
async function handleSignUp() {
    const name = document.getElementById('name').value.trim();
    const mobile_no = document.getElementById('mobile_no').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

  // Check if the user already exists
  const existingUser = localStorage.getItem(mobile_no);
  if (existingUser) {
      errorAlert.textContent = 'User already exists. Please login.';
      errorAlert.style.display = 'block';
      successAlert.style.display = 'none';
      return;
  }


    const hashedPassword = await hashPassword(password); // Hash the password
    const userData = { name, mobile_no, email, password: hashedPassword }; // Store hashed password
    localStorage.setItem(mobile_no, JSON.stringify(userData)); // Save to localStorage

    successAlert.textContent = 'Sign Up successful!';
    successAlert.style.display = 'block';
    errorAlert.style.display = 'none';
    setTimeout(() => location.reload(), 2000); // Reload the form
    
   
if (successAlert) {window.location.href = "file:///D:/vasu/e-commerce%20project/ecommerce/e-commerce.html#";}
}

// Login Logic
async function handleLogin() {
    const mobile_no = document.getElementById('mobile_no').value.trim();
    const password = document.getElementById('password').value.trim();

    if (mobile_no && password) {
        const userData = JSON.parse(localStorage.getItem(mobile_no)); // Retrieve user data by mobile_no key

        if (userData) {
            const hashedInputPassword = await hashPassword(password); // Hash the input password
            if (userData.password === hashedInputPassword) {
                successAlert.textContent = 'Login successful!';
                successAlert.style.display = 'block';
                errorAlert.style.display = 'none';
                    window.location.href = "http://127.0.0.1:5500/e-commerce%20project/ecommerce/e-commerce.html"; // Redirect
            } else {
                errorAlert.textContent = 'Incorrect password.';
                errorAlert.style.display = 'block';
                successAlert.style.display = 'none';
            }
        } else {
            errorAlert.textContent = 'User not found.';
            errorAlert.style.display = 'block';
            successAlert.style.display = 'none';
        }
    } else {
        errorAlert.textContent = 'Please fill in all fields.';
        errorAlert.style.display = 'block';
        successAlert.style.display = 'none';
    }
  
}

// Password hashing
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
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
