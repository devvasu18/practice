
        function checkLogin() {
            let correctUsername = "vasu123";
            let correctPassword = "mypassword";

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;


            if (username === correctUsername && password === correctPassword) {
                window.location.href = "https://www.instagram.com"; // Redirect to Instagram
            } else {
                alert("Invalid Username or Password. Try again.");
          window.location.href = "http://127.0.0.1:5500/instaclone/instahomepage.html";// Redirect to Home Page 
            }
        }