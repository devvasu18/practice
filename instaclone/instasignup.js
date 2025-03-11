document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.querySelector(".signup-btn");

    signupBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const fullName = document.getElementById("fullname").value.trim();
        const username = document.getElementById("username").value.trim();

        if (!email || !password || !fullName || !username) {
            alert("All fields are required.");
            return;
        }

        // Email validation 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Retrieve users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Checking email or user name is already registered?
        const usernameExists = users.some(user => user.username === username);
        if (usernameExists) {
            alert("This username is already taken. Choose a different one.");
            return;
        }
        // Save new user to localStorage
        users.push({ email, password, fullName, username });
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", username);
        window.location.href = "instahomepage.html";
    });
});
