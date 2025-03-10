// Get user data (for example, from localStorage or API)
const userProfilePic = localStorage.getItem("userProfilePic"); // Get stored profile pic URL
const userGender = localStorage.getItem("userGender"); // Get stored gender ("male" or "female")

const profilePicElement = document.querySelector(".profile-pic");

// Check if a profile picture exists
if (userProfilePic && userProfilePic.trim() !== "") {
    profilePicElement.src = userProfilePic; // Set user profile image
} else {
    // If no image is found, keep the default image already set in HTML
   // console.log("No profile image found in user account. Using default.");
}


document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", function () {
        let likeCountSpan = this.nextElementSibling; // Get the like count span
        let currentCount = parseInt(likeCountSpan.textContent);

        if (this.classList.contains("liked")) {
            this.classList.remove("liked");
            this.innerHTML = "&#9825;"; // Outline heart (♡)
            likeCountSpan.innerText = currentCount - 1; // Decrease like count
        } else {
            this.classList.add("liked");
            this.innerHTML = "&#10084;"; // Filled heart (♥)
            likeCountSpan.innerText = currentCount + 1; // Increase like count
        }
    });
});




// Function to handle double-click on the image
document.querySelector(".post-image").addEventListener("dblclick", function() {
    toggleLike(); // Call the toggleLike function on double-click
});
