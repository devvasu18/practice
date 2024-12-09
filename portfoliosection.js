document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
  
        // Get the filter category
        const filter = button.getAttribute('data-filter');
  
        // Show all items if "All" is selected
        if (filter === 'all') {
          portfolioItems.forEach(item => item.style.display = 'block');
        } else {
          portfolioItems.forEach(item => {
            item.style.display = item.getAttribute('data-category') === filter ? 'block' : 'none';
          });
        }
      });
    });
  });
  