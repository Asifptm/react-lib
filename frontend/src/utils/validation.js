export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required.';
  if (!re.test(String(email).toLowerCase())) return 'Invalid email format.';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required.';
  if (password.length < 6) return 'Password must be at least 6 characters.';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.';
  if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter.';
  if (!/[0-9]/.test(password)) return 'Password must contain at least one number.';
  if (!/[^A-Za-z0-9]/.test(password)) return 'Password must contain at least one special character.';
  return '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return 'Confirm password is required.';
  if (password !== confirmPassword) return 'Passwords do not match.';
  return '';
};

export const validateName = (name) => {
  if (!name || name.trim() === '') return 'Name is required.';
  if (name.trim().split(' ').length < 2) return 'Please enter your full name.';
  return '';
};

export const validateMobile = (mobile) => {
  const re = /^[6-9]\d{9}$/;
  if (!mobile) return 'Mobile number is required.';
  if (!re.test(mobile)) return 'Enter a valid 10-digit mobile number.';
  return '';
};

export const validateRequired = (field, name) => {
  if (!field || field.trim() === '') return `${name} is required.`;
  return '';
};
