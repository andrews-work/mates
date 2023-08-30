exports.registerValidator = function validateRegisterInput(data) {
    let errors = {};
  
    // Check if username field is empty
    if (!data.username || data.username.trim().length === 0) {
      errors.username = 'Username field is required';
    } else {
      // Check if the username matches the given regex pattern
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if (!usernameRegex.test(data.username)) {
        errors.username = 'Username should only contain alphanumeric characters';
      }
    }
  
    // Check if password field is empty
    if (!data.password || data.password.trim().length === 0) {
      errors.password = 'Password field is required';
    } else {
      // Define your password validation rules (e.g. minimum length, required characters, etc.)
      const minLength = 6;
      if (data.password.length < minLength) {
        errors.password = `Password must be at least ${minLength} characters long`;
      }
    }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };