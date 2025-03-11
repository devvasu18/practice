const userProfilePic = localStorage.getItem("userProfilePic"); 
const userGender = localStorage.getItem("userGender"); 

const profilePicElement = document.querySelector(".profile-pic");

// Check if a profile picture exists
if (userProfilePic && userProfilePic.trim() !== "") {
    profilePicElement.src = userProfilePic; 
}


document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", function () {
        handleLike(this);
        showHeartAnimation(this);
    });
});

// Double-click like on post image
document.querySelectorAll(".post-image").forEach(image => {
    image.addEventListener("dblclick", function () {
        let post = this.closest(".post"); 
        let likeButton = post.querySelector(".like-btn"); 
        handleLike(likeButton);

        showHeartAnimation(this);
    });
});

// Handle like/unlike function
function handleLike(button) {
    let likeCountSpan = button.nextElementSibling;
    let currentCount = parseInt(likeCountSpan.textContent);

    if (button.classList.contains("liked")) {
        button.classList.remove("liked");
        button.innerHTML = "&#9825;"; 
        likeCountSpan.innerText = currentCount - 1;
    } else {
        button.classList.add("liked");
        button.innerHTML = "&#10084;";
        likeCountSpan.innerText = currentCount + 1;
    }
}

//  Show a quick heart animation when double-clicked
function showHeartAnimation(imageElement) {
    let heart = document.createElement("div");
    heart.innerHTML = "&#10084;";
    heart.style.position = "absolute";
    heart.style.fontSize = "80px";
    heart.style.color = "rgba(255,0,0,0.8)";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.pointerEvents = "none";
    heart.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

    imageElement.parentElement.style.position = "relative";
    imageElement.parentElement.appendChild(heart);

    setTimeout(() => {
        heart.style.opacity = "0";
        heart.style.transform = "translate(-50%, -50%) scale(1.5)";
    }, 0);

    setTimeout(() => {
        heart.remove();
    }, 800);
}

function toggleButtons() {
    const buttons = document.querySelectorAll('.tglham');
    buttons.forEach(button => {
      if (button.style.display === 'none' || button.style.display === '') {
        button.style.display = 'block'; 
      } else {
        button.style.display = 'none';
      }
    });
  }
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleButtons);

const tglhamButtons = document.querySelectorAll('.tglham');
tglhamButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Redirecting
    window.location.href = 'http://127.0.0.1:5500/instaclone/instalogin.html'; 
  });
});