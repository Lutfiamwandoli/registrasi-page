function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.querySelector('.toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.style.backgroundImage = "url('eye-icon.png')"; 
  } else {
    passwordInput.type = 'password';
    passwordToggle.style.backgroundImage = "url('eye.png')"; 
  }
}
async function register() {
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const registerResultElement = document.getElementById('registerResult');

  try {
    const response = await fetch("https://wicked-erin-bandicoot.cyclic.app/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });

    if (response.ok) {
      registerResultElement.innerHTML = "<p class='success-message'>Registration successful. Redirecting...</p>";
      window.location.href = "/login"; 
    } else {
      const data = await response.json();

      registerResultElement.innerHTML = `<p class='error-message'>Error: ${data.message}</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
    registerResultElement.innerHTML = "<p class='error-message'>An error occurred during registration.</p>";
  }
}
