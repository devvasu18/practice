// Get user data (for example, from localStorage or API)
const userProfilePic = localStorage.getItem("userProfilePic"); // Get stored profile pic URL
const userGender = localStorage.getItem("userGender"); // Get stored gender ("male" or "female")

const profilePicElement = document.querySelector(".profile-pic");

// Check if a profile picture exists
if (userProfilePic && userProfilePic.trim() !== "") {
    profilePicElement.src = userProfilePic; // Set user profile image
} else {
    // If no image is found, keep the default image already set in HTML
    console.log("No profile image found in user account. Using default.");
}


function toggleLike() {
    let heartBtn = document.getElementById("heartBtn");
    let likeCountElement = document.getElementById("likeCount");
    let currentLikes = parseInt(likeCountElement.innerText); // Get current like count

    if (heartBtn.classList.contains("liked")) {
        heartBtn.classList.remove("liked");
        heartBtn.innerHTML = "&#9825;"; // Outline heart (♡)
        likeCountElement.innerText = currentLikes - 1; // Decrease like count
    } else {
        heartBtn.classList.add("liked");
        heartBtn.innerHTML = "&#10084;"; // Filled heart (♥)
        likeCountElement.innerText = currentLikes + 1; // Increase like count
    }
}

// Function to handle double-click on the image
document.querySelector(".post-image").addEventListener("dblclick", function() {
    toggleLike(); // Call the toggleLike function on double-click
});