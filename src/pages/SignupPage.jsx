import React from 'react';
import Signup from '../components/Signup.jsx';
import Navigation from '../components/Navigation.jsx';

import '../components/design-files-css/Form.css';

function SignupPage() {
  return (
    <div>
      <Navigation />

      <Signup />
    </div>
  );
}

export default SignupPage;
