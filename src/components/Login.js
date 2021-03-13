import React from 'react';

import { loginUrl } from '../spotify';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <img
                src="/logo.png"
                alt="Logo"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
