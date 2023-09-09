import React from 'react';
import { Link } from 'react-router-dom';

const Entry = () => {
  return (
    <div className="entry">
      <img src="/Users/atahankaragoz/Documents/GitHub/WhatandWhere-FE/uni-whatandwhere/public/logo192.png" alt="Logo" />
      <h1>Welcome to Our App</h1>
      <div className="entry-buttons">
        <Link to="/login" className="entry-button">Login</Link>
        <Link to="/signup" className="entry-button">Signup</Link>
      </div>
    </div>
  );
};

export default Entry;