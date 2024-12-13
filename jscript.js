document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const messageButton = document.getElementById('messageButton');
  const closeButton = document.querySelector('.close-button');

  messageButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
