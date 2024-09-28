import React, { useState } from 'react';
import '../Theme/Auth.css'; // Importing the CSS file
import { useTheme } from '../Theme/ThemeContext';
import { useNavigate, } from 'react-router-dom'; // Import useNavigate for navigation


// Define the type for the login form data
interface LoginFormData {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the registration page
  };

  const validate = () => {
    const newErrors: Partial<LoginFormData> = {};
    const { email, password } = formData;

    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

    if (!password) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful login logic here
      console.log('User logged in:', formData);
    }
  };

  const { selectedTheme } = useTheme();

  return (
    <div className="auth-container" style={{ background: selectedTheme.primaryColor }}>
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" className="auth-button">Login</button>
      </form>
      <div className="register-redirect">
        <p>
          Don't have an account? <span className="link" onClick={handleRegisterRedirect}>Register here</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
