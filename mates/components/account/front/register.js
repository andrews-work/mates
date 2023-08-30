
const form = document.querySelector('#register-form');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');

function isValidUsername(username) {
  // Regular expression to validate username (alphanumeric characters only)
  const usernameRegex = /^[a-z0-9]+$/i;
  return usernameRegex.test(username);
}

function isValidPassword(password) {
  // Define your password validation rules (e.g. minimum length, required characters, etc.)
  const minLength = 6;
  return password.length >= minLength;
}

function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  let valid = true; // Assume the form is valid
  let errorMessage = ''; // Initialize empty error message

  if (!isValidUsername(usernameField.value)) {
    valid = false;
    errorMessage += 'Please enter a username that contains only letters and numbers.\n';
  }

  if (!isValidPassword(passwordField.value)) {
    valid = false;
    errorMessage += 'Please enter a password that is at least 6 characters long.\n';
  }

  if (!valid) {
    alert(errorMessage);
    return false; // Return false to prevent form submission
  }

  // If the form is valid, submit the form normally
  form.submit();
}

form.addEventListener('submit', validateForm);