import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import brandIcon from '../../../images/login-img/logo2.png';
import img3 from '../../../images/login-img/image.png';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './sign.css';
import API_BASE_URL from '../../../apiConfig';



const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/register`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (res.data.message === "User already exists") {
        toast.error('User already exists!');
      } else if (res.data.message === "User registered successfully") {
        toast.success('Account created successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error('Registration failed!');
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.error("Registration error:", error);
      toast.error('Something went wrong!');
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);

    axios.post(`${API_BASE_URL}/api/auth/google-auth`, {
      email: decoded.email,
      name: decoded.name
    })
    .then(res => {
      toast.success(res.data.message);
      window.location.href = '/checkout';
    })
    .catch(err => {
      console.error("Google login error:", err);
      toast.error("Something went wrong!");
    });
  };

  const handleGoogleError = () => {
    toast.error("Google login failed");
  };

  return (
    <>
      <div className="signup-register-container">
        <header className="header-container-1">
          <nav className="nav-bar-1">
            <Link to="/sign" className="nav-link-1 active">Registration</Link>
            <Link to="/login" className="nav-link-1">Login</Link>
          </nav>
        </header>

        <div className="form-container-1">
          <div className="welcome-section-1">
            <img src={img3} alt="User" className="user-img" /><br />
            <h2>Welcome</h2>
            <p> Register and Start Shopping with <img src={brandIcon} alt="brand logo" className="brand-logo" /></p>
          </div>
          <div className="registration-section-1">
            <div className="form-box-1">
              <h2>Registration Form</h2>
              <form onSubmit={handleRegister}>
                <div className="input-group-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="register-btn-1">Register</button>
                <div className='login-register-section-1'>
                  <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
              </form>

              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <p>Or continue with</p>
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default SignupForm;
