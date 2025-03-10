document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.querySelector(".signup-btn");

    signupBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const fullName = document.getElementById("fullname").value.trim();
        const username = document.getElementById("username").value.trim();

        // Basic input validation
        if (!email || !password || !fullName || !username) {
            alert("All fields are required.");
            return;
        }

        // Email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Enter a valid email address.");
            return;
        }

        // Password security check (minimum 6 characters)
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Retrieve users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email or username is already taken
     //   const emailExists = users.some(user => user.email === email);
        const usernameExists = users.some(user => user.username === username);

      /*  if (emailExists) {
            alert("This email is already registered. Try logging in.");
            return;
        }*/

        if (usernameExists) {
            alert("This username is already taken. Choose a different one.");
            return;
        }

        // Save new user to localStorage
        users.push({ email, password, fullName, username });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign-up successful! Redirecting to homepage...");
        localStorage.setItem("loggedInUser", username); // Save logged-in user
        window.location.href = "instahomepage.html";
    });
});

//messgae modal
localStorage.setItem("loggedInUser", username); // Save logged-in user
