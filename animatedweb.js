// Add a delay before showing the hero content (optional)
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = 0;
    setTimeout(() => {
      heroContent.style.transition = "opacity 3s ease-in";
      heroContent.style.opacity = 1;
    }, 500);
  });
  