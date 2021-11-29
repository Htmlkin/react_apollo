import React from 'react';
import './login-page.css';
import { Login } from 'components/login/login';

const LoginPage = () => {
    return (
        <main id='loginContent'>
            <section>
                <Login />
            </section>
        </main>
    );
};

export default LoginPage;
