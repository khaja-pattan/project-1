import React, { useState } from 'react';
import './Layout.css';

const Layout = () => {
  const [isDark, setIsDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); 
  const [showPassword, setShowPassword] = useState(false);

  const openModal = (mode) => {
    setAuthMode(mode);
    setShowModal(true);
  };

  return (
    <div className={`app-container ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      
      {showModal && <div className="modal-overlay" onClick={() => setShowModal(false)}></div>}

     
      {showModal && (
        <div className="modal-card">
          <button className="close-modal-btn" onClick={() => setShowModal(false)}>&times;</button>
          
          <h2 className="modal-title">
            {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          
          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            {authMode === 'signup' && (
              <div className="input-group">
                <input type="text" placeholder="Full Name" />
              </div>
            )}
            
            <div className="input-group">
              <input type="email" placeholder="Email Address" />
            </div>
            
            <div className="input-group password-group">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
              />
              <span className="eye-toggle-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '😚' : '🧐'}
              </span>
            </div>
            
            <button className="btn-premium modal-submit">
              {authMode === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="modal-switch-text">
            {authMode === 'login' ? "New here?" : "Already have an account?"} 
            <span onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}>
              {authMode === 'login' ? ' Sign Up' : ' Log in'}
            </span>
          </p>
        </div>
      )}

      
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-pill">📚</div>
          <div className="logo-name">LearnFlow</div>
        </div>

        <ul className="nav-links">
          <li><a href="#" className="nav-item">Home</a></li>
          <li><a href="#" className="nav-item">About</a></li>
          <li><a href="#" className="nav-item">Contacts</a></li>
        </ul>

        <div className="nav-actions">
          <div className="theme-slider" onClick={() => setIsDark(!isDark)}>
            <div className={`slider-track ${isDark ? 'active' : ''}`}>
              <div className="slider-ball">{isDark ? '🌙' : '☀️'}</div>
            </div>
          </div>

          <button className="btn-premium nav-login-trigger" onClick={() => openModal('login')}>
            Login
          </button>
        </div>
      </nav>

      <main className="hero">
        <h1 className="hero-massive-text">Work Hard.<br/>Code Better.</h1>
      </main>
    </div>
  );
};

export default Layout;