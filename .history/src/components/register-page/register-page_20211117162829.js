import React from 'react';
import RegisterForm from './register-form';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';

import './register-page.css';

const RegisterPage = () => {

    const dispatch = useDispatch();

    return (
        <main id='registerContent'>
            <section>
                <RegisterForm 
                    title="Register"
                    handleClick={}
                />
            </section>
        </main>
    );
};

export default RegisterPage;
