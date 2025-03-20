document.addEventListener("DOMContentLoaded", function () {
  const toggleFormBtn = document.getElementById("toggle-form-btn");

  if (toggleFormBtn) {
    toggleFormBtn.addEventListener("click", function () {
      window.location.href = "instasignup.html";
    });
  } 
});

window.onload = function () {
  const loginBtn = document.querySelector(".login-btn");
  const userInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorDiv = document.getElementById("error-div");

  if (!loginBtn || !userInput || !passwordInput) {
    console.error("Essential elements not found!");
    return;
  }

  // Disable the login button by default
  loginBtn.disabled = true;

  // Function to check inputs and enable/disable login button
  function validateInputs() {
    const loginValue = userInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (loginValue !== "" && passwordValue.length >= 6) {
      loginBtn.style.backgroundColor = "rgba(0, 113, 189, 0.9)";
      loginBtn.disabled = false;
      errorDiv.textContent = ""; 
    } else {
      loginBtn.disabled = true;
      if (passwordValue !== "" && passwordValue.length < 6)  {
        errorDiv.textContent = "";
      }
    }
  }

  // Listen for input events to validate in real time
  userInput.addEventListener("input", validateInputs);
  passwordInput.addEventListener("input", validateInputs);

  loginBtn.addEventListener("click", function () {
    const loginValue = userInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    errorDiv.textContent = ""; // Clear previous error message

    // Extra validation (redundant but safe)
    if (!loginValue || !passwordValue) {
      errorDiv.textContent = "Please fill in all inputs.";
      return;
    }

    if (passwordValue.length < 6) {
      errorDiv.textContent = "Password must be at least 6 characters.";
      return;
    }

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email, username, or phone number
    const user = users.find(user =>
      user.email === loginValue ||
      user.username === loginValue ||
      user.phone === loginValue
    );

    if (!user) {
      errorDiv.textContent = "User does not exist. Please sign up.";
      return;
    }

    if (user.password !== passwordValue) {
      errorDiv.textContent = "Incorrect password. Please try again.";
      return;
    }

    // Login success
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    errorDiv.textContent = "";

    // Redirect to homepage
    window.location.href = "instahomepage.html";
  });
};

// Show/Hide password function
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.querySelector('.toggle-btn');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = 'Show';
  }
}

// Show/Hide button functionality based on input
const input = document.getElementById("password");
const button = document.getElementById("toggle-btn");

input.addEventListener("input", () => {
  const errorDiv = document.getElementById("error-div");

  if (input.value.trim() !== "") {
    button.style.display = "inline-block";
  } else {
    button.style.display = "none";
  }

  // Clear error message when typing again
  errorDiv.textContent = "";
});


