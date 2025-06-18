import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../css/index.css'
import { LogIn, UserPlus } from 'react-feather';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="index-page">
      <header className="index-header">
        <div className="logo">📚 MyLibrary</div>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => navigate('/login')}>
            <LogIn size={16} className="btn-icon" /> Login
          </button>
          <button className="nav-btn" onClick={() => navigate('/register')}>
            <UserPlus size={16} className="btn-icon" /> Register
          </button>
        </div>
      </header>

      <main className="index-main">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">Your Digital Library System</h1>
            <p className="main-subtitle">
              Streamline book tracking, member management, and payment handling — all in one place.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={() => navigate('/login')}>
                <LogIn size={16} className="btn-icon" /> Get Started
              </button>
              <button className="cta-btn outline" onClick={() => navigate('/register')}>
                <UserPlus size={16} className="btn-icon" /> Create Account
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src="src\assets\indeximg.png" alt="Library Illustration" />
          </div>
        </div>
      </main>
    </div>
  );
};


export default Index;
