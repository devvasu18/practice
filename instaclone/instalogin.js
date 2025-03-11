
document.addEventListener("DOMContentLoaded", function () {
    const toggleFormBtn = document.getElementById("toggle-form-btn");

    if (toggleFormBtn) {
        toggleFormBtn.addEventListener("click", function () {
            window.location.href = "instasignup.html";
        });
    } else {
        console.error(" new error founded !");
    }
});

window.onload = function () {
    const loginBtn = document.querySelector(".login-btn");

    if (!loginBtn) {
        console.error("Login button not found!");
        return;
    }

    loginBtn.addEventListener("click", function () {
        const userInput = document.getElementById("username"); 
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
            user.phone === loginValue 
        );

        if (!user) {
            alert("User does not exist. Please sign up.");
            return;
        }
        if (user.password !== password) {
            alert("Incorrect password. Please try again.");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));

      //  alert("Login successful! Redirecting...");
        window.location.href = "instahomepage.html";
    });
};

//show hide function
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
//function of show hide button
  const input = document.getElementById("password");
  const button = document.getElementById("toggle-btn");

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      button.style.display = "inline-block"; 
    } else {
      button.style.display = "none"; 
    }
  });
