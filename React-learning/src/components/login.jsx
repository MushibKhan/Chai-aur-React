import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row g-0 shadow-lg rounded-4 overflow-hidden" style={{ minHeight: '600px' }}>
          
          {/* ═══════════════════════════════════════════════════════════════
              🎨 COLOR SECTION 1: LEFT PANEL BACKGROUND
              Change the gradient colors below to customize the left side
              Current: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
              Try: #f093fb → #f5576c | #4facfe → #00f2fe | #43e97b → #38f9d7
          ═══════════════════════════════════════════════════════════════ */}
          <div 
            className="col-lg-5 d-none d-lg-flex flex-column justify-content-center p-5 text-white position-relative"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          >
            {/* Decorative circles */}
            <div 
              className="position-absolute rounded-circle opacity-25"
              style={{
                width: '300px',
                height: '300px',
                top: '-100px',
                right: '-100px',
                border: '40px solid rgba(255,255,255,0.1)',
              }}
            />
            <div 
              className="position-absolute rounded-circle opacity-25"
              style={{
                width: '200px',
                height: '200px',
                bottom: '-50px',
                left: '-50px',
                background: 'rgba(255,255,255,0.1)',
              }}
            />

            <div className="position-relative z-1">
              {/*
                🖼️ PNG IMAGE 1: SIDE PANEL ILLUSTRATION/LOGO
                Replace with your brand illustration or mascot PNG
                Recommended: 400x400px, transparent background
              */}
              <img 
                src="/images/login-illustration.png" 
                alt="Welcome" 
                className="img-fluid mb-4"
                style={{ maxHeight: '200px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              <h2 className="fw-bold mb-3 display-6">Welcome Back!</h2>
              <p className="lead opacity-75 mb-4">
                Sign in to access your dashboard, manage your projects, and connect with your team.
              </p>
              
              <div className="d-flex align-items-center gap-3 mt-5">
                <div className="d-flex -gap-2">
                  {/*
                    🖼️ PNG IMAGE 2-4: USER AVATARS (stacked)
                    Small circular user profile PNGs showing community
                  */}
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`/images/avatar-${i}.png`}
                      alt={`User ${i}`}
                      className="rounded-circle border border-3 border-white"
                      width="40"
                      height="40"
                      style={{ marginLeft: i > 1 ? '-12px' : '0', zIndex: 4 - i }}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=User+${i}&background=random&color=fff`;
                      }}
                    />
                  ))}
                </div>
                <span className="small opacity-75">Join 10,000+ users</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - LOGIN FORM */}
          <div className="col-lg-7 bg-white p-4 p-md-5 d-flex flex-column justify-content-center">
            <div className="mx-auto" style={{ maxWidth: '420px', width: '100%' }}>
              
              {/* Mobile-only header */}
              <div className="d-lg-none text-center mb-4">
                {/*
                  🖼️ PNG IMAGE 5: MOBILE LOGO
                  Smaller logo for mobile view
                */}
                <img 
                  src="/images/logo-color.png" 
                  alt="Logo" 
                  height="50" 
                  className="mb-3"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <h3 className="fw-bold text-dark">Welcome Back</h3>
              </div>

              <div className="d-none d-lg-block mb-4">
                <h3 className="fw-bold text-dark mb-1">Sign In</h3>
                <p className="text-muted">Please enter your credentials to continue</p>
              </div>

              {/* Social Login Buttons */}
              <div className="d-grid gap-2 mb-4">
                <button 
                  className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 py-2"
                  type="button"
                >
                  {/*
                    🖼️ PNG IMAGE 6: GOOGLE ICON
                    Google "G" logo PNG, 20x20px recommended
                  */}
                  <img src="/images/icon-google.png" alt="Google" width="20" height="20" />
                  <span>Continue with Google</span>
                </button>
                <button 
                  className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 py-2"
                  type="button"
                >
                  {/*
                    🖼️ PNG IMAGE 7: GITHUB ICON
                    GitHub Octocat logo PNG, 20x20px recommended
                  */}
                  <img src="/images/icon-github.png" alt="GitHub" width="20" height="20" />
                  <span>Continue with GitHub</span>
                </button>
              </div>

              {/* Divider */}
              <div className="d-flex align-items-center mb-4">
                <hr className="flex-grow-1" />
                <span className="mx-3 text-muted small">or sign in with email</span>
                <hr className="flex-grow-1" />
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} noValidate>
                
                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark small">Email Address</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-envelope text-muted"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      className={`form-control border-start-0 bg-light ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label className="form-label fw-semibold text-dark small">Password</label>
                    <Link to="/forgot-password" className="small text-decoration-none"
                      style={{ color: '#667eea' }}>
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="input-group has-validation">
                    <span className="input-group-text bg-light border-end-0">
                      <i className="bi bi-lock text-muted"></i>
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className={`form-control border-start-0 border-end-0 bg-light ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                    />
                    <button
                      className="input-group-text bg-light border-start-0"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-muted`}></i>
                    </button>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                </div>

                {/* Remember Me */}
                <div className="mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label text-muted small" htmlFor="rememberMe">
                      Remember me on this device
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-semibold position-relative overflow-hidden"
                  disabled={isLoading}
                  style={{
                    /* 🎨 COLOR SECTION 2: SUBMIT BUTTON BACKGROUND */
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                  }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>

              {/* Sign Up Link */}
              <p className="text-center text-muted mt-4 mb-0">
                Don't have an account?{' '}
                <Link to="/signup" className="fw-semibold text-decoration-none"
                  style={{ color: '#667eea' }}>
                  Create Account
                </Link>
              </p>

              {/* Security Badge */}
              <div className="text-center mt-4 pt-3 border-top">
                <div className="d-inline-flex align-items-center gap-2 text-muted small">
                  {/*
                    🖼️ PNG IMAGE 8: SECURITY/LOCK BADGE
                    SSL security badge or lock icon PNG
                  */}
                  <img src="/images/icon-secure.png" alt="Secure" width="16" height="16" />
                  <span>Secured with 256-bit encryption</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;