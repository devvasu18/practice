
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal when button is clicked
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Show the modal
});

// Close modal when 'X' is clicked
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
