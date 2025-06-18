import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Shield } from 'react-feather';
import Input from '../components/Input';
import { useAlert } from '../hooks/useAlert';
import API from '../utils/api';
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateName,
} from '../utils/validation';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { triggerAlert } = useAlert();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(form.name);
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    const confirmError = validateConfirmPassword(form.password, form.confirmPassword);

    if (nameError || emailError || passwordError || confirmError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmError,
      });
      return;
    }

    try {
      setLoading(true);
      await API.post('/auth/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      triggerAlert({ message: 'Registration successful! Please log in.', type: 'success' });
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      triggerAlert({
        message: err.response?.data?.message || 'Registration failed.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Create Your Account</h2>

        <InputGroup icon={<User size={16} />} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} error={errors.name} />
        <InputGroup icon={<Mail size={16} />} name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} />
        <InputGroup icon={<Lock size={16} />} name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} error={errors.password} />
        <InputGroup icon={<Shield size={16} />} name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? <span style={styles.spinner}></span> : 'Register'}
        </button>

        <p style={styles.footer}>
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} style={styles.link}>
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

// Reusable InputGroup component with icon
const InputGroup = ({ icon, ...props }) => (
  <div style={styles.inputGroup}>
    <div style={styles.icon}>{icon}</div>
    <Input {...props} style={styles.input} />
  </div>
);

// Inline Styles
const styles = {
  container: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#000',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  inputGroup: {
    position: 'relative',
    marginBottom: '1.2rem',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '12px',
    transform: 'translateY(-50%)',
    color: '#000',
    pointerEvents: 'none',
  },
  input: {
    paddingLeft: '40px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '15px',
    marginTop: '10px',
    transition: 'opacity 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '3px solid #fff',
    borderTop: '3px solid transparent',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  footer: {
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: '14px',
    color: '#444',
  },
  link: {
    color: '#000',
    cursor: 'pointer',
    fontWeight: '500',
    textDecoration: 'underline',
  },
};

// Inject spinner animation
const styleTag = document.createElement('style');
styleTag.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(styleTag);

export default Register;
