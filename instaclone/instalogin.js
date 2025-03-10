
document.addEventListener("DOMContentLoaded", function () {
    const toggleFormBtn = document.getElementById("toggle-form-btn");

    if (toggleFormBtn) {
        toggleFormBtn.addEventListener("click", function () {
            window.location.href = "instasignup.html";
        });
    } else {
        console.error("Button with ID 'toggle-form-btn' not found!");
    }
});

window.onload = function () {
    const loginBtn = document.querySelector(".login-btn");

    if (!loginBtn) {
        console.error("Login button not found!");
        return;
    }

    loginBtn.addEventListener("click", function () {
        const userInput = document.getElementById("username"); // Can be email, username, or phone
        const passwordInput = document.getElementById("password");

        if (!userInput || !passwordInput) {
            console.error("Login input fields not found!");
            return;
        }

        const loginValue = userInput.value.trim();
        const password = passwordInput.value.trim();

        if (!loginValue || !password) {
            alert("Please enter your username, email, or phone number and password.");
            return;
        }

        // Retrieve users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user by email, username, or phone number
        const user = users.find(user => 
            user.email === loginValue || 
            user.username === loginValue || 
            user.phone === loginValue // Ensure phone number is stored during signup
        );

        if (!user) {
            alert("User does not exist. Please sign up.");
            return;
        }

        // Check if password matches
        if (user.password !== password) {
            alert("Incorrect password. Please try again.");
            return;
        }

        // Store logged-in user session (optional)
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("Login successful! Redirecting...");
        window.location.href = "instahomepage.html";
    });
};

// Login function to authenticate user and store session data
function loginUser(username) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === username);

    if (user) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(user)); // Use sessionStorage
        window.location.href = "instamessage.html"; // Redirect to messages
    } else {
        alert("User not found!");
    }
}

// Sample users (Only set if not already in localStorage)
if (!localStorage.getItem("users")) {
    let users = [ 
    ];
    localStorage.setItem("users", JSON.stringify(users));
}
