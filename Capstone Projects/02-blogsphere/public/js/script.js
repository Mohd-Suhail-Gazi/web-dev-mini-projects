// BlogSphere - Interactive Client-Side JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navbar = document.getElementById('navbar');

  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navbar.classList.toggle('active');
    });

    // Close menu when clicking navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navbar.classList.remove('active');
      });
    });
  }

  // --- 2. Client-side Form Validation ---
  const blogForm = document.getElementById('blog-form');
  
  if (blogForm) {
    blogForm.addEventListener('submit', (event) => {
      let isValid = true;
      
      // Get input elements
      const titleInput = document.getElementById('title');
      const authorInput = document.getElementById('author');
      const contentInput = document.getElementById('content');

      // Clear previous error states
      const inputs = [titleInput, authorInput, contentInput];
      inputs.forEach(input => {
        if (input) {
          input.classList.remove('is-invalid');
          const feedback = input.nextElementSibling;
          if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.style.display = 'none';
          }
        }
      });

      // Title validation
      if (titleInput && titleInput.value.trim() === '') {
        titleInput.classList.add('is-invalid');
        const feedback = titleInput.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
          feedback.textContent = 'Please enter a blog title.';
          feedback.style.display = 'block';
        }
        isValid = false;
      }

      // Author validation
      if (authorInput && authorInput.value.trim() === '') {
        authorInput.classList.add('is-invalid');
        const feedback = authorInput.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
          feedback.textContent = 'Please enter the author name.';
          feedback.style.display = 'block';
        }
        isValid = false;
      }

      // Content validation
      if (contentInput && contentInput.value.trim() === '') {
        contentInput.classList.add('is-invalid');
        const feedback = contentInput.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
          feedback.textContent = 'Blog content cannot be empty.';
          feedback.style.display = 'block';
        }
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault();
      }
    });
  }

  // --- 3. Custom Delete Confirmation Modal ---
  const deleteForm = document.getElementById('delete-form');
  const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
  const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
  const deleteModal = document.getElementById('delete-modal');

  if (deleteForm && deleteModal) {
    deleteForm.addEventListener('submit', (event) => {
      // Prevent immediate deletion
      event.preventDefault();
      
      // Open the custom delete confirmation modal
      deleteModal.classList.add('active');
    });

    if (cancelDeleteBtn) {
      cancelDeleteBtn.addEventListener('click', () => {
        // Close modal without deleting
        deleteModal.classList.remove('active');
      });
    }

    // Also close modal when clicking on overlay background
    deleteModal.addEventListener('click', (event) => {
      if (event.target === deleteModal) {
        deleteModal.classList.remove('active');
      }
    });

    if (confirmDeleteBtn) {
      confirmDeleteBtn.addEventListener('click', () => {
        // Submit the form programmatically to execute deletion
        deleteForm.submit();
      });
    }
  }
});
