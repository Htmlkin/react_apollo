import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className='enter_form'>
            <h2>Sign In</h2>
            <input
                type='text'
                placeholder='Login'
                onChange={(e) => console.log(e.target.value)}
            />
            <input
                type='text'
                placeholder='Password'
                onChange={(e) => console.log(e.target.value)}
            />

            <button
                type='submit'
                className='formButton'
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                Sign In
            </button>

            <span className='signup'>
                New User?{' '}
                <Link className='register' to='/register'>
                    Register
                </Link>
            </span>
        </div>
    );
};

export default LoginForm;
