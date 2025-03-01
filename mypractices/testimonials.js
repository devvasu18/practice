document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const cards = Array.from(document.querySelectorAll('.testimonial-card'));
    let index = 0;
  
    // Next button click event
    document.querySelector('.next').addEventListener('click', () => {
      index = (index + 1) % cards.length;
      updateSlider();
    });
  
    // Previous button click event
    document.querySelector('.prev').addEventListener('click', () => {
      index = (index - 1 + cards.length) % cards.length;
      updateSlider();
    });
  
    // Function to update the slider position
    function updateSlider() {
      slider.style.transform = `translateX(-${index * 330}px)`; // 330px is the width of a card
    }
  });
  