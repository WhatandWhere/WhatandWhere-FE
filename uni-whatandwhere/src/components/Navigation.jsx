import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-button">Home</Link>
        </li>
        <li>
          <Link to="/login" className="nav-button">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="nav-button">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;