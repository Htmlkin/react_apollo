import React from 'react';
import RegisterForm from './register-form';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';

import './register-page.css';

const RegisterPage = () => {
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(console.log)
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
