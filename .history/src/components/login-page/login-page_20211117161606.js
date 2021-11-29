import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from './login-form';
import './login-page.css';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error);
    };

    return (
        <main id='loginContent'>
            <section>
                <LoginForm />
            </section>
        </main>
    );
};

export default LoginPage;
