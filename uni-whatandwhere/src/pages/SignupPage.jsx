import React from 'react';
import Signup from '../components/Signup.jsx';
import HomeButton from '../components/HomeButton.jsx';

import '../components/design-files-css/Form.css';

function SignupPage() {
    return (
        <div>
            <HomeButton/>

            <Signup/>
        </div>
    );
}

export default SignupPage;
