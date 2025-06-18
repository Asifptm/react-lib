import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'react-feather';
import Input from '../components/Input';
import { validateEmail, validatePassword } from '../utils/validation';
import API from '../utils/api';
import { useAlert } from '../hooks/useAlert';
import '../css/admin.css';

const AdminLogin = () => {
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
      const { data } = await API.post('/auth/admin-login', form);
      localStorage.setItem('token', data.token);
      triggerAlert({ message: 'Admin login successful!', type: 'success' });
      navigate('/admin/dashboard');
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
    <div className="admin-login-wrapper">
      {/* Left Side */}
      <div className="admin-login-left">
        <h1 className="admin-login-heading">Admin Login</h1>
        <img src="/src/assets/Sign up-pana.svg" alt="Admin Login Illustration" className="admin-illustration" />
      </div>

      {/* Right Side */}
      <div className="admin-login-right">
        <form onSubmit={handleSubmit} className="admin-login-form">
          <h2 className="form-title">Welcome Admin 👨‍💼</h2>

          <InputGroup
            icon={<Mail size={16} />}
            name="email"
            type="email"
            placeholder="admin@example.com"
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

          <button type="submit" className="admin-login-button" disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

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

export default AdminLogin;
