let slideIndex = 0;

// Function to change slide
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Function to show a specific slide
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");

  // Reset slideIndex if it goes beyond the number of slides
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";
}

// Auto slide every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);

// Show the first slide by default
showSlide(slideIndex);
