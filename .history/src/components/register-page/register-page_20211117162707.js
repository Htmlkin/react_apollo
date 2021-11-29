import React from 'react';
import RegisterForm from './register-form';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';

import './register-page.css';

const RegisterPage = () => {
    return (
        <main id='registerContent'>
            <section>
                <RegisterForm />
            </section>
        </main>
    );
};

export default RegisterPage;
