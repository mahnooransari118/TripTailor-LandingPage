document.getElementById('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const successMessage = document.getElementById('success-message');
  
    if (email) {
      successMessage.textContent = `Thanks for subscribing, ${email}!`;
      successMessage.style.color = 'white';
      this.reset();
    } else {
      successMessage.textContent = 'Please enter a valid email.';
      successMessage.style.color = 'yellow';
    }
  });
  