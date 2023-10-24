import React from 'react';
import Signup from '../components/Signup.jsx';
import Header from '../components/Header.jsx';

import '../components/design-files-css/Form.css';
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";

function SignupPage() {
    return (
        <div>
            <Header/>
            <SignupComponent/>
        </div>
    );
}

export default SignupPage;
