import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = (title, handleClick) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className='register_form'>
            <h2>Register</h2>
            <input
                type='email'
                placeholder='E-Mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='text'
                placeholder='Password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />

            {/* <button
                type='submit'
                className='formButton'
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                Register
            </button> */}

            <button
                // type='submit'
                className='formButton'
                onClick={() => handleClick(email, pass)}
            >
                {/* Sign In */}
                {title}
            </button>

            <span className='signup'>
                Have account?{' '}
                <Link className='login' to='/login'>
                    Sign In
                </Link>
            </span>
        </div>
    );
};

export default RegisterForm;
