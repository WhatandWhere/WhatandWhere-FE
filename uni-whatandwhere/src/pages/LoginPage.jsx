import React from 'react';
import Login from '../components/Login.jsx';
import Header from '../components/Header.jsx';
import LoginRegisterButton from '../components/LoginRegisterButton';
import LoginComponent from "../components/LoginComponent";

function LoginPage() {
    return (
        <div>
            <Header/>
            <LoginComponent/>
        </div>
    );
}

export default LoginPage;
