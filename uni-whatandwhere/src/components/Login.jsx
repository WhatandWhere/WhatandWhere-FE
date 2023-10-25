import React, { useState } from 'react';
import FormButton from './ui/FormButton.jsx';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('Incorrect email or password. Please try again.');
  };

  return (
    <div>
      <div className="form-container login-form-container">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Password"
            />
          </div>
          <FormButton type="submit" className="form-button">
            Login
          </FormButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
