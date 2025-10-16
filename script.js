//your JS code here. If required.
  // Get elements
    const openBtn = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close-modal');

    // Open modal
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Close modal when clicking close button
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });