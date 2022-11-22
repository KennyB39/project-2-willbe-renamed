const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/todo');
    } else {
      alert("Failed to login");
    }
  }
};

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#new-email').value.trim();
    const password = document.querySelector('#new-password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/todo');
      } else {
        alert("u make mistake");
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.newUser-form')
  .addEventListener('submit', signupFormHandler);
