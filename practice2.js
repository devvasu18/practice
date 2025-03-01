// script.js

document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");
    const commentButtons = document.querySelectorAll(".comment-btn");

    // Like functionality
    likeButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const likeCount = this.nextElementSibling;
            let currentLikes = parseInt(likeCount.textContent.split(" ")[0]);
            currentLikes++;
            likeCount.textContent = `${currentLikes} likes`;
        });
    });

    // Comment functionality
    commentButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const commentInput = this.previousElementSibling;
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentsList = this.parentElement.querySelector(".comments-list");
                const newComment = document.createElement("li");
                newComment.textContent = commentText;
                commentsList.appendChild(newComment);
                commentInput.value = ""; // Clear input field
            }
        });
    });
});
