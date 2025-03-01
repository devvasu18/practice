
        function checkLogin() {
            let correctUsername = "vasu123";
            let correctPassword = "mypassword";

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === correctUsername && password === correctPassword) {
                window.location.href = "https://www.instagram.com"; // Redirect to Instagram
            } else {
                alert("Invalid Username or Password. Try again.");
            }
        }
