import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from './register-form';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';

import './register-page.css';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { push } = useHistory;

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
            })
            .catch(console.error);
    };

    return (
        <main id='registerContent'>
            <section>
                <RegisterForm title='Register' handleClick={handleRegister} />
            </section>
        </main>
    );
};

export default RegisterPage;
