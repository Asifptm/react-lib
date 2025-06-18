import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff,Shield } from 'react-feather';
import Input from '../components/Input';
import { validateEmail, validatePassword } from '../utils/validation';
import API from '../utils/api';
import { useAlert } from '../hooks/useAlert';
import '../css/login.css';


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { triggerAlert } = useAlert();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    try {
      setLoading(true);
      const { data } = await API.post('/auth/login', form);
      localStorage.setItem('token', data.token);
      triggerAlert({ message: 'Login successful!', type: 'success' });
      navigate('/');
    } catch (err) {
      triggerAlert({
        message: err.response?.data?.message || 'Login failed. Check your credentials.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="login-wrapper">
    {/* Admin Navigation Icon */}
    <div className="admin-icon" onClick={() => navigate('/admin-login')}>
      <Shield size={20} />
    </div>

    {/* Left Section */}
    <div className="login-left">
      <h1 className="login-heading">Login</h1>
      <img src="/src/assets/Tablet login-pana.svg" alt="Login Illustration" className="login-illustration" />
    </div>

    {/* Right Section */}
    <div className="login-right">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Welcome Back 👋</h2>

        <InputGroup
          icon={<Mail size={16} />}
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputGroup
          icon={<Lock size={16} />}
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          toggleIcon={showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          onToggle={() => setShowPassword(!showPassword)}
        />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Login'}
        </button>
      </form>
    </div>
  </div>
);
};

// Modified InputGroup with optional toggle icon
const InputGroup = ({ icon, toggleIcon, onToggle, ...props }) => (
  <div className="input-group">
    <div className="input-icon">{icon}</div>
    <Input {...props} className="input-field" />
    {toggleIcon && (
      <div className="toggle-icon" onClick={onToggle}>
        {toggleIcon}
      </div>
    )}
  </div>
);
export default Login;
