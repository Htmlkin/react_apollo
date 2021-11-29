import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from './login-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';

import './login-page.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                push('/');
            })
            .catch(() => alert('Invalid User'));
    };

    return (
        <main id='loginContent'>
            <section>
                <LoginForm title='Sign in' handleClick={handleLogin} />
            </section>
        </main>
    );
};

export default LoginPage;
