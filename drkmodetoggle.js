// Select the button and body elements
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check localStorage for theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode'); // Apply dark mode
}

// Add an event listener to toggle dark mode
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
