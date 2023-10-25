// Import statements
import React, { useState } from 'react';
import FormButton from './ui/FormButton'; // Adjust the path as per your project structure

// Signup component
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
    // Here, you would typically send a request to your server to create a new user
    // and handle the response accordingly.

    // For simplicity, we'll just display an error message here.
    setError('Registration failed. Please try again.');
  };

  return (
    <div className="signup-page1">
      <div className="form-container signup-form-container">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Your existing input elements */}
          {/* Replace the existing button with the FormButton component */}
          <FormButton>Sign Up</FormButton>
        </form>
      </div>
    </div>
  );
};

export default Signup;
