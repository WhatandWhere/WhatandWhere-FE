import React from 'react';
import Login from '../components/Login.jsx';
import Navigation from '../components/Navigation.jsx';
import '../components/design-files-css/LoginPage.css';

function LoginPage() {
  return (
    <div>
      <Navigation />
      <Login />
    </div>
  );
}

export default LoginPage;
