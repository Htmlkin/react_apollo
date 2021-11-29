import React from 'react';
import LoginForm from './login-form';
import './login-page.css';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {};

    return (
        <main id='loginContent'>
            <section>
                <LoginForm />
            </section>
        </main>
    );
};

export default LoginPage;
