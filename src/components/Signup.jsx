import React, { useState } from 'react';
import img from '../imgs/signup.jpeg';

const Signup = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typicall<img src="../imgs/event.jpeg" alt="Some dummmy img" />y send a request to your server to create a new user
    // and handle the response accordingly.

    // For simplicity, we'll just display an error message here.
    setError('Registration failed. Please try again.');
  };

  return (
    <div className="signup-page1">
      <div className="form-container signup-form-container">
        {/* <h2>Sign Up</h2> */}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              placeholder="Surname"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Mail"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Phone number"
              className="form-input"
            />
          </div>
          <div className="form-group-checkbox">
            <input
              type="checkbox"
              id="age-check"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="checkbox-signup"
            />
            <label className="checkbox-label" for="age-check">
              I'm over 18
            </label>
          </div>

          <button type="submit" className="form-button">
            Sign Up
          </button>
        </form>
      </div>
      {/* <div className="image-container">
        <img className="signup-img" src={img} alt="Some dummmy img" />
      </div> */}
    </div>
  );
};

export default Signup;
